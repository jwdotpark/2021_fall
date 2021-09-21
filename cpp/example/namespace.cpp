#include <iostream>

namespace fun
{
  int GetMeaningOfLife() { return 42; }
} // namespace fun

namespace boring
{
  int GetMeaningOfLife() { return 0; }
} // namespace boring

int main()
{
  std::cout << "The answer to everything is not "
            << boring::GetMeaningOfLife() << " but "
            << fun::GetMeaningOfLife() << std::endl;
  return 0;
}