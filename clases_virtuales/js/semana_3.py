class Empresa:          
    def _init_(self,id,des):
        self.id=id
        self.descripcion=des
    
    def _str_(self):
        return f"{self.descripcion}"
class Cargo:          
    def _init_(self,id,des):
        self.id=id
        self.descripcion=des
   
    def _str_(self):
        return f"cargo:{self.descripcion}"
class Empleado:
    def _init_(self,id,nombre,sueldo,car):
        self.id=id
        self.nombre=nombre
        self.sueldo=sueldo
        self.cargo=car
      
    def _str_(self):
         return f"{self.id} - {self.nombre} - {self.cargo.id} -{self.sueldo} "
class Administrativo(Empleado):
    def init(self, id,nombre,sueldo,car,medico):
        super._init_(id,nombre,sueldo,car)
        self.seguro_medico = medico
    def str(self):
        return f"{self.seguro_medico}"
class Obrero(Empleado):
    def init(self, familia):
        super._init_(id,nombre,sueldo,car)
        self.contrato_colectivo = familia

    def str(self):
        return f"{self.contrato_colectivo}"
class Sobretiempo:
    def _init_(self, id,empleado, fecha, h50, h100, valor):
        self.id=id
        self.empleado = empleado
        self.aaaamm = fecha
        self.h50 = h50
        self.h100 = h100
       
    def str(self):
        return f"{self.empleado} - {self.aaaamm} - {self.h50} - {self.h100} - {self.valor}"
class Nomina:
    def _init_(self, id, fecha, toting, totdesc, neto):
        self.id = id
        self.aaaamm = fecha
        self.toting = toting
        self.totdesc = totdesc
        self.neto = neto
        self.detalle=[]

    def _str_(self):
        return f"{self.id} - {self.aaaamm}"
    
    def calcular(self):
        det1 = Detalle(1,1,1,100,50,10)
        self.detalle.append(det1)
        det2 = Detalle(2,2,1,100,50,10)
        self.detalle.append(det2)

   
    def mostrar(self,nombreEmpresa):
        print(f"Empresa: {nombreEmpresa}")
        print(f"{self.id} - {self.aaaamm} - {self.toting} - {self.totdesc} - {self.neto}")
     
    def mostrar2(self,empresa):
        print(empresa.id,"-",empresa.descripcion)
        print(f"{self.id} - {self.aaaamm} - {self.toting} - {self.totdesc} - {self.neto}")
        print(self.detalle)

class Detalle:
    def _init_(self, id, empleado, cargo, sueldo, sobretiempo, iess):
        self.id = id
        self.empleado = empleado
        self.cargo = cargo
        self.sueldo = sueldo
        self.sobretiempo = sobretiempo
        self.iess = iess
        self.toting = 0
        self.totdesc = 0
        self.neto = 0

    def _str_(self):
        return f"{self.id} - {self.empleado} - {self.cargo} - {self.sueldo} - {self.sobretiempo} - {self.iess}"


# agregacion
car1 = Cargo(1,"Analista")
#print(car1.id,"-",car1.descripcion)
#print(car1._str_())
#print(car1)
# emp1 = Empleado(1,"Dan",1000,car1)
# print(emp1)
# asociacion
empr = Empresa(1,"SuperMaxi")

nom1 = Nomina(1,202305,1000,100,900)
# # composicion
nom1.calcular()
nom1.mostrar2(empr)