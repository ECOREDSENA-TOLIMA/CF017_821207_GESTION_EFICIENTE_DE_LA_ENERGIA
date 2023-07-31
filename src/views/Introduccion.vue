<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") El desarrollo de la civilización ha estado históricamente ligado a la capacidad de observar y reunir información. El estudio de esta información es lo que ha hecho posible encontrar las soluciones a todos los problemas a los que la humanidad se ha enfrentado como especie. Y es en este último siglo que se ha experimentado la mayor aceleración en el aumento de la capacidad de adquirir, almacenar y procesar datos de diferente naturaleza, gracias a la conexión de dispositivos y sensores a la Internet, resultando todo esto en lo que hoy se conoce con el concepto de macrodato o #[em Big Data]. Sabiendo esto, lo invitamos a ver el siguiente video introductorio que explica lo que tratará este componente:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pddguZn8d2g" title="Recolección de datos e inventarios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
