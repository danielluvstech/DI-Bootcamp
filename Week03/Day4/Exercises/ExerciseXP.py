# # Exercise 1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount
    
#     def __str__(self):
#         return f"{self.amount} {self.currency + ('s' if self.amount != 1 else '')}"
    
#     def __repr__(self):
#         return str(self)
    
#     def __int__(self):
#         return self.amount
    
#     def __add__(self, other):
#         if isinstance(other, int):
#             return self.amount + other
#         elif isinstance(other, Currency):
#             if self.currency == other.currency:
#                 return self.amount + other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         else:
#             return NotImplemented
    
#     def __iadd__(self, other):
#         if isinstance(other, int):
#             self.amount += other
#         elif isinstance(other, Currency):
#             if self.currency == other.currency:
#                 self.amount += other.amount
#             else:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#         else:
#             return NotImplemented
#         return self
    
# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))  
# print(int(c1))  
# print(repr(c1)) 
# print(c1 + 5)   
# print(c1 + c2)  
# print(c1)       
# c1 += 5         
# print(c1)       
# c1 += c2        
# print(c1)       
# print(c1 + c3)  #raises TypeError

# exercise 2
# from func import add_numbers

# add_numbers(12, 7)

# import random

# def generate_random_string():
#     uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
#     lowercase_letters = "abcdefghijklmnopqrstuvwxyz"
#     all_letters = uppercase_letters + lowercase_letters  # Combine both
    
#     random_string = ''.join(random.choices(all_letters, k=5))  # Pick 5 random letters
#     return random_string

# print(generate_random_string())

# exercise 4

# import datetime

# def today_date():
#     current_date = datetime.date.today()  # Gets the current date
#     print("Today's date is:", current_date)

# today_date()

#exercise 5

# from datetime import datetime, date

# def time_to_new_year():
    
#     now = datetime.now()
    
#     if now.month == 1 and now.day == 1:
#         next_new_year = datetime(now.year, 1, 1)
#     else:
#         next_new_year = datetime(now.year + 1, 1, 1)
    
#     time_difference = next_new_year - now
    
#     days = time_difference.days
#     seconds = time_difference.seconds
    
#     hours = seconds // 3600
#     seconds %= 3600
    
#     minutes = seconds // 60
#     seconds %= 60
    
#     return f"The 1st of January is in {days} days and {hours:02d}:{minutes:02d}:{seconds:02d} hours"

# print(time_to_new_year())

#exercise 6

# from datetime import datetime

# def minutes_calculator(birthdate):
#     try:
#         birth_date = datetime.strptime(birthdate, '%d-%m-%Y')
        
#         current_date = datetime.now()
        
#         life_duration = current_date - birth_date
        
#         life_minutes = int(life_duration.total_seconds() / 60)
        
#         print(f"You have lived approximately {life_minutes:,} minutes!")
        
#         return life_minutes
    
#     except ValueError:
#         print("Invalid date format. Please use DD-MM-YYYY format.")
#         return None

# if __name__ == "__main__":
#     minutes_calculator('12-11-1993')

#exercise 7

# from faker import Faker

# users = []

# def fake_user():
#     fake = Faker()
    
#     user = {
#         "name": fake.name(),
#         "address": fake.address().replace('\n', ', '),
#         "language_code": fake.language_code()
#     }
    
#     users.append(user)
#     return user

# if __name__ == "__main__":
#     for _ in range(5):
#         fake_user()
    
#     for user in users:
#         print(user)