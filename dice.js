// Function to let the button roll the dice

function rollDice() {
    // Get random numbers between 1 - 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;

    // Get a random dice
    const randomDice = "dice"+randomNumber1+".png";

    // Get images source with random dice
    const randomImageSource = "/images/"+randomDice;


    // Randomise player one dice
    const image1 = document.querySelectorAll("img") [0]; // selects all image tag and then chooses the first on the index

    // Now target the attribute of image1 and change it's image
    image1.setAttribute("src", randomImageSource);


    // Let's create another randomiser for player 2
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // random dice for player 2
    const randomDice2 = "/images/dice"+randomNumber2+".png";

    // Let's randomise player two

    const image2 = document.querySelectorAll("img") [1]; // select element

    // Now set element
    image2.setAttribute("src", randomDice2);


    // Who wins?
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "😎 Player one wins";
        document.querySelector("h1").style.color = "#fefae0";
        document.body.style.backgroundColor = "#14213d";
        document.querySelectorAll("p")[0].style.color = "#fefae0";
        document.querySelectorAll("p")[0].style.textShadow = '0 0 30px #fefae0';
    
        // Reset styles for the other paragraph
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player two wins 😎"
        document.querySelector("h1").style.color = "#ffddd2";
        document.body.style.backgroundColor = "#3d405b";
        document.querySelectorAll("p")[1].style.color = "#ffddd2";
        document.querySelectorAll("p")[1].style.textShadow = '0 0 30px #ffddd2';
    
        // Reset styles for the other paragraph
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
    }
    else {
        document.querySelector("h1").innerHTML = "Draw! 🤝";
    
        // Reset styles for both paragraphs in case of a draw
        document.querySelectorAll("p")[0].style.color = "";
        document.querySelectorAll("p")[0].style.textShadow = '';
        document.querySelectorAll("p")[1].style.color = "";
        document.querySelectorAll("p")[1].style.textShadow = '';
    }
}

// Get the button element and add a click event listener
const button = document.querySelector("button");
button.addEventListener("click", rollDice);


/*
// Randomise the two CSS to give 1 & 2 -- discarded idea

const randNum = Math.floor(Math.random() * 2) + 1;

// Get random CSS name
const randCSS = "/styles"+randNum+".css";

//Randomise CSS
// const css = document.querySelector("css"); // select CSS

// Select CSS link element
const css = document.querySelector('link[rel="stylesheet"][href^="/styles"]');

// const css1 = "styles"+randNum+".css";

css.setAttribute("href", randCSS)

console.log(randCSS)
*/
