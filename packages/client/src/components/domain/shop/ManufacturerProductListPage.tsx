import { TextInput } from '@/components/base/TextInput';
import { Modal } from '@/components/base/Modal';
import { Column, Table } from '@/components/case/Table';
import { useEffect, useState } from 'react';
import styles from './ManufacturerProductListPage.module.css';
import { useParams } from 'react-router-dom';
import * as shopApi from '@/api/shop';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { Button } from '@/components/base/Button';

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  type ItemWithOrder = (typeof items)[number] & {
    order: number;
  };

  const InitialModalContent = () => <div></div>;
  InitialModalContent.displayName = 'InitialModalContent';

  const [ModalContent, setModalContent] = useState(() => InitialModalContent);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの動作をキャンセル

    const form = e.currentTarget;
    const formData = new FormData(form);

    const orders: ItemWithOrder[] = items
      .map((item) => {
        const value = formData.get(`order_${item.id}`);
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          categories: item.categories,
          stock: item.stock,
          order: value ? Number(value) : 0,
        };
      })
      .filter((order) => order.order > 0); // orderが1以上のものを抽出

    const NewModalContent = () => <Table columns={modalColumns} data={orders} />;
    NewModalContent.displayName = 'NewModalContent';

    setModalContent(() => NewModalContent);
    openModal(); // モーダルを開く

    return;
  };

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

  const modalColumns: Column<ItemWithOrder>[] = [
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
      header: '発注',
      accessor: (item) => item.order,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className={styles.modalButton}>
          <Button variant='outlined'>発注</Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalContent />
        </Modal>
      </div>
      <Table columns={columns} data={items} />
    </form>
  );
};
