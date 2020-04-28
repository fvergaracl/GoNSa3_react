
var CryptoJS = require("crypto-js");

export const  encrypt = (data) =>{
    let response = CryptoJS.AES.encrypt(data, "449dsjf49edjdjsdsdkgjtoadls,dd").toString();
    return response
}

export const descrypt = (data) => {

    let bytes = CryptoJS.AES.decrypt(data.toString(), "449dsjf49edjdjsdsdkgjtoadls,dd");
    var response = bytes.toString(CryptoJS.enc.Utf8)
    return response
}

