'use client'

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"

const projectsData = [
  {
    icon: "http://localhost:3000/logo-nierla.png",
    href: "https://nierlajoias.devboot.com.br",
    title: "Nierla Joias",
    label: "Catálogo Digital Nierla Joias",
    handle: "Nierla Joias",
    img: "http://localhost:3000/catalogo-digital-nierla-joias.png"
  },
  {
    icon: "",
    href: "#",
    title: "SIAGEO",
    label: "Sistema de Análise e Geoprocessamento de Ocorrências",
    handle: "Siageo",
    img: "http://localhost:3000/siageo.png"
  },
  {
    icon: "http://localhost:3000/logo-sosmulher-jua.png",
    href: "https://play.google.com/store/apps/details?id=com.devboot.sosmulherjua",
    title: "SOSMulher Juá",
    label: "Aplicativo Android SOS Mulher Juá",
    handle: "SOS Mulher Juá",
    img: "http://localhost:3000/app-sosmulherjua.jpg"
  },
  // {
  // 	icon: <Github size={20} />,
  // 	href: "https://github.com/chronark",
  // 	label: "Github",
  // 	handle: "chronark",
  // },
];

export function Projects() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-3 py-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((s) => (
          <Card 
            key={s.handle} 
            isFooterBlurred
            className="w-[280px] h-[160px] lg:w-[400px] lg:h-[280px] bg-black/70"
            shadow="sm"
          >
            {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader> */}
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src={s.img}
            />
            <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src={s.icon}
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/70">{s.title}</p>
                  <p className="text-tiny text-white/70">{s.label}</p>
                </div>
              </div>
              <a href={s.href} target="_blank" rel="noreferrer">
                <Button radius="full" size="sm">
                    App
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}