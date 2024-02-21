import { Column, Table } from '@/components/case/Table';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as shopApi from '@/api/shop';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';

type Response = Awaited<ReturnType<typeof shopApi.fetchHandlingProducts>>;

const useHandleProducts = (manufacturerId: string) => {
  const loaderData = useAuthLoaderData();
  const shopId = loaderData.id;
  const token = loaderData.token;

  const [products, setProducts] = useState<Response>();

  useEffect(() => {
    void shopApi.fetchHandlingProducts({ shopId, manufacturerId, token }).then((products) => {
      setProducts(products);
    });
  }, [shopId, manufacturerId, token]);

  return { products };
};

export const ManufacturerProductListPage = () => {
  const params = useParams();
  const manufacturerId = params['manufacturerId'];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { products } = useHandleProducts(manufacturerId!);
  const items = products?.products ?? [];

  const columns: Column<(typeof items)[number]>[] = [
    {
      header: 'ID',
      accessor: (item) => item.id,
    },
    {
      header: '商品名',
      accessor: (item) => item.name,
    },
    {
      header: '商品説明',
      accessor: (item) => item.description,
    },
    {
      header: '商品カテゴリ',
      accessor: (item) => item.categories.map((category) => category.name).join('・'),
    },
    {
      header: '在庫',
      accessor: (item) => item.stock,
    },
  ];

  return (
    <Table columns={columns} data={items} />
  );
};
