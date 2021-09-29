#include <iostream>
#include <string>

using namespace std;  // don't do this later

class Printer {
 private:
  std::string some_str;

 public:
  void Print(const string& str) {
    cout << "lvalue: " << str << endl;
    // some_str = str;
  }

  /*
  1. void function Print accepts const reference "str" string as lvalue
  2. the function prints out the string "lvalue: " and the string "str"
  */
  void Print(string&& str) {
    cout << "ravlue: " << str << endl;
    some_str = str;
  }
  /*
  1. void function Print accepts string __rvalue__ "str" because of && operator
  2. the function prints out the string "rvalue: " and the string "str" as
  rvalue
  */
};

int main() {
  string hello = "hi";
  Printer printer;
  printer.Print(hello);
  printer.Print("hello");
  printer.Print(std::move(hello));
  // DO NOT access "hello" after move!
  // now str hello is rvalue
  cout << "after move: " << hello << endl;  
  // hello is now undefined *depend on cocmpiler
  return 0;
}

