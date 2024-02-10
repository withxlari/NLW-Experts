const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação de alto nível.",
        "Uma linguagem de marcação para criar páginas web.",
        "Um sistema operacional.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variável myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o resultado de 10 + '10' em JavaScript?",
      respostas: [
        "20",
        "1010",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID.",
        "Seleciona um elemento pelo seu nome.",
        "Seleciona um elemento usando um seletor CSS.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas: [
        "Adiciona um evento a um elemento HTML.",
        "Remove um evento de um elemento HTML.",
        "Cria um novo elemento HTML.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "Não há diferença, ambos comparam os valores das variáveis.",
        "'===' compara apenas os valores das variáveis, enquanto '==' compara os valores e os tipos de dados.",
        "'===' compara apenas os tipos de dados das variáveis, enquanto '==' compara os valores das variáveis.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '2 + 2 + '2'' em JavaScript?",
      respostas: [
        "'42'",
        "Erro",
        "6",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'toFixed()' faz em JavaScript?",
      respostas: [
        "Arredonda um número para um número específico de casas decimais.",
        "Remove todas as casas decimais de um número.",
        "Retorna a parte inteira de um número.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'push()' em JavaScript?",
      respostas: [
        "Adiciona elementos ao início de um array.",
        "Adiciona elementos ao final de um array.",
        "Remove o último elemento de um array.",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }