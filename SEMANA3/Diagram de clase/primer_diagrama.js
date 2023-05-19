class Empleados{
    constructor(id, nombre, sueldo, cargo, fec_ing){
        this.id = id
        this.nombre = nombre
        this.sueldo = sueldo
        this.cargo = cargo
        this.fec_ing = fec_ing
    }
   toString(){
    return `${this.id}-${this.nombre}-${this.sueldo}`;
   }
}

class Administrativo extends Empleados{
    constructor(seguro_medico){
        super(id, nombre, sueldo, cargo, fec_ing)
        this.seguro_medico = seguro_medico
    }
    toString(){
        return `${super.toString()} (${this.seguro_medico})`
    }
}

class Obrero extends Empleados{
    constructor(contrato_colectivo){
        super(d, nombre, sueldo, cargo, fec_ing)
        this.contrato_colectivo
    }

    toString(){
        return `${super.toString()} (${this.contrato_colectivo})`
    }
}


class Cargo{
    constructor(id, descripcion){
        this.id = id
        this.descripcion = descripcion
    }
    toString(){
        return `Cargo: ${this.id}- ${this.descripcion}`;
    }
}

class Sobretiempo{
    constructor(id, empleado, aaammm, h50, h100){
        this.id = id
        this.empleado = empleado
        this.fecha = aaammm
        this.h50 = h50
        this.h100 = h100
    }
}

class Detalle {
    constructor(id, empleado, sueldo, toting, totdes, iess, neto){
        this.id = id
        this.empleado = empleado
        this.sueldo = sueldo
        this.toting = toting
        this.totdes = totdes
        this.iess = iess
        this.neto = neto
    }

}

class Nomina{
    constructor(id, nomina, fecha, aaammm, toting, totdes, neto){
        this.id = id
        this.nomina = nomina
        this.fecha = fecha
        this.aaammm = aaammm 
        this.toting = toting
        this.totdes = totdes
        this.neto = neto
    }
}

const car1 = new Cargo(1, "Analista")
const car2 = new Cargo(2, "Programador")
console.log(`car=1, ${car1}`)
console.log(`car=2, ${car2}`)