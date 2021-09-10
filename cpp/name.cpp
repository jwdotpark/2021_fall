#include <iostream>
#include <string>

int main()
{
  std::string hello = "hello";
  std::cout << "Type your name:" << std::endl;
  std::string name = ""; // init empty
  std::cin >> name;
  std::cout << hello + ", " + name + "!" << std::endl;
  return 0; //
}