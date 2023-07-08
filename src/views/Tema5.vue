<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Parámetros para la recolección de datos

    p.mb-5(data-aos="fade-right") Visualice cuáles son los parámetros para la recolección de datos:     

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Independientemente del campo de estudio o la preferencia por definir los datos (cuantitativos o cualitativos), la recopilación de datos precisa es esencial para mantener la integridad de un proceso o investigación dentro de un sistema, empresa u organización. 
            figure
              img(src='@/assets/curso/temas/tema5/tema5-01-b.svg', alt='')
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-01-a.svg', alt='')
        .row
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema5/tema5-02-a.svg', alt='')
          .col-md-7.mb-4.mb-md-0
            p.pt-4 Es necesario que se estipule un proceso formal de recopilación de datos, ya que garantiza que los datos recopilados estén definidos y sean precisos. De esta manera, las decisiones posteriores basadas en argumentos establecidos, según los hallazgos, se toman utilizando datos válidos.
            figure
              img(src='@/assets/curso/temas/tema5/tema5-02-b.svg', alt='')

    Separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.1 Frecuencia de momento de captura

    p.mb-5(data-aos="fade-right") Las capturas y su frecuencia cuentan al momento de la recolección de datos. Mire cómo se establecen estas frecuencias:

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Frecuencia de recopilación de datos")
        .row.justify-content-center.align-items-center
          .col-12
            h4 Frecuencia de recopilación de datos
            p Se refiere a la frecuencia de tiempo con la que se recopilan los datos a intervalos regulares. Esto, a menudo, se refiere a cualquier momento del día o del año en un período determinado. Algunos tipos de valoraciones o mediciones requieren tiempos específicos de medición, esto depende del proceso o el sistema al cual se le está realizando la intervención.
          .col-12.col-md-10.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema5/tema5-03.svg', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Ejemplo frecuencia de muestreo")
        h4 Ejemplo frecuencia de muestreo
        p Si se quiere realizar la recolección de datos de una señal determinada, la frecuencia de momento de captura de datos es el muestreo de información continua del mundo real para generar datos que pueden ser manipulados por una computadora. Esta frecuencia está determinada según el comportamiento de dicha señal; para señales que cambian lentamente, como la temperatura, la única consideración es proporcionar una nueva lectura para que los datos estén razonablemente actualizados. Si la temperatura se lee solo una vez por minuto, es posible que no muestre con precisión la temperatura de un horno que se calienta rápidamente. Es necesaria una frecuencia de muestreo más rápida.
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Precisión en la captura")
        h4 Precisión en la captura
        p En algunas aplicaciones, como la reproducción precisa de un electrocardiograma, es crucial capturar con exactitud los pequeños cambios en una forma de onda. La tasa de cambio más rápida en la señal, medida en voltios por segundo, es un factor importante. Si un medidor digital de tres dígitos se actualiza solo 10 veces por segundo, solo se puede resolver un cambio de un voltio por muestra, equivalente a un dígito de resolución. Para detectar cambios del 1% o 0.1% en una señal de 10 voltios, se requieren tasas de muestreo de 100 y 1000 veces por segundo, respectivamente. Dado que los electrocardiogramas cambian rápidamente en poco tiempo, a pesar de una frecuencia cardíaca de aproximadamente una vez por segundo, es posible que se deba tomar muestras de 100 a 1000 veces por segundo. La precisión en la captura de estos cambios sutiles es crucial para el análisis y diagnóstico médico.

    Separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.2 Cantidad de capturas por momento

    p.mb-5(data-aos="fade-right") Para complementar la información, revise la cantidad de capturas necesarias indicadas en el siguiente recurso y continúe aprendiendo sobre los parámetros de recolección de datos:

    TabsB.color-secundario.mb-5(data-aos="fade-down-right")
      .py-4.py-md-5(titulo="Cantidad capturas")
        .row
          .col-md-8.mb-4.mb-md-0
            p Es la cantidad de datos capturados al momento de realizar cada recolección de los datos. El cálculo de esta cantidad es complejo y depende del tipo de procedimientos utilizados; este parámetro estimará el grado de precisión requerido para esas valoraciones y el nivel de confianza de los resultados.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-04.png', alt='')

      .py-4.py-md-5(titulo="Mayor precisión")
        .row
          .col-md-8.mb-4.mb-md-0
            p La mayor cantidad de capturas o muestras, generalmente, conduce a una mayor precisión al estimar parámetros desconocidos. Por ejemplo, si deseamos conocer la proporción de una determinada especie de pez que está infectada con un patógeno, por lo general, se tendría una estimación más precisa de esta proporción si se toman muestras y se examinan 200 en lugar de 100 peces. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-05.png', alt='')

      .py-4.py-md-5(titulo="Estadística matemática")
        .row
          .col-md-8.mb-4.mb-md-0
            p Varios hechos fundamentales de la estadística matemática describen este fenómeno, incluida la ley de los grandes números y el teorema del límite central. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-06.png', alt='')

      .py-4.py-md-5(titulo="Errores sistemáticos")
        .row
          .col-md-8.mb-4.mb-md-0
            p En algunas situaciones, el aumento de precisión para una mayor cantidad de capturas es mínimo o incluso inexistente. Esto puede deberse a la presencia de errores sistemáticos o una fuerte dependencia en los datos. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-07.png', alt='')

      .py-4.py-md-5(titulo="Estimaciones")
        .row
          .col-md-8.mb-4.mb-md-0
            p La cantidad de capturas puede evaluarse por la calidad de las estimaciones resultantes. Por ejemplo, si se está estimando una proporción, se puede desear que el intervalo de confianza del 95 % tenga menos de 0,06 unidades de ancho. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-08.png', alt='')

      .py-4.py-md-5(titulo="Prueba de hipótesis")
        .row
          .col-md-8.mb-4.mb-md-0
            p Alternativamente, la cantidad de capturas o muestras pueden evaluarse en función del poder de una prueba de hipótesis. Por ejemplo, si se compara el apoyo a un determinado candidato político entre las mujeres con el apoyo a ese candidato entre los hombres, es posible que se desee tener un poder del 80 % para detectar una diferencia en los niveles de apoyo de 0,04 unidades. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema5/tema5-09.png', alt='')

    Separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.3 Cantidad total de datos a capturar

    p.mb-5(data-aos="fade-right") Revise la cantidad total de datos a través de la siguiente información:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down-left")
      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-10.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center Hace aproximadamente 50 años, el primer disco duro para PC tenía capacidad de almacenamiento de 50 MB, un tamaño como el de una nevera casera y un peso aproximado de una tonelada.

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-11.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center Hoy disponemos de discos de estado sólido de 1 TB, del tamaño del bolsillo de nuestras camisas y de unos 40 gr de peso. 

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-12.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center Esta facilidad de almacenamiento ha llevado a la errónea conclusión que, cuanto más grande la cantidad de datos, mejor el análisis y sus conclusiones, cuando es en realidad el contexto de la información adquirida el que determina el volumen de los datos necesarios para el análisis.

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-13.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center En este orden de ideas, cobran relevancia factores como: 
            p.mb-0.text-center ¿Cuál es el costo unitario de la adquisición, almacenamiento y procesamiento del dato?
            p.text-center ¿Cuál es la velocidad con la que deben ser adquiridos y procesados los datos?

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-14.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center Y sin embargo, a pesar de conocer la respuesta a estas preguntas, determinar cuánto es suficiente en el volumen de los datos es una tarea muy difícil de realizar a priori, siendo el método de prueba y error el más ampliamente usado. 

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-15.png' alt='AvatarTop')
          .col-12.p-4
            p.text-center En cambio, es más fácil determinar por métodos matemáticos la cantidad mínima de datos necesaria para soportar estadísticamente las conclusiones alcanzadas. 

      .tarjeta.tarjeta--gris.p-0
        .row.justify-content-center.mb-3
          .col-12.pt-4.px-4
            p.text-center.mb-0 Uno de tales métodos es el de intervalos de confianza, que consiste en determinar los valores límites de un intervalo dentro del cual una variable puede encontrarse con una probabilidad especificada. En este método, la cantidad mínima de datos “n” se determina así:
          .col-12
            img(src='@/assets/curso/temas/tema5/tema5-16.png' alt='AvatarTop')
          .col-12.px-4
            p.text-center.mb-md-0 donde ▁X, S y d son la media, la desviación estándar y el porcentaje de desviación de la media del intervalo de los datos y t#[sub n-1,α/2]  el valor de la distribución t student con n-1 grados de libertad y 5% de nivel de significancia.

    Separador
    #t_5_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.4 Técnicas de estabilización de datos

    p.mb-5(data-aos="fade-right") Se refiere a las diferentes técnicas o métodos, ya sean físicos o lógicos, que se aplican cuando los datos capturados o a capturar presentan una alta variación o errores al momento de ser capturados. Revise cómo se realiza esta técnica:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-17.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2 Métodos físicos
            p.text-small Estos son métodos tipo #[i hardware], que normalmente son aplicados antes de iniciar un proceso de captura y trabajan directamente sobre las señales, ya sean alámbricas o inalámbricas. 
            p.text-small Su propósito es que una determinada señal se capture en sus óptimas condiciones, evitando que al momento de ser capturada tenga ruido, interferencia o atenuación. Los más conocidos son:
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-18.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos físicos
            p.mb-1.text-small #[strong Filtros de señal:] un filtro es un dispositivo o proceso que elimina algunos componentes o características no deseadas de una señal. El filtrado es una clase de procesamiento de señales, siendo la característica definitoria de los filtros la supresión total o parcial de algún aspecto de la señal.
            p.mb-1.text-small La mayoría de las veces, esto significa eliminar algunas frecuencias o bandas de frecuencia. Sin embargo, los filtros no actúan exclusivamente en el dominio de la frecuencia; especialmente, en el campo del procesamiento de imágenes, existen muchos otros objetivos para el filtrado.
            p.mb-1.text-small Las correlaciones se pueden eliminar para ciertos componentes de frecuencia y no para otros, sin tener que actuar en el dominio de la frecuencia. 
            p.mb-1.text-small Los filtros se utilizan ampliamente en electrónica y telecomunicaciones, en radio, televisión, grabación de audio, radar, sistemas de control, síntesis de música, procesamiento de imágenes y gráficos por computadora.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-19.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos físicos
            p.mb-1.text-small #[strong Acondicionadores de señal:] un acondicionador de señal es una técnica que se hace mediante un dispositivo, que convierte un tipo de señal electrónica en otro tipo de señal. Su uso principal es convertir una señal que puede ser difícil de leer con la instrumentación convencional en un formato de lectura más fácil. Al realizar esta conversión, pueden tener lugar una serie de funciones.
            p.mb-1.text-small El acondicionamiento de señales es un proceso vital, que se realiza dentro del sistema de adquisición de datos. Implica la manipulación de la salida de señal analógica de los sensores, para prepararla para la siguiente etapa de procesamiento. El acondicionamiento de señales amplifica y convierte las señales de los sensores o transductores en una forma compatible y fácil de leer para el sistema de adquisición de datos (DAQ).
            p.mb-1.text-small Este proceso de "acondicionamiento" de las señales se realiza a través de un instrumento llamado acondicionador de señales. Es el primer paso para obtener una medición precisa de la señal con sistemas de adquisición de datos.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-20.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos físicos
            p.mb-1.text-small #[strong Repetidores de señal:] un repetidor es un dispositivo electrónico que recibe una señal y la retransmite. Los repetidores se utilizan para extender las transmisiones, de modo que la señal pueda cubrir distancias más largas o ser recibida al otro lado de una obstrucción.
            p.mb-1.text-small Algunos tipos de repetidores emiten una señal idéntica, pero alteran su método de transmisión, por ejemplo, en otra frecuencia o velocidad en baudios.
            p.mb-1.text-small Hay varios tipos diferentes de repetidores; un repetidor telefónico es un amplificador en una línea telefónica, un repetidor óptico es un circuito optoelectrónico que amplifica el haz de luz en un cable de fibra óptica; y un repetidor de radio es un receptor y transmisor de radio que retransmite una señal de radio.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-21.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos lógicos
            p.mb-1.text-small Estos son métodos tipo #[i software] que, normalmente, son aplicados a los datos ya capturados. Su propósito es que los datos capturados se les trate para que cualquier error o mal comportamiento en ellos sea detectado o mitigado, y así establecer unas óptimas condiciones para su posterior análisis. Los más conocidos son:
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-22.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos lógicos
            p.mb-1.text-small #[strong Técnicas de suavizado:] en los casos en que la serie temporal carece de tendencias significativas, se pueden utilizar técnicas de suavizado para eliminar una variación aleatoria de la demanda histórica. Esto ayuda a identificar patrones y niveles de demanda que pueden ser usados para estimar la demanda futura.
            p.mb-1.text-small Los métodos más comunes utilizados en las técnicas de suavizado de la previsión de la demanda son el método de media móvil simple y el método de media móvil ponderada.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-23.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos lógicos
            p.mb-1.text-small Una vez que haya ingresado sus datos en una hoja de cálculo o paquete de análisis, es esencial realizar algunas verificaciones básicas antes de comenzar su análisis principal. Si los datos se han recopilado automáticamente, por ejemplo, de un cuestionario basado en la web, esto no suele ser un problema. Sin embargo, aún debe verificar si hay duplicados (particularmente cuando se ha ofrecido un incentivo a los participantes). Si los datos se ingresan manualmente, entonces se deben incorporar algunas medidas de control de calidad en el proceso de ingreso de datos.
            p.mb-1.text-small Siempre es valioso realizar un análisis de distribución simple, mostrando cuántos encuestados han marcado cada respuesta a cada pregunta. Esto identificará cualquier error de codificación donde se hayan ingresado códigos fuera de rango y resaltará cualquier valor inusual.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-24.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos lógicos
            p.mb-1.text-small #[strong Detectar valores atípicos:] en algunos análisis, los valores atípicos (valores individuales que son particularmente altos o bajos) pueden afectar materialmente los resultados. En tales casos, puede ser conveniente y legítimo omitirlos del análisis. Detectarlos es, en gran medida, subjetivo: un gráfico de la distribución de datos suele ser adecuado para detectar valores extremos. 
            p.mb-1.text-small Una prueba más objetiva es examinar como posible valor atípico cualquier valor que sea más de 3 desviaciones estándar de la media de la distribución. Los valores atípicos pueden ser indicativos de errores en los datos o de individuos atípicos en la población.
        .row.justify-content-center.align-items-center
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/tema5-25.png', alt='')
          .col-md-6.mb-4.mb-md-0
            h2.mb-1 Métodos lógicos
            p.mb-1.text-small #[strong Ejemplo de valor atípico:] en este conjunto de datos (ficticios), dos puntos se destacan claramente del resto y deben investigarse. Como se observa en la siguiente figura, los puntos rojos tienen un comportamiento evidentemente muy diferente al resto de los puntos.

    Separador
    #t_5_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 5.5 Normalización de datos 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.mb-4.mb-md-0(data-aos="fade-right")
        p En estadística y aplicaciones de estadística, la normalización puede tener una variedad de significados. En los casos más simples, la normalización de las calificaciones significa ajustar los valores medidos en diferentes escalas a una escala teóricamente común, a menudo, antes de promediar. 
        .anexo.anexo-custom.mb-4
          .anexo__icono
            img(src="@/assets/curso/temas/ico-lapiz.svg")
          .anexo__texto
            h4 ¿Sabías qué?
            p En otro uso en estadística, la normalización se refiere a la creación de versiones de estadísticas desplazadas y escaladas, donde la intención es que estos valores normalizados permitan la comparación de los valores normalizados correspondientes para diferentes conjuntos de datos, de una manera que elimine los efectos de ciertas influencias brutas, como en una serie temporal de anomalías. 
      .col-md-5.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-26.png', alt='')


    .row.justify-content-center.align-items-center.mb-4 
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        ImagenInfografica.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/tema5-infografia.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="15%" y="5%" numero="1")
            .row.justify-content-center.align-items-center
              .col-12
                p En casos más complicados, la normalización puede referirse a ajustes más sofisticados, donde la intención es alinear todas las distribuciones de probabilidad de los valores ajustados.
          .tarjeta.color-acento-botones.p-3(x="24%" y="55%" numero="2")
            .row.justify-content-center.align-items-center
              .col-12
                p En el caso de la normalización de las puntuaciones en la evaluación educativa, puede existir la intención de alinear las distribuciones con una distribución normal.
          .tarjeta.color-acento-botones.p-3(x="15%" y="88%" numero="3")
            .row.justify-content-center.align-items-center
              .col-12
                p Un enfoque diferente para la normalización de distribuciones de probabilidad es la normalización de cuantiles, donde los cuantiles de las diferentes medidas se alinean.
          .tarjeta.color-acento-botones.p-3(x="55%" y="30%" numero="4")
            .row.justify-content-center.align-items-center
              .col-12
                p Algunos tipos de normalización implican solo un cambio de escala para llegar a valores relativos a alguna variable de tamaño.
          .tarjeta.color-acento-botones.p-3(x="75%" y="14%" numero="5")
            .row.justify-content-center.align-items-center
              .col-12
                p En términos de niveles de medición, tales razones sólo tienen sentido para las medidas de razón (donde las razones de las medidas son significativas), no las medidas de intervalo (donde solo las distancias son significativas, pero no las razones).
          .tarjeta.color-acento-botones.p-3(x="96%" y="80%" numero="6")
            .row.justify-content-center.align-items-center
              .col-12
                p En las estadísticas teóricas, la normalización paramétrica, a menudo, puede conducir a cantidades fundamentales (funciones cuya distribución de muestreo no depende de los parámetros) y a estadísticas auxiliares, cantidades fundamentales que se pueden calcular a partir de observaciones, sin conocer los parámetros.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-10.col-lg-8(data-aos="fade-down-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo 4 - Tipos De Normalización De Datos Más Comunes.docx')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-doc.svg")
          .anexo__texto
            p #[strong Anexo 4.] Para mayor información, descargue el siguiente documento: Tipos De Normalización De Datos Más Comunes.docx







</template>

<script>
export default {
  name: 'Tema5',
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
