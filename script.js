var imgBox = document.getElementById("imgBox");
var qrImage = document.getElementById("qrImage");
var qrText = document.getElementById("qrText");
function generateQR() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
