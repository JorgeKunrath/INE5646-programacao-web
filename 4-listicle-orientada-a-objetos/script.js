// Modele os componentes da Listicle da tarefa 1 como classes JS (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes).

// Vocês possuem liberdade sobre o que e como modelar. Recomenda-se utilizar a noção de modelagem baseada em componentes, em que cada elemento da interface com o usuário pode ser modelado como um objeto com uma referência para o container (elemento HTML) no qual ele é renderizado.

/*
semi-pseudo código
// --------
Classe:

class Article
  constructor
    this.nanan = nanan
    h1
    h2
    p
    img {}


  // não faço ideia de como rodar essas coisas... pq classes ???
  createElement(el)

  addContent()

  addClass()

  // onde vai isso?......
  append child()



// --------
Chamada:

json.forEach( data => new Article(data) )
ou
for(let i = 0; i < json.length; i++) {
  window['article' + i] = new Article(json[i])
})


*/ 



(async function() {
  const response = await fetch("./data.json")
  const data = await response.json()
  await data.forEach(createCard)
}())

function createCard(item) {

  // desestrutura e armazena em constantes
  const { title, subtitle, content, img } = item

  // CREATE ELEMENTS
    // card
    const Article = document.createElement("article")
    Article.classList.add("card")

    // title
    const Title = document.createElement("h1")
    Title.innerText = title
    Article.appendChild(Title)

    // subtitle
    const Subtitle = document.createElement("h2")
    Subtitle.innerText = subtitle
    Article.appendChild(Subtitle)

    // content
    content.split(/\n/).forEach(paragraph => {
      const Content = document.createElement("p")
      Content.innerText = paragraph
      Article.appendChild(Content)
    });

    // img
    const Img = document.createElement("img")
    Img.src = img.src
    Img.title = img.title
    Img.alt = img.title
    Article.appendChild(Img)

  document.getElementsByClassName("main-content")[0].appendChild(Article)
}