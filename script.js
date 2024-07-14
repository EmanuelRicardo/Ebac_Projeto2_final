var nome_contato = window.document.getElementById ('nome_contato')
var numero_contato = window.document.getElementById ('numero_contato')
var linhas = '' 

function Add_numero(event){
    event.preventDefault();
    var linha = '<tr>'
    linha += `<td>${nome_contato.value}</td>`
    linha += `<td>${numero_contato.value}</td>`
    linha += `</tr>`

    linhas += linha

    var corpo_tabela = window.document.getElementById ('corpo_tabela')
    corpo_tabela.innerHTML = linhas
}