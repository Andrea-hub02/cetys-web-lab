import React, { useState } from "react";
import styles from "../styles/soporte.module.css";

const Soporte = () => {
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (correo && mensaje) {
            console.log("Mensaje enviado:", { correo, mensaje });
            setEnviado(true);
            setCorreo("");
            setMensaje("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <form onSubmit={handleSubmit}>
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        className={styles.inputField}
                        placeholder="tu@email.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />

                    <label>Escribe tu duda:</label>
                    <textarea
                        className={styles.inputField}
                        placeholder="Describe tu problema o pregunta..."
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        rows={4}
                        required
                    />

                    <button type="submit" className={styles.sendButton}>
                        Enviar
                    </button>

                    {enviado && (
                        <p className={styles.confirmation}>
                            Tu mensaje ha sido enviado correctamente ✅
                        </p>
                    )}
                </form>
            </div>

            <div className={styles.footer}>
                <p>
                    Soporte técnico: <strong>soporte@cetys.edu.mx</strong> <br />
                    Teléfono: <strong>(686) 123 4567</strong>
                </p>
            </div>
        </div>
    );
};

export default Soporte;
