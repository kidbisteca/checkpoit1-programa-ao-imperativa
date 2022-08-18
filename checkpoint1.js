const opçaoes ={
    "1" = {nome: "pipoca" = 10};
"2" = {nome: "macarrao" =8};
"3"={nome: "carne" =15};
"4" = {nome="feijao"= 12 };
"5"= {nome = brigadeiro =8};

}






function esquentar(numeroPrato, tempo){
    const prato= opçoes[numeroPrato];

    if(!prato){
        return console.log('prato inexistente')
    }
   let mensagem;
    const tempoPadrao =prato.tempo;

    if(tempo < tempoPadrao) {
        mensagem = 'tempo insuficiente';

    }
    else if (tempo>tempoPadrao *2 && tempo <= tempoPadrao){
mensagem = 'a comida queimou';
} else if (tempo > tempoPadrao * 3 ){
    mensagem = 'kabum';

}else{
    mensagem = 'prato pronto , bom apetite'
}

return console.log(mensagem);


}
var opçao =1;
var tempo =40;
console.log(esquentar(opçao,tempo));













