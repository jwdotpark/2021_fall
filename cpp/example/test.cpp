#include <iostream>
using namespace std;

int a = 3;
int b = 4;

int Sum(int a, int b)
{
  return a + b;
}


int main()
{
  // std::cout << Sum(1, 2) << endl;
  cout << Sum(a, b) << endl;
}
