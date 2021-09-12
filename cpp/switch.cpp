#include <iostream>
#include <vector>

int main()
{
  int num = 1;
  switch (num)
  {
  case 1:
    std::cout << "one" << std::endl;
    break;
  case 2:
    std::cout << "two" << std::endl;
    break;
  default:
    std::cout << "you're doing it wrong" << std::endl;
  }
  return 0;
}