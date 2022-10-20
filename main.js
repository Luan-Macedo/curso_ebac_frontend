$(document).ready(function() {

    $('form').on('submit', function(e){
        e.preventDefault();

        const addTarefa = $('#adicionar-tarefa').val();
        const novaTarefa = $('<li><a href=""></a></li>')

        $(`<li><a href="">${addTarefa}</a></li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        $('#adicionar-tarefa').val('');
        
        $(novaTarefa).click(function(e){
            e.preventDefault();
    
            $(this).css('text-decoration', 'line-through');
        })
    })

})