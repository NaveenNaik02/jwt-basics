import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import notFound from "./middleware/not-found";
import errorHandler from "./middleware/error-handler";
import router from "./routes/main";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/v1", router);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
