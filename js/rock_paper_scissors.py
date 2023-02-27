# rock breaks scissors
# scissors cuts paper
# paper covers rock

import random

choices = ["rock", "paper", "scissors"]

comp, play = 0,0

i = 1
while i<=5:
    computer = random.choice(choices)
    # player = input("enter a number")
    player = "rock"
    if computer == player:
        print("tie")

    elif((computer == "rock" and player == "scissors") or (computer == "scissors" and player == "paper") or (computer == "paper" and player == "rock")):
        print(f'you lost')
        comp += 1

    elif((computer == "paper" and player == "scissors") or (computer == "rock" and player == "paper") or (computer == "scissors" and player == "rock")):
        print(f'you won')
        play += 1
        
    i+=1
    
    
print(comp, play)
