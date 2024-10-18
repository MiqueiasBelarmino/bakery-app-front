import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, LogOut, Package, Package2, PanelBottom } from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

import { Minus, Plus, ShoppingCart, Trash2, Upload } from "lucide-react";
import { SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Define the product type
type Product = {
    id: number
    name: string
    price: number
    image: string
    description: string
    cuisine: string
    estimatedDelivery: string
    rating: number
}

// Define the cart item type
type CartItem = Product & { quantity: number }

// Sample product data
const products: Product[] = [
    { id: 1, name: "Margherita Pizza", price: 12.99, image: "/placeholder.svg?height=100&width=100", description: "Classic pizza with tomato sauce, mozzarella, and basil", cuisine: "Italian", estimatedDelivery: "30-40 min", rating: 4.5 },
    { id: 2, name: "Chicken Tikka Masala", price: 14.99, image: "/placeholder.svg?height=100&width=100", description: "Grilled chicken in a creamy tomato sauce with Indian spices", cuisine: "Indian", estimatedDelivery: "35-45 min", rating: 4.7 },
    { id: 3, name: "Beef Burger", price: 10.99, image: "/placeholder.svg?height=100&width=100", description: "Juicy beef patty with lettuce, tomato, and special sauce", cuisine: "American", estimatedDelivery: "25-35 min", rating: 4.3 },
    { id: 4, name: "Pad Thai", price: 11.99, image: "/placeholder.svg?height=100&width=100", description: "Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce", cuisine: "Thai", estimatedDelivery: "30-40 min", rating: 4.6 },
    { id: 5, name: "Sushi Roll Combo", price: 18.99, image: "/placeholder.svg?height=100&width=100", description: "Assorted sushi rolls with soy sauce and wasabi", cuisine: "Japanese", estimatedDelivery: "35-45 min", rating: 4.8 },
]

export default function Sidebar() {
    const [cart, setCart] = useState<CartItem[]>([])

    const addToCart = (product: Product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.id === product.id)
            if (existingItem) {
                return currentCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...currentCart, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId: number) => {
        setCart(currentCart => currentCart.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity === 0) {
            removeFromCart(productId)
        } else {
            setCart(currentCart =>
                currentCart.map(item =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            )
        }
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
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
                                    <Badge className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-2">
                                        {cart.reduce((total, item) => total + item.quantity, 0)}
                                    </Badge>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Your Cart</SheetTitle>
                                    <SheetDescription>
                                        Review your items before checking out
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="mt-8 space-y-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="h-16 w-16 rounded-md object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-medium">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.cuisine}</p>
                                                    <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </Button>
                                                <span>{item.quantity}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="icon"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {cart.length > 0 ? (
                                    <div className="mt-8 space-y-4">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total:</span>
                                            <span>${calculateTotal().toFixed(2)}</span>
                                        </div>
                                        <Button className="w-full">Proceed to Checkout</Button>
                                    </div>
                                ) : (
                                    <p className="mt-8 text-center text-gray-500">Your cart is empty</p>
                                )}
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>
            </div>

        </div>
    );
}