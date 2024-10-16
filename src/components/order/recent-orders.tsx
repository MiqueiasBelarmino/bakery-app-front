import { Card, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function RecentOrders() {
    return (
        <div className="w-full md:w-1/2">
            <Card className="">
                <CardTitle className="text-lg sm:text-xl text-gray-800 mt-4 ml-4">Pedidos Recentes</CardTitle>
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