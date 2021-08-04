const href = "https://aartirathi17.herokuapp.com/";
const size = 250;

new QRCode(document.querySelector("#qr"), {
  text: href,
  width: size,
  height: size,

  colorDark: "black",
  colorLight: "white"
});