"use client"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


export default function ThemeControl() {
    const { theme, setTheme } = useTheme()
    const [value, setValue] = useState(theme)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-36 justify-start [&_svg]:size-5">
                    {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Laptop />}
                    <span>
                        {theme === 'dark' ? "Түн" : theme === 'light' ? "Күндіз" : "Жүйелік"}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
                    <DropdownMenuRadioItem 
                        value="system" 
                        onClick={() => setTheme("system")}
                        className="flex gap-2"
                    >
                        <Laptop size={20} />
                        Жүйелік
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem 
                        value="light" 
                        onClick={() => setTheme("light")}
                        className="flex gap-2"
                    >
                        <Sun size={20} />
                        Күндіз
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem 
                        value="dark" 
                        onClick={() => setTheme("dark")}
                        className="flex gap-2"
                    >
                        <Moon size={20} />
                        Түн
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

