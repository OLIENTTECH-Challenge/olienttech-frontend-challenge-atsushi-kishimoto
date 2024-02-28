import { TextInput } from '@/components/base/TextInput';
import { Column, Table } from '@/components/case/Table';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProductListPage.module.css';
import { Check, Search } from 'lucide-react';
import toast from 'react-hot-toast';
import * as manufacturerApi from '@/api/manufacturer';
import { useAuthLoaderData } from '@/hooks/useAuthLoaderData';
import { Button } from '@/components/base/Button';
import { formatMoney } from '@/libs/utils';

type Response = Awaited<ReturnType<typeof manufacturerApi.fetchHandlingProducts>>;

const useHandleProducts = () => {
  const loaderData = useAuthLoaderData();
  const manufacturerId = loaderData.id;
  const token = loaderData.token;

  const [products, setProducts] = useState<Response>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void manufacturerApi.fetchHandlingProducts({ manufacturerId, token }).then((products) => {
      setProducts(products);
      setTimeout(() => { setIsLoading(false); }, 100); // 描画されるまでの時間を稼ぐ
    });
  }, [manufacturerId, token]);

  const mutateUpdateStock = useCallback(
    async (productId: string, stock: number) => {
      await manufacturerApi.updateHandlingProductStock({ manufacturerId, productId, token, stock });
    },
    [manufacturerId, token],
  );

  return { products, mutateUpdateStock, isLoading };
};

const useSearch = (products: Response) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Response>(products);

  useEffect(() => {
    const result = products.filter((product) => product.name.startsWith(searchInput));
    setFilteredProducts(result);
  }, [searchInput, products]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return { filteredProducts, handleSearchChange };
};

export const ProductListPage = () => {
  const targetProductId = useRef<string | null>(null);

  const { products, mutateUpdateStock, isLoading } = useHandleProducts();
  const { filteredProducts, handleSearchChange } = useSearch(products);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productId = targetProductId.current;
    if (productId == null) {
      toast.error('商品IDが存在しません');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const stock = formData.get(`stock_${productId}`);

    const product = products.find((product) => product.id === productId) ?? null;
    if (product === null) {
      toast.error('対象の商品が存在しません');
      return;
    }

    if (typeof stock !== 'string') {
      toast.error('在庫数は数値で入力してください');
      return;
    }

    void toast.promise(mutateUpdateStock(productId, Number(stock)), {
      loading: `${product.name}の在庫数を更新中です`,
      success: `${product.name}の在庫数を更新しました`,
      error: `${product.name}の在庫数の更新に失敗しました`,
    });
    return;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // NOTE: Enterキーが押された場合、フォームの送信を防止する
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const columns: Column<Response[number]>[] = [
    {
      header: 'ID',
      accessor: (item) => item.id,
      width: '220.83px',
    },
    {
      header: '商品名',
      accessor: (item) => item.name,
      width: '157.56px',
    },
    {
      header: '商品説明',
      accessor: (item) => item.description,
      width: '283.92px',
    },
    {
      header: '商品カテゴリ',
      accessor: (item) => item.categories.map((category) => category.name).join('・'),
      width: '299.14px',
    },
    {
      header: '単価',
      accessor: (item) => <p className={styles.priceCell}>{`${formatMoney(item.price)}円`}</p>,
      width: '88.97px',
    },
    {
      header: '在庫',
      accessor: (item) => (
        <div className={styles.stockCell}>
          <TextInput
            type='number'
            min={0}
            name={`stock_${item.id}`}
            className={styles.stockInput}
            defaultValue={item.stock}
            required
          />
          <Button variant='outlined' onClick={() => (targetProductId.current = item.id)}>
            <Check />
          </Button>
        </div>
      ),
      width: '145.03px',
    },
  ];

  return (
    <>
      <div className={styles.search}>
        <Search size={32} className={styles.searchIcon} />
        <TextInput name='searchInput' onChange={handleSearchChange} />
      </div>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Table
          columns={columns}
          data={filteredProducts}
          rowStyleCondition={{
            condition: (item) => item.stock <= 5, // 在庫が5以下の場合にスタイルを適用
            className: styles.lowStock, // 低在庫のスタイル
          }}
          isLoading={isLoading}
        />
      </form>
    </>
  );
};
