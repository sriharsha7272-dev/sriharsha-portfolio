const terminal = document.getElementById("terminal");
const terminalText = document.getElementById("terminal-text");

const LINKEDIN = "https://www.linkedin.com/in/sri-harsha-3b375b304/";

if (terminal && terminalText) {
  terminalText.textContent = "";

  const lines = [
    "$ whoami",
    "sriharsha-devops",
    "",
    "$ aws sts get-caller-identity",
    "Account: 123456789012",
    "Role: DevOpsEngineer",
    "",
    "$ kubectl get pods",
    "api-service     Running",
    "worker-service  Running",
    "",
    "$ terraform apply",
    "Apply complete! Infrastructure up-to-date.",
    "",
    "$ copy-linkedin",
    "Click terminal to copy LinkedIn URL",
    ""
  ];

  let l = 0, c = 0;

  function scroll() {
    terminal.scrollTop = terminal.scrollHeight;
  }

  function type() {
    if (l < lines.length) {
      if (c < lines[l].length) {
        terminalText.textContent += lines[l][c++];
        scroll();
        setTimeout(type, 35);
      } else {
        terminalText.textContent += "\n";
        c = 0; l++;
        scroll();
        setTimeout(type, 300);
      }
    }
  }

  terminal.addEventListener("click", () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(LINKEDIN).then(() => {
        terminalText.textContent += "\nLinkedIn copied ✔\n";
        scroll();
      });
    } else {
      terminalText.textContent += "\n" + LINKEDIN + "\n";
      scroll();
    }
  });

  type();
}
