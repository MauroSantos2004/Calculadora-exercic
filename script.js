function calculos(tipo, valor){
    if(tipo==='acao'){
        //Botão clear
        if(valor === 'c')
            //limpar visor
            document.getElementById('resultado').value =''

            //verificando se o valor é a ação das operações básicas
        else if(valor ==='+'|| valor==='-'||valor==='/'){
            document.getElementById('resultado').value += valor
            
        }
        else if(valor==='*'){ //Aqui basicamente iria ficar a estrelinha mas eu queria que ficasse o x
            document.getElementById('resultado').value += 'x'
        }

        if(valor==='='){
            var valor_operacoes = document.getElementById('resultado').value
            var valor_final = document.getElementById('resultado').value = eval(valor_operacoes)
        }


    }else if(tipo ==="valor"){ 
        document.getElementById('resultado').value += valor
    }
    
}