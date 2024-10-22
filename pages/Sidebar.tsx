import Image from "next/image";
import { FaTasks, FaBell, FaWrench, FaCog } from 'react-icons/fa'; // Agregamos FaCog para el icono de engranaje
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importamos flechas para colapsar/expandir
import styles from '../styles/sidebar.module.css'; // Archivo CSS para los estilos del sidebar
import Link from "next/link";

interface SidebarProps {
    isCollapsed: boolean;
    toggleSidebar: () => void;
}

export default function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
    return (
        <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            {/* Logo de CETYS en la parte superior del sidebar */}
            <div className={styles.logoContainer}>
                <Image
                    src="/cetys-logo.png" // Asegúrate de que esta ruta sea correcta
                    alt="CETYS Logo"
                    width={isCollapsed ? 50 : 100} // Cambia el tamaño según el estado del sidebar
                    height={isCollapsed ? 40 : 75}
                />
            </div>

            {/* Flecha para colapsar/expandir el sidebar */}
            <button className={styles.collapseButton} onClick={toggleSidebar}>
                {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
            </button>

            {/* Botones del sidebar, ocultos si está colapsado */}
            {!isCollapsed && (
                <>
                    <Link href="/Catalogo" passHref>
                        <button className={styles.sidebarBtn}> {/* Cambiado a botón sin envoltorio a */}
                            <FaTasks style={{ marginRight: '8px' }} /> Catálogo
                        </button>
                    </Link>

                    <Link href="/Notificaciones" passHref>
                        <button className={styles.sidebarBtn}> {/* Cambiado a botón sin envoltorio a */}
                            <FaBell style={{ marginRight: '8px' }} /> Notificaciones
                        </button>
                    </Link>

                    <Link href="/Mantenimiento" passHref>
                        <button className={styles.sidebarBtn}> {/* Cambiado a botón sin envoltorio a */}
                            <FaWrench style={{ marginRight: '8px' }} /> Mantenimiento
                        </button>
                    </Link>

                </>
            )}

            {/* Icono de engranaje en la parte inferior */}
            <button className={styles.settingsButton}>
                <FaCog size={24} />
            </button>
        </aside>
    );
}
