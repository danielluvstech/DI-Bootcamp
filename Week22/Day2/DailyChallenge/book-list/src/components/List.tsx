import React from "react";

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => React.Key;
  emptyState?: React.ReactNode;
  className?: string;
};

export function List<T>({
  items,
  renderItem,
  getKey,
  emptyState = <p>No items yet.</p>,
  className,
}: ListProps<T>) {
  if (!items.length) return <div className={className}>{emptyState}</div>;

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}