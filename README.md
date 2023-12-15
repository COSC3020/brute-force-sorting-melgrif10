[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13124030&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

For this implementation the first step is sorting the original array which would take time O(nlogn). A best case input for this implementation would be an already sorted array. The algorithm won't have to spend time sorting the array. Since this algorithm uses recursion each call explores all possible permutations by swapping elements. In order to explore all possible permutations we would have to use n! recursive calls. Therefore the best time complexity would be O(n!). The worst case input for the algorithm would be an array sorted in reverse order. First it would have to spend O(nlogn) time sorting the original array. It would have to go through all possible permutations by recursive calls until it finds the sorted one. Therefore the best time complexity would be O(n!) since the time to generate the permutation dominates the time it takes to sort the orginal arra. 

If the prmutations were randomly generated each recursive call would involve random swaps between the elements. Because there is no memory the algorithm could go through the same permutation multiple times leading to redundant work. This version of a brute-force sort would be more inefficient but the time complexity would be O(n!) because all possible permutations have to be considered and the time complexity acts as an upperbound. 