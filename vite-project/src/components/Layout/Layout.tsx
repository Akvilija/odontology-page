import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
    header: ReactNode;
    footer: ReactNode;
};

const Layout = ({ children, header, footer }: LayoutProps): JSX.Element => {
    return (
        <div className="flex flex-col h-screen">
            <>{header}</>
            <main className="flex-grow">{children}</main>
            <>{footer}</>
        </div>
    );
};

export default Layout;