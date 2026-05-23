const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
  greeting.innerHTML = "good morning prerna ☀️";
} else if (hour < 18) {
  greeting.innerHTML = "good afternoon prerna 🌸";
} else {
  greeting.innerHTML = "good evening prerna 🌙";
}

const terminal = document.getElementById("terminal");

function runAI(type) {
  terminal.innerHTML = `
    > initializing recommendation engine...<br>
    > scanning prerna's mood patterns...<br>
    > checking indecisiveness levels...<br>
    > consulting food database...<br><br>
  `;

  setTimeout(() => {
    const outputs = {
      chatpata: `
        > RESULT FOUND 🌶️<br><br>
        recommended:<br>
        mushroom  +  babycorn chilli + laphing.<br><br>
        elite chaotic food combination detected.
      `,

      naan: `
        > RESULT FOUND 🫓<br><br>
        recommended:<br>
        butter naan + chilli chicken something.<br><br>
        comfort food energy detected.
      `,

      veg: `
        > RESULT FOUND 🥬<br><br>
        recommended:<br>
        chowmein + momos combo.<br><br>
        emotionally safe choice.
      `,

      nonveg: `
        > RESULT FOUND 🍗<br><br>
        recommended:<br>
        Hyderabadi biryani (chote pieces).<br><br>
        dangerous but valid choice.
      `,

      sweet: `
        > RESULT FOUND 🍫<br><br>
        recommended:<br>
        cadbury Bubbly ya fir Crispello.<br><br>
        emotional support chocolate approved.
      `,
    };

    terminal.innerHTML += outputs[type];
  }, 1800);
}

function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function acceptOrder() {
  document.getElementById("popup").classList.add("hidden");

  terminal.innerHTML = `
    > ORDER CONFIRMED 🛵<br><br>
    emotionally processing food request...<br>
    delivering to lower chutia.
  `;
}

function showSadCat() {
  document.getElementById("popup").classList.add("hidden");

  document.getElementById("sadPopup").classList.remove("hidden");

  const text = "my dil tuts.";

  const typingText = document.getElementById("typingText");

  typingText.innerHTML = "";

  let i = 0;

  const interval = setInterval(() => {
    typingText.innerHTML += text[i];

    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 120);
}

function closeSadCat() {
  document.getElementById("sadPopup").classList.add("hidden");
}

function showButterPopup() {
  document.getElementById("butterPopup").classList.remove("hidden");
}

function closeButterPopup() {
  document.getElementById("butterPopup").classList.add("hidden");
}
