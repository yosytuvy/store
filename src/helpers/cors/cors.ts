import cors, { CorsOptionsDelegate } from "cors";

const whiteList = ["http://127.0.0.1:8181", "http://localhost:8181", "http://localhost:5173"];

const corsOptions: CorsOptionsDelegate = (req, callback) => {
  const authorized = whiteList.find((api) => api === req.headers.origin);
  if (!authorized)
    return callback(
      new Error(`CORS Error the API ${req.headers.origin} is unauthorized`),
      { origin: false }
    );
  callback(null, { origin: true });
};


const corsHandler = cors(corsOptions);

export default corsHandler;
