const inputText = document.getElementById("inputText");

document.body.onkeydown = (e) => {
    if(e.keyCode === 8) {
        inputText.innerHTML = inputText.innerHTML.substring(0, inputText.innerHTML.length - 1);
    } else {
        if(e.key.length < 2) {
            inputText.innerHTML += e.key;
        }
    }
}