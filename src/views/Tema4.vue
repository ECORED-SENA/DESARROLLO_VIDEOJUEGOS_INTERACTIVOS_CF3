<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
        .titulo-principal__numero
          span 4
        h1 Exportación de objetos
 
    .row.justify-content-center
      .col-lg-10.mb-4 
        .cajon.color-acento-contenido.BG03.p-4.mb-4
          p.mb-0 Cómo llevar un modelo Blender a Unity, y #[em tips] para tener en cuenta para llevar todo en orden. Aquí se indican los pasos a seguir: 
    
    SlyderA.mb-5
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Fiigura 38
            span Archivo exportar
          figure.mb-4
            img(src='@/assets/curso/tema4/img01.jpg', alt='Texto que describa la imagen')
          p Seleccionar el objeto a exportar, luego ir a #[em file - export - fbx]. Se exporta en la carpeta donde se usará.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 39
            span #[em Selected objects]
          figure.mb-4
            img(src='@/assets/curso/tema4/img02.jpg', alt='Texto que describa la imagen')
          p Se escoge la casilla #[em Selected objects], si la intención es exportar solo lo que se tiene seleccionado en el escenario. Esto se hace muy útil pues en ocasiones hay en el escenario objetos ocultos o luces y planos, que, si no se activa la casilla mencionada, se exportan todos esos elementos que no se necesitan.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 40
            span #[em Preset]
          figure.mb-4
            img(src='@/assets/curso/tema4/img03.jpg', alt='Preset')
          p Para dejar guardada esta configuración para futuros proyectos, se puede crear el #[em Preset] en la exportación y asignarle un nombre.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 41
            span #[em Path mode]
          figure.mb-4
            img(src='@/assets/curso/tema4/img04.jpg', alt='Path mode')
          p Si se quieren exportar las texturas junto al modelo, lo que se debe hacer es el #[em Path mode] cambiarlo a #[em Copy] y activar #[em Embed textures].
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 42
            span #[em Inspector Extract]
          figure.mb-4
            img(src='@/assets/curso/tema4/img05.jpg', alt='Inspector Extract')
          p Luego de ello, en Unity, una vez importado el personaje, se le da en #[em Inspector-extract textures extract materiales], que abrirá una ruta donde almacenar los materiales que, una vez guardados, se aplicarán automáticamente al modelo.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 43
            span #[em Import]
          figure.mb-4
            img(src='@/assets/curso/tema4/img06.jpg', alt='Inmport')
          p Ahora se puede probar cómo el modelo queda en Unity, de la siguiente manera: se abre la pestaña #[em Assets – import new asset], se clica y busca el archivo en el computador.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 44
            span Malla no sólida
          figure.mb-4
            img(src='@/assets/curso/tema4/img07.jpg', alt='Malla no sólida')
          p Se puede observar que hay un problema en la malla del personaje, en su capucha en la parte interna no se está leyendo que haya malla sólida, para corregirlo se vuelve a Blender.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 45
            span #[em Solidify]
          figure.mb-4
            img(src='@/assets/curso/tema4/img08.jpg', alt='Solidify')
          p En el modo de edición, se selecciona la malla y se agrega el modificador solidificar.
      
      .row.justify-content-center
        .col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 46
            span #[em Import Fbx]
          figure.mb-4
            img(src='@/assets/curso/tema4/img09.jpg', alt='Import Fbx')
          p Para finalizar, se vuelve a exportar el fbx a Unity y ya se habrá corregido la lectura de la malla.
          
    .BG03.p-4
      p.mb-4 Para finalizar, se puede realizar la práctica con archivos prediseñados de animación y movimiento de personajes utilizando los programas Blender y Mixamo:
      
      .row.justify-content-center
        .col-8
          a.anexo(:href="obtenerLink('/downloads/CF003_Actividad_1.zip')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-zip.svg")
            .anexo__texto
              p Anexo. CF003_Actividad_1.zip

</template>

<script>
export default {
  name: 'Tema4',
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
