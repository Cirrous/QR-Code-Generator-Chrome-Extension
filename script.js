var imgBox = document.getElementById("imgBox");
var qrImage = document.getElementById("qrImage");
var qrText = document.getElementById("qrText");
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
    else {
        console.log("No Input was given");
        qrText.classList.add("error");
        setTimeout(()=> {
            qrText.classList.remove("error");
        }, 1000);
    }
}
