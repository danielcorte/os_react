export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-14 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TechEdu - Sistema de Ordem de Serviço
        </p>
        <p className="text-sm text-muted-foreground">Versão 1.0.0</p>
      </div>
    </footer>
  )
}
