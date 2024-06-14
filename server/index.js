import express from 'express';
import cors from 'cors';
import { DBConnection } from './database/db.js';
import { upload } from './utils/upload.js';
import { File } from './models/file.js';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const fileObj = {
      path: req.file.path,
      name: req.file.filename,
    };

    const file = await File.create(fileObj);
    console.log(fileObj);
    res.status(200).json({ path: `/file/${file._id}` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/file/:fileID', async (req, res) => {
  try {
    const file = await File.findById(req.params.fileID);
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    file.downloadContent++;
    await file.save();
    
    res.download(file.path, file.name);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
