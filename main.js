
function verifica(){
let letra =document.getElementById("letra").value
let letra2= letra.toLowerCase(); // colocar a letra em minuscúlo 

        if (letra2 == "a" || letra2 == "e" || letra2 == "i" || letra2 == "o" || letra2 == "u"){
            res.innerHTML = `A letra "${letra}" é uma Vogal`
        } else {
        res.innerHTML= `A letra "${letra}" é uma consoante`
        }
        
}


