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
  const Blah &someFunc_ref = someVar;
  someFunc_ref.SomeFunc();

  // can call exactly same name function
  // but one is const and one is not

  return 0;
}