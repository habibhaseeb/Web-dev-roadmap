//     Method 1
// let button1 = document.getElementById('button');
 
// const showAlert = () => alert("Wrong Input please try again later.");

// button1.addEventListener('click', showAlert);


//      Second Method

function ActionClick() {
    let clickedButton = document.getElementById('button');

    clickedButton.onclick = () => (window.alert("you clicked the button"));
}
ActionClick();