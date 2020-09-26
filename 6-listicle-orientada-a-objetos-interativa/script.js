// ADICIONAR EVENT LISTENERS
// CRIAR FUNÇÃO PARA AUMENTAR E DIMINUIR NÚMEROS
// ESTILIZAR


class Article {
  
  static uId = 1;

  constructor({ title, subtitle, content, img, social }) {
    // base
    this.article = this.createElement("article")
    this.article.classList.add("card", `article-${Article.uId}`)
    ++Article.uId;

    // main content
    this.title = this.createElement("h1", title);
    this.subtitle = this.createElement("h2", subtitle);
    this.contents = this.generateParagraphs(content);
    this.img = this.generateImage(img);

    // social block
    this.social = {
      block: this.createElement("div"),
      likes: this.generateInteraction(social.likes, "heart"),
      dislikes: this.generateInteraction(social.dislikes, "broken"),
      chosed: null
    }

    this.render();
  }

  createElement(type, content) {
    let el = document.createElement(type);
    if(content !== undefined) el.innerText = content;
    return el;
  }

  generateParagraphs(content) {
    return content.split(/\n/).map(paragraph => this.createElement("p", paragraph));
  }

  generateImage(img) {
    let el = this.createElement("img");
    el.src = img.src;
    if(img.title) {
      el.title = img.title;
      el.alt = img.title;
    }
    return el;
  }

  // div
    // div - listener
      // img
      // p
    // div - listener
      // img
      // p


  // event listener logic:
    // is someone chosed?
      // chosed.remove ->both
    // : is the same?
      // return
      // : chosed.add(this)


  // chosed logic:
    // add: (this.chosed.add())
      // chosed = this
      // +active class
      // +1 to text
    // remove: (this.chosed.remove())
      // chosed = null
      // -active class
      // -1 to text


  generateInteraction(count, className) {
    // create item
    let item = this.createElement("div")
    item.classList.add("interaction-element")
    
    // react button
    let button = this.createElement("button")
    button.classList.add(className)

    // event listener
    button.addEventListener("click", function(){
      this.classList.toggle("active")
    })

    // create paragraph
    let p = this.createElement("p", count);

    // appends
    item.appendChild(button)
    item.appendChild(p)
    return item;
  }


  render() {
    // main content
    this.article.appendChild(this.title);
    this.article.appendChild(this.subtitle);
    this.contents.forEach(p => this.article.appendChild(p))
    this.article.appendChild(this.img);

    // social
    this.social.block.classList.add("interaction-block")
    this.social.block.appendChild(this.social.likes)
    this.social.block.appendChild(this.social.dislikes)
    this.article.appendChild(this.social.block)

    // final append
    document.getElementById("content").appendChild(this.article);
  }
}

(async function() {
  const response = await fetch("./data.json")
  const data = await response.json()
  window.__articles = data.map(item => new Article(item))
}())
