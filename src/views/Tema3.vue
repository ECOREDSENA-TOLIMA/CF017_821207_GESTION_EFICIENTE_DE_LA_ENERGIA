<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Fuentes de recolección de la información

    p.mb-5(data-aos="fade-right") Le invitamos a que revise, en la siguiente didáctica, las fuentes primarias y fuentes secundarias:

    .row.justify-content-center.align-items-center.mb-4 
      .col-12.col-lg-11(data-aos="fade-right")
        ImagenInfograficaB.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='')
          .row.justify-content-center.align-items-center.p-3(x="2%" y="68%" tooltip="1" numero="1")
            .col-12
              p Normalmente, es posible recopilar datos de dos fuentes, a saber, primaria y secundaria. Los datos recopilados mediante la revisión de la percepción o el cuestionario, en un entorno característico, son ilustraciones de los datos obtenidos en una situación no controlada. Los datos secundarios son los datos adquiridos de fuentes opcionales, como revistas, libros, documentos, informes, la web y más. A continuación, se describe el flujo de las fuentes de recopilación de datos. 
            .col-md-6.col-12
              figure
                img(src='@/assets/curso/temas/tema3/tema3-02.svg', alt='Fuentes: a) primarias: comprendidas por persona y echos. b) secundarias: comprendidas por material impreso.')
          .row.justify-content-center.align-items-center.p-3(x="30%" y="75%" tooltip="1" numero="2")
            .col-12
              h3 Fuentes primarias
              p Los datos primarios serán los datos que recopile, especialmente, con el objetivo final de su empresa de investigación. El aprovechamiento de los datos primarios es que se personalizan, especialmente, para sus necesidades de análisis. Un inconveniente es que es costoso conseguirlo. Los datos primarios también se denominan información en bruto; la información obtenida de la primera fuente en una situación controlada o incontrolada.
          .row.justify-content-center.align-items-center.p-3(x="43%" y="26%" tooltip="3" numero="3")
            .col-12
              p Los casos de dominio controlado son estudios experimentales en los que el analista controla determinadas variables. La fuente de los datos primarios es la prueba de población de la que recopila la información. La fase inicial del proceso es decidir su población objetivo. Por ejemplo, si está buscando el atractivo de otra lavadora, su población objetivo pueden ser los recién casados.
          .row.justify-content-center.align-items-center.p-3(x="54%" y="69%" tooltip="4" numero="4")
            .col-12
              p Claramente, es impracticable recopilar información de todos, por lo que deberá concentrarse en el tamaño de la muestra y el tipo de muestra. El espécimen debe ser arbitrario y una muestra aleatoria estratificada suele ser sensata. En nuestra ilustración de la lavadora, las subpoblaciones pueden incluir parejas de adolescentes, parejas de edad moderada, parejas de ancianos y parejas previamente casadas.
          .row.justify-content-center.align-items-center.p-3(x="75%" y="18%" tooltip="5" numero="5")
            .col-12
              h3 Fuentes secundarias
              p Las fuentes de datos secundarias se pueden dividir en fuentes internas y externas. Las fuentes internas incorporan datos que existen y se almacenan en su organización. Los datos externos se refieren a los datos recopilados por otras personas o asociaciones del entorno exterior de su asociación. Los ejemplos de fuentes internas de datos incorporan, entre otros, los siguientes:
              ol.lista-ol--cuadro
                li 
                  .lista-ul__vineta
                    | Estado de pérdidas y ganancias.
                li 
                  .lista-ul__vineta
                    | Balances.
                li 
                  .lista-ul__vineta
                    | Cifras de ventas.
                li 
                  .lista-ul__vineta
                    | Registros de inventario.
                li 
                  .lista-ul__vineta
                    | Estudios de #[em marketing] previos.

          .row.justify-content-center.align-items-center.p-3(x="81%" y="66%" tooltip="6" numero="6")
            .col-12
              p Si los datos secundarios que ha recopilado de fuentes internas no son suficientes, puede recurrir a fuentes externas de recopilación de datos; algunas fuentes externas de recopilación de datos incluyen:
              ol.lista-ol--cuadro
                li 
                  .lista-ul__vineta
                    | Universidades.
                li 
                  .lista-ul__vineta
                    | Fuentes gubernamentales.
                li 
                  .lista-ul__vineta
                    | Cimientos.
                li 
                  .lista-ul__vineta
                    | Medios, incluidos transmisión por televisión, impresos e Internet.
                li 
                  .lista-ul__vineta
                    | Afiliaciones comerciales, empresariales y de expertos.
                li 
                  .lista-ul__vineta
                    | Presentaciones corporativas.
                li 
                  .lista-ul__vineta
                    | Administraciones de información comercial, que son organizaciones que encuentran los datos por usted.


</template>

<script>
export default {
  name: 'Tema3',
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
