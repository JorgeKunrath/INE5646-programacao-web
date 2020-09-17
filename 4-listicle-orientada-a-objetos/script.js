// Modele os componentes da Listicle da tarefa 1 como classes JS (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes).

// Vocês possuem liberdade sobre o que e como modelar. Recomenda-se utilizar a noção de modelagem baseada em componentes, em que cada elemento da interface com o usuário pode ser modelado como um objeto com uma referência para o container (elemento HTML) no qual ele é renderizado.


class Article {
  
  static uId = 1;

  constructor({ title, subtitle, content, img }) {
    this.title = this.createElement("h1", title);
    this.subtitle = this.createElement("h2", subtitle);
    this.contents = this.generateContent(content);
    this.img = this.generateImage(img);
    this.render();
    ++Article.uId;
  }

  createElement(type, content) {
    let el = document.createElement(type);
    el.classList.add(`article-${type}-${Article.uId}`)
    if(content) el.innerText = content;
    return el;
  }

  generateContent(content) {
    return content.split(/\n/).map(paragraph => this.createElement("p", paragraph));
  }

  generateImage(img) {
    let el = this.createElement("img");
    el.src = img.src;
    el.title = img.title;
    el.alt = img.title;
    return el;
  }

  render() {
    this.article = this.createElement("article")
    this.article.classList.add("card")
    this.article.appendChild(this.title);
    this.article.appendChild(this.subtitle);
    this.contents.forEach(p => this.article.appendChild(p))
    this.article.appendChild(this.img);
    document.getElementsByClassName("main-content")[0].appendChild(this.article);
  }
}

(async function() {
  const response = await fetch("./data.json")
  const data = await response.json()
  window.__articles = data.map(item => new Article(item))
}())
