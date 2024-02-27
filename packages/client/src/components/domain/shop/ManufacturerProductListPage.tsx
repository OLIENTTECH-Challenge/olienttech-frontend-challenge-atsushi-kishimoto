import { TextInput } from '@/components/base/TextInput';
import { Modal } from '@/components/base/Modal';
import { Column, Table } from '@/components/case/Table';
import { useEffect, useState } from 'react';
import styles from './ManufacturerProductListPage.module.css';
import { useParams } from 'react-router-dom';
import * as shopApi from '@/api/shop';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { Button } from '@/components/base/Button';
import toast from 'react-hot-toast';

type Response = Awaited<ReturnType<typeof shopApi.fetchHandlingProducts>>;

type ResolvedType<T> = T extends Promise<infer R> ? R : T;
type ItemWithOrder = ResolvedType<ReturnType<typeof shopApi.fetchHandlingProducts>>['products'][number] & {
  quantity: number;
};

type OrderItem = {
  productId: string;
  quantity: number;
};

const useHandleProducts = (shopId: string, token: string, manufacturerId: string) => {
  const [products, setProducts] = useState<Response>();

  useEffect(() => {
    void shopApi.fetchHandlingProducts({ shopId, manufacturerId, token }).then((products) => {
      setProducts(products);
    });
  }, [shopId, manufacturerId, token]);

  return { products };
};

const postOrder = (shopId: string, token: string, manufacturerId: string, orders: ItemWithOrder[]) => {
  return new Promise((resolve, reject) => {
    const items: OrderItem[] = orders.map((item) => ({ productId: item.id, quantity: item.quantity }));

    if (!items.length) {
      toast.error('発注商品を選択してください');
      reject(new Error('発注商品がありません'));
      return;
    }

    toast
      .promise(shopApi.postOrder({ manufacturerId, items, shopId, token }), {
        loading: '発注中です',
        success: '発注しました',
        error: '発注に失敗しました',
      })
      .then(() => {
        resolve(undefined);
        window.location.reload();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const ManufacturerProductListPage = () => {
  const loaderData = useAuthLoaderData();
  const shopId = loaderData.id;
  const token = loaderData.token;

  const params = useParams();
  const manufacturerId = params['manufacturerId'];

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { products } = useHandleProducts(shopId, token, manufacturerId!);
  const items = products?.products ?? [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const InitialModalContent = () => <></>;
  InitialModalContent.displayName = 'InitialModalContent';

  const [orders, setOrders] = useState<ItemWithOrder[]>([]);
  const [ModalContent, setModalContent] = useState(() => InitialModalContent);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの動作をキャンセル

    const form = e.currentTarget;
    const formData = new FormData(form);

    const newOrders: ItemWithOrder[] = items
      .map((item) => {
        const value = formData.get(`order_${item.id}`);
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          categories: item.categories,
          stock: item.stock,
          quantity: value ? Number(value) : 0,
        };
      })
      .filter((order) => order.quantity > 0); // orderが1以上のものを抽出

    setOrders(newOrders);

    const NewModalContent = () => <Table columns={modalColumns} data={newOrders} />;
    NewModalContent.displayName = 'NewModalContent';

    setModalContent(() => NewModalContent);
    openModal(); // モーダルを開く

    return;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // NOTE: Enterキーが押された場合、フォームの送信を防止する
    if (e.key === 'Enter') {
      e.preventDefault();
    }
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
      accessor: (item) => item.quantity,
    },
  ];

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div>
        <div className={styles.modalButton}>
          <Button variant='filled'>発注</Button>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={() => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            postOrder(shopId, token, manufacturerId!, orders)
              .then(() => {
                closeModal();
              })
              .catch(() => {
                closeModal();
              });
          }}
        >
          <ModalContent />
        </Modal>
      </div>
      <Table columns={columns} data={items} />
    </form>
  );
};
