//     Method 1
// let button1 = document.getElementById('button');
 
// const showAlert = () => alert("Wrong Input please try again later.");

// button1.addEventListener('click', showAlert);


//     Method 2

// function ActionClick() {
//     let clickedButton = document.getElementById('button');

//     clickedButton.onclick = () => (window.alert("you clicked the button"));
// }
// ActionClick();


//        Method 3
// let ActionButton = document.querySelector('button');

// let isClicked = false;

// ActionButton.addEventListener('click', function(){
//     if(!isClicked) 
//         {
//             window.alert("You Clicked the Button.")
//         }
        
//         else {
//             console.log("Button is not clicked!")
//         }
//     });

        // Method 4

let ActionButton = document.querySelector('button');
let isClicked = false;
ActionButton.addEventListener('click', ()=> { if(isClicked === false)
    {
        window.alert("you Clicked")
    }
    else {
        console ("Error");
    }
 }
)
