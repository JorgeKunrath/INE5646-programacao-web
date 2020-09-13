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