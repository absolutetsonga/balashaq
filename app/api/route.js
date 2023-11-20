import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  await req;

  if (req.method === "POST") {
    const chunks = [];

    for await (const chunk of req.body) {
      chunks.push(chunk);
    }

    const bodyBuffer = Buffer.concat(chunks).toString("utf-8");
    const json = JSON.parse(bodyBuffer);

    const { fullname, number, email, parentType } = await json;

    console.log({ fullname, number, email, parentType });

    try {
      // Here you would add your logic to send the data to your database
      // This is a placeholder for your database logic
      // For example, if you are using MongoDB:
      /*
      await db.collection('forms').insertOne({
        fullname,
        number,
        email,
        parentType
      });
      */

      // Send a response back to the client
      return NextResponse.json({ message: "Form data submitted successfully" });
    } catch (error) {
      // If there's an error, send a response back with the error message
      return NextResponse.json({ message: "Error submitting form data", error: error.message });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    return NextResponse.json({ message: "Method Not Allowed error" });
  }
};
