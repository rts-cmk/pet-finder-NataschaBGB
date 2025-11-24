import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// __dirname i ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Sørg for filebucket-mappen
const filebucketPath = path.join(__dirname, "filebucket");
if (!fs.existsSync(filebucketPath)) fs.mkdirSync(filebucketPath);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, filebucketPath),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
app.post("/upload", upload.single("image"), (req, res) => {
  console.log("Received request on /upload");
  console.log("req.file:", req.file);

  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const fileUrl = `http://localhost:5000/filebucket/${req.file.filename}`; // Ændret port til 5000
  res.json({ imageUrl: fileUrl });
});

app.use("/filebucket", express.static(filebucketPath));

app.listen(5000, () => console.log("Upload server running on port 5000"));