// create two box and compare them, print which is bigger.

#include <iostream>
using namespace std;

class Box {
 private:
  double length;
  double breadth;
  double height;

 public:
  Box(double length, double breadth, double height) {
    cout << "Box constructor is called. " << endl;
  }

  int volume() { return length * breadth * height; }

  int compare(Box box) { return this->volume() > box.volume(); }
};

int main() {
  Box box1(1.5, 6.2, 4.1);
  Box box2(1.2, 4.1, 5.8);

  // box is created

  if (box1.compare(box2)) {
    cout << "Box1 is bigger than Box2" << endl;
  } else {
    cout << "Box2 is bigger than Box1" << endl;
  }
}
