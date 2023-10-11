import { fileURLToPath } from 'url';
import path from "node:path";
import fs from "fs";
import { drive } from '../app.google.js';

// config filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nombreArchivo = "prueba.png"
export const filePath = path.join(__dirname, `../public/${nombreArchivo}`)


//upload file
export async function uploadFile() {
    try {
        const response = await drive.files.create({
            requestBody: {
                name: 'primerintento.jpg', //este es el nombre con el que se guarda
                mimeType: 'image/jpg', //para los pdf usamos application/pdf
            },
            media: {
                mimeType: 'image/jpg', //para los pdf usamos application/pdf
                body: fs.createReadStream(filePath),
            },
        });

        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}

uploadFile();

async function deleteFile() {
    try {
        const response = await drive.files.delete({
            fileId: 'YOUR FILE ID',
        });
        console.log(response.data, response.status);
    } catch (error) {
        console.log(error.message);
    }
}

// deleteFile();

async function generatePublicUrl() {
    try {
        const fileId = 'YOUR FILE ID';
        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        });

        /* 
        webViewLink: View the file in browser
        webContentLink: Direct download link 
        */
        const result = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink, webContentLink',
        });
        console.log(result.data);
    } catch (error) {
        console.log(error.message);
    }
}

// generatePublicUrl();