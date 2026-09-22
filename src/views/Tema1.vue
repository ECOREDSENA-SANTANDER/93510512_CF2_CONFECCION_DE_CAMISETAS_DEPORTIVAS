<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Puesto de trabajo
    
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La productividad en la industria de la confección se encuentra estrechamente vinculada con la organización técnica del puesto de trabajo, ya que este constituye el punto donde convergen recursos humanos, maquinaria, insumos, métodos operativos y condiciones de seguridad. Su configuración no responde únicamente a criterios de ubicación física, sino también a decisiones relacionadas con la secuencia de operaciones, la accesibilidad de los materiales, la economía del movimiento, la postura de trabajo y la reducción de tiempos improductivos. De esta disposición depende, en buena medida, la estabilidad del proceso, la regularidad en la ejecución de las tareas y la capacidad para mantener estándares consistentes de calidad durante la producción.
            br

      p Un puesto de trabajo diseñado bajo criterios técnicos favorece la continuidad operativa, disminuye los desplazamientos innecesarios, reduce la fatiga derivada de posturas sostenidas o movimientos repetitivos y fortalece el control de los riesgos asociados con la actividad. También incide en la precisión de las operaciones, la adecuada manipulación de herramientas y equipos, y la conservación de ritmos de trabajo compatibles con las metas de producción establecidas. Por esta razón, el puesto de trabajo no debe entenderse como un espacio aislado dentro de la planta, sino como una unidad funcional determinante para el desempeño global del sistema productivo en la confección industrial.

      .row.justify-content-center.align-items-end.mb-4(data-aos="zoom-in-left")
        .col-lg-12.col-md-10
          img(src='@/assets/curso/temas/t1/fig1.png', alt='')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
            h3.bg2.py-2.w-card-text Distribución del área de trabajo

      .row.justify-content-center.align-items-center.mb-4.fondo02(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/img02.png', alt='')
        .col-lg-7
          .p-4
            .d-flex.align-items-start
              .row
                .col-lg-3.mb-3
                  img(src='@/assets/curso/temas/t1/img03.png', alt='', style='width:70px;')
                .col-lg-12
                p La distribución del área de trabajo corresponde a la organización espacial de los recursos productivos dentro de la planta de confección. Su propósito consiste en definir la localización de las máquinas, las mesas de corte, los módulos de ensamble, las zonas de almacenamiento temporal y los corredores de circulación, de manera que la secuencia de operaciones se desarrolle con continuidad y orden técnico. Esta decisión influye directamente en el recorrido de los materiales, la articulación entre los procesos y la capacidad de respuesta del sistema frente a las exigencias de producción.

      p Una distribución técnicamente resuelta favorece la conexión lógica entre el corte, el ensamble, la revisión y el despacho interno, evitando cruces innecesarios entre los flujos, la acumulación de producto en proceso y la desarticulación entre las áreas. Su función principal no radica en el acondicionamiento de un puesto aislado, sino en la estructuración global del espacio productivo para asegurar que cada operación se integre de manera coherente dentro de la cadena de confección.

      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
        p En la industria de la confección se reconocen diversas formas de organización espacial, según el volumen de producción, la variedad de referencias, el tipo de prenda y el grado de especialización del proceso. Entre las configuraciones más utilizadas se encuentran la distribución en línea recta, el módulo celular o de trabajo en equipo y el sistema progresivo por lotes. Cada alternativa responde a necesidades operativas distintas y modifica aspectos como la circulación interna, la supervisión del proceso, el manejo del inventario en curso y la flexibilidad de la planta.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
            h3.bg2.py-2.w-card-text ¿Qué es el #[em layout] de planta?

      p.bg3.p-4 El #[em layout] de planta corresponde a la planificación y organización física de los recursos productivos dentro de un espacio industrial. Comprende la ubicación estratégica de equipos, puestos de trabajo, áreas de almacenamiento, zonas de circulación y puntos de apoyo operativo, con el propósito de garantizar un flujo ordenado, seguro y eficiente de materiales, personas e información a lo largo del proceso productivo. Su adecuada definición incide en la reducción de tiempos muertos, el mejor aprovechamiento del espacio y el fortalecimiento de las condiciones de seguridad y rendimiento en la planta de confección.


      .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
        h5 Tabla 1.
        span Comparación de sistemas de distribución del área de trabajo en confección industrial
      
      .tabla-a.color-acento-botones(data-aos="zoom-in-left").mb-4
        table
          thead
            tr
              th.izq.bg3 Criterio de comparación
              th.izq.bg3 Distribución en línea recta
              th.izq.bg3 Módulo celular o trabajo en equipo
              th.izq.bg3 Sistema progresivo por lotes
          tbody
            tr
              td #[b Definición]
              td Organiza los puestos de trabajo en secuencia lineal, siguiendo el orden exacto de las operaciones requeridas para elaborar la prenda.
              td Agrupa máquinas, herramientas y operarios en células de trabajo destinadas a fabricar una prenda o una parte significativa de ella.
              td Dispone las operaciones por secciones o procesos, trasladando grupos de piezas de una etapa a otra hasta completar la producción.

            tr
              td #[b Flujo de materiales]
              td Continuo, directo y secuencial, con desplazamientos reducidos entre una operación y la siguiente.
              td Semicontinuo y concentrado dentro de la célula, con recorridos cortos y alta interacción operativa.
              td Intermitente y por acumulación, debido a que los lotes esperan turno entre procesos o áreas.

            tr
              td #[b Tipo de producción más adecuada]
              td Producción en serie, referencias estables y altos volúmenes de fabricación.
              td Producción flexible, series medianas y referencias que requieren adaptación rápida.
              td Producción por lotes, pedidos variables y procesos con menor nivel de estandarización.

            tr
              td #[b Nivel de especialización operativa]
              td Alto, porque cada operario suele ejecutar una operación específica y repetitiva.
              td Medio o alto, aunque favorece mayor polivalencia entre quienes integran la célula.
              td Variable, según la complejidad del proceso y la organización de cada sección.

            tr
              td #[b Ventajas principales]
              td Facilita el control del tiempo de operación, mejora la continuidad del proceso y favorece altos niveles de productividad.
              td Reduce traslados internos, mejora la comunicación del equipo, incrementa la flexibilidad y favorece la detección temprana de fallas.
              td Permite manejar varias referencias, se adapta con relativa facilidad a cambios de pedido y aprovecha áreas organizadas por tipo de operación.

            tr
              td #[b Limitaciones principales]
              td Presenta menor flexibilidad ante cambios frecuentes de referencia y puede generar dependencia crítica entre operaciones consecutivas.
              td Exige coordinación constante, formación técnica del personal y equilibrio adecuado de cargas dentro de la célula.
              td Genera mayores tiempos de espera, incrementa el inventario en proceso y dificulta la continuidad del flujo productivo.

            tr
              td #[b Impacto sobre la productividad]
              td Alto cuando la producción es estable, el balanceo de línea está bien calculado y no existen cuellos de botella.
              td Alto en entornos que requieren respuesta rápida, control cercano y adaptación operativa.
              td Medio, ya que la productividad depende en gran medida del control de tiempos de espera y del manejo de los lotes.

            tr
              td #[b Impacto sobre la calidad]
              td Favorece uniformidad cuando los métodos están estandarizados y existe supervisión continua.
              td Facilita el autocontrol y la corrección inmediata por cercanía entre operaciones.
              td Puede dificultar la trazabilidad inmediata de errores si los lotes avanzan con demoras o sin control intermedio suficiente.

            tr
              td #[b Requerimientos de espacio]
              td Requiere un trazado longitudinal y una circulación ordenada acorde con la secuencia de producción.
              td Demanda áreas compactas y organización funcional alrededor de la célula.
              td Necesita zonas diferenciadas por proceso y espacio adicional para almacenamiento temporal de lotes.

            tr
              td #[b Aplicación frecuente en confección]
              td Camisetas, uniformes, prendas básicas y líneas de alta repetición.
              td Prendas con variaciones, colecciones cortas, módulos de respuesta rápida o producción flexible.
              td Talleres o plantas con producción variada, referencias múltiples y operaciones agrupadas por especialidad.

      .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
        p La elección del sistema de distribución no debe realizarse únicamente por disponibilidad de espacio. La decisión debe considerar el volumen de producción, la variedad de referencias, el tipo de prenda, la secuencia de operaciones, el nivel de tecnificación de la planta y la capacidad de respuesta requerida por el proceso. Una selección adecuada contribuye al equilibrio entre productividad, calidad, seguridad y aprovechamiento del área instalada.

      .row.justify-content-center.align-items-end.mb-4.fondo01(data-aos="zoom-in-left")
        .col-lg-7.col-md-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1. 
            span Distribución modular en U
          img(src='@/assets/curso/temas/t1/fig2.svg', alt='Esquema de una distribución modular en forma de U, con máquinas y puestos de trabajo ubicados alrededor de un espacio central para facilitar la circulación de materiales y la interacción entre las operaciones.')
      .row.justify-content-center.align-items-end.mb-4.fondo01
        .col-lg-7.col-md-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span Distribución modular en cara a cara
          img(src='@/assets/curso/temas/t1/fig3.svg', alt='Esquema de una distribución modular con puestos de trabajo ubicados frente a frente, conectados mediante un flujo interno de materiales y operaciones.')

      .row.justify-content-center.align-items-end.mb-4
        .col-lg-12.col-md-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span Distribución lineal en planta
          img(src='@/assets/curso/temas/t1/fig4.svg', alt='Diagrama de distribución industrial para confección de prendas. Incluye estaciones de trabajo, mesas, áreas de material y empaque, organizadas según el flujo de ensamble y las operaciones de producción.')

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2.
        span Comparación de esquemas de distribución de planta en talleres de confección
      .tabla-a.color-acento-botones.mb-3
        table
          caption Nota. Adaptado de Niebel, B. W. y Freivalds, A. (2009). Ingeniería industrial: Métodos, estándares y diseño del trabajo (12.ª ed.). McGraw-Hill.
          thead
            tr
              th.izq.bg3 Esquema
              th.izq.bg3 Volumen de producción
              th.izq.bg3 Ventaja principal
              th.izq.bg3 Limitación
          tbody
            tr
              td #[b Línea recta]
              td Alto, correspondiente a producción en masa.
              td Flujo continuo y homogéneo.
              td Poca flexibilidad ante cambios de referencia.

            tr
              td #[b Módulo celular]
              td Mediano, con referencias diversas.
              td Polivalencia operativa y control de calidad inmediato.
              td Requiere operarios multicompetentes.

            tr
              td #[b Por lotes progresivos]
              td Bajo a mediano, aplicado a prendas técnicas.
              td Control de defectos por etapa.
              td Mayor tiempo de ciclo total.

      p La selección del esquema de distribución no es arbitraria. En esta decisión intervienen variables como el tipo de prenda, ropa de trabajo, lencería o ropa exterior, el sistema de producción empleado, tarea completa, tarea dividida o sistema progresivo, la capacidad instalada de la maquinaria y las proyecciones de demanda. La Norma Técnica Colombiana NTC 5655, relacionada con los principios ergonómicos para el diseño de sistemas de trabajo, orienta los criterios de distribución desde la perspectiva de la carga física de quienes realizan las operaciones.

      p A continuación, se presentan dos propuestas relacionadas con el diseño y la disposición de un puesto de trabajo para el ensamble de una camiseta deportiva.

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
            h3.bg2.py-2.w-card-text Organización del puesto para el ensamble de una camiseta deportiva

      .tarjeta.fondo03.p-4(data-aos="zoom-in-left")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-md-0
              h4 Diseño del puesto de trabajo
              p Presenta la organización general del espacio requerido para realizar el ensamble de una camiseta deportiva, considerando la ubicación de la maquinaria, los materiales y los elementos de apoyo.

            .col-lg-8.col-md-10
              .titulo-sexto.color-acento-boton(data-aos='fade-right')
                h5 Figura 4. 
                span Diseño de un puesto de trabajo para ensamble de camiseta deportiva
              figure
                img(src='@/assets/curso/temas/t1/fig6.svg', alt='Esquema de estación de confección con organización de piezas de una prenda. Se ubican las partes de espalda, delantero y hombros unidos alrededor del puesto de trabajo.')
         

          .row.justify-content-center.align-items-center
            .col-lg-4.mb-4.mb-md-0
              h4 Disposición del puesto de trabajo
              p Representa la ubicación funcional de los elementos que integran el puesto, con el propósito de facilitar el acceso a los materiales, reducir desplazamientos y favorecer la continuidad de las operaciones.

            .col-lg-8.col-md-10
              .titulo-sexto.color-acento-boton(data-aos='fade-right')
                h5 Figura 5. 
                span Disposición del puesto de trabajo
              figure
                img(src='@/assets/curso/temas/t1/fig5.svg', alt='Esquema de puesto de trabajo con áreas organizadas para distribución de materiales. Se indican recorridos de movimiento entre zonas identificadas con números romanos y trayectorias señaladas mediante flechas.')

      separador
      #t_1_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
        h2 1.1  Herramientas y equipos disponibles en el puesto

      p El puesto de trabajo en confección integra cinco categorías de recursos técnicos: maquinaria principal, maquinaria de apoyo, instrumentos de medición, implementos de corte y elementos de seguridad.

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-9
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3.
            span Clasificación de maquinaria y equipos en el puesto de costura industrial
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th.izq.bg3 Categoría
                  th.izq.bg3 Equipos y maquinaria
                  th.izq.bg3 Función principal
              tbody
                tr
                  td #[b Maquinaria principal]
                  td Plana (1 aguja, 2 agujas), fileteadora (overlock), collarín, recubridora.
                  td Formación de costuras estructurales y de acabado.

                tr
                  td #[b Maquinaria de apoyo]
                  td Planchado industrial, vaporizador, máquina de presillas, botonera.
                  td Acabados, fijación de accesorios y tratamiento térmico de telas.

                tr
                  td #[b Instrumentos de medición]
                  td Cinta métrica, escuadra sastre, metro plano, galga de costuras.
                  td Control dimensional de piezas y verificación de tolerancias.

                tr
                  td #[b Implementos de corte]
                  td Tijeras de costurera, cortadora manual, descosedor, punzón.
                  td Corte de hilo, separación de piezas y corrección de defectos.

                tr
                  td #[b Elementos de seguridad del puesto]
                  td Guardas de aguja, dedal, recipiente para residuos de hilo.
                  td Prevención de accidentes y orden del entorno inmediato.
        .col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/img04.png', alt='')


      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center
            img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
            h3.bg2.py-2.w-card-text Puesto de trabajo en fileteadora

      .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-12
          img(src="@/assets/curso/temas/t1/img05.png")

      p.bg3.p-4 El puesto de trabajo, en suma, no es un punto fijo en el plano, es un sistema integrado por espacio, ergonomía, herramientas y prácticas operativas que, cuando se gestiona de manera planificada, constituye la base sobre la cual se sostiene la productividad de toda la cadena de confección.






































              

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Diseño del puesto de trabajo',
        texto:
          'Presenta la organización general del espacio requerido para realizar el ensamble de una camiseta deportiva, considerando la ubicación de la maquinaria, los materiales y los elementos de apoyo.',
        imagen: '@/assets/curso/temas/t1/fig5.svg',
      },
      {
        titulo: 'Disposición del puesto de trabajo',
        texto:
          'Representa la ubicación funcional de los elementos que integran el puesto, con el propósito de facilitar el acceso a los materiales, reducir desplazamientos y favorecer la continuidad de las operaciones.',
        imagen: '@/assets/curso/temas/t1/fig6.svg',
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

<style lang="sass"></style>
