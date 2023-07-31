<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 7
      h1 Inventarios

      
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/tema7-01.png')})`}"
      ) 
      .bloque-texto-g__texto.p-4
        p.mb-0 Un inventario se refiere a los bienes y materiales que una empresa tiene para el objetivo final de reventa, producción o utilización.
          br
          br
          | La gestión de inventario es una disciplina principalmente sobre la especificación de la forma y la ubicación de los productos almacenados. Se requiere en diferentes ubicaciones dentro de una instalación o dentro de muchas ubicaciones de una red de suministro, para preceder al curso regular y planificado de producción y stock de materiales.

    Separador
    #t_7_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.1 Definiciones y aplicaciones

    p.mb-5(data-aos="fade-right") Revise las definiciones y aplicaciones utilizadas desde la gestión de inventarios:

    .row.justify-content-center.align-items-center.mb-4.py-4(style="background-color: #EAF7FF")
      .col-12.col-md-10.col-lg-10(data-aos="fade-down-left")
        ImagenInfografica.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema7/tema7-infografia.svg', alt='')
          .tarjeta.color-secundario.p-3(x="12%" y="35%" numero="1")
            .row.justify-content-center.align-items-center
              .col-12
                h4 Concepto de inventario
                p El concepto de inventario, existencias o trabajo en proceso se ha extendido de los sistemas de fabricación a las empresas de servicios y proyectos, generalizando la definición como "todo el trabajo dentro del proceso de producción - todo el trabajo que es o ha ocurrido antes de la finalización de la producción". 
          .tarjeta.color-secundario.p-3(x="48%" y="82%" numero="2")
            .row.justify-content-center.align-items-center
              .col-12
                h4 Inventario manufacturero 
                p En el contexto de un sistema de producción manufacturera, el inventario se refiere a todo el trabajo que se ha realizado: materias primas, productos parcialmente terminados, productos terminados antes de la venta y salida del sistema de fabricación.  
          .tarjeta.color-secundario.p-3(x="87%" y="35%" numero="3")
            .row.justify-content-center.align-items-center
              .col-12
                h4 Inventario de servicios 
                p En el contexto de los servicios, el inventario se refiere a todo el trabajo realizado antes de la venta, incluida la información de proceso parcial. En los servicios, el inventario toma la forma de datos, documentos y registros que respaldan el proceso de prestación de servicios. Este inventario de información es fundamental para garantizar la eficiencia y calidad en la entrega de servicios. 

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="fade-right")
      h2.mb-2 Términos especiales utilizados para tratar con la gestión de inventario:

    p.mb-5(data-aos="fade-right") Se utilizan los siguientes términos, que es de importancia manejarlos, y que hacen parte de la gestión de inventarios:

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-02.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 #[i Stock Keeping Unit] (SKU)
            p Los SKU son números de identificación internos, claros, asignados a cada uno de los productos y sus variantes. 
            p Los SKU pueden ser cualquier combinación de letras y números elegidos, siempre que el sistema sea coherente y se utilice para todos los productos del inventario. Un código SKU también puede denominarse código de producto, código de barras, número de pieza o MPN (Número de pieza del fabricante).
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-03.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Agotamiento
            p Significa quedarse sin inventario de un SKU.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-04.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Nuevas existencias antiguas
            p A veces abreviado como NOS, es un término que se utiliza en los negocios para referirse a la mercancía que se ofrece a la venta y que se fabricó hace mucho tiempo, pero que nunca se ha utilizado. 
            p Es posible que dicha mercancía ya no se produzca, y las nuevas existencias antiguas pueden representar la única fuente de mercado de un artículo en particular en el momento actual.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-05.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Contabilidad de inventarios
            p La contabilidad de inventarios se ocupa de valorar y contabilizar los cambios en los activos. El inventario incluye bienes en tres etapas de producción: bienes en bruto, bienes en proceso y bienes terminados. 
            p Un sistema de contabilidad de inventario precisa realizar un seguimiento de los cambios en el inventario en las tres etapas, y ajustar los valores de los activos y los costos en consecuencia.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-06.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Costos de inventario
            p Los costos de inventario son los costos asociados con la adquisición, el almacenamiento y la administración del inventario. Se pueden clasificar en uno de tres tipos: costos de pedidos, costos de mantenimiento y costos de escasez.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-07.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Punto de pedido
            p Este es el nivel de inventario que desencadena una acción para reponerlo. Es una cantidad mínima de existencias que una empresa debe tener, de modo que, cuando las existencias caen a esta cantidad, el artículo debe volver a solicitarse.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-08.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 #[i Stock] de seguridad
            p Esto se refiere a un “colchón” o reserva de existencias críticas que se mantiene para proteger contra presiones imprevistas de oferta o demanda.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-09.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Costo de los bienes vendidos
            p El costo de bienes vendidos (COGS), también conocido como costo de ventas, se refiere a los costos directos de producir bienes. 
            p Esto incluye el costo de los materiales y la mano de obra utilizados directamente.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-10.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Días de inventario pendiente (DIO)
            p Días de inventario pendiente, también conocidos como Días de ventas de inventario, se usan para medir el número promedio de días que una empresa tiene inventario antes de venderlo.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-11.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 #[i Software] de gestión de inventarios
            p Un sistema de #[i software] para rastrear niveles de inventario, pedidos, ventas y entregas. También se puede utilizar en producción para crear una lista de materiales y otros documentos relacionados con la producción.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-12.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Tiempo de espera
            p En un contexto de gestión de inventario, el tiempo de entrega es el período entre el momento en que se realiza un pedido para reponer el inventario y el momento en que se recibe el pedido.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-13.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Canales de venta
            p Una forma de llevar productos o servicios al mercado para que los consumidores puedan comprarlos. 
            p Los canales de venta pueden ser directos si se vende directamente a los consumidores, o indirectos, si hay un intermediario involucrado.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-14.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Niveles de existencias
            p También conocidos como niveles de inventario, los niveles de stock son la cantidad de bienes o materias primas que se mantienen en las instalaciones de una empresa.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-15.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Cantidad de orden económico (EOQ)
            p La cantidad de pedido económica es la cantidad de pedido óptima en cualquier momento dado. Un EOQ óptimo minimiza los costos totales de mantenimiento y pedido. 
            p A veces, se lo conoce como el tamaño de lote óptimo.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-16.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Productos terminados
            p Productos terminados, o inventario de productos terminados, se refiere a la cantidad de productos fabricados en stock que están listos para vender.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-17.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Punto de venta
            p El punto de venta, o punto de compra, es el momento y el lugar en el que se completa una transacción minorista. Por lo general, implica una factura y opciones para realizar el pago.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-18.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Orden de compra
            p Una orden de compra es un documento creado por un comprador y enviado a un proveedor que solicita bienes o servicios. El comprador especificará, como mínimo, qué productos se están pidiendo, la cantidad, el precio acordado y las condiciones de entrega y pago.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-19.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Cadena de suministro
            p Una cadena de suministro es un sistema de organizaciones, personas, actividades y recursos involucrados en el suministro de un producto o servicio a un consumidor.


    .titulo-segundo.color-acento-contenido.mt-5(data-aos="fade-right")
      h2.mb-2 Aplicaciones: 

    p.mb-5(data-aos="fade-right") Otro ítem importante es el de las aplicaciones, revise cómo funciona y siga con su aprendizaje:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.mb-4.mb-md-0(data-aos="fade-right")
        .cajon-b.color-acento-botones.p-3
          p.mb-0 La aplicación de sistemas de gestión de inventario está orientada a todos los sectores productivos, ya que, por más pequeña que sea una empresa u organización, esta necesita tener el control y administración de cada uno de los materiales, documentos y servicios, entre otros, que involucran el ejercicio de esta. 
        p.px-3 Los inventarios son tan útiles que hasta los utilizamos, sin darnos cuenta, en nuestros hogares al momento de comprar faltantes, reparar, reemplazar y suministrar artículos para la casa.
      .col-md-5.mb-4.mb-md-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema7/tema7-20.png', alt='')


    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema7/tema7-21.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 Con un plan estratégico implementado que optimiza el proceso de supervisión y administración de inventario, incluidos datos en tiempo real de las condiciones y niveles de inventario, las empresas pueden lograr beneficios, aplicando la administración de inventarios, que incluyen:
      

    PasosA.color-secundario.mb-5(tipo="n")
      .row(data-aos="fade-right")
        .col-md-7.mb-4.mb-md-0
          h3 Cumplimiento de pedidos preciso
          p Imagine este escenario: un cliente realiza un pedido y una marca de comercio electrónico recibe el pedido, la marca lo envía al almacén solo para descubrir que el producto está agotado o igual de malo, la marca de comercio electrónico envía el artículo incorrecto. Esta no es una historia poco común si el inventario está mal administrado.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema7/tema7-22.png', alt='')
        .col-12
          .anexo.anexo-custom--azul.mb-4
            .anexo__icono
              img(src="@/assets/curso/temas/ico-foco.svg")
            .anexo__texto
              h4 ¿Sabías qué?
              p Tomarse el tiempo para desarrollar un plan más sólido puede ayudar a las marcas a evitar pedidos llenados incorrectamente, altos volúmenes de devolución y una pérdida de base de clientes.
        
      .row(data-aos="fade-left")
        .col-md-5.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema7/tema7-23.png', alt='')
        .col-md-7.mb-4.mb-md-0
          h3 Mejor planificación y pedido de inventario 
          p Es difícil evaluar qué productos se necesitan si no hay una forma clara de saber qué productos ya están en #[i stock]. 
          p Si los minoristas en línea no administran adecuadamente el inventario que ya tienen, pueden exceder fácilmente los artículos y es posible que algunos de estos artículos no sean buenos vendedores.
          p La gestión de inventario detallada mitiga estos problemas, lo que permite a los gerentes de almacén actualizar el inventario solo cuando sea necesario. Es espacioso y rentable.

      .row(data-aos="fade-down-right")
        .col-md-7.mb-4.mb-md-0
          h3 Mayor satisfacción del consumidor
          p Los clientes que compran en línea esperan ansiosamente sus pedidos, y no hay nada peor que cuando sus pedidos llegan no como se describen, tarde o dañados. Cuando eso sucede, es menos probable que los compradores vuelvan a comprar productos de la marca.
          p Por otro lado, una buena gestión de inventario conduce a que los pedidos se cumplan más rápidamente y se envíen a los clientes más rápidamente. 
          p Los procesos mejorados pueden ayudar a las marcas de comercio electrónico y minoristas en línea a construir un repertorio sólido con los consumidores y hacer que regresen por más.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema7/tema7-24.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-10.col-md-11
        .anexo.anexo-custom--cac.mb-4
          .anexo__icono
            img(src="@/assets/curso/temas/ico-foco-2.svg")
          .anexo__texto
            h4 ¡Recuerda!
            p La gestión adecuada del inventario es muy importante, especialmente a medida que aumenta el volumen de inventario, y puede hacer o deshacer un negocio.
      
      
    .titulo-segundo.color-acento-contenido.mt-5(data-aos="fade-right")
      h2.mb-2 Más ventajas de una buena estrategia de gestión de inventario:

    p.mb-5(data-aos="fade-down-right") Hay grandes ventajas que pueden resultar de una gestión adecuada del inventario. A continuación, se presentan algunos beneficios adicionales a tener en cuenta:     

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-25.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Precisión mejorada de los pedidos de inventario
            p La precisión de los pedidos de productos, el estado y el seguimiento son fundamentales para una buena gestión del inventario. Un socio de cumplimiento eficaz contará con #[i software] y sistemas en tiempo real, para asegurarse de que ningún producto quede sin seguimiento durante todo el proceso de cumplimiento.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-26.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Almacén organizado
            p Una buena estrategia de gestión de inventario conduce a un centro de cumplimiento organizado. Un almacén organizado da como resultado planes de cumplimiento presentes y futuros más eficientes. Esto también incluye ahorros de costos y mejor cumplimiento de productos para las empresas que utilizan el almacén para administrar el inventario.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-27.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Mayor eficiencia y productividad
            p Con una gestión de inventario adecuada, se invierte menos tiempo y recursos en la gestión de inventario y se pueden asignar a otras áreas. La tecnología se utiliza a menudo para acelerar las operaciones de seguimiento y cumplimiento, asegurando que los registros de inventario sean precisos.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-28.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Ahorre tiempo y dinero
            p Debido a la precisión, la eficiencia y el flujo de productos mejorados en los pedidos, una buena gestión del inventario se traduce en un ahorro de tiempo y dinero.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-29.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Clientes repetidos
            p La gestión y el control efectivos del inventario protegen contra el envío de mercancías incorrectas o dañadas a los clientes. Esto ayuda a mejorar la experiencia del cliente, protege de problemas como reembolsos y consigue más compradores habituales.

    Separador
    #t_7_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.2 Técnicas de inventarios más conocidas

    p.mb-5(data-aos="fade-down-right") Revise las técnicas de inventarios conocidas como material y bien de la empresa, explicadas a continuación:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .tarjeta.tarjeta--azul.p-4.mb-4
          .h5 Tipos de inventario 
          p Hay muchos tipos diferentes de inventario y los que tratará dependerán de los productos que venda. Aquí hay una descripción general de algunos de los tipos que es más probable que encuentre: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-primario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 1
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Productos terminados / productos para la venta:] los productos que vende a sus clientes. 
      
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-primario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 2
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Materias primas:] el inventario que utiliza para fabricar sus productos terminados. 

      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-primario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 3
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Trabajo en curso:] esencialmente, productos sin terminar: inventario que se encuentra en la mitad del proceso de fabricación. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-primario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 4
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Productos MRO:] MRO significa mantenimiento, reparación y funcionamiento. Este es el inventario que se utiliza para respaldar el proceso de fabricación.
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-primario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 5
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong #[i Stock] de seguridad:] el inventario adicional que mantiene en la tienda para hacer frente a la escasez de proveedores o los aumentos repentinos de la demanda.

    p.mb-5(data-aos="fade-down-right") Cada empresa que maneja inventario necesitará alguna forma de manejar el stock. Eche un vistazo a cómo funciona eso en principio. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10
        .tarjeta.tarjeta--gris.p-4.mb-4
          .h5 Técnicas más comunes de gestión de inventario
          p No importa el tamaño de su negocio, emplear algunas de estas técnicas comunes de administración de inventario puede ser una excelente manera de tomar el control de sus existencias. Aquí están algunos a considerar: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 1
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Inventario justo a tiempo (JIT):] JIT implica tener la menor cantidad de existencias posible, anulando los costos y riesgos que implica tener una gran cantidad de existencias a mano. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 2
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Análisis de inventarios ABC:] esta técnica tiene como objetivo identificar el inventario que le está generando ganancias, clasificando los productos en diferentes niveles.
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 3
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong #[i Dropshipping]:] las empresas que utilizan #[i dropshipping], esencialmente, subcontratan todos los aspectos de la gestión de existencias, con varios beneficios, pero algunos inconvenientes clave. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 4
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Envíos a granel:] esta técnica se basa en el supuesto de que comprar al por mayor es más económico. El método es excelente si se tiene la certeza de que los productos se venderán, pero puede plantear desafíos cuando la demanda cambia repentinamente. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 5
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Consignación:] esta técnica permite que un remitente, generalmente un mayorista, entregue sus productos a un destinatario, generalmente un minorista, para su cancelación posterior, a medida que se vaya realizando la venta de los mismos. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 6
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong Conteo cíclico:] esta técnica implica contar con una pequeña cantidad de inventario en un día específico, sin hacer un inventario completo. Este método ayuda a su empresa a validar regularmente niveles de inventario precisos en su #[i software] de gestión de inventario. 
      .col-md-6.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-4
            .pasos-a__circle
              .h2.text-white 7
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong #[i Cross-docking]:] este sistema prácticamente elimina la necesidad de mantener el inventario. Los productos se entregan a un almacén donde se clasifican y preparan para su envío de inmediato. Por lo general, se vuelven a cargar en otros camiones en el mismo almacén y se envían para su entrega de inmediato.
      

    Separador
    #t_7_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 7.3 Herramientas #[i software] para inventarios más comunes

    p.mb-5(data-aos="fade-down-right") Las herramientas #[i software] de gestión de inventario constan de aplicaciones comerciales que rastrean, gestionan y organizan las ventas de productos, las compras de materiales y otros procesos de producción. Atrás quedaron los días de seguimiento del inventario con lápiz y papel: las empresas ahora pueden usar sistemas basados en códigos de barras o identificación por radiofrecuencia (RFID), para ver cuándo llegan los envíos, dónde se encuentran las materias primas y cuándo se han enviado sus productos. Al utilizar #[i software] de gestión de inventario, las empresas reducen el tiempo y los esfuerzos que antes se dedicaban al seguimiento básico y, en cambio, se centran en analizar, encontrar y reducir las ineficiencias en su modelo.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6
        .row.justify-content-center.align-items-center
          .col-12(data-aos="fade-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-angle-right(style="color:#25FFFF")
                | #[strong ¿Por qué es importante el software de gestión de inventario?]
          .col-12(data-aos="fade-left")
            p Sin una contabilidad precisa de cuánto inventario tiene una empresa, dónde se encuentra ese inventario y qué se necesitará para completar los pedidos entrantes y futuros, ninguna empresa puede funcionar con la eficiencia suficiente para generar ganancias y generar crecimiento.
            p Sorprendentemente, la ineficiencia del inventario es común para muchas empresas. Según un análisis de Management Science, las cifras eran inexactas para el 65 por ciento de los casi 370.000 registros de inventario observados en 37 tiendas minoristas.
      .col-md-6.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema7/tema7-30.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right(style="color:#25FFFF")
            | #[strong Cantidad total de datos a capturar]
      .col-12(data-aos="fade-left")
        p Los registros de inventario inexactos crean un mayor tiempo de entrega (el tiempo entre el inicio y la ejecución de un proceso), lo que significa una respuesta más lenta a la demanda, los cambios del mercado y la falta de existencias. Esto, a su vez, puede generar el rechazo del cliente cuando los productos no están disponibles según sea necesario. Para las pequeñas empresas, el margen de error es demasiado pequeño para no satisfacer la demanda requerida (solo alrededor del 50 por ciento de las pequeñas empresas sobreviven los últimos cuatro años). Además, un plazo de entrega más corto se ha convertido en una fuente importante de ventaja competitiva. La consultora estadounidense Granite Bay dice que, al reducir los tiempos de entrega de los fabricantes globales en un 50-80 por ciento, han visto aumentos tanto en la participación de mercado como en las ganancias.

    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right(style="color:#25FFFF")
            | #[strong Cinco consejos para seleccionar el sistema de gestión de inventario adecuado]

    p.mb-5(data-aos="fade-down-right") Encontrar el sistema de gestión de inventario adecuado puede ser una tarea abrumadora. Existe una variedad de opciones que pueden dificultar la búsqueda del ajuste perfecto para usted. Entonces, ¿por dónde se empieza? Aquí hay cinco pasos que pueden ayudarlo a encontrar el sistema correcto:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-31.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 1. Tener un presupuesto: en primer lugar, debe decidir un presupuesto.
            p.text-small Será casi imposible encontrar el ajuste adecuado si no conoce su rango de precios. Un presupuesto definido limitará su búsqueda, lo que le permitirá ahorrar tiempo y esfuerzo para considerar sistemas fuera de su rango de presupuesto. Los sistemas de administración de inventario pueden variar en precio, desde gratis hasta más de $100,000 dólares americanos. Como resultado, hay muchas opciones en términos de calidad, capacidades y escalabilidad. No saber cuál es su rango de precios limitará en gran medida su capacidad para encontrar el ajuste adecuado.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-32.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 2. Conozca sus desafíos de inventario. 
            p.text-small Así como existe una amplia gama de precios, existe una amplia gama de capacidades y funcionalidades del sistema. Asegúrese de conocer sus procesos de inventario y los desafíos que enfrenta con su flujo de trabajo actual. Esta información facilitará que los profesionales de la gestión de inventarios recomienden soluciones que puedan resolver sus desafíos de inventario.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-33.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 3. Sepa qué integraciones necesita:
            p.text-small ¿Su empresa utiliza CRM, contabilidad, ERP u otro #[em software]? El sistema de inventario que elija debe poder integrarse con los otros sistemas que ya tiene. Si no es así, deberá ingresar los datos manualmente. Dependiendo de la cantidad de puntos de datos que tenga, como artículos, ubicaciones y pedidos, esto puede llevar mucho tiempo. También correrá el riesgo de perder datos y provocar retrasos en la actualización de datos. La elección de un sistema que se pueda integrar sin problemas mejorará enormemente la eficiencia y la visibilidad.
        .row.justify-content-center.align-items-center
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema7/tema7-34.png', alt='')
          .col-md-7.mb-4.mb-md-0
            h3 4. Determine cómo desea realizar un seguimiento de los artículos en el sistema.
            p.text-small Hay muchas formas diferentes de realizar un seguimiento del inventario, por lo que es importante saber qué método utilizará. Puede realizar un seguimiento de las existencias mediante códigos de barras, serialización, etiquetas RFID, control de lotes y creación de kits. No solo hay muchos métodos, sino que algunos funcionarán mejor con procesos de inventario particulares. Es por eso por lo que debe decidir un método antes de comenzar la búsqueda de un sistema de inventario. No todos los sistemas tienen la capacidad de utilizar todo el seguimiento, especialmente en los mercados de oficinas medianas y pequeñas. Forzar los procesos de inventario para que se ajusten a un sistema puede resultar problemático y costoso. Para evitar esto, defina qué método de seguimiento funcionará mejor antes de comenzar su búsqueda.
          .col-12
            p.text-small Dependiendo de su elección, es posible que deba comprar el hardware y los escáneres. Debe asegurarse de que los escáneres que elija se puedan utilizar con su sistema. 
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-35.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 5. Descubra cuántos usuarios accederán al sistema, dónde se encuentran y quiénes son.
            p.text-small Cuando realiza su búsqueda, es bueno saber cuántos usuarios necesita. Las estructuras de precios de muchos sistemas de gestión de inventario tienen costes adicionales para los usuarios adicionales. Conocer las necesidades de sus usuarios será útil cuando vea la información de precios o se comunique con la empresa para solicitar un presupuesto. Conociendo la cantidad de usuarios, será más fácil estimar el costo. Además, saber quién está usando el sistema y dónde están ubicados ayudará a determinar cómo se configurará su sistema de inventario. Por ejemplo, podría tener proveedores, clientes o administradores utilizando su sistema de inventario. Estos usuarios pueden estar ubicados en diferentes partes del país o en diferentes partes del mundo.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/tema7-36.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h3 En resumen. 
            p.text-small Asegurarse de que se encuentra dentro de las pautas presupuestarias, conocer los desafíos del inventario, saber qué integración de datos es necesaria, determinar un método de seguimiento y comprender qué usuarios utilizarán el sistema le ayudará a elegir el sistema de gestión de inventario que mejor se adapte a sus necesidades o empresa.


    .row.justify-content-center.align-items-center
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right(style="color:#25FFFF")
            | #[strong A continuación, se listan algunos: ]

    .row.justify-content-center.mb-5.mt-2
      .col-12.col-md-6.col-lg-5(data-aos="fade-right")
        p a. Los mejores #[em softwares] pagos de gestión de inventario:
        ul.lista-ul.mb-5
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Holded
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | RightControl Lite
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Alegra
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | TradeGecko
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | QuickBooks Platform
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Zoho Inventory
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Fishbowl
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Stitch Labs
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Vendedor Cloud
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Channel Advisor
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | nChannel
      .col-12.col-md-6.col-lg-5(data-aos="fade-left")
        p b. Los mejores #[em softwares] gratuitos y de código abierto de gestión de inventario:
        ul.lista-ul.mb-5
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | ABC Inventory
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Stockipile de Canvus
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Delivrd
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Odoo Inventory
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | AssetExplorer
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Factusol
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | Stockpile by Canvus
          li.mb-0(data-aos="fade-down")
            i.lista-ul__vineta
            | SalesBinder




</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
