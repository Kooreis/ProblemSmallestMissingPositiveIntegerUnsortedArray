```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int findMissing(std::vector<int>& nums) {
    int n = nums.size();
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            std::swap(nums[i], nums[nums[i] - 1]);
        }
    }
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return n + 1;
}

int main() {
    std::vector<int> nums;
    int n, temp;
    std::cout << "Enter the number of elements: ";
    std::cin >> n;
    std::cout << "Enter the elements: ";
    for (int i = 0; i < n; i++) {
        std::cin >> temp;
        nums.push_back(temp);
    }
    std::cout << "The smallest missing positive integer is: " << findMissing(nums) << std::endl;
    return 0;
}
```