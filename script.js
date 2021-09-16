var billAmount = document.querySelector("#billAmt");
var paidAmount = document.querySelector("#paidAmt");

var givenCashDiv = document.querySelector(".givenCash");

var errorDiv = document.querySelector(".error-msg");

var nextBtn = document.querySelector(".nxtBtn");
var checkBtn = document.querySelector(".balanceBtn");

var ouputDiv = document.querySelector("#balance");

const noOfNotes = document.querySelectorAll(".noOfNotes");

var notes = [2000 , 500 , 100 , 20 , 10 , 5 , 1];

nextBtn.addEventListener("click" , () => {
    hideError();

    let amt = billAmount.value;

    if(amt > 0){
        nextBtn.style.display = "none";
        givenCashDiv.style.display = "block";
    }
    else
    {
        showError("Enter a valid bill amount");
    }
});

checkBtn.addEventListener("click" , () => {

    clearNotes();

    var paid = Number(paidAmount.value);

    var billed = Number(billAmount.value);

    console.log(paid , billed);

    if(billed<0)
    {
        showError("Enter a valid bill amount");
        nextBtn.style.display = "inline-block";
        givenCashDiv.style.display = "none";
    }
    else if( paid < billed)
    {
        showError("Paid amount is lesser than the bill amount");
    }
    else{
        hideError();

        var balance = paid - billed;

        ouputDiv.style.display = "block";

        for(var i = 0 ; i<notes.length; i++){
            balance = calculate(balance , notes[i] , i);
        }
    }

});

function calculate( balance ,  note , index){

    if(balance >= note)
    {
        let mod = Math.floor(balance/note);

        balance= balance - (mod*note);

        noOfNotes[index].innerHTML = `${mod}`;
    }

    return balance;
}

function clearNotes(){
    for(var i = 0 ; i<notes.length;  i++){
        noOfNotes[i].innerHTML = "";
    }
}


function hideError()
{
    errorDiv.style.display = "none";
}

function showError(error)
{
    errorDiv.style.display = "block";
    errorDiv.innerHTML = error;
    ouputDiv.style.display = "none";
}

