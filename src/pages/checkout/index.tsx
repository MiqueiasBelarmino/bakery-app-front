import { useState } from "react"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSelector } from "react-redux"
import Product from "@/models/product"
import { formatPrice } from "@/utils/formatPrice"


export default function CheckoutPage() {
    const [deliveryMethod, setDeliveryMethod] = useState("delivery")
    const [paymentMethod, setPaymentMethod] = useState("credit_card")
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [moneyChange, setMoneyChange] = useState(0)

    const cart = useSelector((state) => (state as any).cart.cart);


    const calculateSubtotal = () => {
        return cart.reduce((total: number, item: Partial<Product>) => total + (item.price ?? 0) * (item as any).quantity, 0)
    }

    const calculateTotal = () => {
        const subtotal = calculateSubtotal()
        return subtotal + deliveryFee
    }

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;

        if (/^\d*$/.test(value)) {
            setMoneyChange(value === "" ? 0 : parseInt(value, 10));
        }
    };
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 mt-6">
                <div className="flex items-center">
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumo do pedido</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {cart.map((item: Partial<Product>) => (
                                <div key={item.id} className="flex justify-between py-2">
                                    <span>{item.name} x {(item as any).quantity}</span>
                                    <span>{formatPrice(((item.price ?? 0) * (item as any).quantity))}</span>
                                </div>
                            ))}
                            <div className="mt-4 flex justify-between border-t pt-4">
                                <span className="font-semibold">Subtotal</span>
                                <span>{formatPrice(calculateSubtotal())}</span>
                            </div>
                            {deliveryMethod === "delivery" && (
                                <div className="flex justify-between py-2">
                                    <span>Taxa de entrega</span>
                                    <span>{formatPrice(deliveryFee)}</span>
                                </div>
                            )}
                            <div className="flex justify-between border-t py-2">
                                <span className="text-lg font-bold">Total</span>
                                <span className="text-lg font-bold">{formatPrice(calculateTotal())}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Datalhes da entrega</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <RadioGroup defaultValue="delivery" onValueChange={setDeliveryMethod}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="delivery" id="delivery" />
                                    <Label htmlFor="delivery">Entrega</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem disabled value="pickup" id="pickup" />
                                    <Label htmlFor="pickup">Retirada</Label>
                                </div>
                            </RadioGroup>
                            {deliveryMethod === "delivery" && (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Endereço de entrega</Label>
                                        <Input id="address" placeholder="Insira o endereço" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="instructions">Instruções para entrega (Opcionla)</Label>
                                        <Input id="instructions" placeholder="Observações sobre o endereço?" />
                                    </div>
                                </>
                            )}
                            {deliveryMethod === "pickup" && (
                                <div className="space-y-2">
                                    <Label htmlFor="pickup-time">Pickup Time</Label>
                                    <Select>
                                        <SelectTrigger id="pickup-time">
                                            <SelectValue placeholder="Select pickup time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="asap">As soon as possible</SelectItem>
                                            <SelectItem value="15min">In 15 minutes</SelectItem>
                                            <SelectItem value="30min">In 30 minutes</SelectItem>
                                            <SelectItem value="45min">In 45 minutes</SelectItem>
                                            <SelectItem value="60min">In 1 hour</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Contato</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Celular/WhatsApp:</Label>
                                <Input id="phone" placeholder="Insira o número" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Detalhes do pagamento</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <RadioGroup defaultValue="credit_card" onValueChange={setPaymentMethod}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="credit_card" id="credit_card" />
                                    <Label htmlFor="credit_card">Cartão de Crédito</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="debit_card" id="debit_card" />
                                    <Label htmlFor="debit_card">Cartão de Débito</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cash" id="cash" />
                                    <Label htmlFor="cash">Dinheiro</Label>
                                </div>
                            </RadioGroup>
                            {paymentMethod === "cash" && (
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="money_change">Se precisar de troco, informe abaixo para qual valor!</Label>
                                        <Input 
                                            id="money_change" 
                                            type="text"
                                            inputMode="numeric"
                                            value={moneyChange}
                                            onChange={handleInputChange}
                                            placeholder="R$" />
                                    </div>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Confirmar Pedido
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </div>
    )
}