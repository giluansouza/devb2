import { Flower, Github } from "lucide-react";
import { Button } from "./button";
import { Separator } from "@/components/ui/separator";

export function Header() {
    return (
      <div className="h-12 px-6 py-3 flex items-center justify-between border-b">
        <Flower color="red" className="w-6 h-6" />
        <h1 className="text-2xl font-bold">Devboot</h1>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido por Giluan Souza</span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github color="red" className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    )
}
