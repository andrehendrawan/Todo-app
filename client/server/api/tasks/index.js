import Joi from 'joi';
import { ObjectId } from 'mongodb';
import { sendError, createError } from 'h3';
import { client } from '~/db/config';

const taskSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(500),
  status: Joi.string().valid('pending', 'completed').required(),
  priority: Joi.string().valid('low', 'medium', 'high').required(),
  category: Joi.string().max(20).default('personal'),
  dueDate: Joi.date().optional(),
});

export default defineEventHandler(async (event) => {
  await client.connect();
  const db = client.db('todo_app_db');
  const tasksCollection = db.collection('Tasks');

  const method = event.node.req.method;
  const id = event.context.params?.id

  try {
    if (method === 'GET') {
      // Get the 'title' query parameter
      const queryTitle = event.node.req.url.split('?')[1]?.split('=')[1];
      const query = {
        status: 'pending',
        ...(queryTitle && { title: new RegExp(queryTitle, 'i') }), // Search by title if provided
      };

      const tasks = await tasksCollection
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();
    
      return {
        status: 200,
        data: tasks,
      };
    } else if (method === 'POST') {
      // Create Task
      const body = await readBody(event);
      
      // Check if dueDate is provided and validate it
      const today = new Date().setHours(0, 0, 0, 0); // Today's date at midnight
    
      if (body.dueDate) {
        const dueDate = new Date(body.dueDate).setHours(0, 0, 0, 0);
        
        if (dueDate < today) {
          return sendError(
            event,
            createError({ statusCode: 400, statusMessage: 'Due date cannot be before today.' })
          );
        }
      }
    
      // Validate the task data
      const { error, value } = taskSchema.validate(body);
    
      if (error) {
        return sendError(
          event,
          createError({ statusCode: 400, statusMessage: error.details[0].message })
        );
      }
    
      value.createdAt = new Date();
      value.updatedAt = new Date();
    
      const result = await tasksCollection.insertOne(value);
      return {
        status: 201,
        data: result,
      };
    } else if (method === 'PUT') {
      // Update Task
      const body = await readBody(event);
      const { id, ...updateData } = body;
    
      // Validate the updateData using Joi or your validation library
      const { error, value } = taskSchema.validate(updateData);
    
      if (error) {
        return sendError(
          event,
          createError({ statusCode: 400, statusMessage: error.details[0].message })
        );
      }
    
      // Ensure the updatedAt field is set to the current date
      value.updatedAt = new Date();
    
      // Perform the update operation, preserving the createdAt field
      const result = await tasksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: value }
      );
    
      if (result.matchedCount === 0) {
        return sendError(
          event,
          createError({ statusCode: 404, statusMessage: 'Task not found' })
        );
      }
    
      return {
        status: 200,
        data: result,
      };
    } else if (method === 'DELETE') {
      // Delete Task
      const { id } = await readBody(event);

      const result = await tasksCollection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return sendError(
          event,
          createError({ statusCode: 404, statusMessage: 'Task not found' })
        );
      }

      return {
        status: 200,
        data: result,
      };
    } else {
      // Method Not Allowed
      return sendError(
        event,
        createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
      );
    }
  } catch (err) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
    );
  }
});