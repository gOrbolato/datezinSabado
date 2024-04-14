function fuja(){
    var botaoNao = document.getElementById('nao');

    var alturaPainel = window.innerHeight;
    var larguraPainel = window.innerWidth;

    var maxY = alturaPainel - botaoNao.offsetHeight;
    var maxX = larguraPainel - botaoNao.offsetWidth;
    
    var aleatorioY = Math.floor(Math.random() * maxY);
    var aleatorioX = Math.floor(Math.random() * maxX);

    botaoNao.style.top = aleatorioY + 'px';
    botaoNao.style.left = aleatorioX + 'px';
    
}