import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Home, LogOut, Package, Package2, PanelBottom } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/slices/cart";
import { formatPrice } from "@/utils/formatPrice";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Product from "@/models/product";

export default function Sidebar() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => (state as any).cart.cart);


    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    }

    const handleUpdateQuantity = (id: number, quantity: number) => {
        if (quantity === 0) {
            handleRemoveFromCart(id)
        } else {
            dispatch(updateQuantity({ id, quantity }));
        }
    }

    const calculateTotal = () => {
        return cart.reduce((total: number, item: Partial<Product>) => total + (item.price ?? 0) * (item as any).quantity, 0)
    }

    const handleOrderCreation = () => {
        console.log(cart);
    }

    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link to="#" className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full">
                            <Package className="w-4 h-4" />
                            <span className="sr-only">Dashboard avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link to="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                            text-muted-foreground transition-colors hover:text-foreground">
                                    <Home className="w-5 h-5" />
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
                                    <LogOut className="w-5 h-5 text-red-500" />
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

            {/* mobile topbar */}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="fixed top-0 z-30 flex h-14 items-center px-4 border-b bg-background w-full gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5" />
                                <span className="sr-only">Abrir</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-x" side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link to={'#'} className="flex w-10 h-10 bg-primary rounded-full items-center justify-center text-primary-foreground md:text-base">
                                    <Package2 className="w-5 h-5 transition-all" />
                                    <span className="sr-only">Logotipo</span>
                                </Link>
                                <Link to={'#'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <DashboardIcon className="w-5 h-5 transition-all" />
                                    Início
                                </Link>
                                <Link to={'#'} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                                    <Package className="w-5 h-5 transition-all" />
                                    Produtos
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    {/* Use ml-auto to push the cart button to the right */}
                    <div className="ml-auto">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="relative">
                                    <ShoppingCart className="h-5 w-5" />
                                    <span className="sr-only">Open cart</span>
                                    <Badge className="absolute -right-2 -top-2 h-6 w-6 rounded-full flex items-center justify-center">
                                        {cart?.length}
                                        {/* {cart.reduce((total: number, item: Product) => total + item.quantity, 0)} */}
                                    </Badge>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Seu carrinho</SheetTitle>
                                    <SheetDescription>
                                        Revise seus itens antes de confirmar
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="mt-8 space-y-4">
                                    {cart.map((item: Product) => (
                                        <div key={item.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="text-sm font-medium">{formatPrice(item.price)}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => handleUpdateQuantity(item.id, (item as any).quantity - 1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span>{(item as any).quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => handleUpdateQuantity(item.id, (item as any).quantity + 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    onClick={() => handleRemoveFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {cart.length > 0 ? (
                                    <div className="mt-8 space-y-4">
                                        <div className="flex justify-between text-lg font-semibold border-b-2 border-b-black/40">
                                            <span>Total:</span>
                                            <span>{formatPrice(calculateTotal())}</span>
                                        </div>
                                        <Button className="w-full" onClick={handleOrderCreation}>Confirmar Pedido</Button>
                                    </div>
                                ) : (
                                    <p className="mt-8 text-center text-gray-500">Seu carrinho está vazio</p>
                                )}
                            </SheetContent>
                        </Sheet>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
            </div>

        </div>
    );
}