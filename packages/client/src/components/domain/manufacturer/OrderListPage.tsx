import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useState, useEffect } from 'react';
import * as manufacturerApi from '@/api/manufacturer';
import { Column, Table } from '@/components/case/Table';
import { useNavigate } from 'react-router-dom';
import styles from './OrderListPage.module.css';
import { formatMoney, formatDate } from '@/libs/utils';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchOrders>>;

const useOrder = () => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [orders, setOrders] = useState<Response>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void manufacturerApi.fetchOrders({ manufacturerId, token }).then((products) => {
      setOrders(products);
      setTimeout(() => {
        setIsLoading(false);
      }, 100); // 描画されるまでの時間を稼ぐ
    });
  }, [manufacturerId, token]);

  return { orders, isLoading };
};

export const OrderListPage = () => {
  const navigate = useNavigate();
  const { orders, isLoading } = useOrder();

  const columns: Column<Response[number]>[] = [
    {
      header: '発注書ID',
      accessor: (item) => item.id,
      width: '505.03px',
    },
    {
      header: '発注元',
      accessor: (item) => item.shop.name,
      width: '238.84px',
    },
    {
      header: '発注金額',
      accessor: (item) => <p className={styles.priceCell}>{formatMoney(item.totalPrice)}円</p>,
      width: '145.17px',
    },
    {
      header: '発注日',
      accessor: (item) => formatDate(item.orderAt),
      width: '309.95px',
    },
  ];

  return (
    <Table
      columns={columns}
      data={orders}
      onClick={(item) => {
        navigate(`/manufacturer/orders/${item.id}`);
      }}
      isLoading={isLoading}
    />
  );
};
