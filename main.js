$(document).ready(function(){

    $('#tabelasTarefas').on('click' , '.close' , function() {
        $(this).parent().parent().remove();
        $(this).parent().parent().prev().remove();
    })


    $('#enviar').on('click', function(e) {
        e.preventDefault();
        const valorTexto = $('#task').val();
        const novoItem = $('<tr></tr>');
        $(`
        <td class="celula"><p>${valorTexto}</p></td>
        `).appendTo(novoItem);
        $(`<td><button class="close">X</button></td>`).appendTo(novoItem);
        $(novoItem).fadeIn(3000);
        $(novoItem).appendTo('#tabelasTarefas');
        $('#task').val('');
    })
});

