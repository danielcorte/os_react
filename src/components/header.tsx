"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User, LogOut, ChevronDown } from "lucide-react"

export default function Header() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Obter o título da página atual
  const getPageTitle = () => {
    const path = pathname.split("/").filter(Boolean)

    if (path.length === 1 && path[0] === "dashboard") {
      return "Dashboard"
    }

    if (path.length > 1) {
      const page = path[1]

      const titles: Record<string, string> = {
        ordens: "Ordens de Serviço",
        patrimonios: "Patrimônios",
        ambientes: "Ambientes",
        manutentores: "Manutentores",
        gestores: "Gestores",
        perfil: "Perfil",
      }

      return titles[page] || "Dashboard"
    }

    return "Dashboard"
  }

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Link href="/dashboard" className="text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                  TechEdu OS
                </Link>
                <nav className="grid gap-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/ordens"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ordens de Serviço
                  </Link>
                  <Link
                    href="/dashboard/patrimonios"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Patrimônios
                  </Link>
                  <Link
                    href="/dashboard/ambientes"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Ambientes
                  </Link>
                  <Link
                    href="/dashboard/manutentores"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Manutentores
                  </Link>
                  <Link
                    href="/dashboard/gestores"
                    className="flex items-center rounded-md px-3 py-2 hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Gestores
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/dashboard" className="hidden text-xl font-bold md:block">
            TechEdu OS
          </Link>

          <div className="hidden md:block">
            <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <h1 className="text-lg font-semibold">{getPageTitle()}</h1>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline-block">{user?.nome || user?.username}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/perfil">Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout} className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
