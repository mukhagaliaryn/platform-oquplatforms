import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};


export default function BaseLayout({ children }: Props) {
    return children
}
