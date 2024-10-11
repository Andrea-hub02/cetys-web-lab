import { useState } from 'react'; // Importamos useState para manejar el estado del toggle
import Header from './header'; // Importando el header
import Sidebar from './Sidebar'; // Importando el sidebar
import styles from '../styles/adminstart.module.css'; // Archivo CSS para la página de administración

const AdminStartPage = () => {
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false); // Estado para el sidebar

    const toggleSidebar = () => {
        setSidebarCollapsed(!isSidebarCollapsed); // Alternar el colapso del sidebar
    };

    return (
        <div className={styles.adminPage}>
            <Header isAdminPage={true} /> {/* El Header permanece */}

            {/* Sidebar con la opción de contraerse */}
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

            <div className={styles.pageContent}>
                <h1>Bienvenido al panel de administración</h1>
                {/* Aquí va el contenido principal de la página */}
            </div>
        </div>
    );
};

export default AdminStartPage;
