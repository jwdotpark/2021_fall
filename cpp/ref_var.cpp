#include <iostream>
#include <vector>

int main(int argc, char const *argv[])
{
  int num = 1;
  int &num_ref = num;
  std::cout << num << " ref: " << num_ref << std::endl;
  num = 2;
  std::cout << num << " ref: " << num_ref << std::endl;
  num_ref = 3;
  std::cout << num << " ref: " << num_ref << std::endl;
  return 0;
}

