import { NextResponse } from "next/server";
import { connectToDb } from "../utils/database";
import User from "../models/user";

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

    try {
      await connectToDb();

      const user = await User.create({ fullname, email, number, parentType });

      if (user) {
        return NextResponse.json({
          message: "Form data submitted successfully",
        });
      } else {
        return NextResponse.json({
          message: "Form data was not submitted", user: user
        });
      }
    } catch (error) {
      // If there's an error, send a response back with the error message
      return NextResponse.json({
        message: "Error submitting form data",
        error: error.message,
      });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    return NextResponse.json({ message: "Method Not Allowed error" });
  }
};
