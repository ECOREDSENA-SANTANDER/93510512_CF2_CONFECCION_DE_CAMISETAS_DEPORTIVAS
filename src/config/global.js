export default {
  global: {
    Name: 'Confección de camisetas deportivas',
    Description:
      'Este componente desarrolla los fundamentos técnicos para la confección de camisetas deportivas mediante el alistamiento del puesto de trabajo, la preparación de materiales, la organización del ensamble, las operaciones de costura y terminado, y la aplicación de normas de seguridad industrial. Su propósito es fortalecer la ejecución técnica, operativa y segura del proceso productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Puesto de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas y equipos disponibles en el puesto',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación de materiales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Revisión y corte de piezas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Organización previa al proceso de ensamble',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Confección de camiseta deportiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Máquina fileteadora con puntada de seguridad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Máquina plana industrial de una aguja',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Secuencia operativa para la confección de una camiseta tipo polo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de ergonomía aplicadas al puesto de trabajo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimiento de reporte de incidentes y accidentes',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accidente de trabajo',
      significado:
        'Suceso repentino que sobreviene por causa o con ocasión del trabajo y que produce una lesión orgánica, una perturbación funcional o psiquiátrica, invalidez o muerte.',
    },
    {
      termino: 'Alistamiento',
      significado:
        'Preparación previa de los materiales, las piezas y los insumos requeridos antes de iniciar el proceso de ensamble.',
    },
    {
      termino: 'Confección industrial',
      significado:
        'Proceso técnico de transformación de materiales textiles en prendas mediante operaciones secuenciales de corte, ensamble, acabado y control de calidad.',
    },
    {
      termino: 'Corte de piezas',
      significado:
        'Operación mediante la cual se separan las partes que conforman la prenda, siguiendo las líneas de los moldes trazadas sobre la tela.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'Disciplina orientada a adaptar las condiciones del puesto de trabajo a las capacidades y limitaciones de las personas, con el propósito de reducir la carga física y favorecer el desempeño.',
    },
    {
      termino: 'Fileteadora',
      significado:
        'Máquina de confección utilizada para unir piezas, recortar el excedente y sobrehilar los bordes de la tela, especialmente en materiales de tejido de punto.',
    },
    {
      termino: 'Insumo',
      significado:
        'Material complementario requerido para la confección de una prenda, como hilo, rib, entretela, cierre, elástico o accesorio.',
    },
    {
      termino: '<i>Layout</i> de planta',
      significado:
        'Disposición planificada de las áreas, los equipos, los recorridos y las zonas operativas dentro del espacio productivo.',
    },
    {
      termino: 'Marcado',
      significado:
        'Transferencia del contorno de los moldes y de las referencias técnicas sobre la tela antes de realizar el corte.',
    },
    {
      termino: 'Paquete de trabajo',
      significado:
        'Conjunto organizado de piezas cortadas e insumos correspondientes a una misma talla, referencia u orden de producción.',
    },
    {
      termino: 'Piquete',
      significado:
        'Marca o pequeño corte de coincidencia realizado en el margen de una pieza para orientar su correcta unión durante el ensamble.',
    },
    {
      termino: 'Puesto de trabajo',
      significado:
        'Unidad funcional del proceso de confección en la que se articulan el espacio, la maquinaria, las herramientas, los materiales y las condiciones de seguridad.',
    },
    {
      termino: 'Riesgo ergonómico',
      significado:
        'Factor relacionado con posturas, movimientos repetitivos, aplicación de fuerza o condiciones inadecuadas del puesto de trabajo que puede generar lesiones musculoesqueléticas.',
    },
    {
      termino: 'Tendido',
      significado:
        'Disposición de una o varias capas de tela sobre la mesa de corte, de acuerdo con la dirección del hilo y la orientación establecida para los moldes.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de identificar y seguir el recorrido de los materiales, las piezas y las operaciones a lo largo del proceso productivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Colombia, Ministerio de Salud. (1979, 22 de mayo). Resolución 2400 de 1979, por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. Ministerio de Salud.',
      link: '',
    },
    {
      referencia:
        'Colombia, Ministerio de Trabajo y Seguridad Social. (1990, 18 de mayo). Resolución 1792 de 1990, por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido. Ministerio de Trabajo y Seguridad Social.',
      link: '',
    },
    {
      referencia: 'Gilewska, T. (2009). Patronaje: Las bases. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F., & Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA); Agencia de Cooperación Internacional del Japón (JICA).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2008). NTC 5655: Principios para el diseño ergonómico de sistemas de trabajo. ICONTEC.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (1998). ISO 9241-5: Ergonomic requirements for office work with visual display terminals (VDTs)—Part 5: Workstation layout and postural requirements. ISO.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization [ISO]. (2003). ISO 105-X12: Textiles—Tests for colour fastness—Part X12: Colour fastness to rubbing. ISO.',
      link: '',
    },
    {
      referencia:
        'Kawamura, Y. (2005). Fashion-ology: An introduction to fashion studies. Berg Publishers.',
      link: '',
    },
    {
      referencia:
        'Lorenzo, M. R. (2017). Patronaje industrial en textil y piel. Videocinco Editorial.',
      link: '',
    },
    {
      referencia:
        'McAtamney, L., & Corlett, E. N. (1993). RULA: A survey method for the investigation of work-related upper limb disorders. Applied Ergonomics, 24(2), 91–99.',
      link: '',
    },
    {
      referencia:
        'Nakamichi, T. (2012). Pattern magic, vol. 1: La magia del patronaje. Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Niebel, B. W., & Freivalds, A. (2009). Ingeniería industrial: Métodos, estándares y diseño del trabajo (12.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Norton, K., & Eston, R. (Eds.). (2019). Kinanthropometry and exercise physiology (4.ª ed.). Routledge.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2011). Manual de patronaje básico e interpretación de diseños. Regional Distrito Capital, Centro de Manufactura en Textiles y Cuero.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2014). El gran libro de la costura (Nueva ed.). Blume.',
      link: '',
    },
    {
      referencia:
        'Smith, A. (2023). Corte y confección: Prendas de vestir a medida. Penguin Libros / DK.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Angelica Varon Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturísticod - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
