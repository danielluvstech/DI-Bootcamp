data = [("name", "Elie"), ("job", "Instructor")]
dict1 = dict(data)
print(dict1)

keys = ["CA", "NJ", "RI"]
values = ["California", "New Jersey", "Rhode Island"]
dict2 = dict(zip(keys, values))
print(dict2)

vowels = ['a', 'e', 'i', 'o', 'u']
dict3 = {vowel: 0 for vowel in vowels}
print(dict3)

letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
dict4 = {i + 1: letters[i] for i in range(len(letters))}
print(dict4)