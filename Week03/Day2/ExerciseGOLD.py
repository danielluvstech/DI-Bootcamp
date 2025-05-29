import random
import time
import os

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = [[0 for _ in range(cols)] for _ in range(rows)]
        if initial_state:
            self.load_initial_state(initial_state)
        else:
            self.random_initial_state()
    
    def random_initial_state(self):
        for i in range(self.rows):
            for j in range(self.cols):
                self.grid[i][j] = random.choice([0, 1])
    
    def load_initial_state(self, state):
        for i in range(len(state)):
            for j in range(len(state[i])):
                self.grid[i][j] = state[i][j]

    def display_grid(self):
        os.system('cls' if os.name == 'nt' else 'clear')  # Clear terminal for better visualization
        for row in self.grid:
            print(" ".join("#" if cell else "." for cell in row))
        print()
    
    def count_neighbors(self, x, y):
        directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
        count = 0
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < self.rows and 0 <= ny < self.cols:
                count += self.grid[nx][ny]
        return count
    
    def next_generation(self):
        new_grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        for i in range(self.rows):
            for j in range(self.cols):
                live_neighbors = self.count_neighbors(i, j)
                if self.grid[i][j] == 1:
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[i][j] = 0
                    else:
                        new_grid[i][j] = 1
                else:
                    if live_neighbors == 3:
                        new_grid[i][j] = 1
        self.grid = new_grid
    
    def run(self, generations=10, delay=0.5):
        for _ in range(generations):
            self.display_grid()
            self.next_generation()
            time.sleep(delay)

# Example initial state (Glider)
glider = [
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 1]
]

game = GameOfLife(10, 10, glider)
game.run(20)
