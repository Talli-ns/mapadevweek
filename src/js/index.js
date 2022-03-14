/*
quando clicar no pokemon da listagem temos que esconder o card aberto e mostrar o card correspondente ao que foi selecionado

ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar



adicionar a classe ativo no item da lista selecionado
*/ 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {

    //vamos trabalhar com o evento de clique feito pelo usuario na listagem de pokemons
    pokemon.addEventListener('click', () => {
    
        //remover a classe aberto só do cartão que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-'+idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca i pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartão mostrar
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})