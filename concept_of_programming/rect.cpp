#include <iostream>
using namespace std;

class Rectangle {
private:
  int w, h;

public:
  void size(int length, int height) {
    w = length;
    h = height;
  }
  int area() { return w * h; }
};
int main() {
  Rectangle r1, r2;
  r1.size(2, 3);
  r2.size(4, 5);
  cout << "Area of r1: " << r1.area() << endl;
  cout << "Area of r2: " << r2.area() << endl;
}