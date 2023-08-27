<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Tipos de datos

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-12.fondo-1(data-aos="flip-right")
        .row.justify-content-center.align-items-center
          .col-md-8.col-lg-9.col-12.px-3.pt-2
            p.text-white El tipo de datos es un atributo asociado con un dato que le dice a un sistema informático cómo interpretar su valor. Comprender los tipos de datos garantiza que los datos se recopilen en el formato preferido y que el valor de cada propiedad sea el esperado. Tenga en cuenta que los tipos de datos no deben confundirse con los dos tipos de datos en conjunto denominados datos del cliente: datos de entidades y datos de eventos.
            //- p.text-white Teniendo en cuenta lo anteriormente visto, es necesario conocer que dichos sistemas poseen un sistema de información que interpreta su valor. 
            //- strong ¡Adelante, le invitamos a explorar de qué se trata!
          .col-md-4.col-lg-3.col-12 
            figure
                img(src='@/assets/curso/temas/tema2/tema2-01.svg', alt='') 

    .row.mb-5.align-self-stretch.mt-5.justify-content-center
      .col-md-4.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/tema2-02.png', alt='')  
      .col-md-8.col-lg-6.col-12(data-aos="fade-right")
        .tarjeta.tarjeta--azul(style="height:100%")
          .p-4
            p.mb-0 Se requiere una buena comprensión de los tipos de datos para definir correctamente las propiedades de los eventos y las propiedades de las entidades. Un plan de seguimiento bien definido debe contener el tipo de datos de cada propiedad, para garantizar la precisión de los datos y evitar la pérdida de estos.

    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Datos numéricos

    //- p.mb-4(data-aos="fade-right") Estos datos son bien significativos, por lo tanto, revise la siguiente introducción al tema:

    .row.mb-5.align-self-stretch.mt-5.justify-content-center
      .col-md-7.col-lg-7.col-12(data-aos="fade-right")
        p Los datos numéricos son un tipo de datos expresado en números, en lugar de una descripción en lenguaje natural. A veces llamados datos cuantitativos, los datos numéricos siempre se recopilan en forma de números. Los datos numéricos se diferencian de otros tipos de datos en forma de números por su capacidad para realizar operaciones aritméticas con estos números en diferentes entornos y áreas del conocimiento.
      .col-md-5.col-lg-5.col-12.mb-5.mb-lg-0(data-aos="fade-left")
        .p-4
          figure
            img(src='@/assets/curso/temas/tema2/tema2-04.png', alt='')  
           
    p.mb-4(data-aos="fade-right") Para el procesamiento de datos mediante herramientas software, se van a contemplar los siguientes tipos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-11.mb-5.mb-lg-0(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Los tipos de datos enteros o "números no fraccionarios". Pueden subtipificarse según su capacidad para contener valores negativos (por ejemplo, unsigned en C y C ++). También pueden tener una pequeña cantidad de subtipos predefinidos (como short y long en C / C ++); o permitir a los usuarios definir libremente subrangos, como 1...12 (por ejemplo, Pascal / Ada).
          li 
            .lista-ol--cuadro__vineta
              span b
            | Los tipos de datos de coma flotante; por lo general, representan valores como valores fraccionarios de alta precisión (números racionales, matemáticamente), pero, a veces, se denominan, engañosamente, reales (evocadores de números reales matemáticos). Suelen tener límites predefinidos, tanto en sus valores máximos como en su precisión.
            p Típicamente son almacenados internamente en la forma a×2ᵇ (donde a y b son números enteros), pero que se visualiza en formato del sistema decimal.
          li 
            .lista-ol--cuadro__vineta
              span c
            | Los tipos de datos de punto fijo son convenientes para representar valores monetarios. A menudo, se implementan internamente como números enteros, lo que lleva a límites predefinidos.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Los tipos numéricos bignum o de precisión arbitraria carecen de límites predefinidos. No son tipos primitivos y se usan con moderación por razones de eficiencia.


    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Datos booleanos

    p.mb-5(data-aos="fade-right") ¿Había escuchado sobre los datos booleanos? Le invitamos a que revise de qué se tratan:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-right")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Datos booleanos
            p El tipo de dato booleano representa los valores verdadero y falso. Aunque solo son posibles dos valores, rara vez se implementan como un solo dígito binario, por razones de eficiencia. Muchos lenguajes de programación no tienen un tipo booleano explícito, en su lugar, interpretan, por ejemplo, 0 como falso y otros valores como verdadero.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Los datos booleanos se refieren a la estructura lógica de cómo se interpreta el lenguaje en el lenguaje de la máquina. En este caso, un 0 booleano se refiere a la lógica Falso/Verdadero, y un valor distinto de cero es siempre uno que se conoce como 1 booleano.


    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Datos de fecha y hora 

    p.mb-5(data-aos="fade-right") Las fechas y horas parecen simples, son usadas todo el tiempo en la vida cotidiana y no parecen causar mucha confusión. Sin embargo, cuanto más se aprende sobre fechas y horas, más complicadas parecen volverse. Para calentar, intente responder estas tres preguntas aparentemente simples:


    .row.justify-content-center.align-items-center.mb-5
      .col-12.fondo-2(data-aos="flip-right")
        .row.justify-content-center.align-items-center.py-3
          .col-md-3.col-lg.col-12 
            figure.text-end
                img.text-end(src='@/assets/curso/temas/tema2/tema2-08.svg', alt='', style="display:inline") 
          .col-md-6.col-lg-6.col-12.px-3.text-center
            ol.lista-ol--cuadro
              li 
                .lista-ul__vineta
                  | ¿Todos los años tienen 365 días?
              li 
                .lista-ul__vineta
                  | ¿Todos los días tienen 24 horas?
              li 
                .lista-ul__vineta
                  | ¿Cada minuto tiene 60 segundos?
          .col-md-3.col-lg.col-12 
            figure
                img(src='@/assets/curso/temas/tema2/tema2-07.svg', alt='') 


    p.mb-5(data-aos="flip-down") Se sabe que no todos los años tienen 365 días, pero ¿conoce la regla completa para determinar si un año es bisiesto? (Tiene tres partes). Es posible que haya recordado que muchas partes del mundo usan el horario de verano (DST), de modo que algunos días tienen 23 horas y otros 25. Es posible que no haya sabido que algunos minutos tienen 61 segundos porque, de vez en cuando, se agregan segundos intercalares porque la rotación de la Tierra se está desacelerando gradualmente.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.col-lg.col-12(data-aos="flip-right")
        figure
            img(src='@/assets/curso/temas/tema2/tema2-09.png', alt='') 
      .col-md-8.col-lg-8.col-12(data-aos="flip-left")
        p Las fechas y los horarios son difíciles porque tienen que reconciliar dos fenómenos físicos (la rotación de la tierra y su órbita alrededor del sol) con toda una serie de fenómenos geopolíticos, que incluyen meses, zonas horarias y DST. Tener claro lo relacionado con las fechas y las horas le brindará una base sólida de habilidades prácticas, que lo ayudarán con los desafíos comunes del análisis de datos.
        p Adicionalmente, hay que tener claro que, dependiendo del entorno, la plataforma, el formato, la aplicación, entre otras, se debe saber cómo escribir, digitar o ingresar estos datos de fecha y hora para que sean debidamente interpretados. Esto quiere decir que, en una aplicación, se procede de una forma que normalmente puede diferir parcial o totalmente de otra.


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-8(data-aos="fade-down-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_1_Fecha_y_hora_en_la_herramienta_de_hojas_de_calculo_excel.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Fecha y Hora, en la herramienta de hojas de cálculo Excel, se explica cómo es un procedimiento con la herramienta de hojas de cálculo de Excel.


    Separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Datos de texto

    p.mb-5(data-aos="flip-down") Llamados comúnmente de caracteres y cadenas de texto, tal como:


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-11.mb-5.mb-lg-0(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span a
            | Un carácter, que puede ser una letra de algún alfabeto, un dígito, un espacio en blanco, un signo de puntuación, etc.
          li 
            .lista-ol--cuadro__vineta
              span b
            | Una cadena, que es una secuencia de caracteres. Las cadenas se utilizan normalmente para representar palabras y texto, aunque el texto, en todos los casos, excepto en los más triviales, implica mucho más que una secuencia de caracteres. 

    p.mb-5(data-aos="flip-down") Los tipos de caracteres y cadenas pueden almacenar secuencias de caracteres de un conjunto de caracteres como ASCII. Dado que la mayoría de los juegos de caracteres incluyen dígitos, es posible tener una cadena numérica, como "1234". Sin embargo, muchos idiomas los tratan como si pertenecieran a un tipo diferente al valor numérico 1234.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-5.col-lg-4.col-12(data-aos="fade-right")
        //- .titulo-sexto.color-acento-contenido
        //-   p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Datos de texto] 
        figure
          img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')  
          //- figcaption Nota. Fuente: https://exceltotal.com/exportar-datos-de-excel-a-un-archivo-de-texto/
      .col-md-7.col-lg-8.col-12
        p.mb-0 Los tipos de caracteres y cadenas pueden tener diferentes subtipos, según el "ancho" del carácter requerido. Se descubrió que el ASCII original de 7 bits de ancho era limitado y fue reemplazado por conjuntos de 8 y 16 bits, que pueden codificar una amplia variedad de alfabetos no latinos (como hebreo y chino) y otros símbolos. Las cadenas pueden ser estiradas para ajustarse o de tamaño fijo, incluso en el mismo lenguaje de programación. También se pueden subtipificar por su tamaño máximo.



</template>

<script>
export default {
  name: 'Tema2',
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
