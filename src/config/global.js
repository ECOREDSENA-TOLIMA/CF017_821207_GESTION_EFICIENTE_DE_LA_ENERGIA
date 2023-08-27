export default {
  global: {
    componenteFormativo: 'Recolección de datos e inventarios',
    descripcionCurso:
      'Un sistema de gestión de energía es eficiente cuando la evaluación de los indicadores establecidos así lo demuestra. Y la evaluación de dichos indicadores solo se puede hacer con los datos que arrojan los procesos que se desean controlar. Por esta razón, es necesario desarrollar conocimiento y habilidades en las técnicas de recolección de datos y manejo de inventario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas informáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Herramientas informáticas tipo <i>hardware</i> más conocidas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Herramientas informáticas tipo <i>software</i> más conocidas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Datos numéricos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Datos booleanos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Datos de fecha y hora',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Datos de texto',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fuentes de recolección de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Recolección de la información e importación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Recolección de forma manual (observación, escritura y digitalización)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Recolección de forma lógica (importación de archivos de datos, captura de datos por interfaz de comunicación)',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Parámetros para la recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Frecuencia de momento de captura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cantidad de capturas por momento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Cantidad total de datos a capturar',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnicas de estabilización de datos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Normalización de datos',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Clasificación de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Definiciones y aplicaciones',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas de inventarios más conocidas',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Herramientas <i>software</i> para inventarios más comunes',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_017.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Herramientas informáticas tipo hardware más conocidas.',
      referencia:
        'Para Profesores. (2020). <i>¿Qué es Hardware? Definición animada. Informática Básica</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-jyNtg6JGRM',
    },
    {
      tema: 'Herramientas informáticas tipo <i>software</i> más conocidas.',
      referencia:
        'Willwillwesp. (2009). <i>Qué es el software</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pegiw2iVUY8',
    },
    {
      tema: 'Tipos de datos.',
      referencia:
        'Leycom. (2017). <i>Tipos de datos en Excel</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IZJ9_cD3NWc',
    },
  ],
  glosario: [
    {
      termino: 'A <i>priori</i>',
      significado:
        'Expresión que indica que las acciones se ejecutan sin saber el resultado.',
    },
    {
      termino: 'Archivo',
      significado:
        'Documento generado con una aplicación que se almacena en una unidad.',
    },
    {
      termino: 'Bajar',
      significado:
        'Descargar o transferir a nuestro ordenador archivos de <i>Internet.</i>',
    },
    {
      termino: '<i>Buffer</i>',
      significado:
        'Memoria intermedia que se utiliza en distintos periféricos.',
    },
    {
      termino: 'Coma flotante',
      significado:
        'Cálculo que realiza el procesador de operaciones con decimales.',
    },
    {
      termino: 'Controlador (<i>driver</i>)',
      significado:
        'Pequeño programa que sirve para reconocer y controlar un dispositivo de <i>hardware</i> específico.',
    },
    {
      termino: 'CPU',
      significado: 'Unidad Central de Proceso.',
    },
    {
      termino: 'Digitalizar',
      significado:
        'Convertir al lenguaje del ordenador (en bits) cualquier tipo de información gráfica, de audio o video.',
    },
    {
      termino: '<i>Hardware</i>',
      significado: 'Partes duras de un ordenador o componentes de este.',
    },
    {
      termino: 'Hoja de cálculo',
      significado:
        'Aplicación en forma tabular, compuesta por columnas, filas y celdas que permiten realizar cálculos complejos, trabajar con fórmulas, funciones, analizar datos, dar formato y hacer complicados gráficos procedentes de los datos introducidos.',
    },
    {
      termino: 'Interfaz',
      significado:
        'Aspecto que presentan los programas tras su ejecución, mediante el cual ejercemos la comunicación con estos.',
    },
    {
      termino: 'Microprocesador',
      significado:
        'Unidad de proceso y corazón del ordenador. Podríamos decir que es el jefe del ordenador, el cual procesa y distribuye el trabajo a los demás componentes del ordenador.',
    },
    {
      termino: 'Procesador de texto',
      significado: 'Programa diseñado para escribir y tratar textos.',
    },
    {
      termino: 'T student',
      significado:
        'Distribución de probabilidad usada para estimar medias de muestras cuando no se conoce la desviación estándar de la población.',
    },
    {
      termino: 'Servidor',
      significado:
        'Equipo que controla el acceso de los usuarios a una red y les da servicio e información.',
    },
    {
      termino: 'Sistema',
      significado:
        'Conjunto formado por el <i>hardware</i> y <i>software</i> que componen la parte esencial del ordenador.',
    },
    {
      termino: 'USB (Universal Serial Bus)',
      significado:
        'Conector de dispositivos externos que hace de vía de ampliación de los nuevos ordenadores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camousseigt, I. (2012). Sistema de Adquisición de Datos y Transferencia Remota. <i>Trilogía Ciencia · Tecnología · Sociedad,</i> (24), p. 157-160. ',
      link:
        'https://trilogia.utem.cl/wp-content/uploads/sites/9/2018/01/articulo16_trilogia_vol24n34.pdf',
    },
    {
      referencia:
        'Cottino, D. (2009). <i>Hardware</i> desde cero. <i>Users.</i> ',
      link:
        'https://fricardoac.files.wordpress.com/2015/02/hardware-desde-cero-www-librosfull-com.pdf',
    },
    {
      referencia:
        'Cruz, A. (2018). <i>Gestión de inventarios. COML0210.</i> ic editorial. ',
      link:
        'https://www.iceditorial.com/gestion-y-control-del-aprovisionamiento-coml0210-e/8085-gestion-de-inventarios-coml0210--9788491981909.html',
    },
    {
      referencia:
        'Durán, Y. (2012). Administración del inventario: elemento clave para la optimización de las utilidades en las empresas. <i>Visión Gerencial</i>, (1), p. 55-78. ',
      link: 'https://www.redalyc.org/pdf/4655/465545892008.pdf',
    },
    {
      referencia:
        'Moreno, A. (2011). <i>Sistemas de adquisición de datos.</i> Universidad de Buenos Aires. ',
      link:
        'http://materias.df.uba.ar/l4a2018v/files/2018/01/Adquisici%C3%B3n_labo42011-AMoreno.pdf',
    },
    {
      referencia:
        'Moreno, J. (2019). <i>Fundamentos de hardware.</i> Editorial Síntesis.',
      link: 'https://www.sintesis.com/data/indices/9788491712947.pdf',
    },
    {
      referencia:
        'Orellana, D. y Sánchez, M. (2006). Técnicas de recolección de datos en entornos virtuales más usadas en la investigación cualitativa. <i>Revista de Investigación Educativa,</i> 24(1), p. 205-222. ',
      link: 'https://www.redalyc.org/pdf/2833/283321886011.pdf',
    },
    {
      referencia:
        'Barot, T., Srivastava, G. y Mago, V. (2020). <i>Determining Sufficient Volume of Data for Analysis with Statistical Framework.</i> Springer International Publishing. ',
      link:
        'https://www.springerprofessional.de/en/determining-sufficient-volume-of-data-for-analysis-with-statisti/18346230',
    },
    {
      referencia:
        'Torres, M. y Paz, K. (s. f.). <i>Métodos de recolección de datos para una investigación.</i> Universidad Rafael Landívar. ',
      link:
        'https://fgsalazar.net/LANDIVAR/ING-PRIMERO/boletin03/URL_03_BAS01.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Jaime Mauricio Peñaloza Trespalacios',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
