import { Flower, Github, Instagram, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full flex justify-center py-6 px-2">
      <div className="w-full max-w-7xl flex items-center bg-zinc-900/40 justify-center gap-2 md:justify-between border-b px-3 md:px-6 py-2 rounded-full border border-zinc-500 drop-shadow-xl">
        <Flower color="red" className="w-6 h-6" />
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-bold">Devboot</h1>
          <span className="hidden text-sm text-muted-foreground">
            Desenvolvido por Giluan Souza
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Separator orientation="vertical" className="h-6" />
          <Link href="https://github.com/giluansouza" target="_blank">
            <Button variant="outline" className="rounded-full w-20 shadow-lg">
              <Github color="red" className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://x.com/opropriogs" target="_blank">
            <Button variant="outline" className="rounded-full w-20 shadow-lg">
              <Twitter color="red" className="w-5 h-5" />
            </Button>
          </Link>
          <Link
            href="https://www.instagram.com/opropriogs?igsh=MW15enN6bTdrc242ZA=="
            target="_blank"
          >
            <Button variant="outline" className="rounded-full w-20 shadow-lg">
              <Instagram color="red" className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
