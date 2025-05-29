import random

class Card:  
    def __init__(self, suit, val):
        self.suit = suit
        self.val = val

    def __repr__(self):
        return f"{self.val} of {self.suit}"

class Deck:
    def __init__(self):
        self.suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [Card(suit, val) for suit in self.suits for val in self.values]
        self.shuffle()

    def shuffle(self):
        self.cards = [Card(suit, val) for suit in self.suits for val in self.values]
        random.shuffle(self.cards)

    def deal_card(self):
        return self.cards.pop() if self.cards else None

deck = Deck()
print(deck.deal_card())  



 