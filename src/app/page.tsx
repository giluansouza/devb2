import { Separator } from "@/components/ui/separator";
import { Header } from '@/components/header'

import { Projects } from "@/components/projects";
import { MainHeader } from "@/components/main-header";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col box-border">
      <div className="w-full h-screen bg-gradient-to-br from-red-900/50 via-black to-blue-900/40">
        <Header />
        <MainHeader />
      </div>

      <div className="bg-gradient-to-bl from-blue-900/40 via-black to-red-900/40">
        <section className="flex flex-col items-center justify-center px-3 py-6">
          <h1 className="text-2xl font-bold mb-4">About me</h1>
          <div className="flex flex-wrap justify-center gap-4 py-3">
            <p className="w-full lg:w-3/5 text-center text-muted-foreground">Me chamo Giluan Souza, sou formado em Análise e Desenvolvimento de Sistemas pela UNIT, desenvolvedor fullstack web e mobile com mais de 8 anos de experiência no mercado já tendo desenvolvido diversas aplicações
              usando tecnologias como PHP, JavScript, ReactJS, React Native, NodeJS. Sempre atualizado com os melhores conteúdos disponíveis.
            </p>
          </div>
        </section>

        <Projects />
      </div>
    </div>
  )
}
