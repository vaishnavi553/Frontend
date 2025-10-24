const generateBtn = document.getElementById('generate-btn');
const textInput = document.getElementById('text-input');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === "") {
        alert("Please enter some text or URL");
        return;
    }

    // Clear previous QR code
    qrcodeContainer.innerHTML = "";

    // Generate new QR code
    new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
 