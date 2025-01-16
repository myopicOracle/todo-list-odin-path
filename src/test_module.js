export default function hunnibubu(message) {
  const container = document.createElement("div");
  container.setAttribute("class", "container wrapper outer");
  container.style.cssText =
    "padding: 50% 0; text-align: center; width: 100%; height: 100%; background-color: violet; color: gold;";

  const testHeader = document.createElement("h1");
  testHeader.textContent = `${message}`;
  container.appendChild(testHeader);

  document.body.appendChild(container);
}

export const greeting = "Hello there! Can you hear me okay?";
