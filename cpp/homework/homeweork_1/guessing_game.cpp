// guessing game
#include <iostream>
// #include <string>
using namespace std;

int main()

{
  srand(time(NULL));
  int random_number = rand() % 100;
  // get a random number from 1 to 100

  int user_input;

  cout << "Guess a number between 1 and 100" << endl;
  cin >> user_input;

  while (true)
  {
    if (user_input > random_number)
    {
      cout << "Too high, guess again" << endl;
      cin >> user_input;
    }
    else if (user_input < random_number)
    {
      cout << "Too low, guess again" << endl;
      cin >> user_input;
    }
    else if (user_input == random_number)
    {
      cout << "You guess the right number, " << user_input;
      break;
    }
  }
  // return 0;
}
