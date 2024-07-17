document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generateButton').addEventListener('click', function() {
        generateQR();
    });
});

function generateQR() {
    let qrText = document.getElementById('qrText').value;
    let qrImage = document.getElementById('qrImage');

    if (qrText.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText);
        document.getElementById('imgBox').classList.add('show-img');
    } else {
        console.log("No input was given");
        document.getElementById('qrText').classList.add('error');
        setTimeout(function() {
            document.getElementById('qrText').classList.remove('error');
        }, 1000);
    }
}

