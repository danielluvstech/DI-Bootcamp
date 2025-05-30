# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

# word = input("Enter a word: ")

# letter_dict = {}

# for index, letter in enumerate(word):
#     if letter in letter_dict:
#         letter_dict[letter].append(index)
#     else:
#         letter_dict[letter] = [index]

# print(letter_dict)

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# def affordable_items(items_purchase, wallet):
#     wallet_amount = int(wallet.replace("$", "").replace(",", ""))
    
#     affordable = []
    
#     for item, price in items_purchase.items():
#         item_price = int(price.replace("$", "").replace(",", ""))
        
#         if item_price <= wallet_amount:
#             affordable.append(item)
#             wallet_amount -= item_price  
    
#     affordable.sort()
    
#     return affordable if affordable else "Nothing"

# items_purchase1 = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet1 = "$300"
# print(affordable_items(items_purchase1, wallet1)) 

# items_purchase2 = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
# wallet2 = "$100"
# print(affordable_items(items_purchase2, wallet2))  

# items_purchase3 = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }
# wallet3 = "$1"
# print(affordable_items(items_purchase3, wallet3))