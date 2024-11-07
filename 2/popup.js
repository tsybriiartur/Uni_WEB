const colorInput = document.getElementById("colorInput");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyButton = document.getElementById("copyButton");

// Функція для оновлення значень кольору
function updateColorValues(color) {
  // Отримання HEX-значення
  hexValue.textContent = color;
  
  // Конвертація HEX у RGB
  const rgb = hexToRgb(color);
  rgbValue.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

// Функція для конвертації HEX у RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

// Оновлення кольору при зміні вибраного значення
colorInput.addEventListener("input", (event) => {
  const color = event.target.value;
  updateColorValues(color);
});

// Копіювання HEX-значення до буфера обміну
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(hexValue.textContent).then(() => {
    copyButton.textContent = "Copied!";
    setTimeout(() => (copyButton.textContent = "Copy HEX"), 1000);
  });
});
