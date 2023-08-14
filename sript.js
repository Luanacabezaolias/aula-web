/*let chave="item1"
localStorage.setItem(chave,'Fiap');


let leritem= localStorage.getItem(chave);

console.log(leritem)

let array = [1,2,3,4,5]
localStorage.setItem("lista".array)

localStorage.removeItem()
//localStorage.clear()
*/


//criar a lista do usuario
let listaDados=[];
//objeto base(construtar)
function Campos(campo1){
    this.campo1 = campo1;
}


//disparar o botão
const btnEnviar = document.querySelector('#btnSubmit')

//envento do click

btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector('#campo1');
    //intanciando o objeto (construtor)
    let info = new Campos(inputCampo1.value)
    listaDados.push(info)
    localStorage.setItem("dados",JSON.stringify(listaDados))
})



