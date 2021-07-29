export default {
  global: {
    componenteFormativo: 'Animación y edición de sonidos',
    descripcionCurso:
      'Se explican conceptos básicos de <i>rigging</i>, animación y sonido. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<i>Rigging</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción al <i>rigging</i>',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Creación de esqueleto y sistemas de control',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<i>Skinning</i>',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Curvas de control',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: '<em>Rig</em> facial y <i>blendshapes</i>',
            hash: 't1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Ajustes finales y <i>scripting</i>',
            hash: 't1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: '<i>Addon riggify</i>',
            hash: 't1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: '<i>Autorig</i> con Mixamo ',
            hash: 't1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: '<i>Skinning</i> y pesos',
            hash: 't1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Historia de la animación',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de animación',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principios de animación',
            hash: 't2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animaciones básicas',
            hash: 't2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentos básicos de sonido',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características del sonido',
            hash: 't3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El sonido en los videojuegos',
            hash: 't3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Formatos de sonido',
            hash: 't3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Exportación objetos y sonidos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Animacam. (2016). Los inicios de la animación: Émile Reynaud. Animacam',
      link: 'http://animacam.tv/los-inicios-de-la-animacion-emile-reynaud/',
    },
    {
      referencia: 'Bitable. (2020). What is Motion Graphics? Bitable.',
      link: 'https://biteable.com/blog/what-is-motion-graphics/',
    },
    {
      referencia:
        'Bloop Animation Studios LLC. (2020). The 5 Types of Animation. Bloop Animation Studios LLC.',
      link: 'https://www.bloopanimation.com/types-of-animation/',
    },
    {
      referencia:
        'Franch, A., T. (2014). Introducción al diseño de los videojuegos. Universitat Oberta de Catalunya (UOC).',
    },
    {
      referencia:
        'Gutman, D., y Risso, H. (2013). El sonido: conceptos básicos. CePIA. ',
    },
    {
      referencia:
        'Laybourne. (1998). The Animation Book: a Complete Guide to Animated Filmmaking - From Flip-books to Sound Cartoons to 3-D Animation. Three Rivers Press.',
    },
    {
      referencia:
        'León, G., D., y Acero, O., H. (2020). Fundamentos de sonido: conociendo el sonido y sus aplicaciones. Poligran.',
      link:
        'https://journal.poligran.edu.co/index.php/libros/article/view/2270',
    },
    {
      referencia:
        'Oh my Disney. (2016). The 12 Principles of Animation as Illustrated Through Disney and Disney Pixar Films. Oh my Disney.',
      link:
        'https://ohmy.disney.com/movies/2016/07/20/twelve-principles-animation-disney/',
    },
    {
      referencia:
        'Osipa, J. (2010). Stop Staring, Facial Modeling and Animation Done Right. Wiley Publishing, Inc.',
    },
    {
      referencia:
        'Pluralsight. (2014). Understanding Skinning - The Vital Step for Any Rigging Project. Pluralsight.',
      link:
        'https://www.pluralsight.com/blog/film-games/understanding-skinning-vital-step-rigging-project ',
    },
    {
      referencia: 'Selby, A. (2013). La animación. Editorial Blume.',
    },
    {
      referencia:
        'Thomas, F., y Johnston, O. (1981). The Ilussion of Life Disney Animation. Disney Editions.',
    },
    {
      referencia:
        'Williams, R. (2009). The animator’s Surviva Kit. Faber and Faber.',
    },
  ],
  glosario: [
    {
      termino: 'Atmósfera',
      significado:
        'ambiente visual y sonoro creado para un videojuego, de tal manera que el jugador se sienta inmerso en el juego.',
    },
    {
      termino: 'Blender',
      significado:
        'programa multiplataforma de software libre (gratis) utilizado para el modelado, texturizado, renderizado, animación, edición y diseño de objetos tridimensionales.',
    },
    {
      termino: 'Decibeles',
      significado:
        'unidad física utilizada para medir la intensidad de un sonido, presión y tensión sonora.',
    },
    {
      termino: 'Frame',
      significado:
        'secuencia ordenada de imágenes estáticas que logran crear la ilusión de movimiento.',
    },
    {
      termino: 'Hertzios o Hertz ',
      significado:
        'unidad utilizada para medir la frecuencia de unas ondas y oscilaciones electromagnéticas.',
    },
    {
      termino: 'Loops',
      significado:
        'repeticiones que se pueden dar de un mismo elemento animado. Ejemplo, un hámster corriendo en una jaula.',
    },
    {
      termino: 'Perceptor',
      significado:
        'mecanismo que poseen los animales o humanos para captar información por medio de sus sentidos ya sea a través de su visión, audición, tacto, gusto u olfato.',
    },
    {
      termino: 'Rigging',
      significado:
        'proceso de construir una estructura esquelética y articulada, para que un personaje u objeto se mueva correctamente al animarlo.',
    },
    {
      termino: 'Skinning',
      significado:
        'proceso de aplicación de una malla o piel, a la estructura metálica (rigging) del objeto o personaje, de manera que permita una correcta deformación al seguir el movimiento.',
    },
  ],
  complementario: [
    {
      texto:
        'Games, T. f. (2017). Skeleton Attack Animations Pack. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/D70hSa5zA78',
    },
    {
      texto: 'Artnatomy. (2019). Home.',
      tipo: 'Aplicación web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      texto: 'Freesound. (2021). Freesound. https://freesound.org',
      tipo: 'Sitio web',
      link: 'https://freesound.org',
    },
    {
      texto:
        'Escardo Club de Animación 3d. (2014). Tutorial de animación 3D: Brazos IK FK en Personajes / Rigs en Maya, Blender, 3DsMax, C4D. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/oEHBqiq97jA',
    },
    {
      texto:
        'Osipa, J. (2021). Stop staring: facial modeling and animation done rigth. Serious Skill.',
      tipo: 'Sitio web',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
    },
    {
      texto:
        'Instituto Cardan. (2016). Cómo funciona Audacity (software gratis). Tutorial español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ge6s3ZSO26U',
    },
    {
      texto:
        'SENA. (2021). Actividades - Práctica con archivos prediseñados. SENA.',
      tipo: 'Documento',
      descarga: '/downloads/CF003_Actividad_1.zip',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Alexander García Ángel',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martín Moreno',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Fabián Andrés Gómez Pico',
        cargo: 'Experto temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Johnier Felipe Perafán Ledezma',
        cargo: 'Experto temático 3D',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Luz Aida Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de las Artes Gráficas - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y ServiciosRegional Tolima',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
