#include <iostream>
#include <string>

class Person {
 private:
  std::string name;

 public:
  Person(std::string name) : name(name){};
  std::string getName() { return name; };
};

class Student : Person {
 private:
  int student_id;

 public:
  Student(int student_id, std::string name) : Person(name) {
    this->student_id = student_id;
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
