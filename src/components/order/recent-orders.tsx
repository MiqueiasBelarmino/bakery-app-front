import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "../ui/button";
import { useState } from "react";
import { SheetSide } from "../sheet";

export default function RecentOrders() {
    const [isOpen, setIsOpen] = useState(false)

    // Function to open/close the Sheet
    const toggleSheet = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="w-full md:w-1/2">
            <SheetSide isOpen={isOpen} side="right" toggleOpen={toggleSheet}/>
            <Card className="">
                <CardTitle className="flex text-lg sm:text-xl text-gray-800 mt-4 ml-4">
                    <span>Pedidos Recentes</span>
                    <Button className="ml-auto mr-4" onClick={toggleSheet}>New</Button>
                </CardTitle>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>#1234</TableCell>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Shipped</TableCell>
                            <TableCell className="text-right">$129.99</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#1235</TableCell>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>Processing</TableCell>
                            <TableCell className="text-right">$79.99</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#1236</TableCell>
                            <TableCell>Bob Johnson</TableCell>
                            <TableCell>Delivered</TableCell>
                            <TableCell className="text-right">$199.99</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>#1237</TableCell>
                            <TableCell>Alice Brown</TableCell>
                            <TableCell>Pending</TableCell>
                            <TableCell className="text-right">$54.99</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}