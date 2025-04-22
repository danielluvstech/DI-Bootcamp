# Print all values in the list
list1 = [1, 2, 3, 4]
for num in list1:
    print(num)

# Print all values multiplied by 20
print([num * 20 for num in list1])

# Return a new list with only the first letter of each name
names = ["Elie", "Tim", "Matt"]
first_letters = [name[0] for name in names]
print(first_letters)

# Return a new list with all the even values
even_values = [num for num in [1, 2, 3, 4, 5, 6] if num % 2 == 0]
print(even_values)

# Return a new list with only the values present in both lists
list2 = [1, 2, 3, 4]
list3 = [3, 4, 5, 6]
common_values = [num for num in list2 if num in list3]
print(common_values)

# Return a new list with each word reversed and in lowercase
reversed_words = [word.lower()[::-1] for word in names]
print(reversed_words)

# Return a new list of letters present in both strings
string1 = "first"
string2 = "third"
common_letters = sorted(set(string1) & set(string2))
print(common_letters)

# Return a list of numbers between 1 and 100 that are divisible by 12
divisible_by_12 = [num for num in range(1, 101) if num % 12 == 0]
print(divisible_by_12)

# Return a list with all vowels removed from the string
word = "amazing"
vowels = "aeiou"
no_vowels = [char for char in word if char not in vowels]
print(no_vowels)

# Generate a list with the value [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
nested_list_3 = [[i for i in range(3)] for _ in range(3)]
print(nested_list_3)

# Generate a list with the given structure
nested_list_10 = [[i for i in range(10)] for _ in range(10)]
print(nested_list_10)
