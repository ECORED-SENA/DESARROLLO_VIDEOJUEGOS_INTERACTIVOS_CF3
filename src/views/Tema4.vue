<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
        .titulo-principal__numero
          span 4
        h1
          i Exportación de objetos
 
    .row.justify-content-center
      .col-lg-10.mb-4 
        .cajon.color-acento-contenido.BG03.p-4.mb-4
          p.mb-0 Cómo llevar un modelo Blender a Unity, y tips para tener en cuenta para llevar todo en orden. Aquí se indican los pasos a seguir: 
        
        SlyderC.mb-5(:datos="datosSlyder")

    .BG03.p-4
      p.mb-4 Para finalizar, se puede realizar la práctica con archivos prediseñados de animación y movimiento de personajes utilizando los programas Blender y Mixamo:
      
      .row.justify-content-center
        .col-8
          a.anexo(:href="obtenerLink('/downloads/CF003_Actividad_1.zip')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-zip.svg")
            .anexo__texto
              p Anexo. Para finalizar, se puede realizar la práctica con archivos prediseñados de animación y movimiento de personajes utilizando los programas Blender y Mixamo.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Seleccionar el objeto a exportar, luego ir a file - export - fbx. Se exporta en la carpeta donde se usará.',
        imagen: require('@/assets/curso/tema4/img01.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Se escoge la casilla Selected objects, si la intención es exportar solo lo que se tiene seleccionado en el escenario. Esto se hace muy útil pues en ocasiones hay en el escenario objetos ocultos o luces y planos, que, si no se activa la casilla mencionada, se exportan todos esos elementos que no se necesitan.',
        imagen: require('@/assets/curso/tema4/img02.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Para dejar guardada esta configuración para futuros proyectos, se puede crear el Preset en la exportación y asignarle un nombre.',
        imagen: require('@/assets/curso/tema4/img03.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Si se quieren exportar las texturas junto al modelo, lo que se debe hacer es el Path mode cambiarlo a Copy y activar Embed textures.',
        imagen: require('@/assets/curso/tema4/img04.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Luego de ello, en Unity, una vez importado el personaje, se le da en Inspector-extract textures extract materiales, que abrirá una ruta donde almacenar los materiales que, una vez guardados, se aplicarán automáticamente al modelo.',
        imagen: require('@/assets/curso/tema4/img05.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Ahora se puede probar cómo el modelo queda en Unity, de la siguiente manera: se abre la pestaña Assets – import new asset, se clica y busca el archivo en el computador.',
        imagen: require('@/assets/curso/tema4/img06.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Se puede observar que hay un problema en la malla del personaje, en su capucha en la parte interna no se está leyendo que haya malla sólida, para corregirlo se vuelve a Blender.',
        imagen: require('@/assets/curso/tema4/img07.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'En el modo de edición, se selecciona la malla y se agrega el modificador solidificar.',
        imagen: require('@/assets/curso/tema4/img08.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        //titulo: 'Never, never assume that what you have achieved is good enough',
        texto:
          'Para finalizar, se vuelve a exportar el fbx a Unity y ya se habrá corregido la lectura de la malla.',
        imagen: require('@/assets/curso/tema4/img08.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
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
