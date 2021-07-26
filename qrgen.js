const QR = require("qrcode");
const Excel = require("xlsx");

function creatQR(filename , data){
    try {
        QR.toFile("image/" + filename + ".png",data);
    } catch (error) {
        console.log(error);
    }
}

const ws = Excel.readFile("qr.xlsx").Sheets["Sheet1"];
const data = Excel.utils.sheet_to_json(ws);
// console.log(data);

data.forEach(function(r){
    creatQR(r.FILENAME , r.URL);
})