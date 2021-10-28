let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const logBtn = document.getElementById("log-btn");
// Use addEventListener() to listen for button clicks
logBtn.addEventListener("click", function(){
    console.log(
        data[0].score
    )
})
// Log Jane's score when the button is clicked (via data)
