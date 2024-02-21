import { TextInput } from '@/components/base/TextInput';
import { Modal } from '@/components/base/Modal';
import { Column, Table } from '@/components/case/Table';
import { useEffect, useState } from 'react';
import styles from './ManufacturerProductListPage.module.css';
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    {
      header: '発注',
      accessor: (item) => (
        <div className={styles.orderCell}>
          <TextInput
            type='number'
            min={0}
            name={`order_${item.id}`}
            className={styles.orderInput}
            defaultValue={0}
            required
          />
        </div>
      ),
    },
  ];

  return (
    <form>
      <div>
        <button type='button' onClick={openModal}>
          モーダルを開く
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <p>これはモーダルの中身です。</p>
        </Modal>
      </div>
      <Table columns={columns} data={items} />
    </form>
  );
};
