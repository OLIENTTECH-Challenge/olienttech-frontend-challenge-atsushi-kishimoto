import styles from './Table.module.css';

export type Column<T extends object> = {
  header: string;
  accessor: (item: T) => React.ReactNode;
};

type RowStyleCondition<T extends object>= {
  condition: (item: T) => boolean; // 条件を評価する関数
  className: string; // 条件が真の場合に適用するスタイルのクラス名
};

type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  onClick?: (item: T) => void;
  rowStyleCondition?: RowStyleCondition<T>;
};

export const Table = <T extends object>({ columns, data, onClick, rowStyleCondition }: TableProps<T>) => {
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
