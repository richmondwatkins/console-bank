var balance = 1000;
var input = query();


while(!quit()){
  if(input === 'd'){
    var deposit = dQuery()
    deposit =  dBonus(deposit);
    balance += deposit;
    console.log(balance);
  } else if (input === 'w'){
    var withdraw = wQuery()
    withdraw = wFee(withdraw);
    balance -= withdraw;
    console.log(balance);
      if(!accValid()) {
        alert("You withdrew too much!")
        break;
      }
  } else if (input === 'q'){

  } else {
      alert("You entered an invalid command");
  }

  input = query();
} //end while


function query() {
  var str = prompt('(D)eposit or (W)ithdraw? -- (Q)uit')
  str = str.toLowerCase();
  return str;
}

function dQuery() {
  return prompt('How much would like to deposit?') * 1;
}

function dBonus(deposit) {
  if (deposit > 500) {
    return deposit += 25;
  }
  return deposit;
}

function wQuery() {
  return prompt('How much would like to withdraw?') * 1;
}

function wFee(withdraw) {
  if (balance - withdraw < 0) {
    return withdraw += 50;
  }
  return withdraw;
}

function accValid() {
  return balance >= -750;
}

function quit() {
  return input === 'q';
}
