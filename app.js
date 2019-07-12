function tipcalculator(){
    var billAmount = document.getElementById("amount").value;
    var service = document.getElementById("percent").value;
    var people = document.getElementById("people").value;
    var total;


    total=(billAmount*service)/people;

    document.getElementById("total").innerHTML=total;
}