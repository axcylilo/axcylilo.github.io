const correctCode = "060826"; 

function enterNumber(num) {
    let inputField = document.getElementById("codeInput");
    if (inputField.value.length < 6) {
        inputField.value += num;
    }
}

function clearInput() {
    let inputField = document.getElementById("codeInput");
    inputField.value = inputField.value.slice(0, -1);
}

function checkCode() {
    let inputField = document.getElementById("codeInput");
    let message = document.getElementById("message");

    if (inputField.value === correctCode) {
        message.innerHTML = "Unlocked! Redirecting....";
        message.style.color = "green";

        
        setTimeout(() => {
            window.location.href = "scroll.html"; 
        }, 2000); 
    } else {
        message.innerHTML = "Wrong code! Try again:P";
        message.style.color = "red";
    }

    inputField.value = ""; 
}

