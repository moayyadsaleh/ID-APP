function readAloud() {
  const text = document.getElementById("content-text").textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}
