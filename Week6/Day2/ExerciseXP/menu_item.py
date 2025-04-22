import psycopg2

DB_NAME = "restaurant_menu_manager"
DB_USER = "postgres"
DB_PASSWORD = "D@nth3man"
DB_HOST = "localhost"

def get_connection():
    return psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST)

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name.lower(), self.price))
        conn.commit()
        cursor.close()
        conn.close()

    def delete(self):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name.lower(),))
        conn.commit()
        cursor.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
                       (new_name.lower(), new_price, self.name.lower()))
        conn.commit()
        cursor.close()
        conn.close()
        self.name = new_name.lower()
        self.price = new_price