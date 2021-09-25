#include <iostream>

int main(void) {
  srand(time(NULL));

  for (int i = 1; i <= 10; i++) {
    std::cout << 10 + rand() % 2;
  }
  return 0;
}