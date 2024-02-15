// import { LinkCard } from '@/components/base/LinkCard';
import styles from './HomePage.module.css';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useEffect, useState } from 'react';
import * as shopApi from '@/api/shop';
import { Button } from '@/components/base/Button';

type Response = Awaited<ReturnType<typeof shopApi.fetchShop>>;

const useShop = () => {
  const lodaerData = useAuthLoaderData();
  const id = lodaerData.id;
  const token = lodaerData.token;

  const [shop, setShop] = useState<Response | null>(null);

  useEffect(() => {
    void shopApi.fetchShop({ shopId: id, token }).then((res) => {
      setShop(res);
    });
  }, [id, token]);

  return { shop };
};

export const ShopHomePage = () => {
  const { shop } = useShop();

  const logout = () => {
    document.cookie = 'token=; max-age=0';
    location.reload();
  };

  return (
    <>
      <div className={styles.container}>
        {shop && (
          <div>
            <h3>{shop.name}</h3>
            <p>{shop.description}</p>
            <div className={styles.logoutButton}>
              <Button variant='outlined' onClick={logout}>
                ログアウト
              </Button>
            </div>
          </div>
        )}
        <div className={styles.linkList}>
          {/* <LinkCard
            title='取り扱い商品一覧'
            description='取り扱いしている商品の在庫を管理します'
            href='/manufacturer/products'
            className={styles.linkCard}
          />
          <LinkCard
            title='発注書一覧'
            description='販売会社からの発注書を管理します'
            href='/manufacturer/orders'
            className={styles.linkCard}
          /> */}
        </div>
      </div>
    </>
  );
};
