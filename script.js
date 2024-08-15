const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e)=>{
    e.preventDefault();
    clearUI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url,size);

    if(url == ''){
        alert("Please enter a URL");
    }
    else{
        showSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQrCode(url,size);

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
}

const generateQrCode = (url,size) =>{

    const qrcode = new QRCode('qrcode',{
        text:url,
        width : size,
        height : size,
    })
}
const clearUI = () =>{
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link');
    if(saveLink){
        saveLink.remove();
    }
}
const showSpinner = () =>{
    document.getElementById("spinner").style.display = 'block';
}

const hideSpinner = () =>{
    document.getElementById("spinner").style.display = 'none';
}
const createSaveBtn = (saveUrl) =>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'mt-5 w-1/3 bg-cyan-950 hover:bg-black hover:scale-95 transition-all duration-200 text-white font-bold py-2 rounded-md m-auto';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}
hideSpinner();

form.addEventListener('submit',onGenerateSubmit);