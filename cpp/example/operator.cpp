#include <algorithm>
#include <vector>

using namespace std;

class Human {
 private:
  int kindness_ = 100;

 public:
  Human(int kindness) : kindness_{kindness} {}
  bool operator<(const Human& other) const {
    return kindness_ < other.kindness_;
  }
};

int main() {
  vector<Human> humans = {Human{0}, Human{10}};
  std::sort(humans.begin(), humans.end());
  return 0;
}