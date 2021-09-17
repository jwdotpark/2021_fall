// guessing game
#include <iostream>
#include <string>
using namespace std;

int random_number = rand() % 100;
// get a random number from 1 to 100

int main()
{
  int user_input;
  cout << "Guess a number between 1 and 100" << endl;
  cin >> user_input;
  while (user_input != random_number)
  {
    if (user_input > random_number)
    {
      cout << "Too high, guess again" << endl;
      cin >> user_input;
    }
    else
    {
      cout << "Too low, guess again" << endl;
      cin >> user_input;
    }
    if (user_input == random_number)
    {
      cout << "You guess the right number, " << user_input;
    }
  }
  return 0;
}
