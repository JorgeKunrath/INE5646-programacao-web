    // VoteButton
    // VoteCount
  // VoteItem
// VoteBlock


class VoteButton {
  constructor(className) {
    return this.render(className);
  }

  render(className) {
    let button = document.createElement("button")
    button.classList.add(className)
    return button
  }
}

class VoteCount {
  constructor(count){
    return this.render(count)
  }

  render(count) {
    let el = document.createElement("p")
    el.innerText = count
    return el
  }
}

class VoteItem {
  constructor(className, count) {
    return this.render(className, count)
  }

  render(className, count) {
    let el = document.createElement("div")
    el.classList.add("interaction-element")

    let button = new VoteButton(className)
    let counter = new VoteCount(count)

    el.appendChild(button)
    el.appendChild(counter)

    return el
  }
}

export default class VoteBlock {
  constructor({ likes, dislikes }) {
    this.likes = new VoteItem("like", likes)
    this.dislikes = new VoteItem("dislike", dislikes)

    this.likesButton = this.likes.childNodes[0]
    this.dislikesButton = this.dislikes.childNodes[0]
    this.likesCounter = this.likes.childNodes[1]
    this.dislikesCounter = this.dislikes.childNodes[1]

    this.oldState = null
    this.state = null

    this.createEvents()


    return this.render()
  }

  createEvents() {
    let likesButton = this.likes.childNodes[0]
    likesButton.addEventListener("click", this.setState.bind(this))

    let dislikesButton = this.dislikes.childNodes[0]
    dislikesButton.addEventListener("click", this.setState.bind(this))
  }

  setState(e) {
    this.oldState = this.state

    let current = e.target.classList[0]
    this.state === current ? this.state = null : this.state = current;

    this.updateState();
  }

  updateState() {
    // eu acho q esse pedaço de código tá bem tosco, mas foi onde consegui chegar
    // nunca mais reclamo de react na minha vida, eu passei a madrugada toda fazendo isso...

    // se tinha algo já marcado, reverte
    if(this.oldState === "like") {
      this.likesButton.classList.remove("active")
      this.likesCounter.innerText = +this.likesCounter.innerText - 1
    }
    if(this.oldState === "dislike") {
      this.dislikesButton.classList.remove("active")
      this.dislikesCounter.innerText = +this.dislikesCounter.innerText - 1
    }

    // se tiver um novo estado, define
    if(this.state === "like") {
      this.likesButton.classList.add("active")
      this.likesCounter.innerText = +this.likesCounter.innerText + 1
    }
    if(this.state === "dislike") {
      this.dislikesButton.classList.add("active")
      this.dislikesCounter.innerText = +this.dislikesCounter.innerText + 1
    }
  }

  render() {
    let block = document.createElement("div")
    block.classList.add("interaction-block")

    block.appendChild(this.likes)
    block.appendChild(this.dislikes)

    return block
  }
}