
function seleccionarOpcion(opcion) {
    if (opcion == 0) {
        class Segundos {
            Horas_segundos(horas) {
                return horas * 3600;
            }
            Minutos_segundos(minutos) {
                return minutos * 60;
            }
            total_segundos(horas_seg, minutos_seg, segundos) {
                return horas_seg + minutos_seg + segundos;
            }
        }

        let segundos = new Segundos()

        let horas = 0;

        while (horas < 1 || horas > 24) {
            horas = parseFloat(prompt("Ingrese la hora:"));

            while (isNaN(horas) || horas < 1 || horas > 24) {
                if (isNaN(horas)) {
                    console.log("Ingrese solo números");
                } else {
                    console.log("El valor debe estar entre 1 y 24.");
                }
                horas = parseFloat(prompt("Ingrese la hora:"));
            }

            horas_seg = segundos.Horas_segundos(horas);
        }


        let minutos = -1;
        while (minutos < 0) {
            minutos = prompt("Ingrese los minutos: ")
            while (isNaN(minutos) || minutos < 0) {
                if (isNaN(minutos)) {
                    console.log("Ingrese solo números");
                } else {
                    console.log("El valor debe ser mayor o igual a 0");
                }
                minutos = prompt("Ingrese los minutos: ")
            }
            minutos_seg = segundos.Minutos_segundos(minutos);
        }

        let sg = -1;
        while (sg < 0) {
            sg = prompt("Ingrese los segundos: ");
            while (isNaN(sg) || sg < 0) {
                if (isNaN(sg)) {
                    console.log("Ingrese solo números");
                } else {
                    console.log("El valor debe ser mayor o igual a 0");
                }
                sg = prompt("Ingrese los segundos: ");
            }
            total_segundo = segundos.total_segundos(horas_seg, minutos_seg, sg);
        }
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `El total de segundos son: ${total_segundo}`;

    } else if (opcion == 1) {
        class Area {
            constructor() {
                this.pi = 3.1416;
            }
            area(radio) {
                return this.pi * radio ** 2;
            }

            longitud(radio) {
                return 2 * this.pi * radio;
            }
        }

        const area = new Area();
        let radio = parseFloat(prompt("Ingrese el radio del circulo: "))
        let longitud = area.longitud(radio)
        let A = area.area(radio)
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `El ÁREA ES DE ${A} Y LA LONGITUD DEL CÍRCULO ES DE ${longitud}`;

    } else if (opcion == 2) {
        class Persona {

            constructor(nombreH, nombreM) {
                this.total = nombreH + nombreM;
            }
            Porc_H(hombre) {
                return (hombre / this.total) * 100;

            }
            Porc_M(mujer) {
                return (mujer / this.total) * 100;
            }
        }

        let nombreH = parseInt(prompt("Ingrese la cantidad de hombres en su curso: "))
        let nombreM = parseInt(prompt("Ingrese la cantidad de mujeres en su curso: "))
        const persona = new Persona(nombreH, nombreM);
        let Hombres = persona.Porc_H(nombreH);
        let Mujeres = persona.Porc_M(nombreM);
        let resultadoElement = document.getElementById("resultado");
        resultadoElement.innerHTML = `El poorcentaje de hombres es de ${Hombres} y mujeres es de ${Mujeres}`


    } else if (opcion == 3) {
        class Cuestionario {
            constructor(cantidad, Actividad) {
                this.cantidad = cantidad;
                this.Actividad = Actividad;
                this.A = 5;
                this.B = 8;
                this.C = 6;
            }

            horas() {
                switch (this.Actividad) {
                    case 'A':
                        return (this.A / 60) * this.cantidad;
                    case 'B':
                        return (this.B / 60) * this.cantidad;
                    case 'C':
                        return (this.C / 60) * this.cantidad;
                    default:
                        return 0;
                }
            }

            minutos() {
                switch (this.Actividad) {
                    case 'A':
                        return this.A * this.cantidad;
                    case 'B':
                        return this.B * this.cantidad;
                    case 'C':
                        return this.C * this.cantidad;
                    default:
                        return 0;
                }
            }
        }

        let resultadoElement = document.getElementById("resultado");

        let Actividad = ''
        let cantidad;

        while (Actividad !== 'A' && Actividad !== 'a' && Actividad !== 'b' && Actividad !== 'B' && Actividad !== 'C' && Actividad !== 'c') {
            Actividad = prompt("Cual cuestionario desea realizar A, B o C (o presione 'Cancelar' para terminar): ");

        }


        let cuestionarioA;
        let cuestionarioB;
        let cuestionarioC;

        if (Actividad == 'A' || Actividad == 'a') {
            cantidad = parseInt(prompt("Cuantos exámenes van a ingresar: "));
            cuestionarioA = new Cuestionario(cantidad, Actividad);
            resultadoElement.innerHTML = `Para el cuestonario ${Actividad} el tiempo en hora fue de ${cuestionarioA.horas()} y minutos fue de ${cuestionarioA.minutos()}`

        } else if (Actividad == 'B' || Actividad == 'b') {
            cantidad = parseInt(prompt("Cuantos exámenes van a ingresar: "));
            cuestionarioB = new Cuestionario(cantidad, Actividad);
            resultadoElement.innerHTML = `Para el cuestonario ${Actividad} el tiempo en hora fue de ${cuestionarioB.horas()} y minutos fue de ${cuestionarioB.minutos()}`

        } else if (Actividad == 'C' || Actividad == 'c') {
            cantidad = parseInt(prompt("Cuantos exámenes van a ingresar: "));
            cuestionarioC = new Cuestionario(cantidad, Actividad);
            resultadoElement.innerHTML = `Para el cuestonario ${Actividad} el tiempo en hora fue de ${cuestionarioC.horas()} y minutos fue de ${cuestionarioC.minutos()}`

        }
    }else if(opcion == 4){
        class Compra{
            constructor(){
                this.descuento=0.15
            }
            descuent(dinero){
                return dinero - (dinero * this.descuento);
            }
        }
        
        let resultadoElement = document.getElementById("resultado")
        let cantidad_dinero = parseFloat(prompt("Digite el precio a pagar:  "))
        const compra = new Compra()
        total = compra.descuent(cantidad_dinero)
        resultadoElement.innerHTML = `El precio a pagar es de ${total}`
    }else if(opcion == 5){
        class Notas{
            constructor(parcial1, parcial2,parcial3, trab_grupal, examenfinal){
                this.parcial1 = parcial1;
                this.parcial2 = parcial2;
                this.parcial3 = parcial3
                this.trab_grupal = trab_grupal;
                this.examenfinal = examenfinal;
                this.promedio3 = 0.55
                this.examenfin = 0.30
                this.grupal = 0.15
            }
            Promedio(){
                return ((this.parcial1 + this.parcial2 + this.parcial3)/3)*this.promedio3
            }
            examen(){
                return this.examenfinal*this.examenfin 
            }

            Trabajo(){
                return this.grupal * this.trab_grupal
            }

            Calificacion(){
                return this.Promedio() + this.examen() + this.Trabajo()
            }



        }

        let parcial1 = parseFloat(prompt("Ingrese la calificacion del parcial 1: "))
        let parcial2 = parseFloat(prompt("Ingrese la calificacion del parcial 2: "))
        let parcial3 = parseFloat(prompt("Ingrese la calificacion del parcial 3: "))
        let trab_grupal = parseFloat(prompt("Ingrese la calificacion del trabajo grupal: "))
        let examen = parseFloat(prompt("Ingrese la calificacion del examen final: "))
    
        let notas = new Notas(parcial1, parcial2, parcial3, trab_grupal, examen)

        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `La calificacion final es de: ${notas.Calificacion()}`
    }else if(opcion == 6){
        class ParImpar{
            constructor(entero){
                this.entero = entero % 2

            }
            Par(){
                if(this.entero == 0){
                    return true
                }else{
                    this.Impar()
                }
            }
            Impar(){
                return false
            }
        }

        let entero = parseInt(prompt("Ingrese un numero entero: "));
        const parimpar = new ParImpar(entero);
        let resultadoElement = document.getElementById("resultado");

        if(parimpar.Par()){
            resultadoElement.innerHTML = `El numero ${entero} es par`
        }else{
            resultadoElement.innerHTML = `El numero ${entero} es impar`
        }
    }else if(opcion==7){
        class Parcial{
            constructor(){
                this.lista = []
            }
            Datos(){
                let i =1;
                while(i<=3){
                    let datos = parseFloat(prompt(`Ingrese las ${i} calificaciones: `))
                    i++;
                    this.lista.push(datos)
                }
                return this.Promedio();
            }
            Promedio(){
                let acum_pro = 0;
                for(let i = 0;i < this.lista.length ; i++){
                    acum_pro += this.lista[i]
                }
                return acum_pro / this.lista.length;
            }
            Aprueba(){
                if(this.Promedio() >= 70){
                    return true;
                }else{
                    return false;
                }
            }
        }

        const parcial = new Parcial();
        let resultadoElement = document.getElementById("resultado")
        if(parcial.Aprueba()){
            resultadoElement.innerHTML = `El alumno esta aprovado con: ${parcial.Datos()}`
        }else{
            resultadoElement.innerHTML = `El alumno esta desaprobado con: ${parcial.Datos()}`
        }
    }else if(opcion==8){
        class Almacen{
            descuento(){
                if(cantidad >100){
                    return cantidad - (cantidad * 0.20) 
                }else{
                    return cantidad
                }
            }
        }
        let almacen = new Almacen();
        let cantidad = parseInt(prompt("Ingrese la cantidad a pagar: "))
        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `El precio a pagar es de ${almacen.descuento(cantidad)}`
    }else if(opcion==9){
        class DosNumeros{
            datos(){
                let num1 = parseInt(prompt("Ingrese el primer numero: "))
                let num2 = parseInt(prompt("Ingrese el segundo numero: "))
                return this.condicion(num1,num2)
            }
            condicion(num1,num2){
                if(num1 == num2){
                    return this.Multiplicar(num1,num2)
                }else if(num1 > num2){
                    return this.Restar(num1,num2)
                }else{
                    return this.Sumar(num1,num2)
                }
            }
            Multiplicar(num1,num2){
                return num1 * num2;
            }
            Sumar(num1,num2){
                return num1 + num2;
            }
            Restar(num1,num2){
                return num1 - num2;
            }
        }
        const dosnumeros = new DosNumeros()
        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `El resultado es: ${dosnumeros.datos()}`
    }else if(opcion==10){
        class Mayorer3{
            constructor(){
                this.lista=[]
            }
            datos(){
                for(let i = 1; i<4;i++){
                    let num  = parseInt(prompt(`${i}.- Ingrese: `))
                    this.lista.push(num)
                }
                return this.condicion()
            }
            condicion(){
                let mayor = this.lista[0]
                for(let i=1; i < this.lista.length;i++)
                if(this.lista[i] > mayor){
                    mayor = this.lista[i]
                }
                return mayor;
            }
        }
        const mayor = new Mayorer3()
        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `El numero mayor es ${mayor.datos()}`
    }else if(opcion==11){
        class Manzanas{
            datos(){
                let precio = parseFloat(prompt("Ingrese el precio de la manzana: ")) 
                let num = parseFloat(prompt("Ingrese el kilo de la manzana: ")) 

                return this.condicion(num, precio)
            }
            condicion(num, precio){
                let descuento;
                if(num == 0 || num == 2){
                    descuento = 0*precio
                }else if(num == 2.01 || num == 5){
                    descuento = 0.10*precio
                }else if(num == 5.01 || num == 10){
                    descuento = 0.15*precio
                }else{
                    descuento = 0.20*precio
                }
                return this.tdescuento(descuento, precio)
            }
            tdescuento(descuento, precio){
                return precio -descuento;
            }
        }
        const manzana = new Manzanas()
        let resultadoElement = document.getElementById("resultado")
        resultadoElement.innerHTML = `El descuento es de ${manzana.datos()}`
    }

}



