function pesquisar (){
   let section = document.getElementById('resultados-pesquisa');

   let resultados = '' ;

   for (let dado of dados){

    resultados +=  `
    
    <div class="item-resultado">

                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
    
    `;
   }
   section.innerHTML = resultados
}

let dados = [
    {
        
            titulo: "Rayssa Leal",
            descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e inspira milhões de jovens.",
            link: "https://pt.wikipedia.org/wiki/Rayssa_Leal"
        
    },
    {
        titulo: "Aline Silva",
        descricao: "Aline Silva é uma judoca brasileira, campeã olímpica nos Jogos Olímpicos de 2016. Sua história de superação e determinação a tornou um ícone do esporte nacional.",
        link: "https://pt.wikipedia.org/wiki/Aline_Silva_(judoca)"
    },
    {
        
        titulo: "Letícia Bufoni",
        descricao: "Letícia Bufoni é uma skatista profissional brasileira, considerada uma das melhores do mundo em sua modalidade. Conhecida por sua técnica e criatividade, ela possui uma longa e bem-sucedida carreira.",
        link: "https://pt.wikipedia.org/wiki/Letícia_Bufoni"
    }
]