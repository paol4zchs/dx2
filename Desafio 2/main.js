function MelhorAluno() {
    const numeroAlunos = parseInt(document.getElementById("numeroAlunos").value);
    const listaDeAlunos = [];
    let i = 0;
    
    while (i < numeroAlunos) {
    const nome = prompt(`Nome do aluno ${i + 1}:`);
    const nota = parseFloat(prompt(`Nota do aluno ${i + 1}:`));
    listaDeAlunos.push({ nome, nota });
    i++;
    }
    
    let melhorAluno = listaDeAlunos[0];
    i = 1;
    
    while (i < listaDeAlunos.length) {
    const aluno = listaDeAlunos[i];
    if (aluno.nota > melhorAluno.nota) {
    melhorAluno = aluno;
    }
    i++;
    }
    
    document.getElementById("resultado").textContent = `O melhor aluno é: ${melhorAluno.nome}`;
    }
    
    