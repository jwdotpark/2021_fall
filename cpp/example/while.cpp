#include <iostream>
#include <vector>
#include <string>

int main(int argc, char const *argv[])
{
  // const int kInterCount = 10;
  std::vector<int> vec = {1, 2, 3, 4};

  for (int num : vec)
  {
    if (num % 2 == 0)
    {
      continue;
    }
    std::cout << num << std::endl;
  }
}

/*
1
3
*/