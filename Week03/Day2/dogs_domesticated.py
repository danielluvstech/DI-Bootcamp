from exercise import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *other_dogs):
        dog_names = ", ".join([dog.name for dog in other_dogs])
        print(f"{self.name}, {dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet to do any tricks")

# Example usage
pet_dog = PetDog("Charlie", 4, 25)
pet_dog.train()
pet_dog.do_a_trick()

dog1 = PetDog("Butch", 3, 20)
dog2 = PetDog("Marly", 5, 25)
dog3 = PetDog("Sasha", 4, 30)
