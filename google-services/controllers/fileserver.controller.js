const fs = require('fs');
const path = require('path');

const fileserverctrl = {};

fileserverctrl.guardarPDF = (res, req) => {
    const pdfFile = req.files.pdfFile;

    // Carpeta en la que deseas guardar el PDF
    const folderPath = '/ruta/a/la/carpeta';

    // Guardar el archivo en la carpeta deseada
    pdfFile.mv(path.join(folderPath, 'documento.pdf'), (error) => {
        if (error) {
            // Manejar el caso de error al guardar el archivo
            console.log('Error al guardar el PDF:', error);
            res.sendStatus(500);
        } else {
            console.log('PDF guardado en el servidor');
            res.sendStatus(200);
        }
    });
}

export { fileserverctrl }
