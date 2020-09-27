import VoteBlock from "./Vote.js"

export default class Article {
  
  static uId = 1;

  constructor({ title, subtitle, content, img, social }) {
    // base
    this.article = this.createElement("article");
    this.article.classList.add("card", `article-${Article.uId}`);
    ++Article.uId;

    // main content
    this.title = this.createElement("h1", title);
    this.subtitle = this.createElement("h2", subtitle);
    this.contents = this.generateParagraphs(content);
    this.img = this.generateImage(img);

    // social block
    this.social = new VoteBlock(social)

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

  render() {
    // main content
    this.article.appendChild(this.title);
    this.article.appendChild(this.subtitle);
    this.contents.forEach(p => this.article.appendChild(p))
    this.article.appendChild(this.img);

    // social
    this.article.appendChild(this.social)

    // final append
    document.getElementById("content").appendChild(this.article);
  }
}