import psycopg2
from menu_item import get_connection

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT item_name, item_price FROM Menu_Items WHERE LOWER(item_name) = LOWER(%s)", (name,))
        item = cursor.fetchone()
        cursor.close()
        conn.close()
        if item:
            from menu_item import MenuItem
            return MenuItem(item[0], item[1])
        return None
    
    @classmethod
    def all_items(cls):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT item_name, item_price FROM Menu_Items")
        items = cursor.fetchall()
        cursor.close()
        conn.close()
        from menu_item import MenuItem
        return [MenuItem(name, price) for name, price in items]