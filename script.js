const message = `I  don't if you'll ever read this but i hope you do.\n I just want to talk to you even for the last time na.\n\nThere's a lot of things i want to ask and a lot of things nga gusto iexplain i hope you don't get the wrong idea kay feel ko kaya ko man tanggapon break up naton pero du kakalain lang nga du gin baylo takon(hindi lang man ako naka notice pati man mga cm ko).\n\nI'm not here to fight i guess i just need answers. I spend a lot of time to make this so i hope you give a chance to speak.\n\nHoping for your kind consideration.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
