const salt = "mary had a little lamb";
const crypto = require("crypto");

/**
 * It take a password and hash it 10 times with salt. It produces a 64 byte long sha512 hash
 * @param {String} password to digest
 */
function getAPromiseOf10IterationsOf64ByteSha512AsHex(password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10, 64, "sha512", (err, derivedKey) => {
      if (err) return reject(error);
      resolve(derivedKey.toString("hex"));
    });
  });
}

const charSpace = "0123456789";
/**
 * it calls a function on all posiable options of charSpace with targetLength
 * @param {Number} targetLength - the required length
 * @param {Function} callback - callback to run on each generated item, will be invoked: callback(generatedString)
 * @param {String} generated - internal. the string to start from
 */
function generate(targetLength, callback, generated=""){
    if (generated.length >= targetLength) return callback(generated);
    for (var i = 0; i < charSpace.length; i++) { 
        generate(targetLength, callback,generated+charSpace[i]);
    }
}

/**
 * This is a hash of a 4 digits pin code: 
 * a83e2e4672df312d9ac2d572daa1d3642ff298140128fd9e46fb8be4f85fbe7e71113ac20a917b9225598462aeef99889ec9d6269dca150bbfcb1ef834b932ba
 * Can you find out what is the pincode?
 */
generate(4, (generated)=>getAPromiseOf10IterationsOf64ByteSha512AsHex(generated).then((hash)=>{
    if (hash==="a83e2e4672df312d9ac2d572daa1d3642ff298140128fd9e46fb8be4f85fbe7e71113ac20a917b9225598462aeef99889ec9d6269dca150bbfcb1ef834b932ba"){
        console.log(`password is ${generated}`);
    }
}))