from anagram_checker import AnagramChecker

def get_valid_word():
    while True:
        user_input = input("Enter a single word: ").strip()
        if " " in user_input:
            print("Please enter only a single word.")
        elif not user_input.isalpha():
            print("Only alphabetic characters are allowed.")
        else:
            return user_input.lower()

def main():
    checker = AnagramChecker()
    while True:
        choice = input("\nAnagram Checker\n1. Input a word\n2. Exit\nChoose an option: ").strip()
        if choice == "2":
            print("See you later!")
            break
        elif choice == "1":
            word = get_valid_word()
            print(word)
            if not checker.is_valid_word(word):
                print(f"'{word}' is not in the word list.")
                continue
            anagrams = checker.get_anagrams(word)
            print(f"\nYour word : \"{word.upper()}\"\nThis word is found in the word list.\nAnagrams from the list: {', '.join(anagrams) if anagrams else 'None found'}")
        else:
            print("Please select 1 or 2.")

if __name__ == "__main__":
    main()
