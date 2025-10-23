// let palabra = "";

// const getPalabra = () => palabra; // función para leer el valor actual

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// if (!SpeechRecognition) {
//   alert("Este navegador no soporta reconocimiento de voz.");
// }

// const voz = new SpeechRecognition();
// voz.lang = "es-MX";
// voz.continuous = false;
// voz.interimResults = false;

// voz.onresult = (event) => {
//   palabra = event.results[0][0].transcript.trim().toLowerCase();
//   console.log("Palabra reconocida:", palabra);
// };

// voz.onend = () => {
//   if (autoEscucha) voz.start();
// };

// let autoEscucha = false;

// document.getElementById("StartBtn").addEventListener("click", () => {
//   autoEscucha = true;
//   voz.start();
// });

// document.getElementById("StopBtn").addEventListener("click", () => {
//   autoEscucha = false;
//   voz.stop();
// });

// export { getPalabra };

let palabra = "";

const normalizeText = (s) =>
  s
    ? s
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // quita acentos
        .replace(/[^\w\s]/g, "") // quita signos de puntuación
        .trim()
        .toLowerCase()
    : "";

const getPalabra = () => palabra;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
  alert("Este navegador no soporta reconocimiento de voz.");
}

const voz = new SpeechRecognition();
voz.lang = "es-MX";
voz.continuous = false;
voz.interimResults = false;

voz.onresult = (event) => {
  const raw = event.results[0][0].transcript;
  palabra = normalizeText(raw);
  console.log("Palabra reconocida (raw):", raw);
  console.log("Palabra reconocida (normalizada):", palabra);
  // Emitimos un evento que cualquiera (la escena) puede escuchar
  document.dispatchEvent(
    new CustomEvent("palabraReconocida", { detail: palabra })
  );
};

voz.onend = () => {
  if (autoEscucha) voz.start();
};

let autoEscucha = false;
document.getElementById("StartBtn").addEventListener("click", () => {
  autoEscucha = true;
  voz.start();
});

document.getElementById("StopBtn").addEventListener("click", () => {
  autoEscucha = false;
  voz.stop();
});

export { getPalabra };
/*PROBANDO SI ESTO ES UN PR*/

