const { hashMD5, hashSHA256 } = require("./hashTestResultList");
const { hashTestList } = require("./hashTestList");
const { createHash } = require("crypto");

function generateHashSHA256(phrase) {
  const hashSHA256 = createHash("sha256").update(phrase).digest("hex");
  return hashSHA256;
}

function generateHashMD5(phrase) {
  const hashMD5 = createHash("md5").update(phrase).digest("hex");
  return hashMD5;
}

function checkPhrases() {
  let checkedPhrases = [];
  let truePhrases = [];
  for (let i = 0; i < hashTestList.length; i++) {
    generatedHashSHA256 = generateHashSHA256(hashTestList[i]);
    generatedHashMD5 = generateHashMD5(hashTestList[i]);

    checkedPhrases.push({
      phrase: hashTestList[i].substring(0, 60) + "...",
      "Hash SHA256":
        generatedHashSHA256 === hashSHA256[i] ? "VERDADEIRO" : "FALSO",
      "Hash MD5": generatedHashMD5 === hashMD5[i] ? "VERDADEIRO" : "FALSO",
    });

    generatedHashSHA256 === hashSHA256[i] &&
      generatedHashMD5 === hashMD5[i] &&
      truePhrases.push(hashTestList[i]);
  }

  return { checkedPhrases, truePhrases };
}

module.exports = {
  checkPhrases,
};
