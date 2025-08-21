// ✅ one-liner with inline `type` modifiers (TS 5+)
import { isUser, isProduct, isOrder, type User, type Product, type Order } from './types';

export function handleData(items: unknown[]): string[] {
  return items.map((item, idx) => {
    if (isUser(item)) {
      return `👤 Hello ${item.name}, age ${item.age}.`;
    }
    if (isProduct(item)) {
      return `🧾 Product #${item.id} costs ${formatCurrency(item.price)}.`;
    }
    if (isOrder(item)) {
      return `🛒 Order ${item.orderId} total: ${formatCurrency(item.amount)}.`;
    }
    const preview = safePreview(item);
    return `⚠️ Unrecognized item at index ${idx}${preview ? `: ${preview}` : ''}`;
  });
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
}

function safePreview(x: unknown): string | null {
  try {
    return typeof x === 'object' ? JSON.stringify(x) : String(x);
  } catch {
    return null;
  }
}