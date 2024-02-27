import styles from './Modal.module.css';
import { ReactNode } from 'react';
import { Button } from '@/components/base/Button';

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, onSubmit }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        {children}
        <div className={styles.modalButton}>
          <div className={styles.modalActions}>
            <Button variant='outlined' onClick={onClose}>
              閉じる
            </Button>
            {onSubmit && (
              <Button variant='filled' onClick={onSubmit}>
                発注
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
