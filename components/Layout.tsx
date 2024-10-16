import Sidebar from '@/pages/Sidebar';
import Header from '@/pages/header';
import React from 'react';
import { useRouter } from 'next/router';  // Importa el hook useRouter

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const router = useRouter();  // Usa el hook useRouter
    const isLoginPage = router.pathname === '/';  // Verifica si estás en la página de login

    return (
        <div style={{ display: 'flex' }}>
            {/* Si no estamos en la página de login, renderizamos el Sidebar y el Header */}
            {!isLoginPage && (
                <>
                    <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
                    <div style={{ flex: 1 }}>
                        <Header />
                        <main>
                            {children}
                        </main>
                    </div>
                </>
            )}
            {/* Si estamos en la página de login, solo renderizamos el contenido de login */}
            {isLoginPage && (
                <div style={{ flex: 1 }}>
                    <main>
                        {children}
                    </main>
                </div>
            )}
        </div>
    );
};

export default Layout;

