import { Container } from '@/components/case/Container';
import { HomeHeader } from '@/components/common/HomeHeader';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Breadcrumb } from '@/components/case/Breadcrumb';

export const ShopLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname.includes('login');
  const isManufacturerListPage = location.pathname.includes('manufacturers');
  const isManufacturerProductListPage = location.pathname.includes('products');

  let breadcrumbItems = [{ href: '/shop', title: '販売会社トップ' }];
  if (isManufacturerListPage) {
    breadcrumbItems = [...breadcrumbItems, { href: '/shop/manufacturers', title: '製造会社一覧' }];
  }
  if (isManufacturerProductListPage) {
    breadcrumbItems = [...breadcrumbItems, { href: '/shop/manufacturers/:manufacturerId/products', title: '取り扱い商品一覧' }];
  }
  if (isLoginPage) {
    breadcrumbItems = [];
  }

  return (
    <>
      <HomeHeader />
      <Container>
        <div className={styles.container}>
          <Breadcrumb items={breadcrumbItems} />
          <Outlet />
        </div>
      </Container>
    </>
  );
};
