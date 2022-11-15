// Declaracion de Clase, creacion de objetos y array de Pokemon

Document.addEventListener('DOMContentLoaded', () => {

    class Cerveza { constructor(id, nombre, type, precio , imagen, desc) {
            this.id = id
            this.nombre = nombre
            this.type = type
            this.precio = precio
            this.imagen = imagen
            this.desc = desc
                  }
    }

    const heineken = new Cerveza( "001", 'Heineken', 'No es artesanal', '$250' , '../Imagenes/203907.jpg', 'Productor: Heineken, Grado de alcohol: 5,3%, Corte: Malt Lager, Contenido neto: 710ml, Presentación: Lata.')
    const stellaartois = new Cerveza('002', 'Stella artois', 'No es artesanal', '$300', '../Imagenes/cerveza stella.jpg', 'Estilo de cerveza:European Pale Lager,Grado de alcohol: 5%, Tipo de envase:Lata, Formato de venta: Unidad, Unidades por pack: 1, Volumen de la unidad	269 mL')
    const corona = new Cerveza('003', 'Corona', 'Artesanal', '$400', '../Imagenes/204023 corona.jpg', 'Estilo de cerveza: American Adjunct Lager,Tipo de envase: Botell, Volumen de la unidad:330 mL, Color:Rubia, Graduación alcohólica: 4.5 %')
    const quilmes = new Cerveza('004', 'Quilmes', 'No es artesanal', '$200', '../Imagenes/cerveza quilmes.jpg', 'Estilo de cerveza	American Adjunct Lager, Tipo de envase:Lata, Volumen de la unidad: 473 mL,Color: Rubia, Graduación alcohólica: 4.9 %')
    const patagonia = new Cerveza('005', 'Patagonia', 'Artesanal', '$280', '../Imagenes/cerveza patagonia.jpg', 'Estilo de cerveza	Bohemian Pilsener, Tipo de envase:Lata, Volumen de la unidad: 473 mL, Color: Rubia, Graduación alcohólica: 5.2 %')
    const imperial = new Cerveza('006', 'Imperial', 'No es artesanal', '$200', '../Imagenes/cerveza imperial.jpg ','Tipo de envase:Lata, Formato de venta:Unidad, Volumen de la unidad: 710 mL')
    const andes = new Cerveza('007', 'Andes', 'Artesanal', '$290', '../Imagenes/cerveza andes.jpg', 'Estilo de cerveza:Golden,Tipo de envase: Lata,Formato de venta: Unidad, Volumen de la unidad:473Graduación alcohólica: 5.1 %')
    const brahama = new Cerveza('008', 'Brahama', 'No es artesanal', '$190', '../Imagenes/cerveza brahama.jpg', 'Estilo de cerveza: American Adjunct Lager, Tipo de envase:Lata, Formato de venta:Unidad, Volumen de la unidad: 473 mL, Graduación alcohólica: 4.8 %')

});