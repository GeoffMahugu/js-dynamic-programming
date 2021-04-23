### Dynamic Programming in JavaScript

This project contains examples of how to do Dynamic programming and can be used as a quick reference tool for interview prep questions.

#### Tabulation Strategy
This method gives you the most efficient strategy without optimization and these are the steps you follow to implement the strategy.

i) Visualize the problem as a Table

[0,1,2,3,4,5,6,7,8,9,10] - Indexes
[0,1,1,2,3,5,8,13,21,34] - Fib values

ii) Adjust table size based on input.

You will be given a value of length of input and will need to increment the table size to match index of table.

``fib(6)`` -> on iteration table length should be ``n +1``

iii) initialize the table with default values.

The default value will be dependant on the output required.
For fib(n) function we need to increment next values to get final value thus all initial value should be ``0``.

iv) Seed the trivial answere into the table.

Look at the smallest value that you start from and know the value(always constant) and enter the value to the table.

 - The seed value will be used as the starting point and used to increment subsequent values.

For the fib(n) example we know index 1 should be ``1`` and thus to initialize the table

``table[1] = 1``

iv) Iterate through the table

v) Fill subsequent positions incrementing by current value.

This is the core of the strategy where we first get **current value** and use it to increment the **next values**

For the fib(n) example:

```

currValue = value
nextValue[index + 1] += currentValue;
secondValue[index + 2] += currentValue 

```

