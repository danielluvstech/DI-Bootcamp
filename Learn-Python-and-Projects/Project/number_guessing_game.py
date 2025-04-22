import random

def number_guessing_game():
    random_number = random.randint(1, 100)
    max_attempts = 7
    print("Welcome to 'Guess the number' game!!")
    print(f"You only get {max_attempts} chances to guess which number is correct.")

    for attempt in range(1, max_attempts +1):
        try:
            guess = int(input(f"Attempt {attempt}: Guess the number between 1 and 100: "))
        except ValueError:
            print("Invalid. Please enter a number.")
            continue
        
        if guess < 1 or guess > 100:
            print("Not in range. Please guess a number between 1 and 100.")
            continue
        
        if guess < random_number:
            print("Too low!")
        elif guess > random_number:
            print("Too high!")
        else:
            print(f"Congratulations! You guessed the correct number {random_number} in {attempt} attempts.")
            return
    
    print(f"Sorry, you've used all {max_attempts} attempts. The correct number was {random_number}.")

if __name__ == "__main__":
    number_guessing_game()