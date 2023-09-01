<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El Componente aborda la recolección de datos e inventarios en el contexto de la gestión de información. Explora las herramientas informáticas tanto de #[i hardware] como de #[i software] utilizadas en este proceso, desde dispositivos físicos hasta programas y aplicaciones especializadas. También se examinan los distintos tipos de datos, como numéricos, booleanos, de fecha y hora, y de texto, junto con su importancia y características.
    p Además, se analizan las fuentes de recolección de información, que pueden ser encuestas, observaciones o bases de datos existentes, y se exploran las técnicas de recolección, desde métodos manuales hasta la importación de datos a través de interfaces de comunicación.
    p El componente también destaca la importancia de establecer parámetros para la recolección de datos, como la frecuencia de captura, la cantidad de capturas por momento y la estabilización y normalización de los datos recopilados. Asimismo, se examina la clasificación de datos y su organización en categorías o grupos.
    p.mb-5 Finalmente, se aborda el tema de los inventarios, que son registros detallados de los bienes o recursos disponibles en un momento dado. Se exploran las definiciones y aplicaciones de los inventarios, así como las técnicas y herramientas de #[i software] más comunes utilizadas en su gestión.

    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis. El diagrama presenta la síntesis del componente formativo, acorde a la descripción previa presentada. El Componente de recolección de datos e inventarios aborda los temas en el contexto de la gestión de información.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
