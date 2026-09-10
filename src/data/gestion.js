// Estructura del menú "Gestión Municipal": las cuatro direcciones y sus áreas.
// `mas: true` marca las que más adelante tendrán su propio submenú.
export const gestion = [
  {
    label: 'Dirección Administrativa',
    slug: 'direccion-administrativa',
    items: [
      { label: 'Servicio al Cliente', slug: 'servicio-al-cliente', mas: true },
      {
        label: 'Gestión y Servicios Generales',
        slug: 'gestion-y-servicios-generales',
        mas: true,
      },
      { label: 'Tecnologías de Información', slug: 'tecnologias-de-informacion' },
      {
        label: 'Gestión de Seguridad Ciudadana y Vial',
        slug: 'gestion-de-seguridad-ciudadana-y-vial',
        mas: true,
      },
    ],
  },
  {
    label: 'Dirección Financiera',
    slug: 'direccion-financiera',
    items: [
      { label: 'Gestión de Ingresos', slug: 'gestion-de-ingresos', mas: true },
      { label: 'Gestión de Egresos', slug: 'gestion-de-egresos', mas: true },
      { label: 'Gestión Financiera', slug: 'gestion-financiera', mas: true },
    ],
  },
  {
    label: 'Dirección de Ingeniería',
    slug: 'direccion-de-ingenieria',
    items: [
      { label: 'Gestión Técnica y Estudio', slug: 'gestion-tecnica-y-estudio' },
      {
        label: 'Planificación Territorial y Control Urbano',
        slug: 'planificacion-territorial-y-control-urbano',
      },
      { label: 'Zona Marítimo Terrestre', slug: 'zona-maritimo-terrestre' },
      { label: 'Catastro', slug: 'catastro' },
      { label: 'Bienes Inmuebles', slug: 'bienes-inmuebles' },
      { label: 'Gestión Ambiental', slug: 'gestion-ambiental' },
    ],
  },
  {
    label: 'Dirección de Operaciones y Proyectos',
    slug: 'direccion-de-operaciones-y-proyectos',
    items: [
      {
        label: 'Recolección de Residuos Sólidos',
        slug: 'recoleccion-de-residuos-solidos',
      },
      { label: 'Aseo de Vías Públicas', slug: 'aseo-de-vias-publicas' },
      { label: 'Parques', slug: 'parques' },
      {
        label: 'Proyectos de Obras Municipales',
        slug: 'proyectos-de-obras-municipales',
      },
      {
        label: 'Unidad Técnica de Gestión Vial Municipal',
        slug: 'unidad-tecnica-de-gestion-vial-municipal',
      },
    ],
  },
]
