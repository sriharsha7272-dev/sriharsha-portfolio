document.addEventListener("DOMContentLoaded", () => {
  const terminalText = document.getElementById("terminal-text");
  if (!terminalText) return;

  const lines = [
    "$ whoami",
    "sriharsha-devops",
    "",
    "$ github",
    "https://github.com/sriharsha7272-dev",
    "",
    "$ linkedin",
    "https://www.linkedin.com/in/sri-harsha-3b375b304/"
  ];

  let l = 0, c = 0;

  function type() {
    if (l < lines.length) {
      if (c < lines[l].length) {
        terminalText.textContent += lines[l][c++];
        setTimeout(type, 35);
      } else {
        terminalText.textContent += "\n";
        c = 0;
        l++;
        setTimeout(type, 250);
      }
    }
  }

  terminalText.textContent = "";
  type();
});
