const nomeProduto = document.querySelector('.nome__produto')
const precoProduto = document.querySelector('.preco__produto')
const infoProduto = document.querySelector('.info__produto')

const imagemProduto = document.querySelector('.imagem__produto')



async function chamarAPI(numeroProduto) {
    const resposta = await fetch(`https://dummyjson.com/products/${numeroProduto}`)
    if(resposta.status === 200) {
        const produtos = await resposta.json()
        return produtos
    }
}



const renderProduto = async (id) => {
    const produtos = await chamarAPI(id)

    nomeProduto.innerHTML = produtos.title
    precoProduto.innerHTML = `R$ ${produtos.price}`
    infoProduto.innerHTML = produtos.description

    imagemProduto.src = produtos['thumbnail']

}

renderProduto(1)
