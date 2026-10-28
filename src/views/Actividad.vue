<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Confección de camisetas deportivas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo: verificar la apropiación de los fundamentos técnicos relacionados con la organización del puesto de trabajo, la preparación de materiales, la secuencia de confección de camisetas deportivas y la prevención de riesgos laborales en el entorno de confección industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del puesto de trabajo dentro del proceso de confección industrial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Servir únicamente como área física para ubicar la máquina y almacenar materiales sobrantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar espacio, recursos, ergonomía y prácticas operativas para sostener la productividad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reemplazar la planeación del proceso mediante la concentración de operarios en una sola zona.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Limitar el acceso a herramientas con el fin de reducir el movimiento durante la costura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 2,
          texto:
            '¿Qué aspecto define principalmente la distribución del área de trabajo en confección?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La organización espacial de máquinas, mesas, zonas de tránsito y almacenamiento temporal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La elección del color de los equipos y la señalización decorativa de la planta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La ubicación del personal administrativo en relación con el área de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La distribución del uniforme institucional según el cargo del personal operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 3,
          texto:
            '¿Cuál es una característica del sistema de distribución en línea recta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agrupa operarios polivalentes alrededor de una célula de trabajo flexible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Traslada lotes entre secciones sin una secuencia lineal de operaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organiza los puestos siguiendo el orden exacto de elaboración de la prenda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Dispone el almacenamiento como eje principal del proceso de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 4,
          texto:
            '¿Qué instrumentos del puesto de costura se utilizan para el control dimensional de piezas y verificación de tolerancias?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cinta métrica, la escuadra sastre, el metro plano y la galga de costuras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El vaporizador, la máquina de presillas, la botonera y la fileteadora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las guardas de aguja, el dedal y el recipiente para residuos de hilo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cortadora manual, el descosedor, el punzón y el prensatelas estándar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 5,
          texto:
            '¿Qué propósito cumple la preparación de materiales dentro del proceso de confección?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Decorar el área de producción antes del inicio de la jornada operativa diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir la inspección de calidad mediante la organización visual del material recibido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir exclusivamente el tiempo de corte sin intervenir en la costura posterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Garantizar que telas e insumos ingresen en condiciones compatibles con el producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué criterio debe verificarse en la selección de telas para camisetas deportivas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La composición, la elasticidad, la estabilidad dimensional y la compatibilidad con la prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La preferencia estética del operario encargado de realizar el ensamble principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tamaño de la mesa de corte disponible en el área de confección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La facilidad para doblar el material una vez terminada la jornada laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 7,
          texto:
            '¿Qué consecuencia puede generar el uso de hilo no compatible con tejidos elásticos?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejora la recuperación del textil y facilita el corte de todas las piezas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reduce la necesidad de piquetes y elimina errores de correspondencia en ensamble.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Genera saltos de puntada o roturas y disminuye la resistencia de la costura.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incrementa la rigidez del cuello y mejora el ajuste anatómico de la camiseta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 8,
          texto:
            '¿Qué define técnicamente al tendido dentro del proceso de revisión y corte de piezas?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El doblado de la prenda terminada antes de su despacho a empaque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La extensión de la tela en capas uniformes según hilo y orientación del molde.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La transferencia de piquetes y marcas de unión en piezas ya ensambladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La revisión final del lote confeccionado con base en la orden de pedido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 9,
          texto:
            '¿Qué efecto produce un sentido de hilo incorrecto durante el tendido?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita el ensamble y compensa errores de corte en las capas superiores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejora la simetría de las piezas y reduce la necesidad de control dimensional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementa el rendimiento del material y optimiza la disposición de los moldes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Genera torsión, desajuste o caída inadecuada en las piezas cortadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 10,
          texto:
            '¿Cuál es la función de las muescas o piquetes incorporados durante el marcado?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Indicar la cantidad de rollos disponibles para la siguiente orden de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señalar el turno del operario responsable del tendido de la tela.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Medir la elasticidad del material antes del corte de cada lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Orientar la coincidencia correcta de las piezas durante el proceso de ensamble.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué condición debe cumplir el corte para conservar la conformidad dimensional de las piezas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe seguir con exactitud las líneas marcadas sin desplazamientos ni variaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Debe priorizar la velocidad sobre la correspondencia técnica entre piezas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Debe realizarse solo en una capa para evitar controles posteriores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Debe omitir los márgenes cuando la tela sea de punto y tenga elasticidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 12,
          texto:
            '¿Cuál es la primera acción de la organización previa al proceso de ensamble?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La incorporación de insumos al paquete antes de revisar las piezas cortadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La agrupación por talla y referencia para evitar mezclas entre pedidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La unión de mangas y hombros de acuerdo con la secuencia de costura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La elaboración de ojales y el marcado de botones en la pechera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 13,
          texto:
            '¿Qué se verifica en la revisión de piezas por paquete antes del ingreso a costura?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El color de la máquina que realizará el filete de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El peso total del paquete respecto al inventario final del taller.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La velocidad promedio del operario asignado al módulo de ensamble.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La presencia de todas las partes constitutivas según la lista de corte.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 14,
          texto:
            '¿Qué finalidad tiene la incorporación de insumos al paquete antes del traslado a costura?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar interrupciones durante la operación por ausencia de materiales requeridos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar la identificación de talla por un sistema de accesorios visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la necesidad de verificar piezas cortadas en cada referencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar la transferencia de marcas internas sobre las piezas del molde.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 15,
          texto:
            '¿Qué máquina se aborda en el componente para operaciones de unión y filete recto?',
          imagen: '@/assets/actividad/imagen05.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ojaladora industrial para reforzar puntos de tensión en el cuello.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La botonera automática para fijar accesorios en mangas y pecheras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La fileteadora para unir piezas y realizar filete recto y remates.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La recubridora exclusivamente para marcar piquetes sobre el material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué acción corresponde a la secuencia operativa de confección de la camiseta tipo polo?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar rollos por lote antes del ingreso a la mesa de corte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pegar pechera, unir hombros, fijar cuello y unir por costados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Realizar exclusivamente pruebas de tensión y nivel de aceite en la máquina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Transferir muescas y piquetes luego del dobladillo final de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 17,
          texto:
            '¿Cómo se definen los riesgos físicos en el entorno de confección?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como eventos derivados solo de errores administrativos en el área de calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como fallas exclusivas del tejido durante el tendido y el marcado manual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como situaciones asociadas únicamente al uso de tijeras y cortadores rotativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Como condiciones ambientales que afectan el organismo sin contacto directo con la fuente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 18,
          texto:
            '¿Cuál es un riesgo ergonómico frecuente en el puesto de costura?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La variación de tono entre lotes de hilo y tela deportiva.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ausencia de <em>ticket</em> de identificación en paquetes de referencia múltiple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La postura estática prolongada que genera tensión en cuello y zona lumbar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La pérdida de piquetes durante el traslado del material a ensamble.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 19,
          texto:
            '¿Qué recomendación forma parte del ajuste ergonómico del puesto de trabajo?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ubicar los codos ligeramente por encima del plano de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantener los hombros elevados para acercar el cuerpo a la máquina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Trabajar con la cabeza inclinada más de 30 grados de forma continua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Apoyar parcialmente los pies para facilitar cambios rápidos de postura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 20,
          texto:
            '¿Qué debe hacerse primero ante la presencia de una persona lesionada en el trabajo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Preservar la escena antes de cualquier contacto con la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diligenciar el formato de reporte completo antes de solicitar apoyo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Priorizar la atención inmediata y activar el protocolo de emergencia si aplica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Esperar la llegada del responsable del SG-SST para iniciar la intervención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre confección de camisetas deportivas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
