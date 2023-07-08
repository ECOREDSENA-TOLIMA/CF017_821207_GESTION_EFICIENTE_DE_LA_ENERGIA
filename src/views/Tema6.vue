<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Clasificación de datos

    p.mb-5(data-aos="fade-right") La clasificación de datos precisa de 6 pasos, revise cada uno de ellos:


    .row.justify-content-center.align-items-center.mb-4.py-2(style="background-color:#EAF7FF")
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-down-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Apertura, transparencia y valores sociales.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Enfoque basado en el contenido y tecnológicamente neutral.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Enfoque de gestión y riesgo.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Proporcionalidad.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Papeles y responsabilidades claras.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Enfoque del ciclo de vida.
      .col-12.col-md-6.col-lg-5.mb-5.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema6/tema6-01.png', alt='')

    p.mb-5(data-aos="fade-right") La implementación de la gestión de la información, en general, y la clasificación de datos, en particular, varían según el tipo de organización y pueden, incluso, variar según la organización individual. Sin embargo, ciertos principios fundamentales son comunes entre gobiernos, organizaciones no gubernamentales y organizaciones comerciales.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-left")
      .col-12
        .cajon.color-primario.p-4.mb-4
          p El siguiente es un refinamiento de seis principios expresados por fuentes legales nacionales (y regionales) e instrumentos de organizaciones internacionales para gestión de la información. Los principios a continuación deben utilizarse como una guía en lugar de un único referente permanente en la construcción o refinamiento de una gestión de la información y estrategia de clasificación de datos.
    

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-lg-9.col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/tema6-02.svg', alt='') 


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-03.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Apertura, transparencia y valores sociales 
        p.text-small La clasificación debe usarse con cautela y de acuerdo con la sensibilidad, el valor y la criticidad de los datos. Las restricciones de acceso solo deben elegirse para los casos en que la divulgación de información pueda ser perjudicial para los intereses legítimos y las obligaciones legales de la propia organización, su personal o terceros.
        p.text-small En tales casos, se deben observar estrictamente los procedimientos especificados para garantizar que la información no se vea comprometida ni intencionalmente ni inadvertidamente.  
        p.text-small El desafío será no sobre clasificar por conveniencia o conveniencia; perjudicial para la transparencia y la confianza pública, y priva a las partes interesadas de la propiedad de sus propias decisiones de gestión de riesgos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-04.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Enfoque basado en el contenido y tecnológicamente neutral
        p.text-small La información debe clasificarse en función de su contenido y los riesgos asociados con el compromiso del contenido, independientemente de su formato, medio u origen.
        p.text-small No debe haber discriminación basada en el formato o el medio de la información, ya sea analógica (papel) o digital; almacenada en un sistema de información, en medios de almacenamiento, en dispositivos móviles o en la nube. 
        p.text-small Asimismo, la decisión de clasificar la información debe depender del contenido en sí y no necesariamente derivar automáticamente de la fuente en la que se basa la información, a la que responde o se refiere.
        p.text-small Por ejemplo, la confianza en fuentes públicas no debería determinar automáticamente que la información agregada debería ser divulgada públicamente.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-05.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Enfoque de gestión y riesgo
        p.text-small Se debe brindar protección a la información de acuerdo con el nivel de sensibilidad, valor y criticidad de esta.  
        p.text-small Un nivel de protección circunscribe el conjunto de medidas para reducir los riesgos a un nivel aceptable, es decir, la posible gravedad y probabilidad de que la información se vea comprometida.
        p.text-small Al determinar el nivel de sensibilidad y el valor de la información, se deben tener en cuenta tanto el grado de daño potencial de compromiso (divulgación no autorizada, modificación o pérdida) como el valor potencial de los datos. 
        p.text-small La protección generalmente se realiza con un enfoque graduado, basado en niveles correspondientes al valor y el riesgo.    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-06.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Proporcionalidad
        p.text-small La información se clasificará en un nivel apropiado, que debería ser lo más bajo posible, pero tan alto como sea necesario.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-07.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Papeles y responsabilidades claras
        p.text-small Con respecto a la clasificación de datos, la política y los procesos deben asignarse para la seguridad de la información dentro de la organización, y deben respaldarse por la conciencia de la administración y el compromiso con la seguridad de la información.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/tema6-08.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        h4 Enfoque del ciclo de vida
        p.text-small Como parte de un sistema de gestión de la información, el sistema de clasificación debe tener en cuenta la información a lo largo de su ciclo de vida: desde la creación o recepción, el almacenamiento, la recuperación, las modificaciones, la transferencia, la copia y la transmisión, hasta la destrucción. 
        p.text-small Además, la política de gestión de información / procesamiento de datos de una organización no debe estar escrita en piedra, sino que debe evaluarse periódicamente, para garantizar que se corresponda con las necesidades y expectativas de la organización.


    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-down-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo 5 - Clasificación de datos 2019.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo 5.] Para más información sobre clasificación de datos, descargue el siguiente documento: Clasificación de datos 2019.pdf 



</template>

<script>
export default {
  name: 'Tema6',
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
