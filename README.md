Hopping Jack is standing at the bottom of a long flight of stairs. The bottom of the stairs has number 0, first step has number 1, the next step has number 2, and so on upto infinity

Jack will now perform N consecutive actions. The actions are numbered 1 through N, in that particular order. When performing action X, Jack chooses between two options:

- either he does nothing
- or he hops exactly X steps up the stairs.

In other words, if Jack starts performing action X standing on step Y, he will end it either on step Y, or on step Y + X.

For example, if N = 3, Jack will make three consecutive choices: whether or not to hop 1 step upwards, 2 steps upwards, and then 3 steps upwards.

One of the steps is broken. The number of this step is K. Jack cannot hop onto this step. 
You are given the integers N and K. Compute and print the number of the topmost step that can be reached by Jack provided that Jack starts from the bottom of the stairs at step 0?

**Input Format**
First line of input contains the integer N. 
Second line of input contains the integer K.

**Output Format**
Output the result corresponding to the testcase.

**Constraints**
1 ≤ N ≤ 2000
1 ≤ K ≤ 4 x 10⁶

**Sample Input#00**
2
2

**Sample Output**
3

The optimal strategy is to hop upwards twice: from step 0 to step 1, and then from step 1 to step 3. This trajectory avoids the broken step.

**Sample Input#01**
2
1

**Sample Output**
2

In this case step 1 is broken, so Jack cannot hop upwards as his first action. The optimal strategy is to first stay on step 0, and then to hop from step 0 to step 2.

Problem source: [Hackerrank](https://www.hackerrank.com/contests/juniper-hackathon/challenges/hopping-jack)