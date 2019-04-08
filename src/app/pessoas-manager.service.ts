import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasManagerService {
pessoas = [];


  constructor() { }

  salvar(nome: string, idade: number, sexo: string, cidade: string){
    const pessoa= {
      nome : nome,
      idade : idade,
      sexo : sexo,
      cidade : cidade
    }
    this.pessoas.push(pessoa)
    localStorage.setItem("pessoas", JSON.stringify(this.pessoas))
  };



  PessoaVelha(){
    let aux = 0;
    let maisvelho = [{idade: null}];

    for (const pessoa of this.pessoas){
      if (pessoa.idade > aux ){
        maisvelho = [pessoa];
        aux= pessoa.idade;
      } 
    }
    return maisvelho;
  }

  PessoaNova(){
    let aux = 0;
    let maisnovo = [{idade: null}];

    for (const pessoa of this.pessoas){
      if (aux == 0){
        maisnovo = [pessoa];
        aux= pessoa.idade;
    }
      else{
        if (pessoa.idade < aux){
          maisnovo = [pessoa];
          aux = pessoa.idade;
        }
      }
    }
    return maisnovo;

  }

  mediaFeminina(){
    let soma = 0;
    let cont = 0;

    for (const pessoa of this.pessoas){
      if (pessoa.sexo == "Feminino"){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaMasculina(){
    let soma = 0;
    let cont = 0;

    for (const pessoa of this.pessoas){
      if (pessoa.sexo == "Masculino"){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaCidade(cidade){
    let soma = 0;
    let cont = 0;
    for (const pessoa of this.pessoas){
      if (pessoa.cidade == cidade){
        soma = soma + pessoa.idade;
        cont = cont + 1;
      }
    }
    return (soma/cont).toFixed(1);
  }

  mediaSexoCidade(cidade, sexo){
    let cont = 0;
    for (const pessoa of this.pessoas){
      if (pessoa.cidade == cidade && pessoa.sexo == "Feminino"){
        cont = cont + 1;
      }
    }
    if (sexo == "Feminino"){
      return ((cont/this.pessoas.length)*100).toFixed(1);
    }
    else{
      return (((this.pessoas.length-cont)/this.pessoas.length)*100).toFixed(1);

    }
  }



}


