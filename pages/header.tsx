import { IoIosHelpCircle } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from '../styles/header.module.css'; // Importando los estilos de módulos CSS

interface HeaderProps {
    isAdminPage?: boolean;
}

export default function Header({ isAdminPage }: HeaderProps) {
    return (
        <header className={styles.MainHeader}>
            {/* Ya no tenemos el logo aquí, solo mantenemos el dropdown o botones */}
            <div className={styles.LHeaderContent}>
                {!isAdminPage && (
                    <div className={styles.dropdown}>
                    </div>
                )}
            </div>

            <div className={styles.RHeaderContent}>
                <button className={styles.LoginButton}>
                    <div className={styles.ButtonContent}>
                        <div>{isAdminPage ? "Admin Sesión" : "Iniciar Sesión"}</div>
                    </div>
                </button>
                <IoIosHelpCircle size={30} />
            </div>
        </header>
    );
}
