import { client } from "~/db/config";

export default defineEventHandler(async (event) => {
  await client.connect();
  const db = client.db('todo_app_db');
  const tasksCollection = db.collection('Tasks');

  try {
    // Count total tasks
    const totalTasks = await tasksCollection.countDocuments({});

    // Count tasks with status 'pending'
    const pendingTasks = await tasksCollection.countDocuments({ status: 'pending' });

    // Count tasks with status 'complete'
    const completedTasks = await tasksCollection.countDocuments({ status: 'completed' });

    return {
      totalTasks,
      pendingTasks,
      completedTasks
    };
  } catch (err) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: 'Internal Server Error' })
    );
  } finally {
    await client.close(); // Close the database connection
  }
});
