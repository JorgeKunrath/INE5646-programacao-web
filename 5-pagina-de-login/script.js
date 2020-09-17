const USERS = [
  {
    user: "fulano1",
    pass: "senha1",
    name: "Fulano 1"
  },
  {
    user: "fulano2",
    pass: "senha2",
    name: "Fulano 2"
  },
];

const POSTS = [
  {
    title: "item1",
    content: "conteúdo 1"
  },
  {
    title: "item2",
    content: "conteúdo 2"
  },
  {
    title: "item3",
    content: "conteúdo 3"
  },
]



function validaLogin() {
  console.log("validaaa");

  // pega campos
  const login = document.getElementById("login");
  const pass = document.getElementById("pass");

  // segurança mandou beijos
  console.log(login.value, pass.value);

  hideContent()

  let noUser = true;

  // checa se bate as infos
  USERS.forEach(item => {
    if(login.value === item.user && pass.value === item.pass) {
      console.log(item.name + " logou");
      showContent(item);
      noUser = false;
    }
  });

  if(noUser) {
    document.getElementById('content-area').innerHTML = "Login ou senha incorretos";
  }

  // limpa campos
  login.value = "";
  pass.value = "";
}


function showContent({ name }) {

  // bem vindo fulano
  let userName = document.createElement('h1');
  userName.innerHTML = name;

  // conteúdos
  let ul = document.createElement('ul');
  POSTS.forEach(el => {
    let li = document.createElement('li');
    li.innerText = el.content;
    ul.appendChild(li)
  })

  // limpa conteúdo
  let contentArea = document.getElementById('content-area');
  contentArea.innerHTML = "";
  contentArea.appendChild(userName);
  contentArea.appendChild(ul);
}

function hideContent() {
  document.getElementById('content-area').innerHTML = "";
}