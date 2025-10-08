function checkBMI() {


    let heigth = document.getElementById("heigth").value;
    let weigth = document.getElementById("weigth").value;
   
    
    console.log("You enter: " + " " + heigth);
    console.log("You enter: " + " " + weigth);
    console.log("Your BML is: " + " " + bmi)
     // Below 18.5 Underweight
     // 18.5 to 24.9 Normal weight
     // 25.0 5to 29.9 Overweight
     // 30.0 and Above Obesity
     let bmi = (weigth / (heigth * heigth));
    
    if (weigth === "" && heigth ===""){
        console.log("Please enter your weigth and heigth");
    } else if (weigth < 18.5)
        console.log("Underweight"); 

        if (weigth > 18.5-24.9){
        console.log("Normal weigth"); {

        if (weigth > 25.0-29.9)
        console.log("Overweigth"); 

        if (weigth > 30)
            console.log("Obese")
    
    
        }
    }
}   

    
