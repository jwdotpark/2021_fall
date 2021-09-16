#include <iostream>
using namespace std;

int Sum(int a, int b = 10);

int Sum(int a, int b) { return a + b; }

int main() {
  const int blah = 1;
  int a = Sum(blah);
  cout << blah << endl;
  cout << a << endl;
  return 0;
}

