import { Column, Table } from '@/components/case/Table';
import { useEffect, useState } from 'react';
import * as shopApi from '@/api/shop';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { useNavigate } from 'react-router-dom';

type Response = Awaited<ReturnType<typeof shopApi.fetchPartnerManufacturers>>;

const usePartnerManufacturers = () => {
  const loaderData = useAuthLoaderData();
  const shopId = loaderData.id;
  const token = loaderData.token;

  const [manufacturers, setManufacturers] = useState<Response>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void shopApi.fetchPartnerManufacturers({ shopId, token }).then((manufacturers) => {
      setManufacturers(manufacturers);
      setTimeout(() => {
        setIsLoading(false);
      }, 100); // 描画されるまでの時間を稼ぐ
    });
  }, [shopId, token]);

  return { manufacturers, isLoading };
};

export const ManufacturerListPage = () => {
  const navigate = useNavigate();
  const { manufacturers, isLoading } = usePartnerManufacturers();

  const columns: Column<Response[number]>[] = [
    {
      header: 'ID',
      accessor: (item) => item.id,
      width: '394.64px',
    },
    {
      header: '会社名',
      accessor: (item) => item.name,
      width: '274.52px',
    },
    {
      header: '会社説明',
      accessor: (item) => item.description,
      width: '529.84px',
    },
  ];

  return (
    <Table
      columns={columns}
      data={manufacturers}
      onClick={(item) => {
        navigate(`/shop/manufacturers/${item.id}/products`);
      }}
      isLoading={isLoading}
    />
  );
};
