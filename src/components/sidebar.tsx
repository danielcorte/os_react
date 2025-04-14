"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ClipboardList, Package, Home, Users, UserCog, User } from "lucide-react"

interface SidebarItemProps {
  href: string
  icon: React.ReactNode
  title: string
  isActive?: boolean
}

const SidebarItem = ({ href, icon, title, isActive }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  )
}

export default function Sidebar() {
  const { user } = useAuth()
  const pathname = usePathname()
  const isAdmin = user?.nivel === "admin"
  const isManutentor = user?.nivel === "manutentor" || isAdmin

  return (
    <aside className="hidden w-64 shrink-0 border-r md:block">
      <div className="flex h-full flex-col gap-2 p-4">
        <SidebarItem
          href="/dashboard"
          icon={<LayoutDashboard className="h-5 w-5" />}
          title="Dashboard"
          isActive={pathname === "/dashboard"}
        />

        <SidebarItem
          href="/dashboard/ordens"
          icon={<ClipboardList className="h-5 w-5" />}
          title="Ordens de Serviço"
          isActive={pathname.startsWith("/dashboard/ordens")}
        />

        <SidebarItem
          href="/dashboard/patrimonios"
          icon={<Package className="h-5 w-5" />}
          title="Patrimônios"
          isActive={pathname.startsWith("/dashboard/patrimonios")}
        />

        <SidebarItem
          href="/dashboard/ambientes"
          icon={<Home className="h-5 w-5" />}
          title="Ambientes"
          isActive={pathname.startsWith("/dashboard/ambientes")}
        />

        {isManutentor && (
          <SidebarItem
            href="/dashboard/manutentores"
            icon={<Users className="h-5 w-5" />}
            title="Manutentores"
            isActive={pathname.startsWith("/dashboard/manutentores")}
          />
        )}

        {isAdmin && (
          <SidebarItem
            href="/dashboard/gestores"
            icon={<UserCog className="h-5 w-5" />}
            title="Gestores"
            isActive={pathname.startsWith("/dashboard/gestores")}
          />
        )}

        <div className="flex-1" />

        <SidebarItem
          href="/dashboard/perfil"
          icon={<User className="h-5 w-5" />}
          title="Perfil"
          isActive={pathname.startsWith("/dashboard/perfil")}
        />
      </div>
    </aside>
  )
}
