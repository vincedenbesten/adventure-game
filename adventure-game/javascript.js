console.log('hij werkt');

function startintro() {
  document.getElementById("startmenu").style.display = "none";
  document.getElementById("overzicht").style.display = "block";
}

function intronext1() {
  document.getElementById("intro").innerHTML = "Er zijn 3 bruggen: een spoorbrug, een brug voor autos en een brug voor voetgangers en fietsers.";
  document.getElementById("introbruggen").style.display = "block";
  document.getElementById("nextbtn").onclick = intronext2;
}

function intronext2() {
  document.getElementById("intro").innerHTML = "Je krijgt steeds verschillende opties, als je de juiste opties kiest kun je de overkant van het water berijken. Er zijn meerdere mogelijkheden om te winnen of te verliezen.";
  document.getElementById("introbruggen").style.display = "none";
  document.getElementById("nextbtn").onclick = beginspel;
}

function beginspel() {
  document.getElementById("introstyle").style.display = "none";
  document.getElementById("levelnaam").innerHTML = "Overzicht";
  document.getElementById("introbruggen").style.display = "block";
  document.getElementById("zwemmen").style.display = "block";
  document.getElementById("voetgangersbrug").onclick = voetgangersbrug;
  document.getElementById("autobrug").onclick = autobrug;
  document.getElementById("spoorbrug").onclick = spoorbrug;
  document.getElementById("zwemmen").onclick = zwem;
}

function again() {
  document.getElementById("levels").style.display = "none";
  document.getElementById("levelnaam").innerHTML = "Overzicht";
  document.getElementById("introbruggen").style.display = "block";
  document.getElementById("zwemmen").style.display = "block";
  document.getElementById("overzicht").style.backgroundImage = "url(css/grfx/begingame.jpg)";
}

function zwem() {
  document.getElementById("levelnaam").innerHTML = "Zwemmen";
  document.getElementById("introbruggen").style.display = "none";
  document.getElementById("zwemmen").style.display = "none";
  document.getElementById("levels").style.display = "flex";
  document.getElementById("leveltekst").innerHTML = "Je bent bij het water aangekomen.<br>Zo moeilijk is het niet om even naar de overkant te zwemmen...<br>";
  document.getElementById("option1").style.display = "block";
  document.getElementById("option1").innerHTML = "Zwem naar de overkant";
  document.getElementById("option1").onclick = drown;
  document.getElementById("overzicht").style.backgroundImage = "url(css/grfx/zwemmen.jpg)";
}

function drown() {
  document.getElementById("levelnaam").innerHTML = "GAMEOVER";
  document.getElementById("leveltekst").innerHTML = "De stroming trok je onder, hierdoor verdronk je.";
  document.getElementById("option1").innerHTML = "try again";
  document.getElementById("option1").onclick = again;
  document.getElementById("overzicht").style.backgroundImage = "url(css/grfx/drown.jpg)";
}
