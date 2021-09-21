#include <cmath>
#include <iostream>

using namespace std; // std namespace is used
// self-defined function power shadows std::pow

double pow(double x, int exp)
{
  double res = 1.0;
  for (int i = 0; i < exp; i++)
  {
    res *= x;
  }
  return (res);
}

int main()
{
  double x = 2.0;
  int power = 2;
  double res = pow(x, power);
  cout << x << " ^ " << power << " = " << res << endl;
  return 0;
}