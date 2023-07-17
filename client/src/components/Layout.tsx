import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    return(
        <div>
            <main>{children}</main>
        </div>
    )
}
export default Layout;
