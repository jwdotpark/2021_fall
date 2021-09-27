## A. Using the terminal

1. Count how many lines are there in “data.dat”.

- `wc -l data.dat`
- 175

2. Count how many lines of those contain “dolor” or “dalor”?

- `grep -E 'dolor|dalor` data.dat | wc -l`
- 106

3. Count how many words are there in “data.dat”?

- `wc -w data.dat`
- 1904

4. Count how many of those start with “mol”

- `grep -E '^mol*' data.dat | wc -l`
- 1

5. Count how many files in “test folder” are “.txt” files?

- `ls test_folder/*.txt | wc -l`
- 101

## B. First c++ program

- In this exercise you will write a small “guessing” game. The program will pick a random number from 0 to 99 and you will be guessing this number by providing your guess through stdin. Depending on which number you have guessed there are 3 outcomes:

  - You have guessed the number. Then the program has to tell you that you have won.
  - Your number if larger than the target one. The program should tell you that it’s number is smaller.
  - Your number is smaller than the target one. The program should tell you that its number is large.

- The game goes on until you have guessed the number.
- save it as `guessing_game.cpp`
- https://en.cppreference.com/w/cpp/numeric/random/rand
