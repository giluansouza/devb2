import Image from 'next/image'

import logoPhp from '@/assets/php.png'
import logoNode from '@/assets/nodejs.png'
import logoReact from '@/assets/react.png'

export const MainHeader = () => {
  return (
    <main className="w-full flex flex-col items-center justify-between gap-8 px-2">
      <section className="max-w-7xl flex-1 flex flex-col justify-center py-8 px-4r">
        <div className="w-full flex flex-col">
          <h1 className="tracking-tight inline-block font-extrabold text-[2.1rem] text-center lg:text-7xl lg:leading-tight">
            Construímos experiências digitais &nbsp;
          </h1>
          <h1 className="tracking-tight font-extrabold text-[2.1rem] leading-8 text-center from-[#FF1CF7] to-[#b249f8] lg:text-7xl lg:leading-tight bg-clip-text text-transparent bg-gradient-to-b">
            excepcionais&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-extrabold text-[2.1rem] text-center lg:text-7xl lg:leading-tight">
            com as melhores&nbsp;
          </h1>
          <h1 className="tracking-tight inline font-extrabold text-[2.1rem] text-center from-orange-600 to-yellow-500 lg:text-7xl lg:leading-tight bg-clip-text text-transparent bg-gradient-to-b">
            tecnologias.&nbsp;
          </h1>
        </div>
        {/* </div> */}
        {/* </div> */}
        <h2 className="w-full md:w-1/2 my-2 mt-5 text-xl lg:text-2xl font-semibold text-zinc-300 block max-w-full text-center mx-auto">
          Sites, sistemas e app mobiles.
        </h2>
        {/* </div> */}
      </section>

      <section className="flex flex-col gap-2 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl bg-zinc-400/20 border border-zinc-600 p-2">
            <Image
              alt="Logomarca do php"
              src={logoPhp}
              width={60}
              height={60}
              color="white"
            />
            <span>PHP</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl bg-zinc-400/20 border border-zinc-600 p-2">
            <Image
              alt="Logomarca do node"
              src={logoNode}
              width={60}
              height={60}
            />
            <span>NodeJS</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl bg-zinc-400/20 border border-zinc-600 p-2">
            <Image
              alt="Logomarca do react"
              src={logoReact}
              width={60}
              height={60}
            />
            <span>React</span>
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <Image alt="Logomarca do python" src={logoPython} width={60} height={60} />
            <span>Python</span>
          </div> */}
          <div className="flex flex-col items-center justify-center rounded-full shadow-xl bg-zinc-400/20 border border-zinc-600 p-2">
            <Image
              alt="Logomarca do reactJS"
              src={logoReact}
              width={60}
              height={60}
            />
            <span>Native</span>
          </div>
        </div>
      </section>
    </main>
  )
}
