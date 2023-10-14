import { Separator } from "@/components/ui/separator";
import { Header } from '@/components/ui/header'
import { Button } from "@/components/ui/button";
import { Heart, LucideMap, Mail, Map, MapPinIcon } from "lucide-react";
import Particles from "@/components/particles";
import { Card } from "@/components/card";
import Link from "next/link";

const socials = [
	{
		icon: <Map size={20} />,
		href: "https://tools-densidade-kernel.devboot.com.br",
		label: "Mapa de calor",
		handle: "Heatmap",
	},
	// {
	// 	icon: <MapPinIcon size={20} />,
	// 	href: "",
	// 	label: "Geoprocessamento",
	// 	handle: "Geoprocessing",
	// },
	// {
	// 	icon: <Github size={20} />,
	// 	href: "https://github.com/chronark",
	// 	label: "Github",
	// 	handle: "chronark",
	// },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

      {/* Main */}
      <main className="min-h-[calc(100vh-3rem)]">
        {/* Section */}
        <section className="h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={200}
          />
          <h2 className="text-4xl font-bold">Hello everyone!</h2>
          <h2 className="text-2xl font-bold">Welcome to the Toolbox</h2>
        </section>
        
        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold text-blue-700">.Analytics</h1>
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
      <footer className="h-12 border-t px-6 py-3 flex items-center justify-between">
        &copy; 2023 
        {/* <span className="flex items-center text-sm text-muted-foreground">
          <Heart color="blue" className="w-4 h-4 mr-2" />
          Contribua para manter o Toolbox funcionando.
        </span> */}
      </footer>

      
    </div>
  )
}
