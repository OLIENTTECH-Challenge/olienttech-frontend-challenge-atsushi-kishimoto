import styles from './Table.module.css';

export type Column<T extends object> = {
  header: string;
  accessor: (item: T) => React.ReactNode;
  width?: string;
};

type RowStyleCondition<T extends object> = {
  condition: (item: T) => boolean; // 条件を評価する関数
  className: string; // 条件が真の場合に適用するスタイルのクラス名
};

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  onClick?: (item: T) => void;
  rowStyleCondition?: RowStyleCondition<T>;
  isLoading?: boolean;
};

export const Table = <T extends object>({ columns, data, onClick, rowStyleCondition, isLoading }: TableProps<T>) => {

  // SkeletonTable
  if (isLoading) {
    return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {columns.map((column) => (
              <th key={column.header} className={styles.th} style={{ width: column.width }}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Array.from({ length: 20 }, (_, rowIndex) => (
            <tr key={`row-${rowIndex}`} className={styles.tr}>
              {columns.map((_column, colIndex) => (
                <td key={`row-${rowIndex}-col-${colIndex}`} className={`${styles.td} ${styles.skeleton}`}>
                  &nbsp;
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {columns.map((column) => (
            <th key={column.header} className={styles.th}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map((item, i) => {
          const customStyle = rowStyleCondition && rowStyleCondition.condition(item) ? rowStyleCondition.className : '';
          return (
            <tr
              key={`row_${i}`}
              className={`${styles.tr} ${customStyle}`}
              data-is-clickable={onClick ? 'true' : 'false'}
              onClick={() => onClick?.(item)}
            >
              {columns.map((column) => (
                <td key={column.header} className={styles.td}>
                  {column.accessor(item)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
