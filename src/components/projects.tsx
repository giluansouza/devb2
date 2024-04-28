'use client'

import NewCard from './new-card'

const projectsData = [
  {
    icon: 'https://devboot.com.br/logo-nierla.png',
    href: 'https://nierlajoias.devboot.com.br',
    title: 'Nierla Joias',
    label: 'Catálogo Digital Nierla Joias',
    handle: 'Nierla Joias',
    img: `${process.env.NEXT_PUBLIC_URL_IMG}/nierla-joias.png`,
    stacks: 'React, PHP, Postgres',
  },
  {
    icon: '',
    href: '#',
    title: 'SIAGEO',
    label: 'Sistema de Análise e Geoprocessamento de Ocorrências',
    handle: 'Siageo',
    img: `${process.env.NEXT_PUBLIC_URL_IMG}/siageo.png`,
    stacks: 'PHP, HTML5, CSS3, MySQL',
  },
  {
    icon: 'https://devboot.com.br/logo-sosmulher-jua.png',
    href: 'https://play.google.com/store/apps/details?id=com.devboot.sosmulherjua',
    title: 'SOSMulher Juá',
    label: 'Aplicativo Android SOS Mulher Juá',
    handle: 'SOS Mulher Juá',
    img: `${process.env.NEXT_PUBLIC_URL_IMG}/sosmulherjua.png`,
    stacks: 'React Native, PHP, MySQL',
  },
  {
    icon: 'https://devboot.com.br/logo-sosmulher-jua.png',
    href: '#',
    title: 'Synthalitics',
    label: 'App de análise de dados',
    handle: 'Synthalitics',
    img: `${process.env.NEXT_PUBLIC_URL_IMG}/synthalitics.png`,
    stacks: 'React, NodeJS, PostgreSQL, D3js',
  },
  {
    icon: 'https://devboot.com.br/logo-sosmulher-jua.png',
    href: '#',
    title: 'Controle de frotas',
    label: 'Implementação de servidor traccar e controle de frotas',
    handle: 'Carcontrol',
    img: `${process.env.NEXT_PUBLIC_URL_IMG}/traccar.png`,
    stacks: 'React, React Native, NodeJS, MySQL, traccar',
  },
]

export function Projects() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-3 py-6">
      <h1 className="text-2xl font-bold mb-8 lg:text-4xl">Alguns projetos</h1>
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {projectsData.map((s) => (
          <NewCard
            key={s.handle}
            href={s.href}
            title={s.title}
            label={s.label}
            img={s.img}
            stacks={s.stacks}
          />
        ))}
      </div>
    </section>
  )
}
