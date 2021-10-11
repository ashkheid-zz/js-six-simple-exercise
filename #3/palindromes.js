function textTrim(text) {
  return text
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
}

function palindromes(text) {
  text = text + "";
  text = textTrim(text.toLowerCase());
  return text.split("").reverse().join("") == text;
}

module.exports = palindromes;