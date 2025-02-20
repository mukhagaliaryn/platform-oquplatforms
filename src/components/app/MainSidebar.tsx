import { Box, Plus, Search } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Link from "next/link";


const userCourses = [
    {
        id: 1,
        label: "HTML5"
    },
    {
        id: 2,
        label: "CSS3"
    },
    {
        id: 3,
        label: "JavaScript"
    },
    {
        id: 4,
        label: "Python"
    },
]


export default function MainSidebar() {
    return (
        <div className="max-w-xs w-full h-full border-r">

            <div className="h-16 flex items-center gap-2 px-4">
                {/* Search */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"outline"} className="relative justify-start h-10 w-full [&_svg]:size-5 shadow-none">
                            <span className="text-muted-foreground">Мәлімет іздеу...</span>
                            <Search strokeWidth={1.5} className="absolute right-2" />
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="p-0 gap-0">
                        <DialogHeader>
                            <div className="flex gap-2 items-center border-b">
                                <Search strokeWidth={1.5} className="absolute left-2 text-muted-foreground" />
                                <Input
                                    placeholder="Курстар..."
                                    className="shadow-none border-none px-12 py-4 h-auto rounded-none focus-visible:ring-0"
                                />
                            </div>
                            <DialogTitle className="hidden"></DialogTitle>
                            <DialogDescription className="hidden"></DialogDescription>
                        </DialogHeader>

                        <div className="grid p-4">
                            <div className="grid gap-1 border-b pb-1">
                                <h1 className="text-sm pl-4 font-medium text-muted-foreground">Курстар</h1>
                                <ul>
                                    {userCourses.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                href={"#"}
                                                className="flex"
                                            >
                                                <Button variant={"ghost"} className="w-full justify-start">
                                                    <Box strokeWidth={1.5} />
                                                    <span>{item.label}</span>
                                                    
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* Add course */}
                <Link href={"/"}>
                    <Button variant={"secondary"} className="h-10 w-10 [&_svg]:size-5">
                        <Plus strokeWidth={1.5} />
                    </Button>
                </Link>
            </div>

            {/* All user courses */}
            <div className="overflow-y-auto" style={{ height: "calc(100vh - 64px)" }}>
                <div className="py-2 px-3.5">
                    <h1 className="font-medium text-muted-foreground text-sm">Курстар</h1>
                </div>
                <ul className="grid">
                    {userCourses.map(item => (
                        <li key={item.id}>
                            <Link
                                href={"#"}
                                className="flex"
                            >
                                <Button variant={"ghost"} className="w-full justify-start rounded-none h-auto">
                                    <div className="flex gap-2 py-2">
                                        <div className="w-12 h-12 rounded-lg bg-secondary">
                                        </div>

                                        <div className="text-left">
                                            <h1 className="font-semibold text-lg">{item.label}</h1>
                                            <span className="text-muted-foreground font-normal">Онлайн курс</span>
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}