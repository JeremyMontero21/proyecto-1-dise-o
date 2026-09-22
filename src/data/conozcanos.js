// Estructura del menú "Conózcanos" — RF-011.
// Las opciones con `href` apuntan a secciones que ya viven en la página principal
// (Contáctenos y Horarios); el resto llevan a una página de "en construcción".
export const conozcanos = [
  {
    label: 'Mi Cantón',
    slug: 'mi-canton',
    items: [
      { label: 'Historia del cantón', slug: 'historia-del-canton' },
      { label: 'SICOP', href: 'https://www.sicop.go.cr/app/', externo: true },
    ],
  },
  {
    label: 'Mi Municipalidad',
    slug: 'mi-municipalidad',
    items: [
      { label: 'Historia Municipal', slug: 'historia-municipal' },
      { label: 'Visión', slug: 'vision' },
      { label: 'Sobre nosotros', slug: 'sobre-nosotros' },
      { label: 'Directorio Telefónico', slug: 'directorio-telefonico' },
      { label: 'Horarios', href: '#horarios' },
    ],
  },
  {
    label: 'Alcaldía',
    slug: 'alcaldia',
    items: [
      { label: 'Despacho de la Alcaldía', slug: 'despacho-de-la-alcaldia' },
      { label: 'Gestión de Vicealcaldía', slug: 'gestion-de-vicealcaldia', mas: true },
      { label: 'Informes de Gestión', slug: 'informes-de-gestion' },
      { label: 'Planes Municipales', slug: 'planes-municipales' },
      { label: 'Informe de Labores', slug: 'informe-de-labores' },
      { label: 'Normativa Legal', slug: 'normativa-legal', mas: true },
    ],
  },
  {
    label: 'Concejo Municipal',
    slug: 'concejo-municipal',
    items: [
      { label: 'Conformación del Concejo', slug: 'conformacion-del-concejo', mas: true },
      { label: 'Actas del Concejo', slug: 'actas-del-concejo' },
      { label: 'Auditoría Interna', slug: 'auditoria-interna' },
      { label: 'Secretaría del Concejo', slug: 'secretaria-del-concejo' },
    ],
  },
]
