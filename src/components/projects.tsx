'use client'

import { Card2 } from './card2'

const projectsData = [
  {
    icon: 'https://devboot.com.br/logo-nierla.png',
    href: 'https://nierlajoias.devboot.com.br',
    title: 'Nierla Joias',
    label: 'Catálogo Digital Nierla Joias',
    handle: 'Nierla Joias',
    img: 'https://devboot.com.br/catalogo-digital-nierla-joias.png',
  },
  {
    icon: '',
    href: '#',
    title: 'SIAGEO',
    label: 'Sistema de Análise e Geoprocessamento de Ocorrências',
    handle: 'Siageo',
    img: 'https://devboot.com.br/siageo.png',
  },
  {
    icon: 'https://devboot.com.br/logo-sosmulher-jua.png',
    href: 'https://play.google.com/store/apps/details?id=com.devboot.sosmulherjua',
    title: 'SOSMulher Juá',
    label: 'Aplicativo Android SOS Mulher Juá',
    handle: 'SOS Mulher Juá',
    img: 'https://devboot.com.br//app-sosmulherjua.jpg',
  },
]

export function Projects() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-3 py-6">
      <h1 className="text-2xl font-bold mb-8 lg:text-4xl">Alguns projetos</h1>
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 border">
        {projectsData.map((s) => (
          <Card2
            key={s.handle}
            icon={s.icon}
            href={s.href}
            title={s.title}
            label={s.label}
            handle={s.handle}
            img={s.img}
          />
        ))}
      </div>
    </section>
  )
}
