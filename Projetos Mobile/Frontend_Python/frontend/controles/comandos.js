$(document).ready(function() {
    $('.arquivo_json').click(function() {
        // Desativar todos os outros itens
        $('.arquivo_json').not(this).removeClass('active');
        
        // Alternar a classe .active no item clicado
        $(this).toggleClass('active');
      });
});