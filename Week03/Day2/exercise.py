# Exercise 1: Cats

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# Create another cat breed named Siamese which inherits from the Cat class.
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# bengal_cat = Bengal("Scar", 3)
# chartreux_cat = Chartreux("Shoko", 2)
# siamese_cat = Siamese("Squint", 4)

# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.   
# all_cats = [bengal_cat, chartreux_cat, siamese_cat]

# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# sara_pets = Pets(all_cats)

# # Go for a walk
# sara_pets.walk()

# Exercise 2: Dogs

# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         return f"{self.name} is barking"

#     def run_speed(self):
#         return (self.weight / self.age) * 10

#     def fight(self, other_dog):
#         self_power = self.run_speed() * self.weight
#         other_power = other_dog.run_speed() * other_dog.weight
        
#         if self_power > other_power:
#             return f"{self.name} wins the fight against {other_dog.name}!"
#         elif self_power < other_power:
#             return f"{other_dog.name} wins the fight against {self.name}!"
#         else:
#             return f"It's a tie between {self.name} and {other_dog.name}!"

# dog1 = Dog("Butch", 3, 20)
# dog2 = Dog("Marly", 5, 25)
# dog3 = Dog("Sasha", 4, 30)

# print(dog1.bark())
# print(dog2.bark())
# print(dog3.bark())

# print(f"{dog1.name}'s running speed: {dog1.run_speed()}")
# print(f"{dog2.name}'s running speed: {dog2.run_speed()}")
# print(f"{dog3.name}'s running speed: {dog3.run_speed()}")

# print(dog1.fight(dog2))
# print(dog2.fight(dog3))
# print(dog1.fight(dog3))

# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

# class Family:
#     def __init__(self, last_name, members=None):
#         self.last_name = last_name
#         self.members = members if members else []

#     def born(self, **kwargs):
#         self.members.append(kwargs)
#         print(f"Congratulations! A new child, {kwargs['name']}, has been born into the {self.last_name} family.")

#     def is_18(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 return member['age'] >= 18
#         return False

#     def family_presentation(self):
#         print(f"The {self.last_name} Family:")
#         for member in self.members:
#             print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

# my_family = Family("Lewin", [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
# ])

# my_family.family_presentation()
# my_family.born(name="Emma", age=0, gender="Female", is_child=True)
# print("Is Michael over 18?", my_family.is_18("Michael"))
# print("Is Emma over 18?", my_family.is_18("Emma"))
# my_family.family_presentation()

# # Exercise 5

# class TheIncredibles(Family):
#     def use_power(self, name):
#         for member in self.members:
#             if member['name'] == name:
#                 if member['age'] >= 18:
#                     print(f"{member['name']}'s power is {member['power']}")
#                 else:
#                     raise Exception(f"{member['name']} is not over 18 years old and cannot use their power!")
    
#     def incredible_presentation(self):
#         print("*Here is our powerful family **")
#         super().family_presentation()
#         for member in self.members:
#             print(f"Incredible Name: {member['incredible_name']}, Power: {member['power']}")

# incredible_family = TheIncredibles("Incredibles", [
#     {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
#     {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
# ])

# incredible_family.incredible_presentation()

# incredible_family.born(name="Baby Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="JackJack")

# incredible_family.incredible_presentation()


