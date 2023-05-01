function exercicio1(){
/*Considere o seguinte array:*/

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

/*Imprima no console o índice do primeiro salário maior que
7.500 utilizando o findIndex*/
    
    let indiceMaiorSalario = salarios.findIndex(salario => salario > 7500);
    
    console.log(indiceMaiorSalario);
    
/*Crie uma nova lista filtrada com os salários que são maior que
8.000 utilizando o filter*/
    
    let salariosMaiores = salarios.filter(salario => salario>8000); 
    
    console.log(salariosMaiores);
    
}

function exercicio2(){
/*James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:

const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];

mas James tinha isto:

const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"*/


    const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

    rainbow.splice(2, 1, "Amarelo", "Verde");

    rainbow.splice(5, 0, "Roxo");

    console.log(rainbow);

}

function exercicio3(){
/*Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000*/

   
    let continuar = true;

    let MaiorSalario = [];

    let MenorSalario = [];

    let pessoasEmpregadas = [];

    let pessoasDesempregadas = [];


    while(continuar){
        
        let pessoa = {};
        
        pessoa.nome = prompt('Informe o nome da pessoa a ser cadastrada: ');

        pessoa.idade = Number.parseInt(prompt('Informe a idade da pessoa a ser cadastrada: '));

        pessoa.emprego = confirm('A pessoa a ser cadastrada está empregada?');
        
        if(pessoa.emprego){
            pessoa.salario = Number.parseFloat(prompt('Digite o salário da pessoa a ser cadastrada: '));
            pessoasEmpregadas.push(pessoa);
        }else{
            pessoasDesempregadas.push(pessoa);
        }

        continuar = confirm('Deseja continuar a cadastrar? Digite "ok" para sim e "cancelar" para "não".');
    }

    for(let item of pessoasEmpregadas){
        if(item.salario>2500){
            MaiorSalario.push(item);
        }else if(item.salario<2500){
            MenorSalario.push(item);
        }
    }

    if(MaiorSalario.length>0){
        console.log(`Pessoas cadastradas com salário superior a R$2500,00: `);
        console.log(MaiorSalario);
    }

    if(MenorSalario.length>0){
        console.log(`Pessoas cadastradas com o salário inferior a R$2500,00: `);
        console.log(MenorSalario);
    }

    if(pessoasDesempregadas.length>0){
        console.log(`Pessoas cadastradas sem emprego: `);
        console.log(pessoasDesempregadas);
    }
}


