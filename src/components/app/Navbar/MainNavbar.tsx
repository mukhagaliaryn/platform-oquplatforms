import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LogOut, Settings } from "lucide-react"
import NavbarSettings from "@/components/app/Navbar/Settings"


export default function MainNavbar() {
    return (
        <div className="w-full h-16">
            <div className="w-full px-8 h-full flex justify-between items-center">
                <Badge variant={"secondary"}>v1.0.0</Badge>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="/logo_light.svg" />
                            <AvatarFallback>MA</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-8 max-w-64">
                        {/* Short profile */}
                        <div className="flex gap-2 p-4">
                            <Avatar className="h-14 w-14 border">
                                <AvatarImage src="/logo_light.svg" />
                                <AvatarFallback>MA</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="font-semibold text-lg">
                                    Mukhagali Aryn
                                </h1>
                                <span className="block text-sm text-muted-foreground">@mukhagaliaryn</span>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        {/* Setting */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"ghost"} className="w-full gap-2 justify-start [&_svg]:size-5">
                                    <Settings strokeWidth={1.5} />
                                    <span>Баптаулар</span>
                                </Button>
                            </DialogTrigger>

                            <NavbarSettings />
                        </Dialog>

                        {/* Logout */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant={"ghost"} className="w-full justify-start [&_svg]:size-5">
                                    <LogOut strokeWidth={1.5} />
                                    <span>Платформадан шығу</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                                    <DialogDescription>
                                        This action cannot be undone. This will permanently delete your account
                                        and remove your data from our servers.
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}