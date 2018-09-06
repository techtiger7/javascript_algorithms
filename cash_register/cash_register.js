"use strict";

var currency = {
"PENNY": {value: 1, amount: 0},
"NICKEL": {value: 5, amount: 0},
"DIME": {value: 10, amount: 0},
"QUARTER": {value: 25, amount: 0},
"ONE": {value: 100, amount: 0},
"FIVE": {value: 500, amount: 0},
"TEN": {value: 1000, amount: 0},
"TWENTY": {value: 2000, amount: 0},
"ONE HUNDRED": {value: 10000, amount: 0},
"DENOMINATIONS": ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
}

function calculateTotalCID(cidArray){
  var result = 0;
  for(var denomination in cidArray){
    result += denomination[1];
  }
  return result;
}

function checkCashRegister(price, cash, cid) {
  var transaction = {
    status: "",
    change: []
  };
  // calculate balance in cents to avoid working in floats
  var balance = cash * 100 - price * 100;
  console.log(balance)
  // check if there is a change balance to return
  if(balance > 0){
    var totalCashAvailable = 0; // variable for adding up cid
    // map denomination amounts from cid to currency object for use
    for(let i = 0; i < cid.length; i++){
      currency[cid[i][0]].amount = cid[i][1] * 100; // store in cents
      totalCashAvailable += cid[i][1] * 100;
    }
    if(balance == totalCashAvailable){
      transaction.status = "CLOSED";
      transaction.change = cid;
    }
    else {
      var changeOfDenomination = 0;
      // cycle through each denomination and determine change requirement
      for(let j = 0; j < currency.DENOMINATIONS.length; j++){
        var currentDenomination = currency.DENOMINATIONS[j];
        // check if the balance is large enough to require this denomination
        if((balance / currency[currentDenomination].value) >= 1){
          // check if there is more of the denomination than needed
          if(((balance - currency[currentDenomination].amount)) < 0){
            // calculate how much of the denomination to give in change
            changeOfDenomination = Math.floor(balance / currency[currentDenomination].value) * currency[currentDenomination].value;
            balance -= changeOfDenomination; // Update the balance of change due
            console.log(balance);
            // push the change of current denomination to the change array
            transaction.change.push([currentDenomination, changeOfDenomination / 100]);
          }
          // if there is less of denomination than required, take all available
          else {
            transaction.change.push([currentDenomination, (currency[currentDenomination].amount / 100)]);
            // update the balance to reflect
            balance -= currency[currentDenomination].amount;
            console.log(balance);
          }
        }
      }
      // check if there is still a balance
      if(balance > 0){
        transaction.status = "INSUFFICIENT_FUNDS";
        transaction.change = [];
      }
      else {
        transaction.status = "OPEN";
      }
    }
  }
  // otherwise the balance is negative, insufficient payment made
  else {
    transaction.status = "INSUFFICIENT_PAYMENT";
    transaction.change = [];
  }
  return transaction;
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
