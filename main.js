const { checkPhrases } = require("./src/hashDiffChecker");

function main() {
  const checkedPhrasesResult = checkPhrases;
  const checkedPhrasesReturnLength = checkedPhrasesResult().truePhrases.length;
  console.table(checkedPhrasesResult().checkedPhrases);
  console.log();
  console.log("FRASES VERDADEIRAS");
  for (let i = 0; i < checkedPhrasesReturnLength; i++) {
    console.log("-> " + checkedPhrasesResult().truePhrases[i]);
  }
}

main();
