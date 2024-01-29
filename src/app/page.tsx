import { Separator } from "@/components/ui/separator";
import { Header } from '@/components/header'
import { Map, Settings } from "lucide-react";
import Particles from "@/components/particles";
import { Card } from "@/components/card";
import Link from "next/link";
import Image from "next/image";

import logoPhp from '@/assets/php.png'
import logoNode from '@/assets/nodejs.png'
import logoReact from '@/assets/react.png'
import logoPython from '@/assets/python.png'

const socials = [
  {
    icon: <Map size={20} />,
    href: "https://tools-densidade-kernel.devboot.com.br",
    label: "Mapa de calor",
    handle: "Heatmap",
  },
  {
    icon: <Settings size={20} />,
    href: "https://tools.devboot.com.br",
    label: "Mapas e gráficos",
    handle: "Tools",
  },
  // {
  // 	icon: <Github size={20} />,
  // 	href: "https://github.com/chronark",
  // 	label: "Github",
  // 	handle: "chronark",
  // },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen box-border px-4">
      <Header />

      {/* Main */}
      <main className="w-full min-h-[calc(100vh-3rem)]">
        <div className="h-[calc(100vh-3rem)] flex flex-col items-center justify-between gap-8">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={200}
          />
          <section className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-center text-zinc-300">Hello everyone!</h2>
            <h2 className="text-3xl font-bold text-center">{`I'm`} <span className="font-bold text-amber-500">Giluan Souza</span>, dev <span className="font-bold text-rose-700">FullStack</span> Web e Mobile</h2>

            <p className="text-2xl mt-8 text-center text-foreground">Desenvolvimento de sites, sistemas web e aplicativos para celular!</p>
          </section>

          <section className="flex flex-col gap-2 mb-8">
            <h3 className="text-2xl font-semibold">Tecnologias</h3>
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center">
                <Image alt="Logomarca do php" src={logoPhp} width={80} height={80} color="white" />
                <span>PHP</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image alt="Logomarca do node" src={logoNode} width={80} height={80} />
                <span>NodeJS</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image alt="Logomarca do react" src={logoReact} width={80} height={80} />
                <span>ReactJS</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image alt="Logomarca do python" src={logoPython} width={80} height={80} />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image alt="Logomarca do reactJS" src={logoReact} width={80} height={80} />
                <span>React Native</span>
              </div>
            </div>
          </section>
        </div>

        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold">About me</h1>
          <div className="flex flex-wrap justify-center gap-4 py-3">
            <p className="w-3/5 text-center text-muted-foreground">Me chamo Giluan Souza, sou formado em Análise e Desenvolvimento de Sistemas pela UNIT, desenvolvedor fullstack web e mobile com mais de 8 anos de experiência no mercado já tendo desenvolvido diversas aplicações
              usando tecnologias como PHP, JavScript, ReactJS, React Native, NodeJS. Estou sempre buscando me atualizar e aprender coisas novas,
              estudando nas melhores escolas dev do país como por exemplo Rocketseat e Alura.
            </p>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="flex flex-wrap justify-center gap-4 py-3">
            {socials.map((s) => (
              <Card key={s.handle}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-8  lg:pb-16  md:p-8"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-md font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      {/* <footer className="h-12 border-t px-6 py-3 flex items-center justify-between">
        &copy; 2023 */}
      {/* <span className="flex items-center text-sm text-muted-foreground">
          <Heart color="blue" className="w-4 h-4 mr-2" />
          Contribua para manter o Toolbox funcionando.
        </span> */}
      {/* </footer> */}


    </div>
  )
}
