#include <iostream>
using namespace std;

int main() {
  int rows = 6;
  int cols = 6;

  float matrix[rows][cols] = {
      {0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0},
      {0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0}, {0, 0, 0, 0, 0, 0},
  };

  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][j] = 1;
      }
      cout << matrix[i][j] << endl;
    };
    cout << endl;
  };

  return 0;
}