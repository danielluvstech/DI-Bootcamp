class Text:
    def __init__(self, text):
        self.text = text
        
        word_list = text.split()
        clean_words = []
        
        for w in word_list:
            w = w.lower()
            w = w.replace('.', '')
            w = w.replace(',', '')
            w = w.replace('!', '')
            w = w.replace('?', '')
            w = w.replace('"', '')
            w = w.replace(':', '')
            w = w.replace(';', '')
            clean_words.append(w)
        
        self.words = clean_words
    
    def word_frequency(self, word):
        word = word.lower()
        count = 0
        for w in self.words:
            if w == word:
                count += 1
        
        if count == 0:
            return f"The word '{word}' was not found in the text."
        return count
    
    def most_common_word(self):
        if len(self.words) == 0:
            return "The text is empty."
        
        frequencies = {}
        for word in self.words:
            if word in frequencies:
                frequencies[word] += 1
            else:
                frequencies[word] = 1
        
        max_count = 0
        max_word = ""
        for word, count in frequencies.items():
            if count > max_count:
                max_count = count
                max_word = word
        
        return max_word
    
    def unique_words(self):
        unique = []
        for word in self.words:
            if word not in unique:
                unique.append(word)
        return unique
    
    @classmethod
    def from_file(cls, file_path):
        try:
            file = open(file_path, 'r', encoding='utf-8')
            content = file.read()
            file.close()
            return cls(content)
        except:
            print(f"Could not open file: {file_path}")
            return None

print("Test Part 1:")
example_text = Text("A good book would sometimes cost as much as a good house.")
print("Frequency of 'good':", example_text.word_frequency("good"))
print("Most common word:", example_text.most_common_word())
print("Unique words:", example_text.unique_words())

if __name__ == "__main__":
    print("\nTest Part 2:")
    file_text = Text.from_file("the_stranger.txt")
    
    if not file_text:
        print("Trying to run absolute path...")
        path = r"C:\Users\danie\OneDrive\Documents\DI-Bootcamp-Stage1-20250316T115215Z-001\DI-Bootcamp-Stage1\Week3\Day5\dailychallenge\the_stranger.txt"
        file_text = Text.from_file(path)
    
    if file_text:
        print("File loaded successfully!")
        print("Unique words count:", len(file_text.unique_words()))
        print("Most frequent word:", file_text.most_common_word())
        print("Occurrences of 'stranger':", file_text.word_frequency("stranger"))
    else:
        print("Failed to load the file.")