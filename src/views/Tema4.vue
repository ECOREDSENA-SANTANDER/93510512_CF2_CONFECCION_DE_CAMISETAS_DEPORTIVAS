<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y salud en el trabajo

    .bloque-texto-g.bloque-texto-g--inverso.bg6.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad y salud en el trabajo constituye un eje transversal de la actividad productiva en el sector de la confección. Su incorporación en los procesos no responde únicamente a obligaciones normativas, sino también a la necesidad de garantizar condiciones laborales que protejan la integridad física y mental de quienes participan en la cadena de producción. El conocimiento de los factores de riesgo presentes en el entorno de confección, así como la aplicación de medidas preventivas y protocolos de actuación ante eventos adversos, forma parte de las competencias esenciales de quienes se desempeñan en este campo.
          br

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Tipos de riesgos laborales

    p Los riesgos laborales presentes en el entorno de confección se clasifican según su naturaleza y el mecanismo mediante el cual pueden afectar la salud. Su identificación sistemática constituye el punto de partida para la implementación de estrategias de prevención dentro del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).

    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
        .col-12.col-lg-7
          h4.bg8.py-2.w-card-text2 Riesgos físicos

    p Los riesgos físicos se originan en las condiciones ambientales del lugar de trabajo y actúan sobre el organismo sin necesidad de contacto directo con la fuente. En los puestos de confección, los de mayor prevalencia son los siguientes:
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Ruido")
        .col-lg-6.mb-3.col-10
          p Las máquinas de coser industriales generan niveles sonoros que, ante exposición prolongada sin protección auditiva adecuada, producen deterioro auditivo de carácter progresivo e irreversible. La normativa colombiana establece un límite de 85 dBA (decibelios ponderados) para exposición continua durante una jornada de ocho horas, tal como lo dispone la Resolución 8321 de 1983 del Ministerio de Salud.
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img02.png', alt='')
      
      .row.justify-content-center(titulo="Iluminación deficiente")
        .col-lg-6.mb-3.col-10
          p La iluminación insuficiente en el puesto de trabajo dificulta la identificación de detalles durante las operaciones de costura, aumenta la probabilidad de errores, genera fatiga visual y puede favorecer la ocurrencia de accidentes.
          p El puesto debe contar con iluminación general y con una fuente localizada sobre el área de costura. Esta debe permitir reconocer con claridad las piezas, las puntadas, las agujas y los demás elementos utilizados, sin producir reflejos, sombras excesivas o deslumbramiento.
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img03.png', alt='')
      
      .row.justify-content-center(titulo="Temperatura")
        .col-lg-6.mb-3.col-10
          p Las condiciones térmicas inadecuadas, tanto por exposición a calor excesivo como por corrientes de aire frío, pueden afectar la concentración, generar incomodidad y favorecer la aparición de molestias musculares durante la jornada.
          p Para controlar este riesgo, el área de trabajo debe disponer de ventilación adecuada, circulación de aire y condiciones de temperatura acordes con la actividad realizada. También es importante mantener una hidratación adecuada y organizar pausas cuando las condiciones térmicas generen fatiga o malestar.
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img04.png', alt='')
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Riesgos mecánicos en el entorno de confección
    p Los riesgos mecánicos se derivan del contacto directo o indirecto con la maquinaria, las herramientas de corte y los materiales empleados durante el proceso productivo. Su prevención requiere reconocer las fuentes de peligro, utilizar correctamente los equipos y mantener el puesto de trabajo organizado.


    
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Contacto con la aguja")
        .col-lg-6.mb-3.col-10
          p El contacto de los dedos con la aguja en movimiento puede ocurrir por pérdida de concentración, ubicación incorrecta de las manos o adopción de posturas inadecuadas frente al equipo. 

          p Para prevenir este riesgo, se deben mantener las manos alejadas del recorrido de la aguja, utilizar las guardas de seguridad, detener la máquina antes de realizar ajustes y conservar una posición adecuada durante la operación. 
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/agua.png', alt='')

      .row.justify-content-center(titulo="Atrapamiento en partes móviles")
        .col-lg-6.mb-3.col-10
          p El atrapamiento puede presentarse cuando las extremidades, el cabello, los accesorios o las prendas de vestir entran en contacto con las partes móviles de la maquinaria.
          p Como medida preventiva, se recomienda utilizar ropa ajustada, recoger el cabello, evitar accesorios colgantes y comprobar que las guardas y los dispositivos de seguridad se encuentren instalados y en funcionamiento.
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img05.png', alt='')
      
      .row.justify-content-center(titulo="Cortes con herramientas")
        .col-lg-6.mb-3.col-10
          p Las tijeras, los cortadores rotativos y las cuchillas utilizadas en la mesa de corte pueden causar lesiones cuando se manipulan de manera inadecuada o se almacenan sin protección.
          p Estas herramientas deben utilizarse exclusivamente para la función asignada, conservarse en buen estado y guardarse en un lugar seguro después de cada operación. El corte debe realizarse en dirección contraria al cuerpo y sobre una superficie estable.

        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img06.png', alt='')
      
      .row.justify-content-center(titulo="Golpes y caída de objetos")
        .col-lg-6.mb-3.col-10
          p Los rollos de tejido, las cajas de insumos y los equipos almacenados incorrectamente pueden caer y ocasionar golpes o lesiones.
          p Para reducir este riesgo, los materiales deben ubicarse en superficies estables, respetar la capacidad de almacenamiento y mantenerse alejados de las zonas de circulación. Los objetos pesados deben colocarse en los niveles inferiores para facilitar su manipulación segura.
        .col-lg-5.col-11
          figure
            img(src='@/assets/curso/temas/t4/img07.png', alt='')
      
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Riesgos ergonómicos en el puesto de confección
    p Los riesgos ergonómicos se originan en la interacción entre las características físicas de la persona, las condiciones del puesto de trabajo y las exigencias de la tarea. Sus efectos suelen manifestarse gradualmente y pueden afectar principalmente el cuello, los hombros, la espalda, las muñecas, los antebrazos y los codos.

    .tarjeta.fondo03.p-4(data-aos="zoom-in-left").mb-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-md-0
              h4 Posturas estáticas prolongadas
              p Mantener una misma posición corporal durante periodos extensos y sin interrupciones genera tensión muscular acumulada, especialmente en el cuello, los hombros y la región lumbar.
              p Para reducir este riesgo, se recomienda alternar posturas, realizar pausas periódicas y ajustar la silla y la máquina de acuerdo con las dimensiones corporales de la persona.
            .col-lg-7.col-md-10
              img(src='@/assets/curso/temas/t4/img08.png', alt='')
          
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-md-0
              h4 Posturas forzadas
              p La inclinación sostenida del tronco hacia adelante y la flexión o rotación prolongada del cuello sobrecargan la columna vertebral y la musculatura cervical.
              p La prevención requiere mantener la espalda apoyada, ubicar el área de costura a una altura adecuada y conservar los materiales y controles dentro de una zona de alcance cómoda.
            .col-lg-7.col-md-10
              img(src='@/assets/curso/temas/t4/img09.png', alt='')
          
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-md-0
              h4 Movimientos repetitivos
              p Acciones como guiar el material, accionar el pedal, cortar hilos y manipular piezas de manera continua pueden producir lesiones por sobreuso en las muñecas, los antebrazos y los codos.
              p Para disminuir este riesgo, se deben realizar pausas activas, alternar las tareas cuando sea posible y evitar movimientos bruscos o la aplicación innecesaria de fuerza.
            .col-lg-7.col-md-10
              img(src='@/assets/curso/temas/t4/img10.png', alt='')

          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-md-0
              h4 Aplicación de fuerza excesiva
              p La manipulación de cargas pesadas, como rollos de tejido, cajas de insumos o equipos, sin aplicar una técnica adecuada genera una carga elevada sobre la columna lumbar, los hombros y los miembros superiores.
              p Para prevenir lesiones, la carga debe mantenerse cerca del cuerpo, el levantamiento debe realizarse mediante la flexión y extensión de las piernas, y los cambios de dirección deben efectuarse desplazando los pies, sin girar el tronco mientras se sostiene el objeto.
            .col-lg-7.col-md-10
              img(src='@/assets/curso/temas/t4/img11.png', alt='')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Riesgos psicosociales en el entorno de confección

    p Los riesgos psicosociales se relacionan con las condiciones de organización y ejecución del trabajo. La exposición a ritmos de producción intensivos, la presión asociada con el cumplimiento de metas y la ausencia de pausas regulares puede generar fatiga mental, reducir la capacidad de atención y aumentar la probabilidad de errores o accidentes.
    p La prevención de estos riesgos requiere una adecuada organización de las tareas, distribución equilibrada de las cargas laborales, establecimiento de pausas durante la jornada y comunicación oportuna de las situaciones que puedan afectar el bienestar y el desempeño.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Lesiones y afecciones frecuentes en el entorno de confección
    p Las posturas prolongadas, los movimientos repetitivos, el esfuerzo muscular y las condiciones inadecuadas del puesto de trabajo pueden favorecer la aparición de diferentes lesiones y afecciones. A continuación, se presentan las más frecuentes.


    .row.justify-content-center.mb-0
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/1.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center Síndrome del túnel carpiano
              p.mb-0 #[b Zona afectada:] muñeca y mano.
              p #[b Causa principal:] movimientos repetitivos sostenidos.

      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/2.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center Tendinitis
              p.mb-0 #[b Zona afectada:] codo y hombro.
              p #[b Causa principal:] sobreesfuerzo muscular repetido.

      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/3.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center Lumbalgia
              p.mb-0 #[b Zona afectada:] región lumbar.
              p #[b Causa principal:] postura estática prolongada sin soporte adecuado.

    .row.justify-content-center.mb-0
      .col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/4.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center Cervicalgia
              p.mb-0 #[b Zona afectada:]  cuello.
              p #[b Causa principal:]  postura forzada hacia adelante mantenida durante periodos prolongados.

      .col-md-6.col-lg.mb-0.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/5.png' alt='')
          .tarjeta.color-acento-contenido
            .p-4
              h4.text-center Fatiga visual
              p.mb-0 #[b Zona afectada:] ojos.
              p #[b Causa principal:] iluminación insuficiente o trabajo de precisión prolongado.

    separador
    #t_4_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.1  Técnicas de ergonomía aplicadas al puesto de trabajo 
    
    p La ergonomía es la disciplina que estudia la relación entre las personas y los entornos en los que desarrollan sus actividades, con el propósito de adaptar las condiciones del puesto a las capacidades y los límites del organismo humano. Su aplicación en el sector de la confección se concreta en ajustes técnicos del mobiliario, la postura y la organización del trabajo, los cuales reducen la carga física y contribuyen al mantenimiento del desempeño a lo largo de la jornada.

    .cajon.color-secundario.p-4.mb-4
      p Antes de continuar, consulte el podcast ''Tu cuerpo también es parte del equipo''. Este recurso explica, mediante una conversación cercana y un ejemplo aplicado al entorno de confección, cómo la correcta organización de la silla, la máquina, el pedal y los materiales puede reducir la fatiga, prevenir molestias musculoesqueléticas y favorecer la precisión durante las operaciones.
    
    img(src='@/assets/curso/temas/t4/podcast.png', alt='')
    .row.justify-content-center.g-0(data-aos="fade-right").mb-4
      .col-lg-12
        .tarjeta.clr--pink.p-4.rounded-0.h-100.color-primario
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-secundario.mb-0.p-3(
            texto="Podcast: Tu cuerpo también es parte del equipo"
            :audio="require_src('@/assets/curso/temas/t4/podcast.mp3')"
        )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
           
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Técnicas de ergonomía en el puesto de confección

    TabsC.color-primario
      .py-3.py-md-4(titulo="Ajuste del puesto de trabajo")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-3
            img(src='@/assets/curso/temas/t4/tabs1.png', alt='')
          .col-lg-7.mb-4.mb-md-0
            p.mb-1 La configuración correcta del puesto de costura parte de la relación entre las dimensiones corporales de la persona y las características físicas del equipo.
            p.mb-1 #[b Altura de la silla:] los pies deben apoyarse completamente sobre el suelo o sobre el pedal de la máquina, con las rodillas formando un ángulo aproximado de 90°. Cuando la silla no dispone de un mecanismo de regulación, se recomienda utilizar un reposapiés para compensar la diferencia.     
            p.mb-1 #[b Altura de la máquina:] los codos deben ubicarse ligeramente por encima del plano de trabajo, de modo que los antebrazos descansen de forma natural, sin necesidad de elevar los hombros.
            p.mb-1 #[b Distancia a la máquina:] debe mantenerse una proximidad adecuada con el equipo y conservar los codos cerca del tronco, de manera que el alcance al material y a los controles no requiera una extensión forzada de los miembros superiores.
            p.mb-1 #[b Posición de la cabeza:] la cabeza debe orientarse hacia el área de costura con una inclinación cervical que no supere aproximadamente los 20°. Una flexión mayor, mantenida durante periodos prolongados, genera tensión muscular progresiva en la región cervical.
            p.mb-1 #[b Respaldo de la silla:] el respaldo debe ofrecer soporte a la región lumbar. La ausencia de un apoyo adecuado acelera la aparición de fatiga muscular y dolor en la zona baja de la espalda.
      .py-3.py-md-4(titulo="Pausas activas")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-8.mb-3
            img(src='@/assets/curso/temas/t4/tabs2.png', alt='')
          .col-lg-7.mb-4.mb-md-0
            p.mb-1 Las pausas activas son interrupciones programadas de la actividad laboral, con una duración recomendada de entre cinco y diez minutos cada dos horas, durante las cuales se realizan ejercicios de movilidad articular y estiramiento muscular orientados a recuperar el estado funcional de los grupos musculares implicados en la tarea.
            p.mb-1 Los ejercicios recomendados para el puesto de confección incluyen los siguientes:
            p.mb-1 #[b Cuello:] realizar rotaciones suaves en ambas direcciones e inclinaciones laterales, acercando la oreja al hombro sin forzar el rango de movimiento.
            p.mb-1 #[b Hombros:] elevar simultáneamente ambos hombros, mantener la posición durante cinco segundos y liberar la tensión de forma controlada. Se recomienda repetir el ejercicio cinco veces.
            p.mb-1 #[b Muñecas:] extender un brazo al frente con los dedos dirigidos hacia arriba durante diez segundos y repetir el movimiento con los dedos dirigidos hacia abajo.
            p.mb-1 #[b Espalda:] realizar una flexión suave del tronco hacia adelante, con los brazos en reposo, y regresar progresivamente a la posición inicial.
            p.mb-1 #[b Descanso visual:] dirigir la atención hacia un punto distante durante veinte segundos, con el propósito de reducir la fatiga visual asociada con las actividades de precisión.
            p.mb-1 La práctica regular de pausas activas puede contribuir a disminuir la fatiga musculoesquelética y favorecer el mantenimiento del desempeño durante la jornada.
    
      .py-3.py-md-4(titulo="Técnicas de manipulación de cargas")
        .row.justify-content-center.align-items-center
          .col-lg-11.mb-3
            img(src='@/assets/curso/temas/t4/tabs3.png', alt='')
          .col-lg-11.mb-4.mb-md-0
            p La manipulación manual de cargas en el entorno de confección incluye el traslado de rollos de tejido, cajas de insumos y equipos. Esta actividad constituye un factor de riesgo de lesión osteomuscular cuando no se aplica una técnica adecuada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Manipulación segura de cargas

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12.col-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="Paso 1" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas1.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Aproximación a la carga
              p Acercarse al objeto antes de levantarlo y evitar extender el tronco desde una posición alejada.
          .row(titulo="Paso 2" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas2.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Flexión de las rodillas
              p Flexionar las rodillas hasta alcanzar el nivel del objeto, manteniendo la columna en una posición neutra.

          .row(titulo="Paso 3" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas3.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Sujeción de la carga
              p Sujetar el objeto con ambas manos y mantenerlo próximo al cuerpo durante todo el desplazamiento.

          .row(titulo="Paso 4" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas4.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Levantamiento
              p Realizar la incorporación mediante la extensión de las piernas, evitando concentrar el esfuerzo en la musculatura de la espalda.

          .row(titulo="Paso 5" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas5.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Cambio de dirección
              p Cuando sea necesario cambiar de dirección, desplazar los pies y evitar la rotación del tronco mientras se sostiene la carga.

    separador
    #t_4_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 4.2  Procedimiento de reporte de incidentes y accidentes
    
    p En el marco del Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), la distinción entre incidente y accidente tiene implicaciones operativas concretas.
    p Un incidente de trabajo es un suceso ocurrido durante el trabajo o relacionado con este que tuvo el potencial de convertirse en un accidente, pero en el cual no se presentaron lesiones, daños a la propiedad o pérdidas en los procesos.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-5.mb-3.col-10
        img(src='@/assets/curso/temas/t4/img12.png', alt='')
      .col-lg-7
        .row.mb-0
          .col-lg-2.mb-3.col-3.col-md-2
            img(src='@/assets/curso/temas/t4/img13.png', alt='')
          .col-lg-10.mb-0
            p Un accidente de trabajo es un suceso repentino ocurrido por causa o con ocasión del trabajo que produce una lesión, una alteración funcional o psicológica, invalidez o muerte.
        p Tanto los incidentes como los accidentes deben reportarse, registrarse e investigarse, debido a que el análisis de sus causas permite establecer medidas preventivas, correctivas y de mejora.
        p El marco normativo relacionado con este procedimiento comprende el Decreto 1072 de 2015, la Resolución 0312 de 2019, la Resolución 1401 de 2007 y las demás disposiciones vigentes aplicables al Sistema de Gestión de la Seguridad y Salud en el Trabajo.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Procedimiento para reportar incidentes y accidentes
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12.col-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="Paso 1" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas6.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Atención inmediata
              p Ante la presencia de una persona lesionada, la atención médica o de primeros auxilios tiene prioridad sobre cualquier trámite administrativo. En caso de una lesión grave, se activa el protocolo de emergencias y se contactan los servicios correspondientes.

          .row(titulo="Paso 2" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas7.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Control y preservación del lugar
              p Los elementos relacionados con el evento no deben modificarse antes de realizar la inspección correspondiente, excepto cuando sea necesario intervenir para proteger la vida, controlar un peligro o evitar un daño mayor.

          .row(titulo="Paso 3" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas8.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Notificación inmediata
              p El jefe inmediato o la persona responsable del SG-SST debe recibir información sobre el incidente o accidente de manera inmediata, de acuerdo con el procedimiento establecido por la organización.

          .row(titulo="Paso 4" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas9.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Registro escrito
              p.mb-1 Se diligencia el formato de reporte establecido por la organización, incorporando la siguiente información:
              p.mb-1 • Fecha, hora y lugar del evento.
              p.mb-1 • Identificación y cargo de la persona involucrada.
              p.mb-1 • Descripción detallada de lo ocurrido.
              p.mb-1 • Posibles causas.
              p.mb-1 • Testigos presentes.
              p.mb-1 • Medidas de atención adoptadas.
              p Los reportes externos deben efectuarse ante las entidades correspondientes dentro de los términos establecidos por la normativa vigente.

          .row(titulo="Paso 5" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas10.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Investigación
              p El responsable del SG-SST, el jefe inmediato y las demás personas definidas por la organización realizan el análisis de las causas del incidente o accidente. La investigación permite identificar las condiciones que originaron el evento y formular medidas correctivas y preventivas.

          .row(titulo="Paso 6" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t4/pas11.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Seguimiento
              p Se verifica la implementación de las medidas correctivas dentro de los plazos establecidos y se evalúa su eficacia mediante los mecanismos de seguimiento definidos por la organización.

    .cajon.color-secundario.p-4.mb-4
      p.mb-0 El reporte oportuno de incidentes, accidentes y condiciones peligrosas permite identificar las causas de los eventos, prevenir su repetición y fortalecer la mejora continua del SG-SST.













































</template>

<script>
export default {
  name: 'Tema3',
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
