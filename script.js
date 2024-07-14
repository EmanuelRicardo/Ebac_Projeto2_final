var nome_contato = window.document.getElementById ('nome_contato')
var numero_contato = window.document.getElementById ('numero_contato')
var linhas = '' 
var escrever_total_contatos = window.document.getElementById ('total_contatos_add')
var contador_de_contatos = 0




function Add_numero(event){
    event.preventDefault();
    if (nome_contato.value.length == 0 || numero_contato.value.length == 0){
        window.alert ("Tá faltando informações, verifique o número e nome e tente novamente")
    } else{
        var linha = '<tr>'
        linha += `<td>${nome_contato.value}</td>`
        linha += `<td>${numero_contato.value}</td>`
        linha += `</tr>`
        linhas += linha
        contador_de_contatos += 1
        escrever_total_contatos.innerHTML = contador_de_contatos
    }
    

    var corpo_tabela = window.document.getElementById ('corpo_tabela')
    corpo_tabela.innerHTML = linhas
    
    nome_contato.value = ''
    numero_contato.value = ''
}

