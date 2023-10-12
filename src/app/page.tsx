import { Separator } from "@/components/ui/separator";
import { Header } from '@/components/ui/header'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Flower, Heart, LucideMap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />

      {/* Main */}
      <main className="min-h-[calc(100vh-3rem)]">
        {/* Section */}
        <section className="h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Hello everyone!</h2>
          <h2 className="text-2xl font-bold">Welcome to the Toolbox</h2>
        </section>

        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold text-red-700">.AI</h1>
          <p>Ferramentas desenvolvidas com Inteligência Artificial para impulsionar o sucesso do seu negócio!</p>
          <div className="flex flex-wrap justify-center gap-4 py-3">
            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-red-600/10 ">
                <CardHeader>
                    <CardTitle>Upload.ai</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>Gerar título e descrição de vídeos para o YouTube.</CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-orange-500">Em breve</span>
                  {/* <Button variant="outline">
                      <Flower color="red" className="w-4 h-4 mr-2" />
                      upload.ai
                  </Button> */}
                </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-red-600/10">
              <CardHeader>
                  <CardTitle>Recognition.ai</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Identifica conceitos em imagens.</CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-orange-500">Em breve</span>
              </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-red-600/10">
              <CardHeader>
                  <CardTitle>FaceDetection.ai</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Identifica rostos humanos em imagens.</CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-orange-500">Em breve</span>
              </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-red-600/10">
              <CardHeader>
                  <CardTitle>Translation.ai</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Traduza textos completos ou gere resumos traduzidos.</CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-orange-500">Em breve</span>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold text-blue-700">.Analytics</h1>
          <p>Ferramentas de análise de dados, mapas interativos e muito mais!</p>
          <div className="flex flex-wrap justify-center gap-4 py-3">
            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-blue-600/10 ">
                <CardHeader>
                    <CardTitle className="flex items-center gap-1">
                      Densidade Kernel
                      <LucideMap color="red" className="w-6 h-6" />
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>Gere mapas interativos de densidade kernel.</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button  variant="outline">
                    <Flower color="blue" className="w-4 h-4 mr-2" />
                    <a href="https://tools-densidade-kernel.devboot.com.br" target="_blank">
                      KDE.tool
                    </a>
                  </Button>
                </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-blue-600/10 ">
                <CardHeader>
                    <CardTitle>Geoprocessing</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <CardDescription>Mapas geoprocessados de seus dados em tempo real.</CardDescription>
                </CardContent>
                <CardFooter>
                  <span className="text-zinc-600">Em breve</span>
                  {/* <Button variant="outline">
                      <Flower color="red" className="w-4 h-4 mr-2" />
                      upload.ai
                  </Button> */}
                </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-blue-600/10">
              <CardHeader>
                  <CardTitle>Organograma</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Gere organogramas interativos de seus colaboradores ou pessoas.</CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-zinc-600">Em breve</span>
              </CardFooter>
            </Card>

            <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-blue-600/10">
              <CardHeader>
                  <CardTitle>Análise de Vínculos</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Gere informações visuais dos seus dados.</CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-zinc-600">Em breve</span>
              </CardFooter>
            </Card>

            {/* <Card className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 hover:bg-red-600/10">
              <CardHeader>
                  <CardTitle>Companies Data</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                  <CardDescription>Controle todos os detalhes da sua organização, incluindo seus funcionários. 
                    Gerencie várias organizações no mesmo local.
                  </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-zinc-600">Em breve</span>
              </CardFooter>
            </Card> */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-12 border-t px-6 py-3 flex items-center justify-between">
        &copy; 2023 
        <span className="flex items-center text-sm text-muted-foreground">
          <Heart color="blue" className="w-4 h-4 mr-2" />
          Contribua para manter o Toolbox funcionando.
        </span>
      </footer>
    </div>
  )
}
