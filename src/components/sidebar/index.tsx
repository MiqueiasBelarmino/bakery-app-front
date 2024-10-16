import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, LogOut, Package, Package2, PanelBottom } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link to="#" className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="w-4 h-4"/>
                            <span className="sr-only">Dashboard avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                            <Link to="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                            text-muted-foreground transition-colors hover:text-foreground">
                                <Home className="w-5 h-5"/>
                                <span className="sr-only">Pedidos</span>
                            </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Pedidos
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                            <Link to="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                            text-muted-foreground transition-colors hover:text-foreground">
                                <LogOut className="w-5 h-5 text-red-500"/>
                                <span className="sr-only">Sair</span>
                            </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Sair
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            {/* mobile sidebar */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5"></PanelBottom>
                                <span className="sr-only">Abrir</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-x" side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link to={'#'} className="flex w-10 h-10 bg-primary rounded-full items-center justify-center text-primary-foreground md:text-base">
                                    <Package2 className="w-5 h-5 transition-all"/>
                                    <span className="sr-only">Logotipo</span>
                                </Link>
                                <Link to={'#'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <DashboardIcon className="w-5 h-5 transition-all"/>
                                    Início
                                </Link>
                                <Link to={'#'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Package className="w-5 h-5 transition-all"/>
                                    Produtos
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    );
}