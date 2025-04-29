function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  
  function fancyStyle() {
    let textArea = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    }
  }
  
  function boringStyle() {
    let textArea = document.getElementById("textArea");
    if (document.getElementById("boring").checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooify() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
  
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0 && words[words.length - 1] !== "") {
        words[words.length - 1] += "-Moo";
      }
      sentences[i] = words.join(" ");
    }
  
    textArea.value = sentences.join(". ");
  }
  