Visitante (unauthenticated user)
Como Amazon, en tu sitio deberiamos poder ver todos los productos sin tener una cuenta. Todos los usuarios que visiten tu sitio deberia poder realizar las siguientes actividades:

Products
ver la lista de productos
filtrar productos por categoria
buscar productos por nombre
ver los detalles de un producto individual, incluyendo descripciones, fotos y reviews)
Carrito
Agregar items al carrito desde la lista de productos, o de la lista de detalles.
sacar items del carrito
editar la cantidad del productos que quiero en mi carrito.
estos datos deberian persistir, de tal forma de no perder el carrito ( pueden usar sessionStorage, localStorage, cookies o JWT para esto).
Si me logeo en mi cuenta, deberia poder seguir editante el carrito que ya tenia.
Checkout
comprar los productos en el carrito.
especificar la direccion de entrega de los productos, y mi direccion de email.
recibir una confirmacion en un mail despues del checkout
recibir una notificacion por email, cuando la orden sea despachada, y cuando sea entregada
Manejo de cuentas
poder crear cuentas, para poder realizar ciertas actividades, como dejar un review.
podernos logear con Google o Facebook.
Usuarios autenticados
Manejo de cuentas
ser capaz de desloggearme
ver mi lista de ordenes anteriores
ver los detalles de ordenes anteriore, incluyendo...
estatus de la orden
items con cantidad y subtotal
link a la página del producto original
dia en que fue creada
Reviews
ser capaz de dejar reviews a los productos (incluyendo 5-star rating)
Admin Users
Product Managment
crear y editar productos con nombre, descripción, precio y y una o mas fotos
crear categorias para items
agregar/crear categorias para items
los items deben tener multiples categorias
Manejar la disponibilidad del producto
Si un productos no esta disponible, los usuarios no lo van a ver mientras buscan, pero si pueden ver la página de los detalles si lo ordenaron previamente, o tienen el link
Manejo de ordenes
ver la lista de todas las ordenes
filtrar por status (creado, procesando, cancelado, completado)
ver mas detalles de una orden específica
Cambiar el status de la orden (creado, -> procesando, -> cancelado, -> completado)
Manejo de usuarios
Promover otros usuarios para que sean admin
borrar usuarios