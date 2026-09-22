<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Preparación de materiales

    .bloque-texto-g.bloque-texto-g--inverso.bg4.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La preparación de materiales corresponde a la fase previa en la que se verifican, organizan y acondicionan los recursos necesarios para la ejecución del proceso de confección. Su función consiste en asegurar que las telas, los hilos, los accesorios y los demás insumos ingresen a la operación en condiciones compatibles con las exigencias técnicas del producto. De esta etapa depende, en buena medida, la estabilidad del proceso, la reducción de desperdicios y la conformidad de la prenda con las especificaciones definidas en la ficha técnica.
          br
          br
          | Su alcance no se limita al alistamiento físico de los materiales, también comprende la comprobación de cantidades, la revisión de características técnicas, la identificación de posibles desviaciones de calidad y la disposición ordenada de los insumos según la secuencia de uso. Cuando esta preparación se ejecuta de manera rigurosa, se facilita la continuidad operativa, se disminuyen interrupciones durante el ensamble y se fortalece el control sobre errores asociados a sustituciones inadecuadas, faltantes o inconsistencias del material.

    p Una preparación deficiente compromete la regularidad del proceso desde sus primeras operaciones. La presencia de telas con defectos, insumos incompatibles o cantidades mal calculadas incide en el rendimiento, altera la programación de producción y puede generar reprocesos, devoluciones internas o incumplimiento de parámetros de calidad. Por tal razón, la preparación de materiales debe entenderse como una operación técnica de control previo y no como una actividad auxiliar de simple abastecimiento.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Selección de telas e insumos

    .row.justify-content-center.align-items-center.mb-4.fondo02(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/img02.png', alt='')
        .col-lg-7
          .p-4
            .d-flex.align-items-start
              .row
                .col-lg-3.mb-3
                  img(src='@/assets/curso/temas/t2/img03.png', alt='', style='width:70px;')
                .col-lg-12
                p La selección de telas e insumos constituye una decisión técnica fundamental dentro del proceso de confección, debido a que de ella dependen el comportamiento del material durante el corte, la costura, el acabado y el uso final de la prenda. No todo material que ingresa al taller o a la planta se encuentra en condiciones de ser incorporado de manera inmediata al proceso; su incorporación requiere una revisión previa orientada a confirmar que sus características correspondan con los requerimientos del producto.

    p En el caso de las telas, la verificación debe considerar aspectos como composición, estructura, peso, estabilidad dimensional, elasticidad, resistencia, regularidad superficial y compatibilidad con el tipo de prenda y con las operaciones de confección previstas. En cuanto a los insumos, resulta necesario comprobar la referencia, el calibre, la resistencia, la funcionalidad y la correspondencia con la tela seleccionada y con la maquinaria disponible. Esta revisión evita incompatibilidades que puedan afectar la costura, el ensamble, el acabado o la durabilidad del producto terminado.

    .cajon.color-secundario.p-4.mb-4
      p La selección técnica no responde únicamente a criterios de disponibilidad o apariencia del material. Su validez depende de la concordancia entre la ficha técnica, las exigencias del proceso y las condiciones reales del insumo recibido. Por ello, la revisión inicial debe permitir identificar defectos, variaciones de lote, diferencias de tono cuando aplique, fallas de composición, daños físicos o cualquier condición que comprometa la calidad del producto. Solo después de esta validación el material puede considerarse apto para avanzar hacia las etapas de trazo, corte y confección.
    
    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
        h5 Tabla 4.
        span Selección comparativa de telas e insumos para camisetas deportivas

    .tabla-a.color-acento-botones.mb-4
      table
        thead
          tr
            th.izq.bg3 Tipo de camiseta deportiva
            th.izq.bg3 Tela recomendada
            th.izq.bg3 Características técnicas de la tela
            th.izq.bg3 Insumos recomendados
            th.izq.bg3 Criterio técnico de selección
            th.izq.bg3 Ejemplo de aplicación
        tbody
          tr
            td #[b Entrenamiento básico]
            td Poliéster de punto.
            td Secado rápido, bajo peso, estabilidad dimensional, resistencia al uso frecuente.
            td Hilo poliéster, #[i rib] para cuello, marquilla estampada.
            td Favorece comodidad, rápida evaporación y facilidad de confección.
            td Camiseta para educación física o dotación deportiva.

          tr
            td #[b Alto rendimiento]
            td Poliéster con elastano.
            td Elasticidad controlada, ajuste al cuerpo, buena recuperación, manejo de humedad.
            td Hilo texturizado, cinta de refuerzo, transferencia térmica.
            td Permite movilidad, ajuste ergonómico y mejor respuesta en actividad intensa.
            td Camiseta para #[i running], ciclismo o gimnasio.

          tr
            td #[b Competencia]
            td Tejido técnico microperforado.
            td Alta transpirabilidad, bajo gramaje, rápida evaporación, ligereza.
            td Hilo poliéster fino, cinta tapacostura, estampado por sublimación.
            td Reduce carga térmica y mejora #[em confort] en uso prolongado.
            td Camiseta para fútbol, atletismo o eventos deportivos.

          tr
            td #[b Uso recreativo]
            td Algodón con poliéster.
            td Tacto suave, absorción moderada, mayor #[em confort] al contacto, resistencia media.
            td Hilo poliéster, sesgo o #[i rib], etiqueta tejida.
            td Combina comodidad y resistencia para actividades de baja exigencia.
            td Camiseta para caminata, uniforme recreativo o promoción.

          tr
            td #[b Compresión ligera]
            td Poliéster con alto contenido de elastano.
            td Elasticidad elevada, ajuste anatómico, recuperación rápida, control de deformación.
            td Hilo elástico, elástico suave, costura plana.
            td Requiere insumos compatibles con elongación y presión moderada.
            td Camiseta ajustada para entrenamiento funcional.

          tr
            td #[b Uniforme institucional deportivo]
            td Poliéster #[i interlock] o #[i jersey].
            td Resistencia al lavado, buena presentación, estabilidad y facilidad de estampación.
            td Hilo poliéster, cuello #[i rib], escudo transfer o bordado.
            td Prioriza durabilidad, uniformidad y compatibilidad con personalización.
            td Camiseta para equipos escolares o empresariales.

    p La selección de telas e insumos en camisetas deportivas debe responder a la función de la prenda, la intensidad de uso, el tipo de movimiento esperado, el método de personalización y las condiciones de mantenimiento. No basta con elegir un textil disponible; se requiere correspondencia técnica entre tela, hilo, accesorios, tipo de costura y desempeño final del producto.
    p A continuación, se presentan los errores más frecuentes en la selección de insumos y textiles en camisetas deportivas: 


    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
        h5 Tabla 5.
        span Errores frecuentes en la selección de telas e insumos para camisetas deportivas

    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.izq.bg3 Error frecuente
            th.izq.bg3 Consecuencia en confección
            th.izq.bg3 Efecto sobre la prenda
            th.izq.bg3 Corrección técnica recomendada
        tbody
          tr
            td #[b Seleccionar una tela con baja elasticidad para una prenda ajustada]
            td Dificulta el ensamble y genera tensión en costuras.
            td Reduce movilidad y favorece deformación o ruptura.
            td Verificar porcentaje de elongación antes del corte.

          tr
            td #[b Elegir una tela muy pesada para uso deportivo intensivo]
            td Aumenta carga térmica y dificulta el #[em confort].
            td Produce sensación de calor y menor transpirabilidad.
            td Priorizar tejidos livianos con rápida evaporación.

          tr
            td #[b Utilizar hilo no compatible con tejidos elásticos]
            td Se presentan saltos de puntada o roturas.
            td Disminuye resistencia de costura durante el uso.
            td Emplear hilo con comportamiento acorde al textil.

          tr
            td #[b Seleccionar #[i rib] o cuello con recuperación deficiente]
            td El escote pierde forma después del uso.
            td Afecta ajuste, presentación y estabilidad del cuello.
            td Validar elasticidad y memoria del material complementario.

          tr
            td #[b Incorporar insumos sin verificar referencia técnica]
            td Aparecen incompatibilidades en ensamble y acabado.
            td Compromete uniformidad y funcionalidad del producto.
            td Cotejar cada insumo con la ficha técnica vigente.

          tr
            td #[b Cortar tela sin revisar defectos de lote o superficie]
            td Se procesan piezas con fallas visibles o estructurales.
            td Incrementa el rechazo interno y reproceso.
            td Realizar la inspección previa antes del tendido y el corte.

          tr
            td #[b Usar agujas inadecuadas para tejido de punto]
            td Se perfora o maltrata la estructura textil.
            td Aparecen daños, corridas o costuras inestables.
            td Seleccionar sistema, punta y calibre según material.

          tr
            td #[b Elegir tela sin considerar método de estampación]
            td Surgen problemas de adherencia o deformación.
            td Afecta personalización y presentación final.
            td Validar compatibilidad entre textil y proceso gráfico.

          tr
            td #[b Mezclar insumos de distinto lote sin control previo]
            td Se generan diferencias de tono o desempeño.
            td Altera uniformidad entre prendas de una misma orden.
            td Mantener trazabilidad y separación por lote.

          tr
            td #[b Priorizar disponibilidad sobre requerimiento técnico]
            td Se altera la especificación original del producto.
            td Disminuye calidad y se aleja del estándar previsto.
            td Aprobar sustituciones solo con validación técnica.

    separador
    #t_2_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.1  Revisión y corte de piezas

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img04.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después de la verificación inicial del material, el proceso continúa con las operaciones de tendido, marcado y corte, las cuales definen la forma, dimensión y correspondencia técnica de las piezas que pasarán al ensamble. Esta etapa exige precisión, ya que cualquier variación en la disposición de la tela o en el trazo del molde altera la estructura de la prenda y compromete la calidad del producto desde su base constructiva.

          br
          br
          | El tendido consiste en extender la tela sobre la mesa de corte en capas uniformes, de acuerdo con la dirección del hilo y con la orientación establecida para cada pieza del molde. Su correcta ejecución permite conservar la estabilidad del material y asegurar que todas las capas respondan a las mismas condiciones de corte. Cuando la tela se dispone con tensión desigual, con bordes desalineados o con variaciones en el sentido del hilo, las piezas resultantes presentan deformaciones, diferencias dimensionales o pérdida de simetría, lo que afecta el ensamble posterior. 

    p A continuación, el marcado transfiere a la tela el contorno de los moldes y las referencias técnicas necesarias para el corte y la unión de piezas. Esta operación puede realizarse mediante procedimientos manuales o con tecnologías de automatización, según el nivel de tecnificación del sistema productivo. Además del trazo principal, deben incorporarse los márgenes de costura y las marcas de coincidencia, conocidas como muescas o piquetes, indispensables para orientar la unión correcta de las partes durante la confección. Finalmente, el corte debe respetar con exactitud las líneas marcadas, evitando desplazamientos o variaciones que modifiquen la medida real de las piezas.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Importancia técnica del tendido y corte

    .cajon.color-acento-contenido.p-4.mb-4
      p El tendido y el corte no constituyen operaciones aisladas ni exclusivamente mecánicas. De su precisión depende la correspondencia entre piezas, la regularidad del ensamble y la conformidad dimensional de la prenda. Una desviación en esta etapa no solo incrementa el desperdicio de material, sino que compromete la calidad del producto y dificulta la continuidad del proceso.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Fundamentos del trazo, el tendido y el corte

    p Para fortalecer la comprensión de estas operaciones, se recomienda consultar los siguientes recursos audiovisuales:

    .cajon.color-secundario.p-4.mb-4
      p Antes de continuar, consulte el video Introducción al trazo y corte. En este recurso se presentan los conceptos básicos del trazo y el corte textil, los materiales y herramientas utilizados en estas operaciones, los diferentes tipos de maquinaria de corte y los criterios técnicos relacionados con el hilo de la tela, la urdimbre, la trama, el sesgo, los anchos textiles y los tipos de orillo. Esta información le permitirá comprender por qué la correcta identificación de las características del material es fundamental para lograr precisión en el tendido, el marcado y el corte.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pTwuCeaeTVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: introducción al trazo y corte

    .cajon.color-secundario.p-4.mb-4
      p Después de revisar los conceptos fundamentales, consulte el video Ejemplo de tipos de tendido con diferentes características del material. En este recurso se desarrolla un ejercicio práctico que muestra la identificación de orillos, el reconocimiento del derecho y el revés de la tela, la ejecución de tendidos abiertos y cerrados, la ubicación de moldes según el hilo de la tela, el marcado de piezas, la realización de piquetes y el corte de materiales con características especiales, como telas estampadas o textiles con pelo. Este ejemplo le permitirá relacionar los conceptos técnicos con su aplicación directa en el proceso de confección.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-nkWodY_bPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: ejemplo de tipos de tendido con diferentes características del material

    p Los conceptos y procedimientos presentados en los videos permiten identificar las condiciones técnicas que deben controlarse durante el tendido, el marcado y el corte. Asimismo, facilitan el reconocimiento de las desviaciones más frecuentes que pueden afectar la precisión de estas operaciones y comprometer la calidad de las piezas obtenidas. A continuación, se presentan algunos de los errores más comunes asociados con estas actividades y sus consecuencias en el proceso de confección.

    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
        h5 Tabla 6.
        span Errores frecuentes en tendido, marcado y corte de piezas

    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.izq.bg3 Operación
            th.izq.bg3 Error frecuente
            th.izq.bg3 Consecuencia técnica
            th.izq.bg3 Efecto en la prenda o en el proceso
        tbody
          tr
            td #[b Tendido]
            td Tensión excesiva en la tela.
            td Deformación de capas y alteración dimensional.
            td Piezas inestables y diferencias de ajuste.

          tr
            td #[b Tendido]
            td Desalineación de bordes.
            td Pérdida de uniformidad entre capas.
            td Variación de medidas entre piezas cortadas.

          tr
            td #[b Tendido]
            td Sentido de hilo incorrecto.
            td Cambio en el comportamiento estructural del material.
            td Torsión, desajuste o caída inadecuada.

          tr
            td #[b Marcado]
            td Contorno del molde impreciso.
            td Alteración en forma y proporción de la pieza.
            td Dificultades en correspondencia y ensamble.

          tr
            td #[b Marcado]
            td Omisión de márgenes de costura.
            td Reducción del área útil para unión.
            td Costuras forzadas o medidas finales erróneas.

          tr
            td #[b Marcado]
            td Ausencia de muescas o piquetes.
            td Falta de referencias para coincidencia de piezas.
            td Errores en montaje y pérdida de secuencia.

          tr
            td #[b Corte]
            td Desplazamiento de capas durante el corte.
            td Diferencias entre piezas de una misma referencia.
            td Reproceso y aumento de desperdicio.

          tr
            td #[b Corte]
            td Separación fuera de la línea marcada.
            td Modificación de dimensiones reales.
            td Ensamble deficiente y control de calidad no conforme.

    separador
    #t_2_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 2.2  Organización previa al proceso de ensamble

    p La organización previa al proceso de ensamble corresponde al conjunto de operaciones mediante las cuales las piezas cortadas se clasifican, verifican e identifican antes de su ingreso a costura. Aunque suele percibirse como una fase de apoyo, su correcta ejecución incide de forma directa en la continuidad del flujo productivo, en la trazabilidad interna del lote y en la reducción de errores asociados a mezclas de talla, faltantes de piezas o ausencia de insumos. Su función principal consiste en asegurar que cada paquete de trabajo llegue completo, identificado y técnicamente preparado para la secuencia de ensamble prevista.
    p Esta etapa comprende una serie de acciones que deben ejecutarse de manera ordenada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Organización de las piezas antes del ensamble
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.col-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="Paso 1" subtitulo="")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t2/1.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Agrupación por talla y referencia
              p Las piezas se separan según el molde y el pedido al que pertenecen, evitando cruces entre paquetes que alteren la correspondencia del producto.
          
          .row(titulo="Paso 2" subtitulo="")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t2/2.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Verificación de las piezas por paquete
              p El contenido físico se coteja con la lista de corte para confirmar la presencia de todas las partes constitutivas de la prenda, como el delantero, la espalda, las mangas, los cuellos, los bolsillos o las piezas complementarias, según la referencia elaborada.
          .row(titulo="Paso 3" subtitulo="")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t2/3.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Transferencia de marcas de unión y detalles internos
              p Se trasladan a las piezas cortadas los puntos de coincidencia requeridos para el ensamble, entre ellos los centros, los piquetes, las posiciones de bolsillos, las líneas de doblez o las referencias de ubicación. Esta marcación puede realizarse mediante tiza de sastre, perforaciones controladas o procedimientos equivalentes definidos por el sistema de producción.
          
          .row(titulo="Paso 4" subtitulo="")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t2/4.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Incorporación de insumos al paquete
              p Se integran los materiales complementarios requeridos para la operación, como hilos, entretelas, cierres, elásticos o accesorios, con el fin de evitar interrupciones por faltantes durante la costura.

    .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El alistamiento no concluye con la preparación física del paquete, sino que también exige registro y control documental, ya que la trazabilidad del proceso depende de la posibilidad de identificar qué material ingresó, cómo fue cortado, a qué referencia pertenece y bajo qué condiciones avanzó hacia el ensamble. Este criterio resulta coherente con los sistemas de gestión de calidad, que exigen control de la información documentada y, cuando aplica, identificación y trazabilidad del producto a lo largo del proceso. 
          br
        
    p La calidad del ensamble se apoya, por tanto, en una preparación previa rigurosa. Un paquete incompleto, mal identificado o sin correspondencia técnica con la orden de producción introduce desviaciones que no se corrigen en la operación posterior. La organización del material antes de costura no constituye un trámite secundario, sino una condición operativa para sostener la continuidad, la precisión y el control del proceso de confección.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7. 
          span Lista de verificación para el alistamiento de paquetes de confección
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.izq.bg3 Ítem de verificación
                th.izq.bg3 Conforme
                th.izq.bg3 No conforme
            tbody
              tr
                td Número de piezas completo según lista de corte.
                td.text-center —
                td.text-center —

              tr
                td Sentido del hilo verificado en todas las piezas.
                td.text-center —
                td.text-center —

              tr
                td Piquetes y marcas de unión transferidos correctamente.
                td.text-center —
                td.text-center —

              tr
                td La talla del paquete coincide con el #[em ticket] de identificación.
                td.text-center —
                td.text-center —

              tr
                td Insumos incorporados al paquete según requerimiento de la referencia.
                td.text-center —
                td.text-center —

              tr
                td Ausencia de defectos de corte visibles en los bordes de la pieza.
                td.text-center —
                td.text-center —

              tr
                td Referencia y pedido identificados correctamente en el paquete.
                td.text-center —
                td.text-center —
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/img06.png', alt='')



































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

<style lang="sass"></style>
