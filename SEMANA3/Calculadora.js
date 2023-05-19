class Calculadora {
    constructor(){
        this.resultadoElement = document.getElementById("#resultado")
        this.numerosElement = document.querySelectorAll(".gray .led1")
        this.operadoresElement = document.querySelectorAll(".led")
        this.numero = ""
        this.operador = ""
        this.eventos()
    }

    eventos(){
        this.numerosElement.forEach((item) => {
            item.addEventListener("click", () =>{
                this.agregarnumeros(item.textContent);
            });
        });
    }

    agregarnumeros(textContent){
        this.numero = textContent
        return this.resultadoElement += this.numero;
    }

}

const cal = new Calculadora();

