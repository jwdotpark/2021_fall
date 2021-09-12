#include <string>
#include <vector>
#include <iostream>
using namespace std;
int main()
{
  vector<int> numbers = {1, 2, 3};
  vector<string> names = {"Igor", "Cyrill"};
  // init variable
  names.push_back("another_string");
  // add element to the end
  cout << "First name: " << names.front() << endl;
  // get first element
  cout << "Last number: " << numbers.back() << endl;
  // get last element
  return 0;
}
