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
  //         <div className="flex gap-4">
  //           <Card className="w-[350px] hover:bg-red-600/10 ">
  //               <CardHeader className="flex-1">
  //                   <CardTitle>Upload.ai</CardTitle>
  //               </CardHeader>
  //               <CardContent className="flex-1">
  //                   <CardDescription>Gerar título e descrição de vídeos para o YouTube.</CardDescription>
  //               </CardContent>
  //               <CardFooter className="flex-1">
  //                 <span className="text-orange-500">Em breve</span>
  //                 {/* <Button variant="outline">
  //                     <Flower color="red" className="w-4 h-4 mr-2" />
  //                     upload.ai
  //                 </Button> */}
  //               </CardFooter>
  //           </Card>

  //           <Card className="w-[350px] hover:bg-green-600/10">
  //             <CardHeader>
  //                 <CardTitle>Recognition.ai</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //                 <CardDescription>Identifica conceitos em imagens.</CardDescription>
  //             </CardContent>
  //             <CardFooter>
  //               <span className="text-orange-500">Em breve</span>
  //             </CardFooter>
  //           </Card>

  //           <Card className="w-[350px] hover:bg-blue-600/10">
  //             <CardHeader>
  //                 <CardTitle>FaceDetection.ai</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //                 <CardDescription>Identifica rostos humanos em imagens.</CardDescription>
  //             </CardContent>
  //             <CardFooter>
  //               <span className="text-orange-500">Em breve</span>
  //             </CardFooter>
  //           </Card>

  //           <Card className="w-[350px] hover:bg-blue-600/10">
  //             <CardHeader>
  //                 <CardTitle>Translation.ai</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //                 <CardDescription>Traduza textos completos ou gere resumos traduzidos.</CardDescription>
  //             </CardContent>
  //             <CardFooter>
  //               <span className="text-orange-500">Em breve</span>
  //             </CardFooter>
  //           </Card>

  //           {/* <Card className="w-[350px] hover:bg-blue-600/10">
  //             <CardHeader>
  //                 <CardTitle>FaceDetection.ai</CardTitle>
  //             </CardHeader>
  //             <CardContent>
  //                 <CardDescription>Identifica rostos humanos em imagens.</CardDescription>
  //             </CardContent>
  //             <CardFooter>
  //               <span className="text-orange-500">Em breve</span>
  //             </CardFooter>
  //           </Card> */}
  //         </div>
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
      <main className="h-[calc(100vh-3rem)]">
        {/* Section */}
        <section className="h-full flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">Hello everyone!</h2>
          <h2 className="text-2xl font-bold">FullStack Developer</h2>
        </section>
      </main>

      {/* Footer */}
      <footer className="h-12 border-t px-6 py-3 flex items-center justify-between">
        &copy; 2023
      </footer>
    </div>
  )
}
