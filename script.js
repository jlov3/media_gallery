let herogs = document.getElementsByClassName("himgs");
for (var i=0; i<herogs.length; i++) {
  if (i != 0) {
    herogs[i].style.display = "none";
  }
}

function imihide(num) {
  herogs[num].style.display = "block";
  for (let j=0; j<herogs.length; j++) {
    if (j != num) {
      herogs[j].style.display = "none";
    }
  }
}