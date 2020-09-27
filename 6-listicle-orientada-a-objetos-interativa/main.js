import Article from "./Components/Article.js"

(async function() {
  const response = await fetch("./data.json")
  const data = await response.json()
  window.__articles = data.map(item => new Article(item))
}())