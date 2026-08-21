<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Confección de camiseta deportiva

    .bloque-texto-g.bloque-texto-g--inverso.bg7.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La confección de la camiseta deportiva exige el dominio técnico de una secuencia de operaciones básicas de costura ejecutadas en maquinaria especializada, dado que cada equipo cumple una función específica dentro del proceso de ensamble. La correcta articulación entre máquina, material, tipo de puntada y operación determina la estabilidad de la costura, la funcionalidad de la prenda y la calidad del acabado final. 
          br
          br
          | Por esta razón, el presente apartado introduce las operaciones fundamentales desarrolladas en las principales máquinas empleadas en confección industrial, con el propósito de reconocer su aplicación, su orden de intervención y su aporte dentro de la construcción técnica de la camiseta deportiva.

    separador
    #t_3_1.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.1  Máquina fileteadora con puntada de seguridad

    p La máquina fileteadora con puntada de seguridad es uno de los equipos más utilizados en la confección de prendas elaboradas en tejido de punto, como las camisetas deportivas. Su función consiste en unir las piezas de la prenda mientras realiza simultáneamente el sobrehilado de los bordes, lo que proporciona resistencia, elasticidad y un acabado adecuado para prendas sometidas a movimiento constante.
    p Antes de iniciar cualquier operación de costura, es indispensable realizar la puesta a punto de la máquina. Este procedimiento permite verificar que el equipo se encuentre limpio, correctamente lubricado, ajustado y enhebrado, garantizando así la formación adecuada de la puntada y el correcto desempeño durante el proceso de confección.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Puesta a punto de la máquina fileteadora con puntada de seguridad

    p La puesta a punto de la máquina fileteadora con puntada de seguridad comprende una secuencia de trece pasos que deben ejecutarse de manera ordenada antes de iniciar las operaciones de confección.
    
    .fondosly.p-3.p-md-4.p-lg-5.mb-4(data-aos="zoom-in-left")
      .tarjeta.tarjeta-blanca.p-4
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center(titulo="1")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/1.png")
            .col-lg-3
              h4 Alistamiento de herramientas
              p Consulte el video:  
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco( href="https://www.youtube.com/watch?v=BlsIooZH9gg&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=13" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video


          .row.justify-content-center(titulo="2")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/2.png")
            .col-lg-4
              h4 Limpieza y orden del puesto de trabajo
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=wtHBYpvY2qg&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=14"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="3")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/3.png")
            .col-lg-4
              h4 Enhebrado del hilo para #[em looper] inferior
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=e3VIQuI2CPc&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=5"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="4")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/4.png")
            .col-lg-4
              h4 Enhebrado del hilo para #[em looper] superior
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=C60vi8djPhA&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=4"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="5")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/5.png")
            .col-lg-5
              h4 Enhebrado del hilo para aguja de puntada de filete
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=7MPnUCYW0Qg&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=3"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="6")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/6.png")
            .col-lg-5
              h4 Enhebrado del hilo para aguja de puntada de seguridad
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=Y4GHFnR_Hq0&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=6"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="7")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/7.png")
            .col-lg-6
              h4 Enhebrado del hilo para #[em looper] de puntada de seguridad
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=Y_KBM8O2lIY&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=2"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="8")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/8.png")
            .col-lg-3
              h4 Prueba de costura
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=uv3mjlOymIE&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=12"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="9")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/9.png")
            .col-lg-4
              h4 Ajuste de la tensión de la máquina
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=PMS6lRthWnQ&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=10"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="10")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/10.png")
            .col-lg-3
              h4 Calibración de la puntada
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=Cf2gPlXy88s&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=9"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="11")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/11.png")
            .col-lg-3
              h4 Ajuste del nivel de arrastre
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=Nz1r5rl-xXQ&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=8"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="12")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/12.png")
            .col-lg-3
              h4 Verificación del nivel de aceite
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=Omjyi5Wbq_8&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=7"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="13")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/13.png")
            .col-lg-5
              h4 Verificación de los dispositivos de seguridad
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(
                  href="https://www.youtube.com/watch?v=SqvF1VSJouU&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=11"
                  target="_blank"
                )
                  span Abrir video
                  i.fas.fa-file-video        
                  
    .row.justify-content-center.align-items-center.mb-4.fondo02(data-aos="zoom-in-left")
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/img02.png', alt='')
        .col-lg-7
          .p-4
            .d-flex.align-items-start
              .row
                .col-lg-12
                  p La correcta ejecución de esta secuencia permite preparar la máquina para las operaciones de confección, reducir fallas durante la costura, mejorar la calidad de las uniones y garantizar condiciones seguras de trabajo. Antes de iniciar el ensamble de la camiseta deportiva, se recomienda revisar cada uno de los pasos y verificar que la máquina se encuentre en condiciones óptimas de funcionamiento.
                  p Una vez realizada la puesta a punto de la máquina, es posible ejecutar las operaciones básicas de confección que intervienen en el ensamble de la camiseta deportiva. Estas operaciones permiten desarrollar habilidades de manejo, control del material y precisión en la formación de la puntada.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Operaciones básicas para el manejo de la máquina fileteadora

    p Los videos dedicados a las operaciones básicas con máquina fileteadora brindan al aprendiz las herramientas necesarias para ejecutar con destreza maniobras fundamentales como unir piezas, realizar filetes rectos y rematar costuras. Este contenido complementario resulta esencial para reforzar la técnica operativa, mejorar la precisión en el acabado de prendas y consolidar la confianza en el manejo de esta maquinaria especializada en el proceso de confección industrial.

    .tarjeta.fondosly2.p-4(data-aos="zoom-in-left").mb-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0
              h4.mb-3 Unión de piezas en filete con puntada de seguridad
              p Esta operación consiste en unir dos piezas de tela mediante una costura de filete con puntada de seguridad, realizando simultáneamente el sobrehilado de los bordes. Para su ejecución, las piezas deben alinearse correctamente y colocarse una sobre otra antes de posicionarlas bajo el prensatelas. Durante la costura, el material debe guiarse de manera uniforme, permitiendo que la cuchilla elimine únicamente el excedente del borde sin afectar las dimensiones de las piezas.
              p Al finalizar la operación, se verifica que la unión conserve la misma apariencia al inicio y al final de la costura, garantizando continuidad, resistencia y correcta alineación de las piezas ensambladas.
              .row.mb-3
                .col-sm-auto
                  p Consulte el video correspondiente:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(
                    href="https://www.youtube.com/watch?v=Hdts2Gyh1sw"
                    target="_blank"
                  )
                    span Abrir video
                    i.fas.fa-file-video     
            .col-lg-3.col-md-7
              img(src='@/assets/curso/temas/t3/img03.png', alt='')
          
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0
              h4.mb-3 Realización de filete recto
              p Esta operación tiene como propósito desarrollar el control del material durante el sobrehilado en una trayectoria recta. Su práctica permite familiarizarse con el funcionamiento de la máquina, el guiado de la pieza y la formación uniforme de la costura.
              p Durante la ejecución, la pieza debe mantenerse alineada y guiarse de manera constante, procurando que la cuchilla retire únicamente el excedente del borde. Asimismo, se debe conservar una velocidad uniforme y verificar que el ancho del filete permanezca constante durante todo el recorrido.
              p El dominio de esta operación favorece la precisión en el acabado de las piezas y constituye una base para el desarrollo de operaciones de mayor complejidad.
              .row.mb-3
                .col-sm-auto
                  p Consulte el video correspondiente:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(
                    href="https://www.youtube.com/watch?v=Upg0Ki-GlmE"
                    target="_blank"
                  )
                    span Abrir video
                    i.fas.fa-file-video     
            .col-lg-3.col-md-7
              img(src='@/assets/curso/temas/t3/img04.png', alt='')

          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-md-0
              h4.mb-3 Remate en filete
              p El remate en filete permite asegurar el inicio y el final de la costura para evitar que el sobrehilado se desprenda durante el uso o el lavado de la prenda. La operación consiste en incorporar la cadeneta inicial dentro de las primeras puntadas de costura y realizar un procedimiento similar al finalizar el recorrido.
              p Para ello, se ejecutan algunas puntadas iniciales y se conduce la cadeneta hacia el interior de la costura. Al terminar, se realizan unas pocas puntadas adicionales, se gira la pieza y se continúa brevemente sobre la misma línea para asegurar el remate. Este procedimiento mejora la resistencia de la costura y contribuye a la estabilidad del acabado.
              .row.mb-0.mb-3
                .col-sm-auto
                  p Consulte el video correspondiente:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(
                    href="https://www.youtube.com/watch?v=cTYaptACosQ"
                    target="_blank"
                  )
                    span Abrir video
                    i.fas.fa-file-video     
            .col-lg-3.col-md-7
              img(src='@/assets/curso/temas/t3/img04.png', alt='')

    p Las operaciones básicas de unión, fileteado y remate constituyen la base para el manejo adecuado de la máquina fileteadora con puntada de seguridad. Su práctica sistemática permite desarrollar precisión, coordinación y control sobre el material, competencias fundamentales para garantizar la calidad del ensamble en la confección de camisetas deportivas.


    separador
    #t_3_2.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.2  Máquina plana industrial de una aguja

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/temas/t3/img06.png', alt='')
    p La máquina plana industrial de una aguja se emplea en diferentes operaciones de ensamble y acabado durante la confección de camisetas deportivas. Su manejo requiere una preparación previa que permita comprobar el estado del equipo, realizar correctamente el enhebrado, ajustar los elementos que intervienen en la formación de la puntada y verificar las condiciones de seguridad antes de iniciar la costura.
    p La puesta a punto comprende una secuencia organizada de actividades relacionadas con el alistamiento de herramientas, la limpieza del puesto de trabajo, el enhebrado, la prueba de costura, la regulación de la tensión, la calibración, el arrastre, la lubricación y los dispositivos de seguridad. La consulta de los siguientes recursos permite reconocer el orden en que deben efectuarse estas verificaciones.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Puesta a punto de la máquina plana industrial de una aguja

    p Antes de iniciar las operaciones de costura, consulte los videos en el orden presentado. Durante el recorrido, identifique las herramientas requeridas, los procedimientos de preparación de la máquina y las verificaciones necesarias para favorecer su funcionamiento y uso seguro.

    .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
      .col-lg-12.col-10
        LineaTiempoE.color-acento-contenido
          .row(titulo="Paso 1" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/01.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Alistamiento de herramientas y elementos
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco( href="https://www.youtube.com/watch?v=BlsIooZH9gg&list=PLkc5n6npRWkjS1Oni_VR8m2ZJh2pb3E6C&index=13" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video
          .row(titulo="Paso 2" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/02.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Limpieza y orden del puesto de trabajo
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=iPocisS7WjE " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 3" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/03.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Enhebrado del hilo de la aguja
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=2vCy8OngaCs " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 4" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/04.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Enhebrado del hilo de la caja de bobina
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=X4GulQIAfNk " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 5" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/05.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Prueba de costura
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=95qqFifhf5U " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 6" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/06.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Ajuste de la tensión de la máquina
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=9sTc_Kdyq4I " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 7" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/07.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Calibración de acuerdo con las especificaciones
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=98kBVOcq-2w " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 8" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/08.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Ajuste del nivel de arrastre
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=FJnvY-4hMEk " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 9" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/09.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Verificación del nivel de aceite
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=UdXEZFcnBrs " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row(titulo="Paso 10" subtitulo="")(data-aos="zoom-in-left")
            .col-lg-3.col-6.mb-3
              figure
                img(src='@/assets/curso/temas/t3/10.png', alt='')
            .col-lg-9.mb-4.mb-lg-0
              h4 Verificación de los dispositivos de seguridad
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                  span Abrir video
                  i.fas.fa-file-video
                    
    p La consulta ordenada de estos recursos permite reconocer las verificaciones básicas que anteceden al uso de la máquina plana industrial de una aguja. La puesta a punto contribuye a prevenir interrupciones, favorecer la formación regular de la puntada y mantener condiciones adecuadas durante la ejecución de las operaciones de confección.    

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Operaciones básicas para el manejo de la máquina plana industrial de una aguja

    p Una vez realizada la puesta a punto de la máquina plana industrial de una aguja, se continúa con la ejecución de operaciones básicas que permiten fortalecer el control del material, la precisión de la costura y la coordinación durante el manejo del equipo. Los siguientes recursos presentan ejercicios de costuras rectas, alforzas, bolsillos y pecheras, aplicables a diferentes procesos de confección.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Operaciones básicas en máquina plana industrial de una aguja

    p Consulte los videos en el orden presentado. Durante el recorrido, identifique el tipo de operación, la medida utilizada y su aplicación dentro del proceso de confección.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4(data-aos="zoom-in-left")
      .row.justify-content-center(titulo="Costuras rectas a 1/4 de pulgada")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ekwF948qscg" target="_blank")
                span Abrir video
                i.fas.fa-file-video    
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img07.png', alt='')

      .row.justify-content-center(titulo="Costuras de alforzas de 1/4 de pulgada")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img08.png', alt='')

      .row.justify-content-center(titulo="Costuras de alforzas de 1/16 de pulgada")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img09.png', alt='')

      .row.justify-content-center(titulo="Pegado de bolsillos")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img10.png', alt='')

      .row.justify-content-center(titulo="Elaboración de bolsillo de ribete sencillo")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img11.png', alt='')

      .row.justify-content-center(titulo="Elaboración de bolsillo de ribete doble")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img12.png', alt='')

      .row.justify-content-center(titulo="Confección de pechera sencilla")
        .col-lg-5.mb-3.col-10
          .row
            .col-sm-auto
              p Consulte el video:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(
                href="https://www.youtube.com/watch?v=ryLeBlADyCA " target="_blank")
                span Abrir video
                i.fas.fa-file-video
        .col-lg-6.col-11
          figure
            img(src='@/assets/curso/temas/t3/img13.png', alt='')
      
    p La práctica de estas operaciones permite fortalecer el manejo de la máquina plana industrial de una aguja y reconocer su aplicación en diferentes procesos de confección. La precisión en las medidas, el control del material y la ejecución uniforme de las costuras contribuyen al cumplimiento de las especificaciones técnicas de la prenda.

    separador
    #t_3_3.titulo-segundo.mb-4(data-aos="zoom-in-left")
      h2 3.3  Secuencia operativa para la confección de una camiseta tipo polo
    
    p A continuación, se expone la secuencia operativa para la confección de una camiseta deportiva tipo polo. Este paso a paso funciona como guía técnica para el ensamble de prendas superiores de esta categoría, debido a que organiza el orden de unión de las piezas principales conforme con la lógica constructiva del proceso y los requerimientos básicos de la confección industrial.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/t1/camisa.svg")
          h3.bg2.py-2.w-card-text Confección de una camiseta deportiva tipo polo

    p Consulte los videos en el orden establecido. Durante el recorrido, identifique las piezas que intervienen en cada operación y la secuencia de ensamble desarrollada desde el alistamiento inicial hasta la elaboración de los ojales y la colocación de los botones.


    .fondosly.p-3.p-md-4.p-lg-5.mb-4(data-aos="zoom-in-left")
      .tarjeta.tarjeta-blanca.p-4
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center(titulo="1")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/001.png")
            .col-lg-6
              h4 Alistamiento para la confección de la camiseta tipo polo
              p Consulte el video:  
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco( href="https://www.youtube.com/watch?v=wsb9glAu1qk&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=10" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="2")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/002.png")
            .col-lg-7
              h4 Prehormado de la pechera y elaboración del quiebre en el delantero
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=v_yemOgg9Rw&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=9" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="3")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/003.png")
            .col-lg-3
              h4 Pegado de la pechera
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=5B1k2XznFlg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=18" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="4")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/004.png")
            .col-lg-3
              h4 Unión por los hombros
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=rBrE6bikCRw&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=8" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="5")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/005.png")
            .col-lg-4
              h4 Pegado de los puños tejidos a las mangas
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=WiAEkGtqQG4&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=7" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="6")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/006.png")
            .col-lg-4
              h4 Pespunte de los puños de las mangas
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=HBleW0yTvAg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=6" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="7")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/007.png")
            .col-lg-3
              h4 Pespunte de los hombros
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=SKK9Trf8254&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=5" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="8")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/008.png")
            .col-lg-4
              h4 Fijación de las puntas del cuello
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Z_XH8YaJIlA&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=4" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="9")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/009.png")
            .col-lg-3
              h4 Pegado del cuello
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=NXY9Tb77E3o&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=3" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="10")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0010.png")
            .col-lg-3
              h4 Pespuntar cuello
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=9c0_G42xbeI&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=3" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="11")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0011.png")
            .col-lg-3
              h4 Pespuntar pechera
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Eth7yvWIiEc&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=2" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="12")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0012.png")
            .col-lg-3
              h4 Pegado de las mangas
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=K571s6w4_Xg&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=17" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="13")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0013.png")
            .col-lg-3
              h4 Pespunte de las mangas
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Dh4-NQONpuY&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=16" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="14")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0014.png")
            .col-lg-4
              h4 Unión de la prenda por los costados
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=oEu8URPgkVI&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=15" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="15")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0015.png")
            .col-lg-3
              h4 Fileteado de la pechera
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=qpEL-O1k2I0&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=14" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="16")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0016.png")
            .col-lg-3
              h4 Dobladillado del ruedo
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=CBhvm1ICgs8&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=13" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="17")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0017.png")
            .col-lg-4
              h4 Marcado y elaboración de los ojales
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=e2WGjWOmIzA&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=12" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video

          .row.justify-content-center(titulo="18")
            .col-lg-2.mb-4.mb-md-0.col-7.col-md-4
              img.mb-4(src="@/assets/curso/temas/t3/0018.png")
            .col-lg-4
              h4 Marcado y colocación de los botones
              p Consulte el video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=BYFyy5WU-Uo&list=PLkc5n6npRWkjH9BnFJlUpDKgV0Zk3yhVe&index=11" target="_blank")
                  span Abrir video
                  i.fas.fa-file-video


    .cajon.color-secundario.p-4.mb-4(data-aos="zoom-in-left")
      p.mb-0 La secuencia presentada integra las operaciones requeridas para la confección de una camiseta deportiva tipo polo. La consulta ordenada de los recursos permite reconocer la relación entre las piezas, las máquinas utilizadas y el avance progresivo del ensamble hasta obtener la prenda terminada.
  



































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
<style lang="sass"></style>
