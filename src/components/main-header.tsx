import Image from "next/image"

import logoPhp from '@/assets/php.png'
import logoNode from '@/assets/nodejs.png'
import logoReact from '@/assets/react.png'
import logoPython from '@/assets/python.png'

export const MainHeader = () => {
  return (
    <main className="w-full flex flex-col items-center justify-between gap-8 px-2">
      <section className="max-w-7xl flex-1 flex flex-col justify-center py-8 px-4">
        {/* <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10"> */}
          {/* <div className="text-center leading-8 md:leading-10"> */}
            {/* <div className="w-full text-center"> */}
              <h1 className="tracking-tight inline font-semibold text-[2.1rem] text-center lg:text-5xl">Criamos sites, sistemas e apps&nbsp;</h1>
              <h1 className="tracking-tight inline font-semibold text-[2.1rem] text-center from-[#FF1CF7] to-[#b249f8] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">incríveis&nbsp;</h1>
              <h1 className="tracking-tight inline font-semibold text-[2.1rem] text-center lg:text-5xl">com as melhores&nbsp;</h1>
              <h1 className="tracking-tight inline font-semibold text-[2.1rem] text-center from-[#6FEE8D] to-[#17c964] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">tecnologias.&nbsp;</h1>
            {/* </div> */}
          {/* </div> */}
          <h2 
            className="w-full md:w-1/2 my-2 text-xl lg:text-xl font-semibold text-zinc-300 block max-w-full text-center">
              Bonitos, rápidos e modernos.
          </h2>
        {/* </div> */}
      </section>

      <section className="flex flex-col gap-2 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do php" src={logoPhp} width={60} height={60} color="white" />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do node" src={logoNode} width={60} height={60} />
            <span>NodeJS</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do react" src={logoReact} width={60} height={60} />
            <span>ReactJS</span>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do python" src={logoPython} width={60} height={60} />
            <span>Python</span>
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do reactJS" src={logoReact} width={60} height={60} />
            <span>React Native</span>
          </div>
        </div>
      </section>
    </main>
  )
}