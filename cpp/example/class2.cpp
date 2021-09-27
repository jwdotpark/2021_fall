#include <iostream>

using std::cout;
using std::endl;

class Blah {
 public:
  void SomeFunc() { cout << "non const" << endl; }
  void SomeFunc() const { cout << "const" << endl; }
};

int main() {
  Blah someVar;

  // same signature but calling non const func
  someVar.SomeFunc();

  // make ref and use const func
  const Blah& someFunc_ref = someVar;
  someFunc_ref.SomeFunc();

  return 0;
}