import express from "express";
import router from "./router/router.js";
import { engine } from "express-handlebars";
import path from "path";
import fileUpload from 'express-fileupload'
process.loadEnvFile();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

//configuracion handlebars
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  fileUpload({
    limits: 5000000,
    abortOnLimit: true,
    responseOnLimit: "El tamaño de la imagen supera el límite permitido",
  })
);
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.listen(PORT, () => console.log(`Servidor conectado a puerto: ${PORT}`));
