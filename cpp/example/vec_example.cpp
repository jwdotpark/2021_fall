#include <string>
#include <vector>
#include <iostream>
using namespace std;
int main()
{
  const int num = 10;
  vector<int> numbers = {10, 11, 12};
  vector<string> names = {"okja", "jongwoo"};

  // var init

  cout << "Size: " << names.size() << endl;
  // size of names string
  cout << "Last name: " << names.back() << endl;
  // get first element
  cout << "First number: " << numbers.front() << endl;
  cout << "Unchangable number: " << num << endl;
  // get last element
  names.push_back("park");
  // add element to the end
  return 0;
}
