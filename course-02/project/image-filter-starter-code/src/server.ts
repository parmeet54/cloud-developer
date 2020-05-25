import express from "express";
import bodyParser from "body-parser";
import { filterImageFromURL, deleteLocalFiles } from "./util/util";

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1
  const try_url =
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg";

  app.get(
    "/filteredimage/",
    async (req: express.Request, res: express.Response) => {
      let { image_url } = req.query;

      try {
        const filteredPath = await filterImageFromURL(image_url);

        await res.status(200).sendFile(filteredPath, {}, (err) => {
          if (err) {
            return res.status(422).send("Cannot process image");
          }
          deleteLocalFiles([filteredPath]);
        });
      } catch (err) {
        res.status(422).send("Cannot process image");
      }
    }
  );

  //! END @TODO1

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
