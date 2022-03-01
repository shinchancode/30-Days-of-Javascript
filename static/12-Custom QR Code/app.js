const href = "https://shinchancode.github.io/React-Portfolio/";
const size = 250;

new QRCode(document.querySelector("#qr"), {
  text: href,
  width: size,
  height: size,

  colorDark: "black",
  colorLight: "white"
});