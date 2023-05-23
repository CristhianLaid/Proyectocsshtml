class Producto:
    def __init__(self, nombre, tipo, cantidad_actual, cantidad_minima, precio_base):
        self.nombre = nombre
        self.tipo = tipo
        self.cantidad_actual = cantidad_actual
        self.cantidad_minima = cantidad_minima
        self.precio_base = precio_base

    def calcular_precio_final(self):
        return self.precio_base * (1 + self.iva)


class Papeleria(Producto):
    def __init__(self, nombre, tipo, cantidad_actual, cantidad_minima, precio_base):
        super().__init__(nombre, tipo, cantidad_actual, cantidad_minima, precio_base)
        self.iva = 0.16

  


class Supermercado(Producto):
    def __init__(self, nombre, tipo, cantidad_actual, cantidad_minima, precio_base):
        super().__init__(nombre, tipo, cantidad_actual, cantidad_minima, precio_base)
        self.iva = 0.04

   


class Drogueria(Producto):
    def __init__(self, nombre, tipo, cantidad_actual, cantidad_minima, precio_base):
        super().__init__(nombre, tipo, cantidad_actual, cantidad_minima, precio_base)
        self.iva = 0.12



class Tienda:
    def __init__(self):
        self.productos = []
        self.ventas = []

    def agregar_producto(self):
        n = input("Producto que desea agregar: ")
        b = input("Tipo de producto: ")
        c = int(input("Cantidad actual: "))
        d = int(input("Cantidad minima: "))
        j = float(input("Precio base: "))
        if b.lower() == "papeleria":
            producto = Papeleria(n, b, c, d, j)
        elif b.lower() == "supermercado":
            producto = Supermercado(n, b, c, d, j)
        elif b.lower() == "drogueria":
            producto = Drogueria(n, b, c, d, j)
        else:
            producto = Producto(n, b, c, d, j)
        self.agregar_producto1(producto)

    def agregar_producto1(self, producto):
        if not self.existe_producto(producto.nombre):
            self.productos.append(producto)
            print("Producto agregado exitosamente.")
        else:
            print("Ya existe un producto con ese nombre.")

    def visualizar_productos(self):
        if len(self.productos) == 0:
            print("No hay productos en la tienda.")
        else:
            print("Lista de productos:")
            for producto in self.productos:
                print(f"Nombre: {producto.nombre}")
                print(f"Tipo: {producto.tipo}")
                print(f"Cantidad actual: {producto.cantidad_actual}")
                print(
                    f"Cantidad mínima para abastecimiento: {producto.cantidad_minima}")
                print(
                    f"Precio base de venta por unidad: {producto.precio_base}")
                print("------------------------------")

    def vender_producto(self, nombre, cantidad):
        producto = self.obtener_producto(nombre)
        if producto:
            if producto.cantidad_actual >= cantidad:
                precio_final = producto.calcular_precio_final()
                total_venta = precio_final * cantidad
                producto.cantidad_actual -= cantidad
                self.ventas.append(total_venta)
                print(f"Venta realizada. Total a pagar: {total_venta}")
            else:
                print("No hay suficiente cantidad de ese producto en la tienda.")
        else:
            print("No existe un producto con ese nombre.")

    def abastecer_producto(self, nombre, cantidad):
        producto = self.obtener_producto(nombre)
        if producto:
            producto.cantidad_actual += cantidad
            print("Producto abastecido exitosamente.")
        else:
            print("No existe un producto con ese nombre.")

    def agregar_producto_nuevo(self):
        nombre = input("Producto que desea cambiar: ").lower()
        nuevo_nombre = input("Nombre del nuevo producto: ").lower()
        nuevo_tipo = input("Tipo de producto: ").lower()
        nueva_cantidad_minima = int(input("Cantidad minima: "))
        nuevo_precio_base = float(input("Precio base: "))
        self.actualizar_producto(
            nombre, nuevo_nombre, nuevo_tipo, nueva_cantidad_minima, nuevo_precio_base)

    def actualizar_producto(self, nombre, nuevo_nombre, nuevo_tipo, nueva_cantidad_minima, nuevo_precio_base):
        producto = self.obtener_producto(nombre)
        if producto:
            if not self.existe_producto(nuevo_nombre) or nombre == nuevo_nombre:
                producto.nombre = nuevo_nombre
                producto.tipo = nuevo_tipo
                producto.cantidad_minima = nueva_cantidad_minima
                producto.precio_base = nuevo_precio_base
                print("Producto cambiado exitosamente.")
            else:
                print("Ya existe un producto con ese nuevo nombre.")
        else:
            print("No existe un producto con ese nombre.")

    def obtener_producto(self, nombre):
        for producto in self.productos:
            if producto.nombre == nombre:
                return producto
        return None

    def existe_producto(self, nombre):
        for producto in self.productos:
            if producto.nombre == nombre:
                return True
        return False

    def calcular_estadisticas_ventas(self):
        if len(self.ventas) == 0:
            print("No hay ventas registradas.")
        else:
            total_ventas = sum(self.ventas)
            cantidad_ventas = len(self.ventas)
            precio_promedio = total_ventas / cantidad_ventas
            producto_mas_vendido = max(
                self.productos, key=lambda p: p.cantidad_actual)
            producto_menos_vendido = min(
                self.productos, key=lambda p: p.cantidad_actual)

            print(f"Producto más vendido: {producto_mas_vendido.nombre}")
            print(f"Producto menos vendido: {producto_menos_vendido.nombre}")
            print(
                f"Cantidad total de dinero obtenido por las ventas de la tienda: {total_ventas}")
            print(
                f"Cantidad de dinero promedio obtenido por unidad de producto vendida: {precio_promedio}")




