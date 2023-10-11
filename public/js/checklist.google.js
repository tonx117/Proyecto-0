import { uploadFile } from "../../google-services/controllers/drive.controller";
import fs from fs;
;

function savePDFToServer() {
    window.print(); // Generar el PDF utilizando window.print()

    setTimeout(() => {
        const pdfBlob = new Blob([document.documentElement.innerHTML], { type: 'application/pdf' });

        const formData = new FormData();
        formData.append('pdfFile', pdfBlob, 'documento.pdf');

        fetch('https://tu-api.com/guardar-pdf', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Procesar la respuesta del servidor si es necesario
                    console.log('PDF guardado en el servidor');
                } else {
                    // Manejar el caso de error en la solicitud
                    console.log('Error al guardar el PDF en el servidor');
                }
            })
            .catch(error => {
                // Manejar el caso de error en la solicitud
                console.log('Error al enviar el PDF al servidor:', error);
            });
    }, 1000); // Esperar 1 segundo para asegurarse de que el PDF se haya generado completamente
}



const botonSubir = document.getElementById("botonSubir")

function checkAndCreateFile() {
    const folderPath = '../../google-services/public/';

    // Verificar si la carpeta está vacía
    const files = fs.readdirSync(folderPath);
    if (files.length === 0) {
        // Crear un nuevo archivo
        const fileName = 'newFile.txt';
        fs.writeFileSync(`${folderPath}/${fileName}`, 'Contenido del archivo');
        console.log(`Se ha creado el archivo "${fileName}" en la carpeta "images".`);
    } else {
        // Eliminar el archivo existente
        const filePath = `${folderPath}/${files[0]}`;
        fs.unlinkSync(filePath);

        // Crear un nuevo archivo
        const fileName = 'newFile.txt';
        fs.writeFileSync(`${folderPath}/${fileName}`, 'Contenido del archivo');
        console.log(`Se ha eliminado el archivo existente y se ha creado uno nuevo en la carpeta "images".`);
    }
}

checkAndCreateFile();