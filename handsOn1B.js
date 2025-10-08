function login(){
    let heigth = document.getElementById("heigth").value;
    let weigth = document.getElementById("weigth").value;
    let bmi = (weigth / (heigth * heigth));
    
    console.log("You enter: " + " " + heigth);
    console.log("You enter: " + " " + weigth);
    console.log("Your BML is: " + " " + bmi)
     
    
    if (heigth < 0 && 18.5){
        console.log("Underweight");
    } else ( weigth < 24.9)
        console.log("Normalweight"); {
    } 
        
    }
