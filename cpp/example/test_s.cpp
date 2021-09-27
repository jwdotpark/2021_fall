// #include <iostream>
// using namespace std;

// int main() {
//   int x = 10;
//   x++;
//   cout << x << endl;
// }

#include <iostream>
using namespace std;

int main() {
  // your code goes here
  int passengerNum, emptySeat;
  emptySeat = 50 - (passengerNum % 50);

  cout << "Enter the number of the passenger in the bus station: " << endl;
  cin >> passengerNum;

  cout << emptySeat << endl;

  return 0;
}