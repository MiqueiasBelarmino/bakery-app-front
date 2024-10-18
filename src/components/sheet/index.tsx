import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


interface SheetProps {
    side: "top" | "right" | "bottom" | "left";
    isOpen: boolean;
    toggleOpen: () => void
}
export function SheetSide({ side, isOpen, toggleOpen }: SheetProps) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet open={isOpen} key={side} onOpenChange={toggleOpen}>
                <SheetContent side={side}>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <Button onClick={toggleOpen}>Cancel</Button>
                        <SheetClose asChild>
                            <Button type="submit" onClick={toggleOpen}>Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}
