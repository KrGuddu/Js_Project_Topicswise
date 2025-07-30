function calculate(){
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("operator").value;
    let res = 0;
           
    switch(op){
    case "+" : res= n1+n2; break;
    case "-" : res=n1-n2; break;
    case "*" : res=n1*n2; break;
    case "/" : res= n1/n2; break;
    }

    document.getElementById("result").innerHTML="Result : "+res;
}