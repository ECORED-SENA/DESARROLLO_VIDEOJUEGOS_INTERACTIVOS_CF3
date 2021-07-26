<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
        .titulo-principal__numero
          span 2
        h1
          i Animación
    
    figure
      img(src="@/assets/curso/tema2/img01.jpg", alt="Animación")
    
    separador
      
    #t2_1.titulo-segundo
      h2 2.1. Historia de la animación
    
    p.mb-4 No es fácil determinar una fecha exacta, sin embargo, desde sus inicios, el ser humano ha tenido la necesidad de plasmar o representar las cosas que ve en el mundo que lo rodea. Ahora, se verá cómo se ha desarrollado la animación a través de la historia.

    .tarjeta.tarjeta--gris.p-4.mb-4
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoC.color-acento-contenido
        .row.justify-content-center(titulo="30.000 a. de C.")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img02.jpg", alt="historia imagén 1")
        
          .col-lg-8
            h3 Arte rupestre
            p.mb-0 No es fácil determinar una fecha exacta, sin embargo, desde sus inicios, el hombre ha tenido la necesidad de plasmar o representar las cosas que ve en el mundo que lo rodea. Se puede ir 30.000 años atrás y dar un vistazo al arte rupestre, donde se encontraban pinturas sobre roca de actividades de cacería, cultivo y rituales que, curiosamente, muestran una sensación de movimiento.
            
        
        .row(titulo="1600 a. de C.")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img03.jpg", alt="historia imagén 2")
        
          .col-lg-8
            h3 Columnas del templo a la diosa Isis
            p.mb-0 El templo a la diosa egipcia Isis muestra, en cada una de sus 110 columnas una figura pintada de la deidad con un progresivo cambio de posición, el cual era percibido como movimiento para los hombres a caballo y conductores de carrozas (Williams, 2009).
        
        .row(titulo="2000 a. de C.")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img04.jpg", alt="historia imagén 3")
        
          .col-lg-8
            h3 Vasija griega
            p.mb-0 Los antiguos griegos decoraban algunas de sus vasijas con pinturas en distintas posiciones de acción. Al girar la vasija, se creaba una sensación de movimiento.
        
        .row(titulo="Siglo XIX")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img05.jpg", alt="historia imagén 4")
        
          .col-lg-8
            p.mb-4 Para entonces, el mundo estaba inundado con piezas artísticas que trataban de plasmar la vida en barro, roca o pintura. Muchos artistas habían logrado maravillosos resultados: esculturas dotadas de energía, pinturas que transmitían fuerza interna, cavernas y dibujos que capturaban un momento vivido, pero ninguno podía sugerir que pasó antes o qué pasaba después de ese momento en particular. A través de los siglos, los artistas continuaron en la búsqueda de un medio de expresión que les permitiera capturar esa chispa de vida (Thomas y Johnston, 1981).
            p.mb-0 Fue hasta mediados del siglo XIX que nuevos inventos aparecieron y por fin lo hicieron posible. Aunque la fotografía fue descubierta a principios de 1830, la mayoría de los nuevos dispositivos para crear ilusión de movimiento utilizaban dibujos y no fotografías.
        
        .row(titulo="1824")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img06.jpg", alt="historia imagén 5")
        
          .col-lg-8
            h3 Taumatropo
            p.mb-4 Peter Mark Roget descubrió el principio de la ‘persistencia de la visión’. En palabras simples, este principio plantea que los ojos retienen temporalmente lo que acaban de ver durante una décima de segundo antes de desaparecer, las imágenes se superponen en la retina y el cerebro las “enlaza” como una imagen continua. Este principio, que ha sido refutado a lo largo del tiempo, sugiere que percibimos la realidad como una secuencia de imágenes y por ende podemos calcular la velocidad y dirección de un objeto. 

            p.mb-0 El taumatropo inventado por John Ayrton Paris (1824), consiste en un disco con dos imágenes diferentes en ambos lados y un trozo de cuerda a cada lado del disco. Al hacer girar rápidamente el disco, las caras se intercambian y produce una ilusión óptica donde se combinan las imágenes.          
        
        .row(titulo="1832")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img07.jpg", alt="historia imagén 6")
        
          .col-lg-8
            h3 Fenaquistoscopio
            p.mb-0 El fenaquistoscopio inventado por Joseph Plateau y Simon von Stampfer (1832), está compuesto por dos discos conectados por un eje. El disco frontal tiene cortes o rendijas a lo largo del borde y el disco posterior tiene una secuencia de dibujos. Al hacer girar los discos y mirar a través de las rendijas, se tiene ilusión de movimiento.
        
        .row(titulo="1832")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img08.jpg", alt="historia imagén 7")
        
          .col-lg-8
            h3 Zootropo
            p.mb-0 El zootropo: este instrumento victoriano fue vendido como un juguete y consistía en un tambor circular con rendijas. Largas tiras de papel con dibujos en secuencia eran insertadas dentro del tambor. Al rotar el tambor y ver a través de las perforaciones surgía la sensación de movimiento.
        
        .row(titulo="1868")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img09.jpg", alt="historia imagén 8")
        
          .col-lg-8
            h3 El flipbook o flipper book.
            p.mb-0 Apareció el ‘flipbook’ y es recordado como el más simple y popular dispositivo. Es un bloc de dibujos encuadernados en un extremo como un libro. Al sostener el borde encuadernado y dar vuelta o ‘flipar’ el otro extremo del libro, se tiene como resultado animación, la ilusión de una acción continua. Esto es lo que exactamente hacen los niños en las esquinas de sus cuadernos o libros. Incluso, la técnica de ‘flipar’ los dibujos se usa hoy en día por el animador clásico con el fin de probar el movimiento (Williams, 2009).
        
        .row(titulo="1872")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema2/img10.jpg", alt="historia imagén 9")
        
          .col-lg-8
            h3 Estudio de locomoción humana y animal por Muybridge
            p.mb-0 En este año cabe destacar que Leland Stanford, gobernador de California, Estados Unidos, contrató al fotógrafo e investigador inglés Eadward Muybridge para resolver la pregunta ¿Un caballo al galopar es capaz de mantener en algún momento sus 4 extremidades sin tocar el suelo. Tras varios intentos fallidos, Muybridge logra darle la respuesta a Standford, disponiendo múltiples cámaras para capturar el movimiento en fotografías (stop motion). Muybridge fue pionero en el estudio de la locomoción animal y creó el zoopraxinoscopio para proyectar una serie de imágenes que previamente había transferido a una cinta flexible perforada (The Atlantic, 2016).
        
        .row(titulo="1879")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img11.jpg", alt="historia imagén 10")
        
          .col-lg-8
            h3 Praxinoscopio 
            p.mb-0 El francés Emile Reynaud fue el primero en crear una corta secuencia de acción dramática sobre una tira transparente de 30 pies de larga, llamada “Crystaloid”. Inventó el praxinoscopio, aparato basado en el zootropo, con mecanismos mejorados que luego desarrollaría aún más hasta convertirlo en lo que se conoció como “Teatro óptico” (1888). El trabajo de Reynaud abriría el camino para avances considerables por venir (Animacam, 2017).
        
        .row(titulo="1896")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img12.jpg", alt="historia imagén 11")
        
          .col-lg-8
            p.mb-0 El caricaturista James Stuart Blackton entrevistó al inventor Thomas Edison quien había realizado experimentos con imágenes en movimiento. Blackton hizo dibujos rápidos o ‘sketches’ de Edison, el cual quedó muy impresionado por su rapidez y habilidad. Edison le pediría hacer unos dibujos en serie, para luego tomarles fotografías. Esta fue la primera combinación de dibujos y fotografía.
        
        .row(titulo="1906")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img13.jpg", alt="historia imagén 12")
        
          .col-lg-8
            p.mb-4 Blackton y Edison hicieron pública la primera película animada Humorous Phases of Funny Faces, usando la técnica de stop motion para crear movimiento. (Williams, 2009).

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://www.youtube.com/watch?v=wGh6maN4l2I" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: Humorous Phases of Funny Faces.
        
        .row(titulo="1908")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img14.jpg", alt="historia imagén 13")
        
          .col-lg-8
            p.mb-4 El caricaturista parisino Émile Cohl lanza la que es considerada la primera película totalmente animada que se titula Fantasmagorie.
            p.mb-4 Puede revisar en la tabla de ejemplos de historia y pipeline el ejemplo 2: 

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://en.wikipedia.org/wiki/File:La_Fantasmagorie_(1908).webm" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: Fantasmagorie.
        
        .row(titulo="1910")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img15.jpg", alt="historia imagén 14")
        
          .col-lg-8
            p.mb-0 Ladislaw Starevwicz, animador ruso, crea La bella Lukanida (Piekna Lukanida) la primera animación con marionetas utilizando la técnica de stop motion.
        
        .row(titulo="1911")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img16.jpg", alt="historia imagén 17")
        
          .col-lg-8
            p.mb-4 Winsor McCay, exitoso dibujante de tiras cómicas, basado en una de sus tiras más conocidas Little Nemo in Slumberland (El pequeño Nemo en el país de los sueños) hace animaciones para películas.

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://en.wikipedia.org/wiki/File:Winsor_McCay,_the_Famous_Cartoonist_of_the_N.Y._Herald_and_His_Moving_Comics_-_Little_Nemo_(1911).webm" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: Little Nemo in Slumberland.
        
        .row(titulo="1914")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img17.jpg", alt="historia imagén 16")
        
          .col-lg-8
            p.mb-4 Nuevamente, Winsor crea Gertie el dinosaurio mediante la técnica de los fotogramas clave hace la primera película animada donde el protagonista tiene una personalidad reconocible.

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://commons.wikimedia.org/wiki/File:Gertie_the_Dinosaur.ogv" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: Gertie the Dinosaur.
        
        .row(titulo="1916")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img18.jpg", alt="historia imagén 17")
        
          .col-lg-8
            h3 Rotoscopo
            p.mb-0 Max Fleischer consigue la patente del rotoscopio y siguiendo la referencia de filmaciones de su hermano crea la película Out of the inkwell.
        
        .row(titulo="1918")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img19.jpg", alt="historia imagén 18")
        
          .col-lg-8
            p.mb-4 Se crea The sinking of the Lusitania, un hito de la animación para el cine de propaganda por parte de Winsor McCay.

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://en.wikipedia.org/wiki/File:Winsor_McCay_(1918)_The_Sinking_of_the_Lusitania.webm" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: The sinking of the Lusitania.
        
        .row(titulo="1919 - 1921")
          h3.mb-1 1919
          p.mb-4 Paramount Pictures estrena el cortometraje animado Feline Follies.
          h3.mb-1 1920
          p.mb-4 The Debut of Thomas Cat se estrena y es famosa por ser la primera obra de dibujos animados en color.
          h3.mb-1 1921
          p.mb-0 Walt Disney inicia la creación de películas animadas para la cadena de cines Newman en Kansas City.
        
        .row(titulo="1923")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img20.jpg", alt="historia imagén 19")
        
          .col-lg-8
            p.mb-4 Disney mezcla dibujos animados y acción real en Alice's Wonderland (Alicia en el país de las maravillas).

            .row.justify-content-center.mb-4
              .col-10
                a.anexo(href="https://commons.wikimedia.org/w/index.php?title=File%3AAlice%27s_Wonderland_(1923).webm" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p Video: Alice's Wonderland.
        
        .row(titulo="1926 - 1929")
          h3.mb-1 1926
          p.mb-4 Es realizado el largometraje de siluetas animadas Die Abenteuer des Prinzen Achmed (Las aventuras del príncipe Achmed) del animador alemán Lotte Reiniger.
          h3.mb-1 1928
          p.mb-4 Aparece la primera película de dibujos animados que usa sonido sincronizado, Steamboat Willie protagonizada por Mickey Mouse, insignia de Disney.
          h3.mb-1 1929
          p.mb-0 Ub Iwerks creó el corto animado Skeleton Dance, uno de los 75 cortos animados de Disney que componen las Silly Symphonies.

        .row(titulo="1930")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img21.jpg", alt="historia imagén 20")
        
          .col-lg-8
            h3 Betty Boop
            p.mb-4 Aparece por primera vez en Dizzy Dishes la icónica Betty Boop de Fleischer Studios. Mientras tanto en Francia se estrena el primer largometraje de marionetas animadas, Le roman de Renard de Starevwicz.
        
        .row(titulo="1932 - 1935")
          h3.mb-1 1932
          p.mb-4 Surge el Technicolor en la animación de la mano del cortometraje Flowers and Trees de Disney.
          h3.mb-1 1933
          p.mb-4 Mediante el uso de stop motion Willis O’Brien crea su gorila para King Kong, también se estrena Los tres cerditos de Disney, la primera película del estudio que sugiere una personalidad animada.
          h3.mb-1 1934
          p.mb-4 Es presentado al público el Pato Donald en la película The Wise Little Hen.
          h3.mb-1 1935
          p.mb-0 German Oskar Fischinger realiza la animación abstracta Komposition in Blau.
        
        .row(titulo="1937")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img22.jpg", alt="historia imagén 21")
        
          .col-lg-8
            h3 Snow White
            p.mb-4 Es estrenada una de las películas más icónicas de Disney, Blancanieves y los siete enanos que es el primer largometraje animado en Technicolor con uso de sonido sincronizado.
        
        .row(titulo="1939 - 1942")
          h3.mb-1 1939
          p.mb-4 Fleischer Studios crea Los viajes de Gulliver desafiando el monopolio de Disney en el género animado.
          h3.mb-1 1940
          p.mb-4 Disney estrena Pinocho y Fantasía que sorprendentemente reciben una pobre acogida por parte del público. En el mismo año William Hanna y Joseph Barbera crean y estrenan el primer animado de Tom y Jerry.
          h3.mb-1 1941
          p.mb-4 Wan Laiming y Wan Guchan dirigen en China el largometraje animado Tie Shan Gong Zhu (La princesa del abanico de hierro) mientras en los estudios de Walt Disney se desarrolla una huelga.
          h3.mb-1 1942
          p.mb-0 Se estrena el largometraje Bamby de Disney.
        
        .row(titulo="1944 - 1949")
          h3.mb-1 1944
          p.mb-4 Nace el estudio UPA (United Productions of America) y en Gran Bretaña se funda el estudio Gaumont.
          h3.mb-1 1947
          p.mb-4 Tintín debuta en la animación con una versión en marionetas de El cangrejo de las pinzas de oro.
          h3.mb-1 1948
          p.mb-4 Es creado el largometraje de animación con marionetas Cisaruv Slavik (El ruiseñor del emperador) del cineasta checo Jiri Trnka.
          h3.mb-1 1949
          p.mb-0 El coyote y el correcaminos de Chuck Jones aparecen por primera vez en el cortometraje Fast and Furry-ous.

        .row(titulo="1950")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img23.jpg", alt="historia imagén 22")
        
          .col-lg-8
            h3 La cenicienta
            p.mb-4 Es estrenada Cinderella (La cenicienta) de Disney; y es estrenado el primer dibujo animado creado para televisión en Estados Unidos.
        
        .row(titulo="1952 - 1957")
          h3.mb-1 1952
          p.mb-4 Es introducida la técnica de la pixilación por parte de Norman McLaren en la película Neighbours.
          h3.mb-1 1953
          p.mb-4 Es creado Duck Amuch (el pato Lucas) en EE. UU. por Chuck Jones, animador de la Warner Bros.
          h3.mb-1 1954
          p.mb-4 A partir de Animal Farm la célebre novela de George Orwell, se anima la película del mismo nombre por parte de los animadores John Halas y Joy Batchelor.
          h3.mb-1 1957
          p.mb-0 Hace su más famosa aparición Bugs Bunny en el cortometraje de Jones What’s opera, doc?
        
        .row(titulo="1958 - 1961")
          h3.mb-1 1958
          p.mb-4 Se estrena el primer largometraje animado japonés titulado Shonen Saturobi Sasuke (La leyenda de la serpiente blanca), mientras La Bella durmiente resulta ser un desastre comercial para Disney.
          h3.mb-1 1960
          p.mb-4 Fred Flinstone y Barney Rubble (Pedro Picapiedra y Pablo Marmol) son presentados en la serie animada The Flinstones por William Hanna y Joseph Barbera.
          h3.mb-1 1961
          p.mb-4 Se produce en China Danaotian Gong (La rebelión del rey Kun Fu Sung).          
        
        .row(titulo="1963 - 1965")
          h3.mb-1 1963
          p.mb-4 La serie Tetsuwan Atomu (Astro Boy) abre las puertas a muchas otras series de animación japonesa.
          p.mn-0 El francés Serge Danot crea la serie Le manège enchanté.
          h3.mb-1 1964
          p.mb-4 Se crea la película experimental Cibernetik 5.3 por John Stehura.
          h3.mb-1 1965
          p.mb-4 Se crea la película animada de marionetas Ruka (La mano) del checo Jiri Trinka como una forma de protesta contra la represión de los regímenes totalitarios.
          

        .row(titulo="1966 - 1972")
          h3.mb-1 1966
          p.mb-4 Muere Walt Disney a la edad de 65 años sin ver finalizado Disneyworld. En la televisión británica aparece Camberwick Green.
          h3.mb-1 1969
          p.mb-4 Se emite en Japón el primer episodio de la serie Sazae-san que sigue emitiéndose en la actualidad convirtiéndose en la serie de animación más longeva.
          p.mn-0 En Inglaterra se emite The Clangers de Oliver Postgate y Peter Firmin.
          h3.mb-1 1972
          p.mb-4 Se funda Atari.
          
        
        .row(titulo="1974 - 1977")
          h3.mb-1 1974
          p.mb-4 Es creada la serie Heidi de la mano de Hayao Miyasaki e Isao Takahata.
          h3.mb-1 1975
          p.mb-4 Es fundada ILM (Industrial Light and Magic) por George Lucas.En Albuquerque EE. UU. Bill Gates y Paul Allen fundan Microsoft.
          h3.mb-1 1976
          p.mn-0 Es California EE. UU. es fundada Apple por Steve Jobs, Steve Wozniak y Ronald Wayne.
          h3.mb-1 1977
          p.mb-4 Ed Emshwiller usa gráficos informáticos en 3D para el cortometraje Sunstone.
        
        .row(titulo="1982 - 1986")
          h3.mb-1 1982
          p.mb-4 Tim Burton realiza Vincent utilizando animación stop motion en Disney.
          p.mb-4 En Star Treck III: The Wrath of Khan se realiza la primera secuencia digital por parte de ILM.
          h3.mb-1 1986
          p.mb-4 Luxo Jr dirigido por John Lasseter se convierte en una importante referencia para la animación digital.
          p.mn-0 Es fundada Pixar.
        
        .row(titulo="1988 - 1991")
          h3.mb-1 1988
          p.mb-4 El largometraje ¿Quién engañó a Roger Rabbit? es estrenado haciendo un hibrido entre animación e imagen real.
          p.mb-4 En Japón es estrenada Akira de Katsuhiro Otomo.
          h3.mb-1 1989
          p.mb-4 Se crea para la película The Abyss el primer personaje generado totalmente en 3D.
          p.mn-4 Son lanzados Los Simpsons de Matt Groening.
          h3.mb-1 1991
          p.mb-0 Es creada por John Kricfalusi la serie Ren y Stimpy, generando una nueva estética.
        
        .row(titulo="1993 - 1995")
          h3.mb-1 1993
          p.mb-4 Stiven Spielberg hace uso de la animación digital para la realización de Jurassic Park.
          p.mb-4 Es estrenada la película de stop motion The Nightmare Before Christmas, producida por Tim Burton y dirigida por Henry Selick.
          h3.mb-1 1994
          p.mb-4 Jeffrey Katzenberg cofunda Dreamworks junto a Steven Spielberg y David Geffen.
          h3.mb-1 1995
          p.mb-0 Es estrenado Toy Story dirigido por John Lasseter convirtiéndose en el primer largometraje realizado completamente en animación digital.
        
        .row(titulo="1998")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img24.jpg", alt="historia imagén 23")
        
          .col-lg-8
            h3 Bug’s Life
            p.mb-4 Es estrenada a Bug’s Life de pixar y Antz de Dreamworks.
          
        .row(titulo="1999 - 2001")
          h3.mb-1 1999
          p.mb-4 Se proyecta la primera película animada en formato IMAX, The Old Man and the Sea de Aleksandr Petrov la cual gana el Óscar a mejor cortometraje animado.
          h3.mb-1 2000
          p.mb-4 Aardman Animations y Dreamworks se asocian para la producción de la película Chicken Run.
          h3.mb-1 2001
          p.mb-4 Se estrena El viaje de Chihiro de Hayao Miyasaki.

        .row(titulo="2002 - 2006")
          h3.mb-1 2002
          p.mb-4 Es utilizada con éxito la técnica de captura de movimiento para dar vida a Gollum en The Lord of the Rings: The Two Towers.
          p.mb-4 Blue Sky Animation Studios estrena Ice Age.
          h3.mb-1 2004
          p.mb-4 Es estrenada The Incredibles de Pixar dirigida por Brad Bird.
          h3.mb-1 2005
          p.mb-4 Se estrena Corpse Bride dirigida por Tim Burton y Wallace y Gromit: The Curse of the Were-Rabbit de Steve Box renovando el interés por la animación en stop motion.
          h3.mb-1 2006
          p.mb-0 Disney completa la adquisición de Pixar.

        .row(titulo="2007")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img25.jpg", alt="historia imagén 24")
        
          .col-lg-8
            h3 Pixar
            p.mb-4 Disney/Pixar estrena Ratatouille dirigida por Brad Bird.
            p.mb-4 Steve Jobs director de Apple lanza el iPhone revolucionando la telefonía móvil al desarrollar nuevas características para interfaces de usuario dentro las que se encuentra el uso de la animación.
        
        .row(titulo="2007")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img25.jpg", alt="historia imagén 24")
        
          .col-lg-8
            h3 Pixar
            p.mb-4 Disney/Pixar estrena Ratatouille dirigida por Brad Bird.
            p.mb-4 Steve Jobs director de Apple lanza el iPhone revolucionando la telefonía móvil al desarrollar nuevas características para interfaces de usuario dentro las que se encuentra el uso de la animación.
        
        .row(titulo="2008 - 2016")
          .col-8.col-lg-4.mb-4.mb-md-0
            figure.mb-4
              img(src="@/assets/curso/tema2/img27.jpg", alt="historia imagén 25")
        
          .col-lg-8
            h3 2008
            p.mb-4 Peter and the Wolf dirigida por Suzie Templeton gana el Óscar a mejor corto animado.

            h3 2016 - Creadores de “Historia de un oso”
            p.mb-0 Historia de un oso, cortometraje de animación chileno se convierte en la primera producción latinoamericana en ganar un Óscar.
    
    separador
      
    #t2_2.titulo-segundo
      h2 2.2. Técnicas de animación
    
    p.mb-4 Existen varios estilos o técnicas de animación que van desde el uso de la fotografía y dibujo a mano hasta las imágenes generadas por computadora. En este apartado no se pretende profundizar en cada una de las técnicas, pues la información y proceso de producción de cada una es muy extensa; más bien, se busca caracterizar de forma general cada una de las técnicas y ahondar en aquellas que sean de interés.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-10
            figure
              img(src="@/assets/curso/tema2/A01.jpg", alt="Técnicas de animación 1")

        .row.justify-content-center
          .col-md-10
            p.mb-4 Es una de las formas más antiguas de animar, en donde cada cuadro o fotograma es dibujado y pintado a mano. Es importante saber que 1 segundo de video o animación es igual a 24 cuadros, dibujos o fotogramas.
            
            .titulo-sexto.color-acento-contenido
              span Dibujos hechos a mano
            figure
              img(src="@/assets/curso/tema2/A02.jpg", alt="Técnicas de animación 2")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Esta técnica es también conocida como cel animation, por el proceso que se requería para transferir los dibujos del papel y lápiz a una lámina transparente o acetato (cel) para ser pintada y posteriormente fotografiada con los fondos. 
            
            a.anexo(href="https://www.youtube.com/watch?v=kN-eCBAOw60" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video: Disney y la cámara multiplano
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Alrededor de los 90 la mayoría de los estudios dejaron de usar los acetatos y empezaron a escanear sus dibujos para pintarlos en la computadora. Hoy día, muchos animadores clásicos no usan el papel y lápiz, sino que dibujan directamente en el ordenador usando tabletas digitales o monitores especiales. 
            
            .titulo-sexto.color-acento-contenido
              span Dispositivos especiales para digitalizar dibujos
            figure
              img(src="@/assets/curso/tema2/A03.jpg", alt="Técnicas de animación 3")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Dentro del estilo clásico de la animación, se encuentra también la Rotoscopia, que es una técnica donde el animador usa como referencia un video real, donde se redibuja o ‘rotoscopea’ el movimiento realista de una persona o animal y se estiliza el dibujo final. El uso de esta técnica brinda mayor realismo y naturalidad a los movimientos de los personajes. 
            
            .titulo-sexto.color-acento-contenido
              span Dispositivos especiales para digitalizar dibujos
            figure
              img(src="@/assets/curso/tema2/A04.jpg", alt="Técnicas de animación 4")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Un ejemplo de esta técnica de Rotoscopia se puede ver el video musical Take on me del artista A-ha.
            
            a.anexo(href="https://youtu.be/djV11Xbc914" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video: A-ha - Take On Me
        
        .row.justify-content-center
          .col-md-10
            figure
              img(src="@/assets/curso/tema2/A05.jpg", alt="Técnicas de animación 5")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Esta categoría describe la animación creada a partir de la manipulación de objetos físicos que son movidos ligeramente y fotografiando fotograma a fotograma con el fin de dar la ilusión de estar vivos. Existen varias subcategorías de este estilo, principalmente por el medio o material usado para crear la animación (Laybourne, 1998).
            
            .titulo-sexto.color-acento-contenido
              span Stop motion
            figure
              img(src="@/assets/curso/tema2/A06.jpg", alt="Técnicas de animación 6")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Hoy en día, uno de los mayores estudios que usa esta técnica para realizar largometrajes es Laika (Coraline, Boxtrolls, Kubo). La subcategoría que predomina en sus películas se conoce como Animación de marionetas o puppet animation. Las marionetas tienen un esqueleto que les permite articularse e interactuar dentro de una escenografía cuidadosamente diseñada para desarrollar la historia.
            
            a.anexo(href="https://www.youtube.com/watch?v=FlUxuAG2Ac8" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video: ParaNorman Featurette - Making Norman
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 El Claymation se caracteriza por usar figuras en materiales maleables como la arcilla o la plastilina. 
            
            a.anexo(href="https://www.youtube.com/watch?v=dNJdJIwCF_Y" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video: Fresh Guacamole by PES - Oscar Nominated Short
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 El Sand animation y el Oil Paint animation utilizan arena y pinturas u óleos respectivamente, sobre una superficie de vidrio o mesa de luz.
            
            .titulo-sexto.color-acento-contenido
              span Mujer dibujando sobre mesa de luz y arena
            figure
              img(src="@/assets/curso/tema2/A07.jpg", alt="Técnicas de animación 7")
        
        .row.justify-content-center
          .col-md-10
            p.mb-4 Finalmente, la pixilación o pixilation es una forma de stop motion donde se usan personas y ambientes reales con el fin de crear videos irreales.
            
            a.anexo(href="https://www.youtube.com/watch?v=_5IqwECL6bo&list=PLeb1dw3SJP3L4wJgLZkYQXXPFKUMKGh1S&index=2" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Video: Human Skateboard by PES
    
    separador
      
    #t2_3.titulo-segundo
      h2 2.3. Principios de animación
    
    p.mb-5 Estos son fundamentales durante el proceso de animación, pero también para el desarrollo de las emociones que transmiten al público, por ello es indispensable hacer uso de algunos de estos principios para darle fuerza y características a los personajes, estos son 12, pero claramente multiplica el abanico de posibilidades durante el desarrollo, además de que facilita y da herramientas indispensables para acentuar de una forma correcta lo que se quiere comunicar.

    #MapaGroup01
      .row.mb-5
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse01' aria-expanded='true' aria-controls='#MapaCollapse01')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn01.svg", alt="btn01")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse02' aria-expanded='true' aria-controls='#MapaCollapse02')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn02.svg", alt="btn02")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse03' aria-expanded='true' aria-controls='#MapaCollapse03')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn03.svg", alt="btn03")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse04' aria-expanded='true' aria-controls='#MapaCollapse04')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn04.svg", alt="btn04")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse05' aria-expanded='true' aria-controls='#MapaCollapse05')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn05.svg", alt="btn05")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse06' aria-expanded='true' aria-controls='#MapaCollapse06')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn06.svg", alt="btn06")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse07' aria-expanded='true' aria-controls='#MapaCollapse07')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn07.svg", alt="btn07")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse08' aria-expanded='true' aria-controls='#MapaCollapse08')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn08.svg", alt="btn08")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse09' aria-expanded='true' aria-controls='#MapaCollapse09')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn09.svg", alt="btn09")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse10' aria-expanded='true' aria-controls='#MapaCollapse10')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn10.svg", alt="btn10")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse11' aria-expanded='true' aria-controls='#MapaCollapse11')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn11.svg", alt="btn11")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
        .col-2.col-lg-1
          button.btn(data-bs-toggle='collapse' data-bs-target='#MapaCollapse12' aria-expanded='true' aria-controls='#MapaCollapse12')
            figure.mb-2
              img(src="@/assets/curso/tema2/btn12.svg", alt="btn12")
            figure
              img(src="@/assets/curso/tema2/sdw.svg", alt="sombra")
    
      #MapaCollapse01.collapse.show(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Squash y stretch
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Permite mostrar que el elemento posee peso y elasticidad, esto lo podemos imaginar con una pelota de caucho, que al golpear el suelo se comprime y cuando esta rebota se estira. Esto incluso se puede también utilizar en otros elementos para mostrar dinamismo en el movimiento, como por ejemplo un rostro que se estira. 
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 15
                span Squash and stretch gif
              figure
                img(src='@/assets/curso/tema2/1.gif', alt='Squash y stretch')
      
      #MapaCollapse02.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Anticipación
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Antes de una acción, se puede anticipar a la realización de aquella, por ejemplo si va a dar un golpe, primero gira el cuerpo y lleva el brazo hacia atrás y luego da el golpe. Si va a dar un salto, primero se puede agachar, para tomar impulso y luego saltar. En cambio, si se realiza el salto sin tomar el impulso inicial, el salto final evidenciará la falta de fuerza y dinamismo en el movimiento. Además, la anticipación prepara a la audiencia ante una nueva acción a realizarse.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 16
                span Anticipación
              figure
                img(src='@/assets/curso/tema2/2.gif', alt='Anticipación')

      #MapaCollapse03.collapse(data-bs-parent='#MapaGroup01')  
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Puesta en escena
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Cada fotograma que contiene cada escena debe contar algo, es importante no perder detalles en la composición de las escenas, el personaje debe transmitir emociones, evidenciado a partir de su gestualidad. Esta debe estar conectada a la continuidad de la historia, por ende nos indica por ejemplo en un videojuego, que el personaje se encuentra herido y tiene opciones como curarse, si tiene con que, o debe seguir adelante y enfrentar la batalla y arriesgarse, o regresar y buscar una cura. Pero la puesta en escena también debe contener complementos en la ambientación, que refuercen la idea de lo que está pasando o va a pasar durante esa acción. Demasiados elementos en la escena, se vuelven distractores.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 17
                span Puesta en escena
              figure
                img(src='@/assets/curso/tema2/3.gif', alt='Puesta en escena')
      
      #MapaCollapse04.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Animación pose to pose y straight ahead
        .BG03.p-5
          .row
            .col-7
              p.mt-5.mb-4 Técnica de animación en el que se despliegan una serie de posiciones corporales clave y se rellenan los espacios entre estas con posiciones secundarias para ir de una pose inicial a una pose final. Aquí se crean las poses principales, en las escenas pose to pose se marcan principalmente los fotogramas más importantes de la acción que se va a realizar, ya posteriormente se pueden rellenar los frames intermedios.
              p La otra forma de animar, es el straight ahead, en la que se va ilustrando, a medida que se va avanzando, sin tener un clave final, sino que la animación va fluyendo, como ejemplo se puede animar fuego o humo.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 18
                span Pose to pose
              figure
                img(src='@/assets/curso/tema2/4.gif', alt='Pose to pose.')
      
      #MapaCollapse05.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Overlapping action
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Esta acción permite que los objetos que se encuentren anexos al personaje, como por ejemplo una bufanda o una capa, esta siga el movimiento del personaje animado. Si es un toon que está corriendo y de repente frena en seco, su cabello se mueve hacia delante después de haberse detenido. Si utilizamos una cuerda de guitarra, está en un principio se estira, pero cuando su movimiento principal termina, quedan ondas de la cuerda en movimiento que continúan hasta detenerse.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 19
                span Overlapping action
              figure
                img(src='@/assets/curso/tema2/5.gif', alt='Overlapping action')
      
      #MapaCollapse06.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Slow in and slow out
        .BG03.p-5
          .row
            .col-7
              p.mt-5.mb-4 Permite darle una gestualidad al movimiento de la animación con fluidez. Esto permite que un objeto que se va animar, adquiera carácter. Logrando darle al objeto un tono de velocidad, por ejemplo, puede arrancar lento y a medida que avanza aumenta su velocidad, o al contrario, puede ir corriendo e ir frenando.
              p.mb-4 Slow in. Si observamos un auto cuando arranca empieza en 0, pero este va aumentando su velocidad, a esto le llamaríamos Slow in, en el que se encuentra acelerando.
              p Slow out. Este mismo carro ya viene a alta velocidad y empieza a frenar, lo definimos como slow out. Se puede determinar el tipo de velocidad con el que puede avanzar el personaje. Un timing igual se vuelve aburrido, monótono; en cambio, si este tiene aceleración o desaceleración, mostrará dinamismo, a pesar de que el tiempo de carrera sea el mismo. Esto influye en generar emociones con las acciones.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 20
                span Slow in and slow out
              figure
                img(src='@/assets/curso/tema2/6.gif', alt='Slow in and slow out')
      
      #MapaCollapse07.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Arcs
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Trayectoria de un personaje u objeto de una pose extrema hasta otra para darle mayor realismo al movimiento. Los arcos le dan fluidez al movimiento, hace que sean más sutiles y no sean ordinarios. Dándole naturalidad al movimiento, lo mismo sucede con el movimiento de los brazos, las piernas; en sí el cuerpo humano y los animales tienen movimientos que siguen las formas de curvas. Por ejemplo, un péndulo, siempre está sujeto desde una posición y al moverse de un lado a otro, genera una curva visual, los brazos rotan desde el hombro, las piernas desde la cadera. Si un personaje camina en línea recta sin arcos, se puede ver robotizado.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 19
                span Arcs
              figure
                img(src='@/assets/curso/tema2/7.gif', alt='Arcs')
      
      #MapaCollapse08.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Timing
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Hace referencia al tiempo que tarda un objeto en desplazarse de un lugar a otro. Es el uso del espacio y el tiempo, lo cual se puede medir a partir de frames, generalmente para un segundo de animación se usan 24, que en sí serían 24 imágenes, estas pueden repetirse, para no tener que realizar tantas ilustraciones. Estilos muy avanzados en animación realizan una por frame. Si se observan los círculos en la siguiente figura, se aprecia que el tiempo es el mismo, pero los intervalos son diferentes. En la primera se ven al inicio, más cercanos los frames, pero a medida que avanza estos se van separando. Al estar más cercanos indica que está andando más lento y al alejarse acelera. Si miramos la misma imagen de derecha a izquierda, va en carrera y empieza a mermar su velocidad.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 22
                span Timing
              figure
                img(src='@/assets/curso/tema2/8.gif', alt='Timing')
    
      #MapaCollapse09.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Exageración
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Relacionado con el squash and stretch, pero exagerando mucho más los estiramientos, puede marcar una acción de forma más precisa, dándole fuera a las gestualidades, por ejemplo, si está gritando, se puede estirar la mandíbula lo que más se pueda.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 23
                span Exageración
              figure
                img(src='@/assets/curso/tema2/9.gif', alt='Exageración')
      
      #MapaCollapse10.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Acciones secundarias
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Son pequeños movimientos o gestos que refuerzan el movimiento principal, lo que permite que si una acción está mostrando una idea, con la acción secundaria esta se puede reforzar, como ejemplo una persona se encuentra esperando en el hospital, está enojado, manotea con su mano, y luego en una acción secundaria, empieza a mover su pie rápidamente, demostrando estrés y acentuando más su disgusto.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 24
                span Acciones secundarias
              figure
                img(src='@/assets/curso/tema2/10.gif', alt='Acciones secundarias')
      
      #MapaCollapse11.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Dibujo sólido
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Este se caracteriza por tener volumen y peso, por ello es importante poder dibujar y representar desde todos los ángulos, creando un volumen tridimensional, esto quiere decir que el elemento que se esté dibujando no se vea plano, sino que tenga 3 dimensiones. Su cuerpo puede girar 360° sin problema, además, es importante que se puede mover en un escenario tridimensional o en perspectiva. Por ejemplo, si está en un plano que se pueda alejar, o acercar, el personaje debe parecer que tiene un peso, un volumen y un balance entre sus partes.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 25
                span Dibujo sólido
              figure
                img(src='@/assets/curso/tema2/11.gif', alt='Dibujo sólido')
      
      #MapaCollapse12.collapse(data-bs-parent='#MapaGroup01')
        .BG02Full.p-4
          h3.text-center.text-light.mb-0 Appeal (atractivo)
        .BG03.p-5
          .row
            .col-7
              p.mt-5 Este principio no es crear un personaje bello, sino un personaje con personalidad y debe generar interés. Es importante no agregar detalles que no sean necesarios y generen distracción, cuantas más líneas limpias tenga, se definirá mejor la simplicidad, el magnetismo y su comunicación. Esto no solo sucede con el personaje, también en la escena, debe haber un atractivo en los movimientos, en la composición de los escenarios. cómo conjuga todo al tiempo y crea atracción, despertando una emoción en el espectador.
            .col-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 25
                span Appeal
              figure
                img(src='@/assets/curso/tema2/12.gif', alt='Appeal')
    
    separador
      
    #t2_4.titulo-segundo
      h2 2.4. Animaciones básicas
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 27
          span Inactivo
        figure.mb-5
          img(src='@/assets/curso/tema2/img28.jpg', alt='Inactivo')
        
        .row.justify-content-center.mb-5
          .col-lg-6.bordLineRr.p-4
            h3.text-center.Color3 Idle
            p El personaje está en su estado de descanso, es decir se encuentra de pie, pero nunca está 100 por ciento quieto, tiene un movimiento mínimo, sus brazos pueden estar moviéndose lentamente, o su cabeza puede oscilar lentamente o mirar hacia un lado, siempre está expectante para iniciar su movimiento.          
          .col-lg-6.p-4
            h3.text-center.Color3 Walk
            p La acción de caminar es una de las más importantes, pues muestra en movimiento constante el personaje, hay un tipo de caminar estándar, pero cada personaje puede tener su personalidad al momento de moverse, una persona obesa puede tambalearse un poco más hacia los lados, una mujer puede caminar con las piernas más juntas y pasos más cortos, todo depende del tipo de personalidad que se le haya definido al personaje. Con las siguientes imágenes se puede crear un caminar, pero se pueden exagerar sus movimientos, para marcar una personalidad.

        .video.mb-4
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KCYEXQlnjVQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        p.mb-4 En esta animación se observa en el frame 1 que el pie derecho (rojo) está pisando sobre su talón, y el pie izquierdo (azul) está en punta y los brazos se encuentran en sentido opuesto a su color correspondiente. Es decir, el brazo izquierdo se mueve en sentido contrario de la pierna izquierda. 

        .BG02.p-4.mb-4
          p.mb-0 En la segunda pose, en el frame 7, el pie derecho está plantado totalmente, la pierna izquierda está pasando en frente de la derecha. Los brazos se equilibran y la cabeza está más alta que el frame 1.
        
        p.mb-4 En la tercera figura el frame 13 es casi igual que la primera, solo que los brazos y piernas van en sentido opuesto, igual que en la cuarta imagen frame 19, la pierna izquierda es la que está plantada y es parecida al frame 7 y la última figura, el frame 25, es la misma que el frame 1. Todos estos frames se repetirán indefinidamente, y entre ellos, se pueden completar los frames faltantes para darle fluidez al movimiento, pero con estos frames realizados ya se puede ver la acción. El cuerpo nunca se mueve recto, pues el cuerpo sube y baja.

        .titulo-sexto.color-acento-contenido
          h5 Figura 28
          span Walk, Caminar
        figure.mb-5
          img(src='@/assets/curso/tema2/img29.jpg', alt='Walk, Caminar')
      
        h3.text-center.Color3.bordLineT.pt-5 Jump
        .row.justify-content-center
          .col-lg-10.mb-4
            p.mb-0 El salto permite que el personaje se desplace hacia arriba, despegándose del suelo, para poder llegar a otro lado, o caer en el mismo punto de origen. esquivar un enemigo, saltar y destruir un npc.

        .titulo-sexto.color-acento-contenido
          h5 Figura 29
          span Jump
        figure.mb-5
          img(src='@/assets/curso/tema2/img30.jpg', alt='Jump')
        
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/xWHfJLrI6GM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        h3.text-center.Color3.bordLineT.pt-5 Attack
        .row.justify-content-center
          .col-lg-10.mb-4
            p.mb-0 Una de las animaciones más usadas, es como el personaje ataca, lanza un golpe o usa una espada. Estos son movimientos que, por lo general, son movimientos rápidos: puede mover las piernas para crear estabilidad en el movimiento y verse natural; es importante siempre llegar al mismo punto de partida. 

        .titulo-sexto.color-acento-contenido
          h5 Figura 30
          span Ataque esqueleto
        figure.mb-4
          img(src='@/assets/curso/tema2/img31.jpg', alt='Ataque')
        
        .row.justify-content-center.mb-5
          .col-8
            a.anexo(href="https://youtu.be/D70hSa5zA78" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Ver el siguiente video de Skeleton Attack Animations Pack para ilustrar mejor el movimiento.
        
        h3.text-center.Color3.bordLineT.pt-5 Down
        .row.justify-content-center
          .col-lg-10.mb-4
            p.mb-0 La acción de agacharse puede referirse cuando el personaje trata de ocultarse, pasar bajo algo, necesitar recoger algún elemento del suelo. esquivar un golpe, una bala, un npc aéreo. entre muchas más.

        .titulo-sexto.color-acento-contenido
          h5 Figura 31
          span Agacharse
        figure.mb-5
          img(src='@/assets/curso/tema2/img32.jpg', alt='Agacharse')
        
        .video.mb-5
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vMvHI9_7pZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        h3.text-center.Color3.bordLineT.pt-5 Dead
        .row.justify-content-center
          .col-lg-10.mb-4
            p.mb-0 La muerte del personaje puede pasar porque pisó algún elemento que lo mataba de una o por que le fueron quitando la sangre poco a poco. Aquí se puede mostrar cómo el personaje cae al piso, después de que pierde su vida. Es importante tener como eje principal los pies del personaje, para que al momento de pasar la animación al motor de juego, este caiga correctamente, y no se deslice.

        .titulo-sexto.color-acento-contenido
          h5 Figura 32
          span Dead
        figure.mb-5
          img(src='@/assets/curso/tema2/img33.jpg', alt='Dead')
        
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/OHYSoettZ6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)














</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped></style>