def menu():
    # Ejemplo de uso
    tienda = Tienda()
    # Menu
    while True:
        print("1.- Agregar producto.")
        print("2.- Visualizar la información de los productos.")
        print("3.- Vender un producto.")
        print("4.- Abastecer la tienda con un producto.")
        print("5.- Cambiar un producto.")
        print("6.- Calcular estadísticas de ventas.")
        print("7.- Detalle")
        print("8.- Salir")
        option = int(input("Selecciona una opción: "))
        if option == 1:
            # Agregar productos
            tienda.agregar_producto()

        elif option == 2:
            # Visualizar productos
            tienda.visualizar_productos()
        elif option == 3:
            # Vender producto
            n = str(input("Producto que desea vender: ")).lower()
            c = int(input("Cantidad a vender: "))
            tienda.vender_producto(n, c)
        elif option == 4:
            # Abastecer producto
            n = input("Producto que desea abastecer: ").lower()
            c = int(input("Cantidad: "))
            tienda.abastecer_producto(n, c)
        elif option == 5:
            # Cambiar producto
            tienda.agregar_producto_nuevo()
        elif option == 6:
            # Calcular estadísticas de ventas
            tienda.calcular_estadisticas_ventas()
        elif option == 7:
            # Mostrar todos los detalles de un producto
            n = str(input("Producto del cual deseas ver los detalles: ")).lower()
            producto = tienda.obtener_producto(n)
            if producto:
                print(f"Detalles del producto '{producto.nombre}':")
                print(f"Tipo: {producto.tipo}")
                print(f"Cantidad actual: {producto.cantidad_actual}")
                print(f"Cantidad mínima para abastecimiento: {producto.cantidad_minima}")
                print(f"Precio base de venta por unidad: {producto.precio_base}")
                print(f"Precio final de venta por unidad: {producto.calcular_precio_final()}")
                print("------------------------------")
            else:
                print("No existe un producto con ese nombre.")
        elif option == 8:
            break
        else:
            print("Opción inválida. Inténtalo de nuevo.")


menu()
