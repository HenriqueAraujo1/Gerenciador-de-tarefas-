function adicionarTarefa() {
    var novaTarefa = document.getElementById('inptg').value;
    
    if (novaTarefa !== '') {
        var novoItem = document.createElement('li');
        novoItem.textContent = novaTarefa;
        
        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('remover-btn');
        btnRemover.addEventListener('click', function() {
            this.parentNode.remove();
        });
        
        novoItem.appendChild(btnRemover);
        document.getElementById('listaTarefas').appendChild(novoItem);
        
        document.getElementById('inptg').value = '';
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

document.getElementById('btnAdicionar').addEventListener('click', adicionarTarefa);