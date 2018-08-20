Hopping Jack is standing at the bottom of a long flight of stairs. The bottom of the stairs has number , first step has number , the next step has number , and so on upto infinity

Jack will now perform  consecutive actions. The actions are numbered  through , in that particular order. When performing action , Jack chooses between two options:

either he does nothing
or he hops exactly X steps up the stairs.
In other words, if Jack starts performing action  standing on step , he will end it either on step , or on step .

For example, if , Jack will make three consecutive choices: whether or not to hop  step upwards, steps upwards, and then  steps upwards.

One of the steps is broken. The number of this step is . Jack cannot hop onto this step. 
You are given the integers  and . Compute and print the number of the topmost step that can be reached by Jack provided that Jack starts from the bottom of the stairs at step 0?

**Input Format**
First line of input contains the integer . 
Second line of input contains the integer 

**Output Format**
Output the result corresponding to the testcase.

**Constraints**
 

**Sample Input#00**

2
2
**Sample Output**

3

The optimal strategy is to hop upwards twice: from step  to step , and then from step 1 to step 3. This trajectory avoids the broken step.

**Sample Input#01**

2
1
**Sample Output**

2

In this case step  is broken, so Jack cannot hop upwards as his first action. The optimal strategy is to first stay on step , and then to hop from step  to step .