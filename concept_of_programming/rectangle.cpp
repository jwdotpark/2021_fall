#include <iostream>
using namespace std;

class Rectangle {
 private:
  int w;
  int h;

 public:
  int square(int w, int h) { return w * h; };
};

int main() {
  Rectangle rect1(5, 4);
  cout << rect1 << endl;
  // cout << square(rec1) << endl;
}