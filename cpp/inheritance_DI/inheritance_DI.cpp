/*
inheritance is a process in which one object acquires all the properties and
behaviors of its parent object automatically
*/

#include <iostream>
#include <string>
// using namespace std;

// parent class
class Person {
 private:
 // access modifiers, help us implement encapsulation - there is private/public and protected
 // https://stackoverflow.com/questions/1020749/what-are-public-private-and-protected-in-object-oriented-programming
  std::string name;

 public:
  Person(std::string name) : name(name){};
  std::string getName() { return name; };
};

// child class
class Student : Person {
 private:
  int student_id;

 public:
  Student(int student_id, std::string name) : Person(name) {
    this->student_id = student_id;
    // NOTE ?? The 'this' pointer is used to retrieve the object's x
    // hidden by the local variable 'x'
  }
  void show() {
    std::cout << "Student ID: " << student_id << std::endl;
    std::cout << "Name: " << getName() << std::endl;
  }
};

int main() {
  Student student1(1234, "Jongwoo Park");
  student1.show();
  return 0;
}
