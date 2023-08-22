<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Recolección de la información e importación de datos

    .row.justify-content-center.align-items-center
      .col-md-7.mb-4.mb-md-0(data-aos="fade-down-left")
        p La recopilación de datos se define como el procedimiento de recopilación, medición y análisis de conocimientos precisos para la investigación, utilizando técnicas estándar validadas. Un investigador puede evaluar su hipótesis sobre la base de los datos recopilados. En la mayoría de los casos, la recopilación de datos es el paso principal y más importante para la investigación, independientemente del campo de investigación. El enfoque de la recopilación de datos es diferente para diferentes campos de estudio, dependiendo de la información requerida.
        p El objetivo más crítico de la recopilación de datos es garantizar que se recopilen datos confiables y ricos en información para el análisis estadístico, de modo que se puedan tomar decisiones basadas en datos para la investigación.
        p En este tema, se clasifica la recolección de datos en dos partes: la recolección manual y la recolección lógica, de las cuales se dará una explicación detallada, a continuación:
      .col-md-5.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')

    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Recolección de forma manual (observación, escritura y digitalización)

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La recolección manual de datos es aquella que, principalmente, conlleva tres pasos importantes durante su ejecución, estos son: la observación, la escritura de la información en formatos o listas de chequeo físicas ya preestablecidas y la digitalización de los datos en un sistema informático fijo (PC de escritorio, portátiles, entre otros) o móvil (#[i tablet], PDA, celulares, entre otros). Los datos recolectados se pueden subir a la nube automáticamente (#[i online]), si así lo amerita el proceso, mediante el acceso a internet de los sistemas informáticos fijos o móviles; de no ser necesario, estos simplemente se guardan localmente (#[i offline]) para su debido tratamiento más adelante.

    p.mb-5(data-aos="fade-right") A continuación, se mencionan unas técnicas de recolección manual de datos que involucran total o parcialmente los pasos anteriormente mencionados:


    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="Observación")
        .col-md-7.mb-4.mb-md-0
          p En su forma más simple, la observación implica "ver" cosas, como objetos, procesos, relaciones, eventos, y registrar formalmente la información. Hay diferentes tipos de observación. La observación estructurada o directa es un proceso en el que las observaciones se registran en una lista de verificación acordada. La observación experta generalmente la lleva a cabo alguien con experiencia específica en un área de trabajo, e implica que el experto observe y registre información sobre un tema.
          p La observación también se puede realizar como ejercicio participativo. Cuando este es el caso, los beneficiarios previstos de un proyecto o programa están involucrados en la planificación de un ejercicio de observación, observando y discutiendo los hallazgos.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='')
      .row(titulo="Medición: Directa e Indirecta")
        .col-md-7.mb-4.mb-md-0
          p Hay dos métodos para realizar mediciones dimensionales: medición directa y medición indirecta. Con mediciones directas, se utilizan instrumentos de medición como calibradores Vernier, micrómetros y máquinas de medición de coordenadas para medir las dimensiones del objetivo directamente.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='')
      .row(titulo="Estas medidas también se conocen como medidas absolutas")
        .col-md-7.mb-4.mb-md-0
          p Las mediciones se pueden realizar en un amplio rango especificado por la escala del instrumento de medición, pero también existe la posibilidad de que la medición sea incorrecta, debido a lecturas erróneas de la escala.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/tema4-05.png', alt='')
      .row(titulo="Con las mediciones indirectas")
        .col-md-7.mb-4.mb-md-0
          p.mb-0 Las dimensiones se pueden medir utilizando instrumentos de medición, como relojes comparadores, que miran la diferencia entre los objetivos y los dispositivos de referencia, como bloques patrón y calibres anulares. Esto también se conoce como medidas comparativas, debido al hecho de que se realiza una comparación utilizando un objeto con dimensiones estándar. Cuanto más predeterminadas sean la forma y las dimensiones de un dispositivo de referencia, más fácil será la medición. 
          p Sin embargo, este método también tiene la desventaja de que el rango de medición es limitado. Igualmente, también se denomina medición indirecta a las mediciones que se obtienen mediante fórmulas, ecuaciones, transformaciones, entre otros, cuyos parámetros están ligados a mediciones directas ya tomadas y hojas de datos, entre otros.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='')

    p.mb-5.mt-5(data-aos="fade-right") Además, se debe conocer lo siguiente:

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Entrevistas:

    p.mb-5.mt-5(data-aos="fade-right") Las entrevistas son probablemente la herramienta más utilizada en la planificación, el seguimiento y la evaluación. Pueden realizarse con una persona a la vez (entrevistas individuales) o grupos de personas. Pueden administrarse de manera formal o informal. Pueden realizarse de forma presencial o mediante medios remotos, como teléfono o #[i Skype]. Las entrevistas también se pueden realizar mediante preguntas escritas a través de cartas o correo electrónico. 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Entrevista] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-07.png', alt='Nuestra comunicación es clave para sacarle partido a multitud de situaciones. Una situación determinante en la vida de todas las personas es la que tiene que ver con la entrevista de trabajo.')  
          //- figcaption Nota. Fuente: https://www.talenttunity.com/diferencia-entre-entrevistas-informales-y-entrevistas-profesionales/

    p.mb-5.mt-5(data-aos="fade-right") Las entrevistas pueden ser estructuradas, semiestructuradas o abiertas. Las entrevistas estructuradas se basan en un conjunto básico de preguntas que siempre se hacen en el mismo orden. Las entrevistas semiestructuradas también contienen un conjunto básico de preguntas, pero permiten al entrevistador hacer preguntas complementarias o cambiar el orden en que se hacen las preguntas.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Discusiones de grupos focales:

    p.mb-5.mt-5(data-aos="fade-right") Las discusiones de grupos focales (DGF) son discusiones facilitadas, que se llevan a cabo con un pequeño grupo de personas que tienen conocimientos especializados o interés en un tema en particular. Se utilizan para conocer las percepciones y actitudes de un grupo definido de gente. Las DGF se llevan a cabo típicamente con alrededor de 6 a 12 personas y se basan en una breve lista de preguntas orientadoras, diseñadas para buscar información en profundidad.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Discusión grupos focales] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='Son excelentes para conocer las percepciones y actitudes de un grupo definido de gente con un porposito en común.')  
          //- figcaption Nota. Fuente:  https://www.fesc.edu.co/portal/index.php/comunicados-prensa/1048-grupo-focal-sector-turismo

    p.mb-5.mt-5(data-aos="fade-right") Los grupos focales se utilizan a menudo para solicitar las opiniones de aquellos que no estarían dispuestos o no podrían hablar en reuniones de grupos más grandes. También pueden utilizarse para acceder a las opiniones de grupos minoritarios o desfavorecidos, como mujeres, niños o personas con discapacidad.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Fotografía y video:

    p.mb-5.mt-5(data-aos="fade-right") Las fotografías y los videos muestran imágenes fijas o en movimiento. Las fotografías se pueden utilizar solas, pero suelen ir acompañadas de leyendas escritas que proporcionan información adicional. Los videos, por su parte, suelen ir acompañados de un comentario. El uso de fotografía y video se ha vuelto cada vez más común dentro de M&E en los últimos años. Esto se debe, en parte, a las mejoras en la tecnología de la telefonía móvil, que ha permitido cada vez más a las personas producir productos audiovisuales baratos y de alta calidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] #[i Toma fotográfica en campo] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-09.png', alt='Tomas fotográficas realizadas en campo con el personal o maquinaria de trabajo.')  
          //- figcaption Nota. Fuente: https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/2-empresas/2-1-8-4-6-radicaci%C3%B3n-de-dise%C3%B1os-el%C3%A9ctricos/Guia-de-Presentacion-de-Proyectos-V5-1.pdf

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Estudios de caso e historias de cambio:

    p.mb-5.mt-5(data-aos="fade-right") Un estudio de caso no es una herramienta de recopilación de datos en sí mismo. Es un trabajo descriptivo que puede proporcionar información detallada sobre un tema. A menudo, se basa en información adquirida a través de una o más de las otras herramientas descritas en este documento, como entrevistas u observación. Los estudios de casos suelen estar escritos, pero también pueden presentarse como fotografías, películas o videos. Los estudios de caso a menudo se centran en las personas (individuos, hogares, comunidades).

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] #[i Estudio de caso mediante observación en sitio] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-10.png', alt='Las instalaciones eléctricas industriales son un conjunto de circuitos eléctricos que tienen la misión de conducir y distribuir la corriente eléctrica desde su punto de origen (el servicio eléctrico) hasta su salida.')  
          //- figcaption Nota. Fuente: https://www.tusocal.com/blog/instalaciones-electricas-industriales-como-funcionan/

    p.mb-5.mt-5(data-aos="fade-right") Pero también pueden centrarse en cualquier otra unidad de análisis, como ubicaciones, organizaciones, políticas o el medio ambiente. Las historias de cambio son similares a los estudios de casos. Sin embargo, tienen un enfoque específico en el cambio y, por lo general, solo se desarrollan después de que un proyecto o programa ha comenzado.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Encuestas y cuestionarios:

    p.mb-5.mt-5(data-aos="fade-right") Están diseñados para recopilar y registrar información de muchas personas, grupos u organizaciones, de manera coherente. Un cuestionario es un formulario que contiene preguntas. Puede ser un formulario impreso o uno diseñado para ser llenado en línea. Los cuestionarios se pueden administrar de muchas formas diferentes. Una encuesta, por el contrario, es normalmente un gran ejercicio formal.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] #[i Encuestas y cuestionarios] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-11.png', alt='El instrumento básico utilizado en la investigación por encuesta es el cuestionario, que podemos definir como el "documento que recoge de forma organizada los indicadores de las variables implicadas en el objetivo de la encuesta".')  
          //- figcaption Nota. Fuente: https://www.asep.gob.pa/?page_id=12898

    p.mb-5.mt-5(data-aos="fade-right") Por lo general, constan de tres aspectos diferentes: un método de muestreo aprobado, diseñado para garantizar que la encuesta sea representativa de una población más amplia; un cuestionario estándar que garantiza que la información sea recopilada y registrada de forma coherente; y un conjunto de métodos de análisis que permitan generar resultados y hallazgos.

    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Recolección de forma lógica (importación de archivos de datos, captura de datos por interfaz de comunicación)

    p.mb-5.mt-5(data-aos="fade-right") Algunos formatos son tan comunes que casi todos los programas pueden importarlos; por ejemplo, la mayoría de los programas de procesamiento de texto pueden leer archivos de texto ASCII (archivos .txt) y la mayoría de las hojas de cálculo pueden leer archivos ASCII delimitados por comas (archivos .csv). Muchos programas están escritos para importar los archivos de sus principales competidores. OpenOffice Calc puede importar archivos creados por #[i Microsoft Excel], por ejemplo.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-6.col-12(data-aos="fade-right")
        p Un ejemplo de importación de archivos sería cómo importar un archivo delimitado a Excel. Para conocer este procedimiento, diríjase al Anexo.
      .col-md-6.col-12(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_3_Como_Importar_Un_Archivo_Delimitado_A_Excel.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Cómo Importar Un Archivo Delimitado A Excel, allí se muestra un paso a paso de cómo hacerlo.


    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-2 Tipos de #[em Big Data]:
      
    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-lg-10.col-12(data-aos="fade-right")
        ul.lista-ol--cuadro
          li(data-aos="fade-down")
            .lista-ul__vineta
              | #[strong Estructurado:] cualquier dato que se pueda almacenar, acceder y procesar en forma de formato fijo se denomina datos "estructurados". A lo largo del tiempo, el talento en informática ha logrado un mayor éxito en el desarrollo de técnicas para trabajar con este tipo de datos (donde el formato es bien conocido de antemano) y también en obtener valor de ellos. Sin embargo, hoy en día, se están previendo problemas cuando el tamaño de dichos datos crece en gran medida, los tamaños típicos están en la furia de múltiples #[i zettabytes].
          li(data-aos="fade-down")
            .lista-ul__vineta
              | #[strong No estructurado:] cualquier dato cuya forma o estructura sea desconocida se clasifica como datos no estructurados. Además de que el tamaño es enorme, los datos no estructurados plantean múltiples desafíos en términos de su procesamiento para obtener valor de ellos. Un ejemplo típico de datos no estructurados es una fuente de datos heterogénea, que contiene una combinación de archivos de texto simples, imágenes, videos, etc. Hoy en día, las organizaciones tienen una gran cantidad de datos disponibles, pero, desafortunadamente, no saben cómo obtener valor de ellos, ya que estos datos están en su forma sin procesar o en formato no estructurado.
          li(data-aos="fade-down")
            .lista-ul__vineta
              | #[strong Semiestructurada:] los datos semiestructurados pueden contener ambas formas de datos. Es posible ver los datos semiestructurados como una forma estructurada, pero, en realidad, no están definidos, por ejemplo, con una definición de tabla en DBMS relacional. Un ejemplo de datos semiestructurados es un dato representado en un archivo XML.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] #[i Crecimiento de datos a lo largo de los años] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-12.png', alt='La cantidad de datos creados en todo el mundo en 2018 alcanzó los 33 zettabytes (un zettabyte equivale a 1.000 millones de terabytes), 16,5 veces más que solo hace nueve años. No obstante, gracias a los nuevos desarrollos tecnológicos, como el internet de las cosas, se estima que la cantidad de información digital generada en 2035 ascienda a los 2.142 zettabytes.')  
          figcaption Nota. Fuente: https://es.statista.com/grafico/17734/cantidad-real-y-prevista-de-datos-generados-en-todo-el-mundo/








</template>

<script>
export default {
  name: 'Tema4',
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
