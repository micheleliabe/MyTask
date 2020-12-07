//Constantes para guardar os inputs

const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

adicionaTarefasSalvas()



function criaTarefa(descricaoTarefa) {
    const div = criaItemNaLista()
    div.innerHTML = descricaoTarefa
    tarefas.appendChild(div)
    criaBotaoApagar(div)
    inputTarefa.value = ""
    salvarTarefas()

}

function criaItemNaLista() {
    const div = document.createElement('div')
    return div;
}


function criaBotaoApagar(div) {
    div.innerHTML += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.setAttribute('class', 'btn btn-outline-danger apagar')
    botaoApagar.setAttribute('type', 'button')
    div.setAttribute('class', 'span card-body p-2 text-primary ')
    botaoApagar.innerHTML = "Excluir"
    div.appendChild(botaoApagar)
}


//Adiciona uma nova tarefa na lista ao clicar no botão
btnTarefa.addEventListener('click', function () {

    if (!inputTarefa.value == "") {
        criaTarefa(inputTarefa.value)
    } else {
        //Chama um modal do SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Você não adicionou  uma descrição!',
            footer: 'Preencha a descrição e tente novamente'
        })
    }
})

//Adiciona uma nova tarefa ao teclar ENTER
inputTarefa.addEventListener('keypress', function (e) {
    console.log(e)
    if (e.keyCode === 13 && inputTarefa.value !== "") {
        criaTarefa(inputTarefa.value)
        inputTarefa.focus()
    }
})

//Apaga um elemento da lista
document.addEventListener('click', function (e) {
    const elemento = e.target
    console.log(elemento)

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove()

        //Chama um modal do SweetAlert
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarefa removida com sucesso',
            showConfirmButton: false,
            timer: 1500
        })
    }

    salvarTarefas()

})

//Seleciona todos os itens do tipo span e salva a descrição no armazenamento local
function salvarTarefas() {
    const listaTarefas = tarefas.querySelectorAll('div')
    const ArrayTarefas = []

    for (let tarefa of listaTarefas) {
        let tarefaTexto = tarefa.innerText.replace('Excluir', '').trim()
        ArrayTarefas.push(tarefaTexto)

    }
    console.log(ArrayTarefas)
    const tarefasJSON = JSON.stringify(ArrayTarefas)
    console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON)

}

//Busca as tarefas salvas no armazenamento local e popula a lista
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas)
    //Loop funciona local
    for (let tarefa of listadeTarefas) {
        criaTarefa(tarefa)
    }
}