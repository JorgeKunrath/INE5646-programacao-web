const data = [
  {
    title: `Ele tem um mecanismo de briga mais inteligente que o seu`,
    subtitle: `Praticamente um ninja`,
    content: `Quando a gente está discutindo com alguém é muito comum elevar a voz para se fazer ouvir, não é verdade? Bom, no mundo animal é preciso um pouco mais. Os gatos inflam os pelos e se curvam para parecerem maiores e dessa forma, seu inimigo deve temê-lo e fugir.

    Os gatos criados em casa fazem isso mesmo quando não há perigo iminente, pelo menos não para nós. Ao ouvir um barulho diferente, ao ver algo fora do contexto do seu cotidiano, é provável que façam esse movimento. Afinal, é melhor prevenir do que ser surpreendido, não é verdade?`,
    img: {
      title: "Fight Cat!",
      src: "./images/fight.gif"
    }
  },
  {
    title: `Ele poderia ser um agente da CIA`,
    subtitle: `Um bem fofinho :3`,
    content: `Se você acha que os gatos escondem suas fezes porque são muito limpinhos, você está certo. No entanto, há mais por trás dessa ação. Eles enterram suas fezes para não serem percebidos pelos seus inimigos naturais e também para que sua presa não seja capaz de perceber sua presença.

    Isso é algo tão nato nos felinos, que assim que começam a andar já buscam a caixinha de areia e quando estão na natureza, buscam a terra mesmo. Fala a verdade, dessa você não sabia, não é?`,
    img: {
      title: "Gatos da Cia",
      src: "./images/cia.gif"
    }
  },
  {
    title: `Ele é um saltador nato`,
    subtitle: `Quase sempre...`,
    content: `Os felinos são saltadores natos, podendo alcançar até cinco vezes a sua altura. É claro que às vezes pode acontecer uma pequena falha técnica, mas quem nunca?
    Os gatos têm 30 vértebras, enquanto os humanos têm 24. Seus ouvidos têm a capacidade de dizer ao corpo onde ele está em relação ao chão, mesmo quando está de cabeça para baixo. Isso também é um facilitador nas descidas, proporcionando que ele caia sempre de pé.
    
    Mas atenção, mesmo assim é preciso ter cuidado: gatos não têm 7 vidas e podem se machucar seriamente nas quedas.`,
    img: {
      title: "Gato saltando banheira",
      src: "./images/jump.gif"
    }
  },
]


// big loop
data.map(createCard)


// main function
function createCard(item) {

  // desestrutura e armazena em constantes
  const { title, subtitle, content, img } = item

  // CREATE ELEMENTS
    // card
    const Article = document.createElement("ARTICLE")
    Article.classList.add("card")

    // title
    const Title = document.createElement("H1")
    Title.innerText = title
    Article.appendChild(Title)

    // subtitle
    const Subtitle = document.createElement("H2")
    Subtitle.innerText = subtitle
    Article.appendChild(Subtitle)

    // content
    const Content = document.createElement("P")
    Content.innerText = content
    Article.appendChild(Content)

    // img
    const Img = document.createElement("IMG")
    Img.src = img.src
    Img.title = img.title
    Img.alt = img.title
    Article.appendChild(Img)

  document.getElementsByClassName("main-content")[0].appendChild(Article)
}