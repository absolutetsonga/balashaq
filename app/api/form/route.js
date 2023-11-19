export default async function handler(req, res) {
  if (req.method === "POST") {
    // Destructure the data from the request body
    const { fullname, number, email, parentType } = req.body;

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
      res.status(200).json({ message: "Form data submitted successfully" });
    } catch (error) {
      // If there's an error, send a response back with the error message
      res
        .status(500)
        .json({ message: "Error submitting form data", error: error.message });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed error
    res.status(405).end();
  }
}
