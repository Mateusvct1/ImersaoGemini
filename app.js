function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o termo de pesquisa inserido pelo usuário
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
         // Exibe uma mensagem caso o campo esteja vazio
        section.innerHTML = "<p>Digite algo para pesquisar</p>"
        return
    }
    // Converte o termo de pesquisa para letras minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    for (let dado of dados) {
        // Converte o título, descrição e tags do objeto atual para minúsculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // Verifica se o termo de pesquisa está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria o HTML para exibir um resultado da pesquisa
            resultados += `
            
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
        // Se nenhum resultado foi encontrado até o momento, exibe uma mensagem
        if (!resultados) {
            resultados = "<p>Não encontramos resultados para a sua pesquisa.</p>"
        }
    }
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados
}

