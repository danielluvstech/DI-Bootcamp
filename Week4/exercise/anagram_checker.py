import os

class AnagramChecker:
    def __init__(self, words_list="Week4\exercise\words_list.txt"):
        self.words_list = words_list

        if not os.path.exists(self.words_list):
            raise FileNotFoundError(f"Error: '{self.words_list}' not found. Please provide a valid word list file.")

        with open(self.words_list, "r") as file:
            self.words = set(word.strip().lower() for word in file if word.strip())

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w) and w != word]

    def is_anagram(self, first_word, second_word):
        return sorted(first_word) == sorted(second_word)
