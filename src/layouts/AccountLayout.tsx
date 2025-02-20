import Image from "next/image";
import { ReactNode } from "react";


type Props = {
    children: ReactNode;
    // locale: string
};


export default function AccountLayout({ children }: Props) {

    return (
        <div className="h-full w-full overflow-auto">
            <div className="w-12 overflow-hidden rounded-lg m-4">
                <Image
                    src={"/logo_light.svg"} width={1080} height={1080} alt="Logo" priority
                    className="w-full"
                />
            </div>
            <div className="max-w-lg mx-auto py-16 px-4 text-center">
                {children}
            </div>
        </div>
    )
}
