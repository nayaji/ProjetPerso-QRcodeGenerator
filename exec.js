const QRCode = require('qrcode');
const readline = require('readline');
const path = require('path');

// Crée un dossier "qrcodes" s'il n'existe pas déjà
const fs = require('fs');
const dir = './qrcodes';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez une URL pour générer un QR code : ', (url) => {
    generateQRCode(url);
    rl.close();
});

// Fonction pour générer un QR code et l'enregistrer en tant qu'image
function generateQRCode(url) {
    const filePath = path.join(__dirname, 'qrcodes', 'qrcode.png'); // Chemin du fichier

    QRCode.toFile(filePath, url, function (err) {
        if (err) {
            console.error("Erreur lors de la génération du QR code : ", err);
            return;
        }
        console.log(`QR Code généré et enregistré sous ${filePath}`);
    });
}
