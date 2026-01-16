import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResetPasswordForm from '../components/login/ResetPasswordForm';
import styles from '../styles/login-page.module.css';
import formStyles from '../components/login/LoginForm.module.css';
import LogoCantinho from '../assets/LogoCantinho.png';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <button
        type="button"
        className={formStyles.backButton}
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        title="Voltar"
      >
        ←
      </button>

      <img src={LogoCantinho} alt="Logo Cantinho do Saber" className={styles.img} />
      <div className={styles.cardRequest}>
        <ResetPasswordForm />
      </div>
    </div>
  );
}

