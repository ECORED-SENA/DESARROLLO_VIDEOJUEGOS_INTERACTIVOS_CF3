<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    Muestras

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1
        i Rigging
    
    p.mb-4 Es el proceso por el cual se puede dar deformación a una malla para poder trabajarla en animación, creando un sistema de huesos el cual finalmente es el que se usará para dar vida a los objetos. 

    .row.justify-content-center.align-items-center.BGblue.mb-4
      .col-5.col-lg-3.mb-4.mb-lg-0.position-relative
        figure
          img(src="@/assets/curso/tema1/img01.svg", alt="Rigging")
      .col-lg-9.position-relative.p-3
        p.mb-4 Hace referencia a la implementación de huesos y controladores a un objeto para animarlos. Puede ser muy avanzado en cuanto a los huesos controladores y restricciones o muy simple, según el uso en que se vaya a aplicar. De esta manera, el rigger deja las pautas hechas en un modelo para que el animador tome uso de ellas y pueda animar según lo que se requiera.
        p.mb-4 Es decir, para que un elemento se anime y su malla se deforme de manera correcta, debe tener un sistema de huesos, por ende, el trabajo de un rigger es el de conectar a los modeladores con los animadores.
        p.mb-0 Se debe tener conocimientos de anatomía y entender cómo se mueve el cuerpo humano para personajes humanos, así como también conocimiento de anatomía de cuadrúpedos y aves. Todo ello para entender cómo será el movimiento y generar a esos huesos las restricciones y libertades necesarias.
    
    separador
    
    #t1_1.titulo-segundo
      h2 1.1. Introducción al rigging
    
    p.mb-4 El rigging es el proceso mediante el cual se crean estructuras de esqueletos y estructuras de control con el fin de animar y deformar geometrías.

    p.mb-5 Podría decirse que el rigging está compuesto por un componente técnico y otro artístico: técnico por el desarrollo de código y la construcción de estructuras complejas; y artístico por la búsqueda de deformaciones que luzcan agradables (appeal) y al mismo tiempo sean creíbles.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Ejemplo de rigging en una mano
        figure
          img(src="@/assets/curso/tema1/img02.png", alt="Ejemplo de rigging en una mano")
          figcaption Nota. Tomada de https://commons.wikimedia.org/wiki/File:Sintel-hand.png (Imagen con derechos Creative Commons Licences).
        .BG03.p-4
          p El departamento de rigging se convierte en un puente entre los departamentos de modelado y animación. Los modeladores entregan las geometrías, ya sean props o personajes, para que los riggers busquen la mejor solución técnica y artística que permitirá que los animadores hagan su trabajo. Los riggers también pueden intervenir en procesos posteriores a la animación, realizando simulaciones de ropa y cabello.
        
    p.mb-4 Conceptos básicos para iniciar el proceso de rigging

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-10
            p.mb-4 Cursor 3D y puntos de pivote: el cursor 3D es una herramienta muy útil dentro del software Blender, dado que da un punto de referencia desde el cual transformar los objetos; también sirve para alinear unos objetos con otros. El manejo correcto de este ayudará a establecer de manera adecuada los puntos de pivote de los objetos.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Sistema de coordenadas: dentro de cualquier software 3D se disponen diferentes sistemas de coordenadas que ayudarán a transformar los objetos según las necesidades que se tengan. Sistemas de coordenadas como Globales, Locales, Gimbal, entre otros, son los que se explican a continuación:
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Aplicar o limpiar transformaciones: al modelar objetos dentro del ambiente de Blender 3D se llega a construir un historial de transformaciones los cuales, al momento de crear un sistema de control para su posterior animación, llega a ser caótico si no se limpia. En el video que se indica a continuación se muestra cómo aplicar las transformaciones y ajustar los puntos de pivote.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Outliner y nomenclatura: el proceso de rigging se caracteriza por el correcto orden y designación de cada uno de los elementos dentro de una escena. Esto ayudará a encontrar posibles errores en el proceso de rigging, y facilitará la construcción de la jerarquía.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Construcción de jerarquía: todos los sistemas de esqueletos y de controles están compuestos por un esquema de jerarquías que permiten encadenan los diferentes puntos articulados de un objeto móvil; la forma como están relacionados los objetos dentro de un sistema de rig marcarán su funcionalidad.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        .row.justify-content-center
          .col-md-10
            p.mb-4 Constraints: son la forma de controlar las propiedades de un objeto, se podría decir que es una relación existente entre dos o más objetos, donde uno es el manejador o aquel que fija la restricción, y otro es el manejado.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Armature y huesos: son una herramienta que permite mover o deformar una geometría de forma más sencilla. Los bones o huesos, son la base de los amatures o esqueletos.
            
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center
      .col-md-10

        h4 Alistamiento del modelo

        p.mb-4 Antes de crear el sistema de huesos, es necesario hacer una especie de lista de chequeo para evitar errores futuros. Recomendaciones como que el modelo esté centrado, tenga la correcta dimensión, transformaciones limpias y nomenclatura son algunos de los pasos previos a la creación del esqueleto.

        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t1_2.titulo-segundo
      h2 1.2. Creación de esqueleto y sistemas de control
    
    .row.justify-content-center.mb-3
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Una vez realizado un análisis concienzudo de la geometría y las transformaciones de los objetos, se puede iniciar el proceso de construcción del rig. A continuación, se estructura un esqueleto para un bípedo, el cual es la estructura más usada en la industria de la animación y dará las bases suficientes para profundizar más adelante.

      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/img03.svg", alt="esqueleto y sistemas de control")
    
    .BG03.p-4.mb-5
      p.mb-0 Se debe segmentar el proceso de construcción debido a que este es complejo y las funcionalidades de cada parte del sistema de rig presentan desafíos distintos.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="La columna")
            p.mb-4 Es la primera parte que suele construirse dado que allí se encuentra el centro de gravedad del personaje y la raíz del esqueleto.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Orientaciones en los huesos")
            p.mb-4 No es una estructura del rig, pero es fundamental tener esto claro para la construcción de las siguientes partes.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="El brazo y los layers")
            p.mb-4 La construcción de los brazos introduce nuevos conceptos, como el uso de diferentes cadenas de control y el uso de layers o capas para organizar las diferentes familias de huesos.

            p.mb-4 Anteriormente se habló de dos tipos de sistemas o esqueletos: sistemas de deformación y sistemas de control. Los sistemas de deformación son aquellos que, como su nombre lo indica, deformarán la geometría; por otro lado, los sistemas de control permitirán el funcionamiento.
            p.mb-4 Dentro de los sistemas de control tendremos sistemas FK (Forward Kinematics) o de cinemática directa y sistemas IK (Inverse Kinematics) o cinemática inversa.
            .cajon.color-secundario.p-4.mb-4
              p.mb-0 Para ambos casos, el ordenador deberá calcular la posición de cada una de las articulaciones, es así como, en cinemática directa cada una de las articulaciones se moverán de forma individual y, a su vez, son dependientes de su posición en la cadena de huesos. Por ejemplo, se tiene el control de la articulación del hombro, antebrazo y la muñeca, pero si se mueve una vértebra de la espalda, la posición de todo el brazo cambiará. Este sistema es ideal para cuando se quiere animar un ciclo de caminar y los brazos van libres.
            p.mb-4 Por otra parte, la cinemática inversa calcula la posición de los componentes a partir de los extremos de la jerarquía. Por ejemplo, en un sistema IK la posición del hombro y codo dependen de la posición de la muñeca. Este sistema viene bien cuando se busca animar a un personaje que tiene sus manos ancladas a una superficie; el sistema IK permitirá mover otras partes del cuerpo sin la necesidad de reajustar la posición de las manos.
            p.mb-4 Se puede ver el video del material complementario para entender mejor los conceptos de FK/IK. 

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Enlace entre cadena FK y DEF")
            p.mb-4 Por medio de constraints se enlazan estas dos cadenas.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Creación de sistema IK")
            p.mb-4 Por medio de un constraint de tipo IK se tendrá la posibilidad de controlar de manera inversa la cadena del brazo.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Enlace cadena IK a cadena DEF")
            p.mb-4 Se debe realizar el mismo proceso que se hizo entre la cadena DEF y la cadena FK, pero ahora será la cadena IK la que se enlazará.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Creación de un Switch IK/FK")
            p.mb-4 Dado que la cadena de deformadores está controlada por los sistemas IK y FK, es necesario crear un Switch o interruptor que indique cuándo un sistema está encendido y cuándo el otro está apagado.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Reflejo del sistema de brazos")
            p.mb-4 Por medio de la herramienta Simmetrize se obtendrá un reflejo exacto de todo lo construido hasta ahora. Se hace necesario, entonces, ajustar ciertos detalles a la parte reflejada.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Crear los dedos")
            p.mb-4 Al momento de crear los huesos de los dedos se debe prestar especial atención a la posición, las orientaciones y a la nomenclatura.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Enlace de los dedos con la cadena del brazo")
            p.mb-4 Tras haber creado y ajustado cada una de las articulaciones de los dedos, se procede a conectarlos por medio de constraints a las cadenas DEF y de CONTROL.

            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Cadena CTRL Espalda y enlace con brazos")
            p.mb-4 Terminando el tren superior del bípedo, se debe construir la cadena de controles y enlazarlos a los sistemas de brazos.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Construcción de pierna DEF y FK")
            p.mb-4 A partir del hueso pelvis se debe crear la extremidad inferior, teniendo en cuenta los loops de la geometría y ajustando las orientaciones de cada hueso. La cadena DEF como la FK son iguales así que se abordan en el siguiente video.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Creación de pierna IK y Foot Roll")
            p.mb-4 Dentro de la construcción de una pierna IK se debe desarrollar un subsistema conocido como el Reverse foot o Foot Roll, el cual permitirá realizar el conjunto de movimientos especiales con el que cuenta el pie.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Enlace de cadenas de la pierna y Switch IK/FK")
            p.mb-4 Finalizando la construcción de las piernas, se deben enlazar las diferentes cadenas por medio de constraints y crear el interruptor, al igual que se hizo en los brazos, para poder elegir qué sistema va a manipular la geometría.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
          div(titulo="Ajuste del COG")
            p.mb-4 El centro de gravedad o COG (por siglas en inglés) se convierte en el centro de manipulación de todo el esqueleto. Para esto, se debe hacer un pequeño ajuste a las cadenas de Control y Deformadores.
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t1_3.titulo-segundo
      h2 1.3. Skinning

    p.mb-5 El skinning, o pesado, se define como el proceso de acoplar la geometría de un modelo 3D al esqueleto o sistema de rig de tal manera que al mover este último, el personaje también se moverá o deformará. Esto significa que las cadenas de huesos tendrán influencia sobre los vértices del modelo. En esencia, el skinning crea una relación de parentesco en la que los huesos mandan sobre la geometría. 

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          span Modo weight paint en Blender
        figure
          img(src="@/assets/curso/tema1/img04.jpg", alt="Modo weight paint en Blender")
        .BG03.py-4.px-5
          p La dificultad surge en el hecho de que un rig se compone por varios huesos individuales y la mayoría de los huesos necesitarán influenciar tan solo ciertas partes de la geometría. Por ejemplo, se busca que el control de la muñeca solo afecte los vértices de esa área en la geometría, pero podría darse que afecte también ciertas áreas del antebrazo e incluso del hombro, lo cual no sería correcto (Pluralsight, 2014). 
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4.bordLineTB.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-4 Existen diferentes tipos de parentescos que se pueden crear entre los huesos y la geometría, pero, generalmente, se usa aquel donde el programa por defecto asigna valores de influencia a cada vértice basado en la proximidad de estos a los diferentes huesos del esqueleto. Usualmente el resultado es bueno, pero no el mejor, dado que el ordenador no sabe en realidad cómo debería deformarse la geometría. Es allí donde comienza la parte más importante del proceso de skinning conocido como pintado de pesos.
            .d-flex.justify-content-end
              p.d-inline -Pluralsight, 2014
              i.fas.fa-quote-right.d-inline
    
        .row.align-items-center.justify-content-center
          .col-8.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/img05.svg", alt="pintar los pesos")

          .col-lg-8
            p.mb-0 El pintar los pesos permite asignar manualmente la influencia que cada hueso tiene sobre la geometría. Esta tarea suele tomar tiempo, dado que siempre se deben buscar deformaciones adecuadas para el personaje y no existen reglas exactas para definir los valores de influencia. Tal vez no suene muy técnico, pero es un juego de prueba y error hasta lograr lo que se busca. De nada sirve que la configuración del sistema de rig sea la mejor; si el pesado no es el adecuado, todo el rig se verá afectado.
    
    .BG03.p-4.mb-4
      p.text-center.mb-0 En los siguientes videos se explica cómo se realiza el proceso de skinning al personaje que se viene trabajando:

    #MapaGroup01
      .row.gx-4.mb-4
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse01' aria-expanded='true' aria-controls='#MapaCollapse01') Introducción al skinning parte I
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse02' aria-expanded='false' aria-controls='#MapaCollapse02') Introducción al skinning parte II
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse03' aria-expanded='false' aria-controls='#MapaCollapse03') pintado de pesos parte I
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse04' aria-expanded='false' aria-controls='#MapaCollapse04') Pintado de pesos parte II

      .row.justify-content-center.mb-4
        #MapaCollapse01.col-lg-10.collapse.show(data-bs-parent='#MapaGroup01')
          p video 01
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        #MapaCollapse02.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          p video 02
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        #MapaCollapse03.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          p video 03
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        #MapaCollapse04.col-lg-10.collapse(data-bs-parent='#MapaGroup01')
          p video 04
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t1_4.titulo-segundo
      h2 1.4. Curvas de control

    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-4 Una vez se han ajustado las influencias y dedicado tiempo en deformaciones adecuadas para el personaje, se procede a crear cada una de las curvas que controlarán las cadenas de huesos de tipo CTRL. Esta es una labor sencilla y muy mecánica una vez se reconoce el proceso; sin embargo, se debe dedicar tiempo para que se cumplan las siguientes condiciones:

      .d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img06.svg", alt="Curvas de control")

      .d-block.d-lg-none
        figure
          img(src="@/assets/curso/tema1/img066.svg", alt="Curvas de control")
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .BG03.p-4.mb-4
          p.text-center.mb-0 El siguiente video ilustra el proceso que se debe seguir para la creación de curvas de control:

        .video.mb-4
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        p Revisar los siguientes anexos que corresponden al rig del personaje Eleven y el Addon (Orient custom shape.zip) respectivamente, los cuales son usados durante la lección.
    
    separador
    
    #t1_5.titulo-segundo
      h2 1.5. Rig facial y blendshapes
    
    .row.justify-content-center.align-items-end.BG03.mb-4
      .col-11.col-lg-8.mb-4.mb-lg-0.p-4
        p Existen diferentes técnicas para desarrollar un rig facial. Dentro de ellos se encuentra el uso de cadenas de huesos, los blendshapes o modificadores de tipo deformación. La decisión dependerá directamente de los requerimientos de la producción, así como también del tiempo y presupuesto disponibles; no obstante, el mejor camino para desarrollar un rig facial es combinar las técnicas.

        p.mb-0 Un blendshape es un deformador que permite a un objeto cambiar su forma, basado en las dúplicas que se hagan del objeto base (morph target o shape key). Esta técnica resulta bastante útil a la hora de realizar el rig facial, por su simplicidad y expresividad.
      .col-5.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img07.svg", alt="Personaje base")
    
    p.mb-4 Cada uno de los gestos faciales debe modelarse o esculpirse, lo cual demanda paciencia y una continua búsqueda del appeal en el personaje. Puede surgir la pregunta ¿qué gestos o expresiones son las que deben modelarse? Pues existe una variedad infinita. Se debe categorizar en dos grupos: expresiones y visemas.

    p.mb-5 Las expresiones principales que se deben trabajar son: alegría, tristeza, enojo, sorpresa, disgusto y temor.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-5
        figure
          img(src="@/assets/curso/tema1/img08.svg", alt="expresiones principales")
      
      .col-10.col-lg-8.bordLineLR.p-4.mb-5
        p.mb-4 Una excelente fuente de información y referencia para este proceso es la que se encuentra en el material complementario Artnatomy.net, que es una herramienta interactiva que ilustra diferentes gestos faciales y cada uno de los grupos musculares que entran en acción en cada caso.

        p.mb-0 Por otro lado, los visemas son formas significantes o visuales construidas por los labios. Usualmente se conocen como fonemas; sin embargo, es importante aclarar que los fonemas son sonidos, los visemas son formas (Osipa, 2010).
    
      .col-12.col-lg-10.BGg1.p-5.mb-4
        figure.mb-4
          img(src="@/assets/curso/tema1/img09.svg", alt="expresiones labiales")
        
        p.mb-0 Los visemas son usados al momento de realizar el trabajo de sincronización labial o mejor conocido como lip sync. A diferencia de los fonemas, los visemas se basan en los ciclos que juegan entre sí: boca abierta/cerrada y labios contraídos/estirados. Los fonemas funcionan muy bien para la animación 2D, pero en el 3D se requiere un análisis de aquellos visemas o formas bucales esenciales para “vender” la idea de un diálogo.

      .col-12.col-lg-10
        p.mb-4 Nuevamente la idea “menos es más” (principio Kiss) cobra relevancia al momento de trabajar en la construcción de blendshapes, dado que la mayoría de las expresiones faciales y visemas complejos se forman a partir de la unión de otros más básicos. Por ejemplo, es posible formar el visema de la letra “o” uniendo los de boca abierta y labios contraídos.

        p.mb-4 En los videos siguientes se presenta el proceso de construcción de un rig facial, haciendo uso de huesos, blendshapes y algunos deformadores:

        #MapaGroup02
          .row.justify-content-center.gx-4.mb-4
            .col.mb-2.mb-lg-0
              button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse11' aria-expanded='true' aria-controls='#MapaCollapse11') Mandíbula parte 1
            .col.mb-2.mb-lg-0
              button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse12' aria-expanded='false' aria-controls='#MapaCollapse12') Mandíbula parte 2
            .col.mb-2.mb-lg-0
              button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse13' aria-expanded='false' aria-controls='#MapaCollapse13') Ojos
            .col.mb-2.mb-lg-0
              button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse14' aria-expanded='false' aria-controls='#MapaCollapse14') Blendshapes 1
            .col.mb-2.mb-lg-0
              button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse15' aria-expanded='false' aria-controls='#MapaCollapse15') Blendshapes 2

          .row.justify-content-center.mb-4
            #MapaCollapse11.col-lg-12.collapse.show(data-bs-parent='#MapaGroup02')
              p video 01
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
            #MapaCollapse12.col-lg-12.collapse(data-bs-parent='#MapaGroup02')
              p video 02
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
            #MapaCollapse13.col-lg-12.collapse(data-bs-parent='#MapaGroup02')
              p video 03
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
            #MapaCollapse14.col-lg-12.collapse(data-bs-parent='#MapaGroup02')
              p video 04
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
            #MapaCollapse15.col-lg-12.collapse(data-bs-parent='#MapaGroup02')
              p video 05
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t1_6.titulo-segundo
      h2 1.6. Ajustes finales y scripting

    .row.justify-content-center.mb-4
      .col-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img10.jpg", alt="Ajustes finales y scripting")
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-10.bordLineLR.px-4
            El proceso de scripting se puede definir como el desarrollo de una serie de líneas de código que son ejecutadas dentro de un software que pueden automatizar o extender las funciones de ciertos componentes.
            
        p.mb-4 En el caso puntual del desarrollo de rigging, este proceso puede identificarse como un paso necesario para mejorar, simular o extender las funciones del rig, lo cual de otras maneras no sería posible. Un ejemplo podría ser el programar funciones en el rig de un automóvil para que, al moverse a lo largo del suelo, las ruedas giren automáticamente. 

        p.mb-4 En los videos siguientes se muestran los últimos detalles que se deben ajustar al rig para finalizar el proceso y organizar ciertas capas para construir un Panel de selección o Interfaz de Usuario (UI - User Interface) para un rig, lo cual facilitará el trabajo del equipo de animación.

        .row.justify-content-center.mb-4
          .col-10
            a.anexo(:href="obtenerLink('/downloads/CF003_1.6_script_ui.py')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Enlace. Descargar el archivo de script de tipo python, el cual sirve de base para el diseño del panel.
    
    #MapaGroup03
      .row.justify-content-center.gx-4.mb-4
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse21' aria-expanded='true' aria-controls='#MapaCollapse21') Ajustes finales
        .col-6.col-lg-3.mb-2.mb-lg-0
          button.btn.btn-Cacento(data-bs-toggle='collapse' data-bs-target='#MapaCollapse22' aria-expanded='false' aria-controls='#MapaCollapse22') Scripting

      .row.justify-content-center.mb-4
        #MapaCollapse21.col-lg-10.collapse.show(data-bs-parent='#MapaGroup03')
          p video 01
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        #MapaCollapse22.col-lg-10.collapse(data-bs-parent='#MapaGroup03')
          p video 02
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t1_7.titulo-segundo
      h2 1.7. Addon riggify

    p.mb-4 Blender facilita la tarea a la hora de hacer el rigg a partir del uso de addons propios del programa, para poder utilizarlos en la malla. Para ello, se tendrán que activar los addons, de la siguiente manera:

    .row.justify-content-center.mb-3
      .col-lg-10.mb-4
        SlyderC(:datos="datosSlyder")
      
      .col-lg-8.BG02.p-4.mb-5
        p.text-center.mb-0 Ahora se verá cómo se hace el riggify a través del siguiente video tutorial.
      
      .col-lg-10.mb-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
      .col-lg-8
        a.anexo(href="http://estudiandoblender.blogspot.com/2019/11/rigging-con-rigify.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace. Para profundizar en el uso del rigg con riggify, visitar el siguiente enlace.
    
    separador
    
    #t1_8.titulo-segundo
      h2 1.8. Autorigg con Mixamo

    p.mb-5 Para autoriggear a un personaje se tiene la opción de hacerlo mediante Mixamo de Adobe. Ahora se podrá ver este video tutorial para utilizar Mixamo.

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario.mb-5
          .row(numero="1" titulo="Paso uno")
            p.mb-4 
              | Se ingresa en la página 
              a.fw-bold(href='https://www.mixamo.com' target="_blank") https://www.mixamo.com, 
              |  se hace el registro en ella y se accede a un panel para subir el modelo en fbx sin esqueletos, es decir solo la malla. Luego, se clica donde dice Upload character.

            .col-lg-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 3
                span Mixamo
              figure
                img(src='@/assets/curso/tema1/img18.jpg', alt='Mixamo')
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 4
                span Seleccionar personaje
              figure
                img(src='@/assets/curso/tema1/img19.jpg', alt='Seleccionar personaje')

          .row(numero="2" titulo="Paso dos")
            .col-lg-6.mb-4.mb-lg-0
              p Se da next y saldrá una pantalla con herramientas circulares, esos puntos son los que se deben acomodar en el personaje según el esquema que aparece de ejemplo.
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 5
                span Herramientas circulares
              figure
                img(src='@/assets/curso/tema1/img20.jpg', alt='Herramientas circulares')
          
          .row(numero="2" titulo="Paso tres")
            .col-lg-6.mb-4.mb-lg-0
              p Se da clic en Next y Mixamo empezará el trabajo de rigg. Se debe esperar un poco mientras se procesa el modelo. Una vez terminado el proceso el personaje aparece con una animación idle de prueba, así se constata que quedó completo el rigg.
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 6
                span Rig completo
              figure
                img(src='@/assets/curso/tema1/img21.jpg', alt='Rig completo')
          
          .row(numero="2" titulo="Paso cuatro")
            .col-lg-6.mb-4.mb-lg-0
              p Mixamo tiene animaciones prediseñadas, simplemente se da clic en la que desea y se verá aplicada en el personaje, una vez seleccionada, se presiona el botón Download y se tendrá el rigg con la animación en un archivo fbx.

            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 7
                span Descargar documento
              figure
                img(src='@/assets/curso/tema1/img22.jpg', alt='Descargar documento')

        .BG03.p-4.mb-4
          p.text-center.mb-0 Ahora se verá cómo se hace el riggify a través del siguiente video tutorial.
        
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t1_9.titulo-segundo
      h2 1.9. Skinning y pesos

    p.mb-5 En algunos casos se podrá notar que la malla, a pesar de que se está deformando para generar movimiento, puede que no se deforme correctamente. 

    .row.justify-content-center.mb-4
      .col-lg-10
        LineaTiempoD.color-primario.mb-5
          .row(numero="1" titulo="Paso uno")
            .col-lg-6.mb-4.mb-lg-0
              p Para ello se trabaja el peso de los huesos sobre la malla, seleccionando en Object mode la malla, y luego clicando el menú Weight paint.
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 8
                span Skinning en blender pintando pesos en vértices
              figure
                img(src='@/assets/curso/tema1/img23.jpg', alt='Skinning en blender')
          
          .row(numero="2" titulo="Paso dos")
            .col-lg-6.mb-4.mb-lg-0
              p Antes que nada, hay que ir a Preferences – addons, y activar el Script interface: copy attributes menú, para copiar información de pesos y así pegarla donde se necesite.
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 9
                span Addon script interface
              figure
                img(src='@/assets/curso/tema1/img24.jpg', alt='Addon script interface')
          
          .row(numero="3" titulo="Paso tres")
            .col-lg-6.mb-4.mb-lg-0
              p Se seleccionamos la malla desde el menú Object mode.

            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 10
                span Selección object mode
              figure
                img(src='@/assets/curso/tema1/img25.jpg', alt='Selección object mode')
          
          .row(numero="4" titulo="Paso cuatro")
            .col-lg-6.mb-4.mb-lg-0
              p Con la malla elegida se vuelve a la selección de menú y se da Weight paint para utilizar las herramientas de peso malla y en ella se puede ver un selector de herramientas del lado izquierdo. Con la herramienta draw se comienza a pintar los pesos de nuestra malla. Cuando se pinta, lo que se ve más rojo es lo que tiene mayor peso, lo que está en azul tiene peso nulo, lo que está en verde tiene peso moderado. Para pintar con más peso se debe aumentar el weight; si se quiere restar peso, el weight debe estar en 0. En la siguiente imagen se puede ver la afectación del peso en la muñeca del personaje Flynn, donde el verde representa el peso de afectación media, y en el antebrazo se degrada hasta azul para mostrar una transición en la que el movimiento de la muñeca afectará mínimamente el antebrazo.

            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 11
                span Pintando pesos
              figure
                img(src='@/assets/curso/tema1/img26.jpg', alt='Descargar documento')
          
          .row(numero="5" titulo="Paso cinco")
            .col-lg-6.mb-4.mb-lg-0
              p De esta manera, el proceso se repite para cada uno de los huesos, teniendo en cuenta la jerarquía, como en la imagen siguiente donde el hueso principal debe ser afectado bastante y los huesos siguientes deben tener una afectación mínima, casi nula.

            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 12
                span Pesos huesos por huesos
              figure
                img(src='@/assets/curso/tema1/img27.jpg', alt='Descargar documento')
          
          .row(numero="6" titulo="Paso seis")
            p.mb-4 Acomodados los pesos en los huesos ya está el personaje listo para ser animado. A continuación, tenemos dos imágenes de referencia del objeto, en estado de reposo y en pose de salto.

            .col-lg-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido
                h5 Figura 13
                span Estado de reposo 
              figure
                img(src='@/assets/curso/tema1/img28.jpg', alt='Estado de reposo')
          
            .col-lg-6
              .titulo-sexto.color-acento-contenido
                h5 Figura 14
                span Pose de Salto
              figure
                img(src='@/assets/curso/tema1/img29.jpg', alt='Pose de Salto')

        .BG03.p-4.mb-4
          p.text-center.mb-0 A través del siguiente video tutorial se verá cómo se modifican los pesos en el skinn del personaje.
        
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Paso 1',
        texto:
          'Vamos a la pestaña edit - preferences y buscamos addons, en la pestaña addons, en el buscador escribimos rigg, nos aparecerá rigging: riggify, y lo activamos.',
        imagen: require('@/assets/curso/tema1/img11.jpg'),
      },
      {
        titulo: 'Paso 2',
        texto:
          'El primer paso será ir al modo objeto y darle en la pestaña add – armatura – basic- mbasic metarigg, con esto, nos agregará un esqueleto humanoide a nuestra escena.',
        imagen: require('@/assets/curso/tema1/img12.jpg'),
      },
      {
        titulo: 'Paso 3',
        texto: 'Ahora lo escalamos y movemos para acomodarlo en nuestra malla.',
        imagen: require('@/assets/curso/tema1/img13.jpg'),
      },
      {
        titulo: 'Paso 4',
        texto:
          'En el modo edición, acomodamos los huesos para que compaginen con las partes del cuerpo de nuestro personaje. Lo realizamos seleccionando el hueso que queremos modificar y le damos mover con la tecla G. Ten en cuenta que si activamos en las opciones de tool x-axis mirror, lo que hagamos en un lado se hará en el otro, por ende, nos ahorrará la tarea de acomodar los huesos en la otra mitad del cuerpo.',
        imagen: require('@/assets/curso/tema1/img14.jpg'),
      },
      {
        titulo: 'Paso 5',
        texto:
          'Una vez tengamos acomodados los huesos de nuestro personaje, revisamos que esté todo en orden y alineado tanto en vista frontal como lateral.',
        imagen: require('@/assets/curso/tema1/img15.jpg'),
      },
      {
        titulo: 'Paso 6',
        texto:
          'Con todo acomodado, seleccionamos nuestro esqueleto en object mode, y le aplicamos en la pestaña armature, el botón generate rigg.<br><br>Esto creará los controladores necesarios para la animación de los huesos del personaje, cabe resaltar que podría aparecer en escala más pequeña, lo que tendremos que acomodar simplemente moviéndolo y escalándolo.',
        imagen: require('@/assets/curso/tema1/img16.jpg'),
      },
      {
        titulo: 'Paso 7',
        texto:
          'Finalmente, vamos a object mode. Seleccionamos primero nuestra malla y luego el controlador global del personaje, con clic derecho buscamos parent – with automátic weights. Y así tendremos listo nuestro personaje con rigg gracias al addon riggify.',
        imagen: require('@/assets/curso/tema1/img17.jpg'),
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

<style lang="sass" scoped></style>
