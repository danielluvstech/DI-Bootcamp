# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them

# import math

# class Circle:
#     def __init__(self, radius=None, diameter=None):
#         if radius is not None:
#             self.radius = radius
#         elif diameter is not None:
#             self.radius = diameter / 2
#         else:
#             raise ValueError("Either radius or diameter must be specified")
    
#     @property
#     def diameter(self):
#         return self.radius * 2
    
#     @diameter.setter
#     def diameter(self, value):
#         self.radius = value / 2
    
#     @property
#     def area(self):
#         return math.pi * (self.radius ** 2)
    
#     def __str__(self):
#         return f"Circle with radius: {self.radius}"
    
#     def __repr__(self):
#         return f"Circle({self.radius})"
    
#     def __add__(self, other):
#         if isinstance(other, Circle):
#             return Circle(radius=self.radius + other.radius)
#         return NotImplemented
    
#     def __gt__(self, other):
#         if isinstance(other, Circle):
#             return self.radius > other.radius
#         return NotImplemented
    
#     def __lt__(self, other):
#         if isinstance(other, Circle):
#             return self.radius < other.radius
#         return NotImplemented
    
#     def __eq__(self, other):
#         if isinstance(other, Circle):
#             return self.radius == other.radius
#         return NotImplemented

# circle1 = Circle(radius=5)
# circle2 = Circle(diameter=6)  # Creates a circle with radius 3

# print(circle1)  
# print("Diameter:", circle1.diameter)  
# print("Area:", circle1.area)  

# circle3 = circle1 + circle2
# print(circle3)  

# print(circle1 > circle2)  
# print(circle1 == circle2)  

# circles = [Circle(radius=2), Circle(radius=5), Circle(radius=3)]
# circles.sort()
# print([str(c) for c in circles])  
