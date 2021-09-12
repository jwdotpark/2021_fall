#include <iostream>
#include <string>

int main()
{
  std::string test = "test";
  std::cout << "input:" << std::endl;
  std::string placeholder = ""; // init empty
  std::cin >> placeholder;
  std::cout << test + ", " + placeholder + "!" << std::endl;
  return 0; //
}