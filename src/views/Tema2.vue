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

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoC.color-acento-contenido
        .row.justify-content-center(titulo="30.000 años atrás")
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
