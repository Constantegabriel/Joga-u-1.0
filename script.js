var numberToFind = 0;
var attemps = 0;

function refresh(){
//gera um numero aleatório

numberToFind = parseInt(Math.random() *100);

    console.log(numberToFind)

}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if (bet > 100 || bet < 1)
    {
      alert('aposta inválida');
      return;
    }

    if(bet > numberToFind)
    {
       attemps++;
       alert('🚨o numero para ser encontrado é MENOR');
    }
    else if(bet < numberToFind)
    {
       attemps++;
       alert('🚨o nomero para ser encontrado é MAIOR');
    }
else
{
       alert('✅ Parabens vocẽ acertou!! com '+attemps+' erros');
}
}

refresh();
