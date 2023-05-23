class Tienda:
    def __init__(self, ID, Nombre_tienda):
        self.id = ID
        self.Nombre_tienda = Nombre_tienda
        self.productos = []

    def agregar_producto(self):
        id = input("Ingrese el ID del producto: ")
        tipo = input("Ingrese el tipo del producto: ")
        nombre_producto = input("Ingrese el nombre del producto: ")
        cantidad_actual = int(input("Ingrese la cantidad actual del producto: "))
        cantidad_minima = int(input("Ingrese la cantidad mínima del producto: "))
        precioBase = float(input("Ingrese el precio base del producto: "))

        producto = Producto(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase)
        self.productos.append(producto)
        self.VenderProducto(producto)

    def Visualizar_producto(self):
        for producto in self.productos:
            print(producto.nombre_producto)

    def VenderProducto(self, producto):
        if producto in self.productos:
            self.productos.remove(producto)
            print("El producto ha sido eliminado")
        else:
            print("El producto no se ha encontrado")

    def AbastecerProducto(self):
        pass

    def CambiarProducto(self):
        pass

    def CalcularEstadisticaVentas(self):
        estd = EstadisticaVentas()

        
class Producto:
    def __init__(self, id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase):
        self.id = id
        self.tipo = tipo
        self.nombre_producto = nombre_producto
        self.cantidad_actual = cantidad_actual
        self.cantidad_minima = cantidad_minima
        self.precio_base = precioBase
    
    def calcular_precio_final(self):
        pass

class Papeleria(Producto):
    def __init__(self, id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase):
        super().__init__(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase)
        self.iva = 0.16

class Supermercado(Producto):
    def __init__(self, id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase):
        super().__init__(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase)
        self.iva = 0.04

class Drogueria(Producto):
    def __init__(self, id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase):
        super().__init__(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase)
        self.iva = 0.12

class EstadisticaVentas():
    def __init__(self):
        self.Detalle_venta = []
    
    def obtener_producto_mas_vendido(self):
        pass

    def obtener_producto_menos_vendido(self):
        pass
    
    def obtener_total_dinero_caja(self):
        pass

    def obtener_promedioProducto(self):
        pass

class DetalleVenta:
    def __init__(self, id, EstadisticaVentas, nombre_tienda, nombre_producto, precio_base, cantidad_minima, cantidad_bodega, tipo):
        self.id =id
        self.tienda = Tienda(ID, Nombre_tienda, Producto(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase))
        self.producto= []
        self.estadisticaVentas = EstadisticaVentas
        self.nombre_tienda = nombre_tienda
        self.nombre_producto = nombre_producto
        self.precio_base = precio_base
        self.cantidad_minima = cantidad_minima
        self.cantidad_bodega = cantidad_bodega
        self.tipo = tipo


class Nomina():
    def __init__(self, id, tipo, precio_base,cantidad_minima,cantidad_bodega):
        self.id = id
        self.detalle = []
        self.tipo = tipo
        self.precio_base = precio_base
        self.cantidad_minima = cantidad_minima
        self.cantidad_bodega = cantidad_bodega

    def calcular(self):
        detalleVenta = DetalleVenta(self, id, Tienda(ID, Nombre_tienda), Producto(id, tipo, nombre_producto, cantidad_actual, cantidad_minima, precioBase), EstadisticaVentas())
        self.detalle.append(detalleVenta)
    def mostrar():
        for detalleVenta in self.detalle:
            print(f"Tienda  ------------  {detalleVenta.tienda.Nombre_tienda}")


Nomina.mostrar()