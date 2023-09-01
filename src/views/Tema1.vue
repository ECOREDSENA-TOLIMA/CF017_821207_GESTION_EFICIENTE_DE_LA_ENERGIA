<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Herramientas informáticas
      
    .row.mb-5(data-aos="fade-down")
      .col-12
        .cajon.color-primario.p-4
          p.mb-0 Las herramientas informáticas se dan en dos componentes claves: el #[i software] y el #[i hardware]. Revise la siguiente figura para que se familiarice con ello antes de dar inicio a su estudio:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Herramientas informáticas] 
        div.d-none.d-sm-none.d-md-block
          figure
            img(src='@/assets/curso/temas/tema1/tema1-01-md.png', alt='Figura 1. Herramientas informáticas se dividen en dos componentes claves: hardware y software, donde hardware corresponde a todo los tangible como la CPU, el monitor, la impresora, entre otros. Y el software corresponde a los programas que hace posible la sistematización de la información, el procesamiento de datos y la gestión de la información.')  
            //- figcaption Nota. Fuente: https://www.goconqr.com/c/61849/course_modules/93926-tema-3--hardware-y-software-#
        div.d-block.d-md-none
          figure
            img(src='@/assets/curso/temas/tema1/tema1-01-sm.png', alt='Figura 1. Herramientas informáticas se dividen en dos componentes claves: hardware y software, donde hardware corresponde a todo los tangible como la CPU, el monitor, la impresora, entre otros. Y el software corresponde a los programas que hace posible la sistematización de la información,, el procesamiento de datos y la gestión de la información.')  
            //- figcaption Nota. Fuente: https://www.goconqr.com/c/61849/course_modules/93926-tema-3--hardware-y-software-#

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Herramientas informáticas tipo #[em hardware] más conocidas

    p.mb-4(data-aos="fade-right") A continuación, encuentra las herramientas informáticas tipo #[em hardware] más conocidas:


    .row.justify-content-center.align-items-center.mb-4 
      .col-12.col-lg-11(data-aos="fade-down")
        SlyderB(:datos="datosSlyder")


    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Herramientas informáticas tipo #[i software] más conocidas

    p(data-aos="fade-right") A continuación, se presentan algunas herramientas tipo #[i software] que se usan a diario:

    .row.mb-5.align-self-stretch.mt-5.justify-content-center
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta.color-acento-botones(style="height:100%")
          .p-4
            h4.text-center Herramientas informáticas tipo #[i software] más conocidas
            p Cuando la mayoría de nosotros pensamos en herramientas informáticas tipo #[i software], solemos pensar en lo complejas y complicadas que son. Incluso, podríamos pensar que comprenderlas es inalcanzable o demasiado abstracto para nosotros.
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')  
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta.color-acento-contenido(style="height:100%")
          .p-4
            h4.text-center Sin lugar a dudas
            p El #[i software] es intrincado y lleno de matices, pero es algo que todos usamos y con lo que interactuamos a diario. Siempre que abre una aplicación en su teléfono, habla con su Alexa o envía un correo electrónico, está trabajando con un tipo de #[i software].
            figure
              img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')  
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta.color-acento-botones(style="height:100%")
          .p-4
            h4.text-center Si bien utilizamos herramientas informáticas tipo #[i software] de muchas formas
            p Cada una de estas formas se remonta a cinco tipos principales de #[i software]. Tener un conocimiento básico de estos tipos de #[i software] puede darle una idea de cómo funcionan y cómo podrían usarse para su negocio.
            figure
              img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')  
           
    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right(style="color:#AD84FF")
            | Complemente las herramientas informáticas con el siguiente contenido:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h2.mb-0 ¿Qué es el #[i software]?
          br
          br
        p Antes de sumergirnos en los cinco tipos de #[i software], observe brevemente qué es el #[i software]. Obviamente, si le pidiera a su programador de computadora favorito una definición de #[i software], sería mucho más complejo que esto, pero, en esencia, es un programa de computadora o una aplicación que proporciona instrucciones para ejecutar los comandos de un usuario. Cada vez que verifica el clima en su teléfono, está usando un #[i software].

    h4(data-aos="fade-down") Tipos principales de #[i software] 

    p.mb-4(data-aos="fade-down") Ahora que ya sabe la definición básica de #[i software], se tratarán, a continuación, los cinco tipos principales de #[i software] y cómo se utilizan en la vida y en los negocios.  

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 #[strong #[i Software] de la aplicación:] este es el tipo más común de #[i software] de computadora, y se puede definir como programas de usuario final que lo ayudan a realizar tareas o lograr un resultado deseado. El usuario final es la persona que realmente está utilizando un producto o programa. (Ellos son aquellos para quienes está diseñado el “resultado final”). 
              p Algunos ejemplos de #[i software] de aplicación incluyen navegadores de Internet, una herramienta CRM como Hubspot, un #[i software] de edición de fotografías como #[i Adobe] o #[i Lightroom], o una aplicación de procesamiento de texto como #[i Microsoft Word].
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema1/tema1-14.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p #[strong #[i Software] educativo y de referencia:] este #[i software] de aplicación, también denominado #[i software] académico, está diseñado específicamente para facilitar el aprendizaje de un tema en particular. En esta categoría, se incluyen varios tipos de #[i software] tutorial. Algunos de estos son #[i JumpStart, MindPlay, Moodle y Kid Pix]. 
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema1/tema1-15.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p #[strong #[i Software] de gráficos:] el #[i software] de aplicación de gráficos le permite editar o realizar cambios en datos o imágenes visuales. Incluye #[i software] de edición de ilustraciones e imágenes. #[i Adobe Photoshop y PaintShop Pro] son algunos ejemplos de #[i software] de gráficos. 
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema1/tema1-16.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p #[strong #[i Software] de hoja de cálculo:] el #[i software] de aplicación de hoja de cálculo se utiliza para realizar cálculos. En este #[i software], los datos se almacenan en formato de tabla. El área de intersección, llamada celda, se separa para definir campos como texto, fecha, hora y número. Permite a los usuarios proporcionar fórmulas y funciones para realizar cálculos. #[i Microsoft Excel] y #[i Google Sheets] son ejemplos de #[i software] de hoja de cálculo.
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.px-4
            img(src='@/assets/curso/temas/tema1/tema1-17.svg' alt='')
          .tarjeta.tarjeta--custom
            .p-4
              p #[strong #[i Software] de base de datos:] el #[i software] de aplicación de base de datos se utiliza para crear y administrar una base de datos. También conocido como DBMS, permite organizar los datos. Entonces, cuando se ejecuta una aplicación, los datos se obtienen de la base de datos, se modifican y se almacenan nuevamente en la base de datos. #[i Oracle, MySQL, Microsoft SQL Server, PostgreSQL, MongoDB e IBM Db2] son algunas de las bases de datos más populares. 

  
    .row.justify-content-center.align-items-center.mb-4 
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-angle-right(style="color:#AD84FF")
            | Revise otra parte de las herramientas informáticas:


    .row.justify-content-center.align-items-center.mb-4 
      .col-12.col-lg-11(data-aos="fade-right")
        ImagenInfograficaB.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/tema1-18.svg', alt='')
          .row.p-3(x="0%" y="10%" tooltip="<i>Software</i> de procesamiento de textos" numero="1")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> de procesamiento de textos
              p El #[i software] de aplicación de procesamiento de texto se utiliza para formatear y manipular texto, creando así notas, cartas, faxes y documentos; también es utilizado para formatear y embellecer el texto. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
          .row.p-3(x="0%" y="36%" tooltip="<i>Software</i> de simulación" numero="2")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> de simulación
              p El #[i software] de aplicación de simulación se utiliza en los campos de la ingeniería militar, educación práctica en determinadas industrias, pruebas de maquinaria, formación industrial, videojuegos, etc.; se utiliza cuando el trabajo en el sistema real o el entorno físico puede ser peligroso. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
          .row.p-3(x="0%" y="62%" tooltip="<i>Software</i> de aplicación" numero="3")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> de aplicación
              p El #[i software] de aplicación es una herramienta fundamental para realizar tareas específicas en dispositivos electrónicos. Desde aplicaciones de productividad hasta redes sociales y juegos, estos programas brindan funcionalidades diversas para satisfacer las necesidades de los usuarios en diferentes ámbitos de la vida digital.
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
          .row.p-3(x="0%" y="88%" tooltip="<i>Software</i> del sistema" numero="4")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> del sistema
              p El #[i software] del sistema ayuda al usuario, la computadora o el dispositivo móvil y una aplicación a trabajar juntos, sin problemas. Esto hace que el #[i software] del sistema sea crucial para ejecutar cualquier tipo de #[i software] de aplicación, así como todo el sistema informático. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')
          .row.p-3(x="100%" y="10%" tooltip="<i>Software</i> de programación" numero="5")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> de programación
              p Son programas que se utilizan para escribir y desarrollar programas de #[i software]. Es útil pensar en estos programas como una especie de traductor: toman lenguajes de programación como Laravel, Python, C++ y más, y los traducen a algo que una computadora o teléfono pueda entender. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-23.png', alt='')
          .row.p-3(x="100%" y="36%" tooltip="<i>Software</i> de controlador" numero="6")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> de controlador
              p El #[i software] del sistema ayuda al usuario, la computadora o el dispositivo móvil y una aplicación a trabajar juntos, sin problemas. Esto hace que el #[i software] del sistema sea crucial para ejecutar cualquier tipo de #[i software] de aplicación, así como todo el sistema informático. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-24.png', alt='')
          .row.p-3(x="100%" y="62%" tooltip="Solución de <i>software</i> especializada" numero="7")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro Solución de <i>software</i> especializada
              p Una solución de #[i software] personalizada puede ayudar a eliminar el cuello de botella del seguimiento de los recibos y gastos del personal, o puede facilitar que su equipo administre los contactos de #[em marketing]. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-25.png', alt='')
          .row.p-3(x="100%" y="88%" tooltip="<i>Software</i> personalizado" numero="8")
            .col-md-6.col-12.texto-negro
              .h5.mb-2.texto-negro <i>Software</i> personalizado
              p El #[i software] de aplicación de procesamiento de texto se utiliza para formatear y manipular texto, creando así notas, cartas, faxes y documentos; también es utilizado para formatear y embellecer el texto. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-26.png', alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: '',
        texto:
          'El <i>hardware</i> es la parte más visible de cualquier sistema de información: el equipo, como computadoras, escáneres e impresoras, que se utiliza para capturar datos, transformarlos y presentarlos al usuario como salida. Aunque nos centraremos en la computadora personal (PC) y los dispositivos periféricos que se utilizan comúnmente con ella, los mismos principios se aplican a la gama completa de computadoras.',
        imagen: require('@/assets/curso/temas/tema1/tema1-02.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Entre estas, las supercomputadoras, término utilizado para denotar los motores informáticos más rápidos disponibles en un momento dado, que se utilizan para ejecutar aplicaciones científicas excepcionalmente exigentes.',
        imagen: require('@/assets/curso/temas/tema1/tema1-03.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Las computadoras <em>mainframe</em> son las que brindan instalaciones de procesamiento y almacenamiento de datos de alta capacidad a cientos o incluso miles de usuarios que operan desde terminales (tontas).',
        imagen: require('@/assets/curso/temas/tema1/tema1-04.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Dentro de las herramientas informáticas tipo <i>hardware</i> más conocidas, también se encuentran los servidores, que tienen grandes capacidades de almacenamiento de datos y permiten a los usuarios compartir archivos y <i>software</i> de aplicación, aunque el procesamiento se producirá normalmente en la propia máquina del usuario.',
        imagen: require('@/assets/curso/temas/tema1/tema1-05.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Estaciones de trabajo, que brindan un rendimiento de alto nivel para usuarios individuales en campos computacionalmente intensivos, como la ingeniería.',
        imagen: require('@/assets/curso/temas/tema1/tema1-06.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Las computadoras personales (incluidas las computadoras portátiles) tienen un monitor, un teclado y una CPU conectados, y se han convertido en una herramienta comercial conveniente y flexible, capaz de funcionar de forma independiente o como parte de una red organizacional.',
        imagen: require('@/assets/curso/temas/tema1/tema1-07.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Los dispositivos móviles, como los asistentes digitales personales o la última generación de teléfonos móviles, ofrecen la máxima portabilidad, más conexión inalámbrica a Internet; actualmente, ofrecen la funcionalidad completa de una PC.',
        imagen: require('@/assets/curso/temas/tema1/tema1-08.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Ya estamos en la era de las computadoras portátiles para aplicaciones médicas o de seguridad, computadoras integradas en electrodomésticos, que van desde automóviles hasta lavadoras, y la tarjeta inteligente, que proporcionará identificación, instalaciones bancarias, registros médicos y más.',
        imagen: require('@/assets/curso/temas/tema1/tema1-09.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
