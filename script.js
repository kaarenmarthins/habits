// nome de variavel não pode começar com número e não pode ter espaço, então usa o camelcase (começa com minuscula e quando for espaço coloca letra maiscula)

const form = document.querySelector("#form-habits") // Criei a variavel e um formulario dentro da variavel

const nlwSetup = new NLWSetup(form) // outra variavel que inicia a biblioteca.

const button = document.querySelector("header button")

button.addEventListener("click", add) // essa função vai adicionar um ouvindo para o evento que vai ser um click, e ai depois tenho que ter uma função que vai ser chamada quando ouvir o click

form.addEventListener("change", save) // evento agora é uma mudança que vai salvar os dados que eu incluir sempre que tiver uma mudança no formulário.

//função serve para agrupar códigos e ser usada em momentos, no momento que estiver dentro dela.
function add() {
  //declarando a variavel para o dia que sera adicionado

  const today = new Date().toLocaleDateString("pt-bt").slice(0, -5) // slice serve pra cortar informações do dado quando é string.

  const dayExists = nlwSetup.dayExists(today) // variavel que vai verificar se o dia que eu coloquei já foi adicionado

  // essa condição é para que verificação da data. Se a data não existir ainda, ele vai direto para o proximo comando pq o if vai ser falso. Mas se a data existir, o if passa ser verdadeiro, e então roda a condição que estiver dentro dele.

  if (dayExists) {
    alert("Dia já incluso!")
    return // quando a função encontrar essa palavra ele vai parar na mesma hora e não rodar o comando seguinte.
  }

  nlwSetup.addDay(today) // add.day adiciona um dia nos registros e recarrega o layout
}

function save() {
  // localstorage, é um objeto que guarda as informações do browser. preciso usar o setItem e colocar entre ('uma chave, valor que quero guardar')
  //quando eu clicar na atividade, o data vai guardar pra mim qual foi a atividade e o dia que eu selecionei, só que ele precisa estar em texto e não em objeto. para isso uso o stringfy e coloco dentro dele o objeto (nlwSetup.data).

  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//Array é composto de muito valores, uma estrutura que escreve com [] e dentro entra sequencia de vários dados.Um armario onde coloco minhas caixas.

//exercise: ["01-01", "01-02", "01-05"],
//water: ["01-05", "01-07", "01-09"],
//food: ["01-01", "01-04", "01-07"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //Quando precisar pegar um texto e transformar em objetodo uso o parse.
nlwSetup.setData(data) //Dentro do objeto que tenho a biblioteca e sinalizo o outro objeto dentro dele.
nlwSetup.load() //carrega as informações
