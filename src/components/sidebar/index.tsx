import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { PanelBottom } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5"></PanelBottom>
                                <span className="sr-only">Abrir</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav>
                                <Link to={'#'}>logo</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    );
}