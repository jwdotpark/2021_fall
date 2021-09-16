#include <iostream>
using namespace std;

int Sum(int a, int b); // declaration


// shows main function first
int main()
{
  cout << Sum(1, 2) << endl;
  return 0;
}

// shows impelemtation detail later
int Sum(int a, int b)
{
  return a + b;
}
