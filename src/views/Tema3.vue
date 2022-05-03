<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
        .titulo-principal__numero
          span 3
        h1 Fundamentos básicos de sonido
    
    figure.mb-4
      img(src="@/assets/curso/tema3/img01.jpg", alt="Fundamentos básicos de sonido")
    
    p.mb-4 Todo aquello que está en movimiento genera diferentes vibraciones u ondas sonoras (producción de sonido) que se desplazan a través de un medio que puede ser sólido, líquido o gaseoso; por ejemplo, el aire, el agua o un metal (capacidad de propagación). Estas ondas sonoras son captadas por nuestros oídos (órgano perceptor), y convertidas en impulsos eléctricos que nuestro cerebro interpreta como diversos sonidos que nos generan gran variedad de sensaciones y emociones.
    
    separador
      
    #t3_1.titulo-segundo
      h2 3.1 Características del sonido
    
    p.mb-4 Las principales características del sonido son: 

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img02.svg' alt='AvatarTop')
        h2.text-center La frecuencia 
        p.text-center Que se refiere al número de vibraciones que produce un cuerpo por segundo y que afecta el tono pues a mayor frecuencia (mayor número de oscilaciones) más agudo será el sonido, mientras que a menor frecuencia será más grave.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img03.svg' alt='AvatarTop')
        h2.text-center La amplitud 
        p.text-center Es la cantidad de energía (intensidad) que posee una onda sonora; cuanta más energía tenga su volumen será más alto y viceversa, a menor cantidad de energía o intensidad se escuchará más bajo, indicando si se trata de un sonido fuerte o débil.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
        h2.text-center El timbre 
        p.text-center Permite diferenciar un sonido de otro, por ejemplo, la voz de un niño de la de un adulto, o el sonido de un violín del de un piano, o el canto de un pájaro de la alarma de un auto.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
        h2.text-center La duración y envolvente
        p.text-center Se refiere al tiempo que tarda en extinguirse completamente un sonido hasta llegar al silencio total, y sobre cómo este crece y decrece con el tiempo. A continuación, se presenta una figura que resume las cualidades del sonido.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 33
          span Cualidades del sonido
        figure.mb-5
          img(src='@/assets/curso/tema3/img06.svg', alt='Cualidades del sonido')
          figcaption Nota. Tomada de https://edbar01.wordpress.com/about/ondas-mecanicas/el-sonido/cualidades-del-sonido
        
        p.mb-4.text-center Audacity es un programa de edición de audio, totalmente gratuito. Aquí se podrá ver un tutorial básico de cómo utilizarlo.

        .row.justify-content-center.mb-4
          .col-10
            a.anexo(href="https://youtu.be/ge6s3ZSO26U" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video. Tutorial Audacity
    
    separador
      
    #t3_2.titulo-segundo
      h2 3.2 El sonido en los videojuegos
    
    p.mb-4 Uno de los elementos más importantes que se debe tener en cuenta al crear la atmósfera para un videojuego es el sonido, pues es el que apoya y le da fuerza a cada escena, ayudando que el jugador se sienta inmerso dentro del mismo, brindando una experiencia interactiva más realista a través de una buena calidad acústica, capaz de transmitir diferentes sensaciones y emociones ya sean de tristeza, alegría, temor, frustración, tranquilidad, entre otras, que enriquecen la experiencia del juego. 

    p.mb-4 El sonido se debe analizar desde tres elementos generales:

    .BG03.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-6.col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img07.svg', alt='El sonido en los videojuegos')
        .col-lg-9
          ul.lista-ul--color.mb-0
            li 
              i.lista-ul__vineta
              p
                strong La música o banda sonora. 
                | Es básicamente la que empodera la historia, le brinda diferentes estados de ánimo dependiendo del contexto de cada nivel, y ayuda a marcar el ritmo del juego.
            li 
              i.lista-ul__vineta
              p
                strong La ambientación sonora. 
                | Es la que sugiere el tipo de atmósfera que se debe manejar para cada nivel, por ejemplo, en el escenario del bosque de Gaokere, lo que generalmente se escucharía en dicho ambiente sería el agudo sonido de las cigarras, la brisa soplando en las copas de los árboles, el croar de las ranas, el cantar de los pájaros, etc., transmitiendo un aire de tranquilidad; de cierta manera, se podría decir que son aquellos sonidos que se escuchan en segundo plano a lo largo de todo el nivel. 
            li.mb-0
              i.lista-ul__vineta
              p
                strong  Diálogos y efectos especiales de audio. 
                | Brindan información importante al jugador ya sea a través del diálogo con otros personajes, o por la producción de algún sonido específico, por ejemplo, el sonido lejano de alguien pidiendo ayuda, el cual se va incrementando a medida que alguien se acerca facilitando ubicación o de una alarma que se dispara que, generalmente, es indicativo de que algo grave va a pasar; los pesados pasos de un monstruo que se acerca que, aun sin verlo, su sonido sugiere que se trata de algo de gran tamaño generando temor al imaginar con quién se debe enfrentar; es decir, mejoran la inmersión en el videojuego ya que le brindan un mayor realismo.
    
    p.mb-5 Cada uno de estos elementos debe ser acorde con los demás elementos que hacen parte de la atmósfera como:

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta-avatar-b.mb-4
          img.position-relative(src='@/assets/curso/tema3/img08.svg', alt='elemento atmósfera 1')
          .tarjeta.BG02
            .p-4
              h3 La iluminación y la paleta de colores
              p.mb-0 Influyen en la psique del jugador, por ejemplo, si se usan colores cálidos y una buena iluminación se pueden usar melodías y efectos de sonido más alegres y optimistas; mientras que si se usa una paleta de colores fríos y una iluminación más tenue se pueden usar sonidos y melodías relacionadas con el misticismo, la calma o la tensión, todo depende de lo que se quiera reflejar en escena.

        .tarjeta-avatar-b.mb-4
          img.position-relative(src='@/assets/curso/tema3/img09.svg', alt='elemento atmósfera 2')
          .tarjeta.BG02
            .p-4
              h3 El clima y los efectos atmosféricos
              p.mb-0 Por ejemplo, si hay lluvia se usarán efectos de esta golpeando el suelo y música de calma dependiendo del contexto en que se esté desarrollando la escena; la neblina se asocia con una melodía alusiva al misterio, o si hay rayos se usarán efectos de trueno y una musicalidad en concordancia con el tema del nivel.
        
        .tarjeta-avatar-b.mb-5
          img.position-relative(src='@/assets/curso/tema3/img09.svg', alt='elemento atmósfera 2')
          .tarjeta.BG02
            .p-4
              h3 Efectos de sonido
              p.mb-0  Por ejemplo, si se trata de una batalla postapocalíptica con armas láser se usarán efectos especiales de como sonaría un disparo de rayos láser; o si se trata de una escena donde hay fuego es necesario reproducir el efecto chisporroteante del fuego al arder; o si se lanza algún hechizo o conjuro se debe usar un efecto místico o mágico. Estos efectos sonoros se deben utilizar teniendo en cuenta su duración e intensidad pues deben encajar perfectamente con los efectos visuales presentados en escena de manera que mantengan la atención del jugador logrando emocionarlo, desconcertarlo, asustarlo, etc.
      
        .bordLineLR.p-4
          p.mb-0 Entonces, a la hora de elegir la banda sonora, los efectos especiales de audio y la ambientación sonora se debe tener en cuenta que encajen bien con el tema y con los elementos que conforman la atmósfera de cada nivel del videojuego, procurando que estos no interfieran entre sí, a través del uso correcto de las cualidades del sonido. Por ejemplo, que la intensidad de la música de fondo no sea demasiado fuerte ya que opacaría los efectos sonoros utilizados en un mismo nivel pues no se podría oír lo que pasa alrededor, o que los efectos especiales de sonido sean demasiado largos y se mezclen con el diálogo de los personajes generando “ruido”, dificultando la diferenciación entre unos y otros, lo cual genera sentimientos de frustración y enojo al jugador. 
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .BG03.p-4
          p.text-center.mb-0 Ahora, se hace un breve análisis de las escenas que presentan a continuación:
    
    SlyderA
      .row.justify-content-center
        .col-md-11
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p En esta escena, se muestra al personaje caminando hacia su destino bajo un cielo gris, donde lo único que se puede escuchar (de acuerdo con la imagen) es el sonido de sus pisadas en la hierba, la pesadez de su armadura (efectos especiales de audio) y el murmullo del viento (ambientación sonora), dando una inquietante sensación de tranquilidad, que roza con sentimientos de soledad y desolación (que debe ser acorde con la música de fondo), es decir, se hace uso de una paleta de sonidos sencilla pero que logra transmitir emociones específicas que logran el sumergirse en la historia.           
            .col-md-7
              .titulo-sexto.color-acento-contenido
                h5 Fiigura 34
                span Escena del videojuego “#[em The Shadow of Colossus]”
              figure
                img(src='@/assets/curso/tema3/img11.jpg', alt='Texto que describa la imagen')
                figcaption Nota. Tomada de <a href="https://www.hobbyconsolas.com/guias-trucos/shadow-colossus-ps4/localizacion-todas-monedas-shadow-colossus-ps4-188724" target="_blank">https://www.hobbyconsolas.com/guias-trucos/shadow-colossus-ps4/localizacion-todas-monedas-shadow-colossus-ps4-188724</a>

      .row.justify-content-center
        .col-md-11
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p En esta imagen se presenta a un grupo de soldados luchando contra el enemigo en un día soleado. De acuerdo a esto, se podría decir que se puede escuchar el sonido tanto de nuestras balas como las de los enemigos, diferentes voces, gritos y/o diálogos de nuestros compañeros o enemigos, efectos de artillería pesada, explosiones, fuego, sonidos de pisadas, recarga de armas; creando un ambiente conflictivo que logra transmitirnos esa tensión, gracias a una paleta de sonidos más rica y variada que aporta mayor realismo a la escena.          
            .col-md-7
              .titulo-sexto.color-acento-contenido
                h5 Fiigura 35
                span Escena del videojuego “Medalla de honor”
              figure
                img(src='@/assets/curso/tema3/img12.jpg', alt='Texto que describa la imagen')
                figcaption Nota. Tomada de https://www.vidaextra.com
      
      .row.justify-content-center
        .col-md-11
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              p Por último, en esta imagen se muestra, claramente, la importancia del sonido en los videojuegos, como se puede observar, aunque los gráficos son pobres en comparación con los de ahora, el ambiente de tensión generado gracias a la música de fondo y a los efectos de sonido bien logrados, de los pasos que se arrastran y los gemidos de los zombies acercándose hacia el jugador, de las “criaturas lamedoras” entrando de improviso rompiendo los cristales de la ventana, o de la respiración del mismo Némesis que indica que está cerca aunque no lo veamos en escena; todos estos sonidos logran generar un buen susto, provocando ansiedad.       
            .col-md-7
              .titulo-sexto.color-acento-contenido
                h5 Fiigura 36
                span Escenas del videojuego #[em Resident Evil]
              figure
                img(src='@/assets/curso/tema3/img13.jpg', alt='Texto que describa la imagen')
                figcaption Fuente:https://www.mobygames.com/images/shots/l/177261-resident-evil-2-playstation-screenshot-running-would-be-the.png 

    .row.justify-content-center.my-5
      .col-lg-10
        .BG02.p-4
          .row.justify-content-center.align-items-center
            .col-3.mb-4.mb-lg-0
              figure.elemtOut
                img(src='@/assets/curso/tema3/img14.svg', alt='El sonido en los videojuegos')
            .col-9
              p.mb-0 #[em Game Audio Awards], son los premios más reconocidos en esta área, donde se premian a los mejores diseñadores de sonido de videojuegos.
    
    separador
      
    #t3_3.titulo-segundo
      h2 3.3 Formatos de sonido 
    
    p.mb-5 Los formatos de sonido son decodificadores que transmiten la señal junto al video, los más usados por la industria de los videojuegos son:

    .row.justify-content-center.mb-5.p-4.BG02
      .col-lg-6.bordLineRr.p-4
        figure.mb-4
          img.w-25.mx-auto(src='@/assets/curso/tema3/img15.svg', alt='Dolby Digital')
        h3.text-center #[em Dolby Digital]
        p Es el más utilizado a lo largo de la historia, gracias a que presenta mayor compatibilidad con un gran número de equipos, aunque se puede sufrir cierta pérdida en la calidad al comprimir el sonido. En los últimos años, ha venido trabajando con otros formatos Dolby Digital Plus, Dolby Digital True HD, y Dolby Atoms, que evitan comprimir el audio, conservando la fidelidad de los sonidos.       
      .col-lg-6.p-4
        figure.mb-4
          img.w-25.mx-auto(src='@/assets/curso/tema3/img16.svg', alt='Digital Sourround (DTS)')
        h3.text-center #[em Digital Sourround] (DTS)
        p Es la competencia directa de Dolby Digital, se caracteriza por conservar un sonido fuerte y nítido, aunque al comprimirse también se presenta una pérdida en la calidad, pero menor que la presentada por Dolby Digital, y al igual que esta ha venido trabajando en su formato DTS – HD sin compresión con el fin de conservar la alta definición del sonido.
    
    .row.justify-content-center
      .col-lg-10.mb-4
        p Adicionalmente, se utilizan otros formatos de archivo sin compresión en la programación de videojuegos como el WAV y AIFF; que son similares, aunque tienen ciertas diferencias de encapsulado. Mientras que el formato de archivo con compresión más utilizado en la programación de videojuegos es el MP3; y aunque el AAC de Apple y el WMA de Microsoft ofrecen versiones mejoradas al MP3, en el mundo de la programación para videojuegos no se suelen usar debido a su falta de compatibilidad.

      .col-8
        a.anexo(href="https://freesound.org" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace web. Aquí se pueden descargar sonidos gratuitos de #[em Freesound].

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
