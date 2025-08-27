function checkAge(){
   const age = parseInt(document.getElementById("age").value)
   if (age >= 18) {
    document.getElementById("message").innerText= "You are eligible for vote!"
   } else {
    document.getElementById("message").innerText= "Sorry, Keep 18+"
   }
}