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

export default function Home() {
  // return (
  //   <div className="w-screen min-h-screen flex flex-col">
  //     <Header />

  //     <main className="flex-1 gap-6">
  //       <section className="h-screen mt-[-4rem] flex flex-col justify-center text-center">
  //         <h2 className="text-4xl font-bold">Hello everyone!</h2>
  //         <h2 className="text-2xl font-bold">FullStack Developer</h2>
  //       </section>

  //       <Separator />

  //       <div className="flex flex-col flex-1">
  //         <h1 className="text-2xl font-bold">Devboot.AI</h1>
  //         <p>Ferramentas desenvolvidas com Inteligência Artificial para impulsionar o sucesso do seu negócio!</p>

  //       </div>
  //     </main>
  //     <footer className="p-4 border-t">
  //       &copy; 2023 
  //     </footer>
  //   </div>
  // )

  return (
    <div className="flex flex-col min-h-screen">
    <Header />

      {/* Main */}
      <main className="min-h-[calc(100vh-3rem)]">
        {/* Section */}
        <section className="h-[calc(100vh-3rem)] flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Hello everyone!</h2>
          <h2 className="text-2xl font-bold">FullStack Developer</h2>
        </section>

        <Separator />

        <section className="flex flex-col items-center justify-center p-3">
          <h1 className="text-2xl font-bold text-red-700">Devboot.AI</h1>
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
      </main>

      {/* Footer */}
      <footer className="h-12 border-t px-6 py-3 flex items-center justify-between">
        &copy; 2023
      </footer>
    </div>
  )
}
