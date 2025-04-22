from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nRestaurant Menu Manager")
        print("Choose an option:")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(X) Exit")

        selection = input("Enter your choice: ").strip().upper()

        if selection == 'V':
            view_item()
        elif selection == 'A':
            add_item_to_menu()
        elif selection == 'D':
            remove_item_from_menu()
        elif selection == 'U':
            update_item_from_menu()
        elif selection == 'S':
            show_restaurant_menu()
        elif selection == 'X':
            print("Exit - Final menu:")
            show_restaurant_menu()
            break
        else:
            print("Please try again.")

def add_item_to_menu():
    name = input("Name of the item: ").strip()
    try:
        price = int(input("Price of the item: "))
        item = MenuItem(name, price)
        item.save()
        print(f"'{name}' has been added successfully.")
    except ValueError:
        print("Price must be a number.")

def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print(f"'{name}' was deleted successfully.")
    else:
        print("Item not found. Cannot be deleted.")

def update_item_from_menu():
    current_name = input("Current name of the item: ").strip()
    item = MenuManager.get_by_name(current_name)
    if item:
        new_name = input("New name: ").strip()
        try:
            new_price = int(input("New price: "))
            item.update(new_name, new_price)
            print("Item has been updated successfully.")
        except ValueError:
            print("Price must be a number.")
    else:
        print("Item not found. Cannot be updated.")

def view_item():
    name = input("Item to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item found: {item.name.capitalize()} - ${item.price}")
    else:
        print("Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\nRestaurant Menu")
    if not items:
        print("Nothing to display.")
    else:
        for item in items:
            print(f"{item.name.capitalize()} - ${item.price}")

if __name__ == "__main__":
    show_user_menu()