# Exercise 1

# import random
# import os

# def get_words_from_file():
#     # Explicitly set the full path to where words.txt should be
#     file_path = r"C:\Users\danie\OneDrive\Documents\DI-Bootcamp-Stage1-20250316T115215Z-001\DI-Bootcamp-Stage1\Week3\Day5\words.txt"
    
#     print(f"Current working directory: {os.getcwd()}")
#     print(f"Looking for file at: {file_path}")
    
#     if not os.path.exists(file_path):
#         print(f"Error: 'words.txt' not found at the specified path")
#         return []
    
#     if not os.access(file_path, os.R_OK):
#         print(f"Error: No read permission for 'words.txt'")
#         return []
    
#     try:
#         with open(file_path, 'r') as file:
#             content = file.read().strip()
#             if not content:
#                 print("Error: 'words.txt' is empty")
#                 return []
#             words = content.split()
#             print(f"Successfully read {len(words)} words from file")
#             return words
#     except Exception as e:
#         print(f"Error reading file: {str(e)}")
#         return []

# def get_random_sentence(length):
#     words_list = get_words_from_file()
#     if not words_list:
#         return ""
#     random_words = random.sample(words_list, length)
#     sentence = " ".join(random_words).lower()
#     return sentence

# def main():
#     print("Random Sentence Generator!")
#     print("This generates a random sentence using words from a file.")
    
#     try:
#         length = int(input("How long should the sentence be (2-20 words)? "))
#         if length < 2 or length > 20:
#             print("Error: Please enter a number between 2 and 20.")
#             return
        
#         sentence = get_random_sentence(length)
#         if sentence:
#             print(f"Random sentence: {sentence}")
#         else:
#             print("Failed to generate sentence...")
            
#     except ValueError:
#         print("Error: Please enter a valid integer.")

# if __name__ == "__main__":
#     main()

# Exercise 2

import json

with open("DI-Bootcamp-Stage1\Week3\Day5\sample_data.json", "r") as file:
    data = json.load(file)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)

birth_date = input("Enter birth date (YYYY-MM-DD): ") or "1990-01-01"
data["company"]["employee"]["birth_date"] = birth_date

with open("updated_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Updated JSON saved to 'updated_data.json'")




