const express = require('express');
  const cors = require('cors');
  const axios = require('axios');
  const fs = require('fs');
  const path = require('path');
  const FormData = require('form-data');
  
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use('/uploads', express.static('uploads')); 
  
  app.get('/', async (req, res) => {
    try {
      const filePath = path.join(__dirname, 'dd.html');
      res.sendFile(filePath);
    } catch (error) {
      console.error('Error sending file:', error);
      res.status(500).send('Error sending the file');
    }
  });
  
  const convertToPDF = async (html, cssStyles) => {
    try {
      const pdfResponse = await axios.post('http://3.144.48.243/api/convert', {
        html,
        cssStyles,
      }, {
        responseType: 'arraybuffer',
      });
  
      const pdfBuffer = Buffer.from(pdfResponse.data, 'binary');
      const pdfFilePath = path.join(__dirname, 'uploads', 'generated.pdf');
      fs.writeFileSync(pdfFilePath, pdfBuffer);
  
      return pdfFilePath;
    } catch (error) {
      throw new Error('Error converting HTML and CSS to PDF');
    }
  };
  
  const convertToDOCX = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', fs.createReadStream(pdfFilePath));
  
      const docxResponse = await axios.post('http://35.172.118.147/api/convert/pdftodocx', formData, {
        headers: formData.getHeaders(),
        responseType: 'arraybuffer',
      });
  
      const docxFilePath = path.join(__dirname, 'uploads', 'generated.docx');
      fs.writeFileSync(docxFilePath, Buffer.from(docxResponse.data));
  
      return docxFilePath;
    } catch (error) {
      throw new Error('Error converting PDF to DOCX');
    }
  };
  
  