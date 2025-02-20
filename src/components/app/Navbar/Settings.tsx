import { DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DialogDescription } from "@radix-ui/react-dialog"
import ThemeControl from "./ThemeControl"
import LanguageControl from "./LanguageControl"



export default function NavbarSettings() {
    
    return (
        <DialogContent className="max-w-2xl p-0">
            <DialogHeader className="p-6 border-b">
                <DialogTitle>Баптаулар</DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="generic" className="h-96 overflow-auto px-6">
                <TabsList className="">
                    <TabsTrigger value="generic" className="px-8">Жалпы</TabsTrigger>
                    <TabsTrigger value="profile" className="px-8">Профиль</TabsTrigger>
                </TabsList>
                <TabsContent value="generic">
                    {/* Theme */}
                    <div className="flex py-4 items-center justify-between border-b">
                        <h1 className="font-medium text-sm">Интерфейс</h1>
                        <ThemeControl />
                    </div>

                    {/* Language */}
                    <div className="flex py-4 items-center justify-between border-b">
                        <h1 className="font-medium text-sm">Тіл</h1>
                        <LanguageControl />
                    </div>
                </TabsContent>
                <TabsContent value="profile" className="py-4">

                </TabsContent>
            </Tabs>
        </DialogContent>
    )
}