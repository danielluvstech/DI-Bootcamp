# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

import random

user_input = input("Please enter a string (must be 10 characters long): ")

if len(user_input) < 10:
    print("String not long enough")
elif len(user_input) > 10:
    print("String too long")
else:
    print("Perfect string!")

# Then, print the first and last characters of the given text.

    print(user_input[0])
    print(user_input[-1])

     # Construct the string character by character
    for i in range(1, len(user_input) + 1):
        print(user_input[:i])

    # Shuffle the string
    char_list = list(user_input)  # Convert string to list
    random.shuffle(char_list)     # Shuffle the list
    jumbled_string = "".join(char_list)  # Convert back to string

    print("Jumbled string:", jumbled_string)