import styles from './LoginPage.module.css';
import { TextInput } from '@/components/base/TextInput';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as shopApi from '@/api/shop';
import { Button } from '@/components/base/Button';

export const ShopLoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const id = formData.get('id');
    const password = formData.get('password');

    if (typeof id === 'string' && typeof password === 'string') {
      void toast
        .promise(shopApi.signin({ id, password }), {
          loading: 'ログイン中です',
          success: 'ログインしました',
          error: 'ログインに失敗しました',
        })
        .then(() => {
          navigate('/shop');
        });
    } else {
      toast.error('エラーが発生しました');
    }
  };

  return (
    <div className={styles.main}>
      <form method='post' className={styles.form} onSubmit={handleSubmit}>
        <TextInput name='id' type='text' placeholder='販売会社ID' required />
        <TextInput name='password' type='password' placeholder='パスワード' required />
        <Button variant='filled'>ログイン</Button>
      </form>
    </div>
  );
};