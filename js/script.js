//collego gli elementi html con javascript

let startGame = document.getElementById("start-game");

let gridContainer = document.getElementById("grid-container");

let difficultChoose; 


//memorizzo numero totale square


//creo il funzionamento del tasto start

startGame.addEventListener("click", function(){

    difficultChoose = document.getElementById("difficult-choose").value;

    console.log(difficultChoose)
    
    //creo le caselle

    for (let i = 1; i < 101; i++) {
        
        let square = document.createElement("div");
    
        square.classList.add("square");

        //appendo le caselle al suo contenitore 

        gridContainer.append(square);

        //assegno ad ogni square un numero da uno a 100

        square.innerText = i;

        //aggiungo background al click agli square
        
        square.addEventListener("click", function(){
            square.classList.add("colorBackground");
        })
    }




});