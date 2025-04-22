# <!-- Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers. -->

# my_fav_numbers = {10, 13, 28}

# my_fav_numbers.add(16)
# my_fav_numbers.add(24)

# my_fav_numbers.remove(24)

# friends_fav_numbers = {4, 8, 12}

# our_fav_numbers = my_fav_numbers.union(friends_fav_numbers)

# print("Here are my favourite numbers:", my_fav_numbers)
# print("Here is my friend's favourite numbers:", friends_fav_numbers)
# print("Here is our favourite numbers:", our_fav_numbers)

# Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

# nums = (2, 4, 6, 8)
# nums.add(19)

# AttributeError: 'tuple' object has no attribute 'add'

# Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# basket.remove("Blueberries")

# basket.append("Kiwi")
# basket.insert(0, "Apples")

# count_apples = basket.count("Apples")
# print("The ammount of apples in the basket is:", count_apples)

# basket.clear
# print(basket)

# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence of floats and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

# float_sequence = [x * 2.5 + 1 for x in range(10)]

# print(float_sequence)

# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for num in range(1, 21):
#     print(num)

# numbers = list(range(1, 21))
# for index, num in enumerate(numbers):
#     if index % 2 == 0: 
#         print(num)

# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# my_name = "Daniel"
# while True:
#     user_input = input("Please enter your name: ")
#     if user_input == my_name:
#         print("Yes! Hello Daniel.")
#         break 

# Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# favorite_fruits = input("Put in your favorite fruits (add spaces): ").split()
# chosen_fruit = input("Enter the name of a fruit: ")
# if chosen_fruit in favorite_fruits:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy!")

# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# regular_price = 10
# topping_price = 2.5
# toppings = []

# while True:
#     topping = input("Enter your pizza topping ( type 'quit' to finish your order): ").strip().lower()
    
#     if topping == "quit":
#         break 
    
#     toppings.append(topping)
#     print(f"Adding {topping} to your pizza!")

# total = regular_price + (len(toppings) * topping_price)
# print("\nYour pizza includes the following toppings:")
# print(", ".join(toppings) if toppings else "No extra toppings")
# print(f"Total price: ${total:.2f}")

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# 1: Calculating total ticket cost for a family

# total_cost = 0

# while True:
#     age = input("Enter the age of the family member (type 'done' to finish): ").strip()
    
#     if age.lower() == "done":
#         break  
    
#     age = int(age) 

#     if age < 3:
#         ticket_price = 0
#     elif 3 <= age <= 12:
#         ticket_price = 10
#     else:
#         ticket_price = 15
    
#     total_cost += ticket_price

# print(f"\nTotal cost for the family: ${total_cost}\n")

# 2: Restricting teenagers (16-21) from watching a movie

# teenagers = ["Billy", "George", "Shlomo", "David", "Adam"] 

# allowed_teens = []  

# for teen in teenagers:
#     age = int(input(f"Enter {teen}'s age: "))

#     if 16 <= age <= 21:
#         print(f"Sorry, {teen}, you are not allowed to watch this movie.")
#     else:
#         allowed_teens.append(teen) 

# print("\nTeenagers allowed to watch the movie:", allowed_teens)

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")

#     finished_sandwiches = []

# while sandwich_orders:
#     current_sandwich = sandwich_orders.pop(0)
#     finished_sandwiches.append(current_sandwich)

# for sandwich in finished_sandwiches:
#     print(f"I made your {sandwich.lower()}")