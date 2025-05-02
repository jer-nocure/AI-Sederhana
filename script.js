const chatForm = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const botResponses = {
  "halo": "Halo! Ada yang bisa saya bantu?",
  "min,apakah bisa saya memesan kopi secara online?": "Tentu, Anda Bisa Memesan Kopi Kami Secara Online 😊",
  "saya mau pesan kopi": "Tentu! Kopi apa yang ingin Anda pesan?",
  "pembayarannya?": "Pembayaran bisa dilakukan melalui transfer bank atau e-wallet.",
  "yudh saya mau dong kopi nila latte satu": "Tentu! Nila Latte satu sudah dipesan. Apakah ada yang lain?",
  "udh itu ajh": "Kopi sudah dipesan. Terima kasih!",
  "terima kasih": "Sama-sama! Selamat menikmati kopi Anda.",
  "apa kabar": "Saya baik-baik saja, terima kasih! Bagaimana dengan Anda?",
  "siapa kamu": "Saya adalah produk inzi dari kopi kenangan, siap membantu Anda dengan pertanyaan seputar kopi.",
  "apa itu kopi kenangan": "Kopi Kenangan adalah merek kopi yang terkenal dengan cita rasa yang unik dan berkualitas tinggi.",
  
};

chatForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = userInput.value.trim().toLowerCase();
  if (!input) return;

  addMessage(input, "user");

  setTimeout(() => {
    const reply = botResponses[input] || "Maaf, saya tidak mengerti.";
    addMessage(reply, "bot");
  }, 500);

  userInput.value = "";
});

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
