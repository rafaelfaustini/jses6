class TransacaoController{
  constructor(){
    let input = document.querySelector.bind(document);
    this.data = input('#data');
    this.quantidade = input('#quantidade');
    this.valor = input('#valor');  
  }
  adiciona(event){
    event.preventDefault();


  }

}
