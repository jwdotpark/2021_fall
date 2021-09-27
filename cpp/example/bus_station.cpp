#include <iostream>
using namespace std;

int main() {
  // your code goes here
  int passengerNum, emptySeat;
  
  cin >> passengerNum;
  emptySeat = 50 - (passengerNum % 50);
  cout << emptySeat << endl;
  return 0;
}