//collego gli elementi html con javascript

let startGame = document.getElementById("start-game");

let gridContainer = document.getElementById("grid-container");

let difficultChoose; 


//memorizzo numero totale square


//creo il funzionamento del tasto start

startGame.addEventListener("click", function(){

    difficultChoose = document.getElementById("difficult-choose").value;

    if(difficultChoose == "choose") {
        alert("Scegli una difficoltà!")
    } else if (difficultChoose == "hard") {
        //creo le caselle
    
        for (let i = 1; i < 101; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("hard-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-hard")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                square.classList.add("colorBackground");
            })
        }
    }  else if (difficultChoose == "medium") {
        //creo le caselle
    
        for (let i = 1; i < 82; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("medium-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-medium")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                square.classList.add("colorBackground");
            })
        }
    } else if (difficultChoose == "easy") {
        //creo le caselle
    
        for (let i = 1; i < 50; i++) {
            
            let square = document.createElement("div");
        
            square.classList.add("easy-square", "square");

            //aggiungo la classe al container

            gridContainer.classList.add("grid-container-easy")
    
            //appendo le caselle al suo contenitore 
    
            gridContainer.append(square);
    
            //assegno ad ogni square un numero da uno a 100
    
            square.innerText = i;
    
            //aggiungo background al click agli square
            
            square.addEventListener("click", function(){
                square.classList.add("colorBackground");
            })
        }
    } 




});