import { Badge, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { DialogFooter } from "../ui/dialog";
import { useState } from "react";
import { formatPrice } from "@/utils/formatPrice"
import { Textarea } from "../ui/textarea";

interface ProductCardProps {
    product: { name: string; price: number; unity: string; }
}
export default function ProductCard({ product }: ProductCardProps) {
    const [quantity, setQuantity] = useState(1);

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;

        // Allow only numbers
        if (/^\d*$/.test(value)) {
            // Convert empty value to 1 to avoid empty quantities
            setQuantity(value === "" ? 1 : parseInt(value, 10));
        }
    };

    const decreaseQuantity = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const increaseQuantity = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setQuantity((prev) => prev + 1);
    };

    return (
        <>
            <Card className="overflow-hidden hover:cursor-pointer" x-chunk="dashboard-07-chunk-4">
                <CardHeader className="">
                    <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row items-baseline gap-4 py-4 pt-0 mt-auto">
                    <div className="flex items-baseline gap-1 text-1xl font-bold tabular-nums leading-none mt-auto">
                        R${product.price}
                        <span className="text-sm font-normal text-muted-foreground mt-auto">
                            {product.unity}
                        </span>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="ml-auto sm:w-7 sm:h-7">
                                <ShoppingCart className="h-5 w-5" />
                                <span className="sr-only">Add to cart</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>{product.name}</SheetTitle>
                                <SheetDescription>
                                    Alguma observação ? (Se tiver, detalhe abaixo)
                                </SheetDescription>
                            </SheetHeader>
                            <form className="grid grid-flow-row items-center justify-center">
                                    <Textarea className="mb-5"/>
                                <div className="flex items-center mb-5">
                                    <Button variant="outline" size="icon" onClick={decreaseQuantity}>
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <Input
                                        id="quantity"
                                        name="quantity"
                                        value={quantity}
                                        className="w-12 mx-3 text-center"
                                        onChange={handleInputChange}
                                        type="text"
                                        inputMode="numeric"
                                    />
                                    <Button variant="outline" size="icon" onClick={increaseQuantity}>
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">{formatPrice(product.price * quantity)} | Adicionar</Button>
                                </DialogFooter>
                            </form>
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </>
    )
}