import { client } from "~/db/config";
import { ObjectId } from "mongodb";

export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Access-Control-Allow-Origin', '*');
  event.node.res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS'
  );
  event.node.res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  if (event.node.req.method === 'OPTIONS') {
    event.node.res.statusCode = 204;
    event.node.res.end();
    return;
  }
  await client.connect();
  const db = client.db("todo_app_db");
  const tasksCollection = db.collection("Tasks");

  const method = event.node.req.method;

  try {
    if (method === "GET") {
      const completedTasks = await tasksCollection
        .find({ status: "completed" })
        .toArray();
      return completedTasks;
    } else if (method === "PUT") {
      const body = await readBody(event);
      const id = body.data.id
      
      if (!id) {
        return { statusCode: 400, body: "Task ID is required" };
      }
      const { status } = await readBody(event);

      if (!status || !["completed", "pending"].includes(status)) {
        return { statusCode: 400, body: "Invalid status" };
      }

      const result = await tasksCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );

      if (result.modifiedCount === 0) {
        return { statusCode: 404, body: "Task not found or no changes made" };
      }

      return { statusCode: 200, body: "Task status updated successfully" };
    } else if (method === "DELETE") {
      if (!id) {
        return { statusCode: 400, body: "Task ID is required" };
      }

      const deleteResult = await tasksCollection.deleteOne({
        _id: new ObjectId(id),
      });
      if (deleteResult.deletedCount === 0) {
        return { statusCode: 404, body: "Task not found" };
      }

      return { statusCode: 200, body: "Task deleted successfully" };
    } else {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Internal Server Error" };
  } finally {
    await client.close();
  }
});
