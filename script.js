const terminal = document.getElementById("terminal-text");

if (terminal) {
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
    "$ echo \"LinkedIn: https://www.linkedin.com/in/sri-harsha-3b375b304/\"",
    "LinkedIn: https://www.linkedin.com/in/sri-harsha-3b375b304/",
    "",
    "$ echo \"Production stable\""
  ];

  let l = 0, c = 0;

  function type() {
    if (l < lines.length) {
      if (c < lines[l].length) {
        terminal.textContent += lines[l][c++];
        setTimeout(type, 35);
      } else {
        terminal.textContent += "\n";
        c = 0;
        l++;
        setTimeout(type, 300);
      }
    }
  }

  type();
}
