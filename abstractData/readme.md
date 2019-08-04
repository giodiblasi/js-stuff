# Data Abstraction

Some experiments on multiple representation for abstract data inspried by SICP book

This experiment shows the three way to deal with abstract data:
+ Dispatching on Type
+ Data Directed Programming
+ Message Passing

In this experiment I have followed the same example of the SICP book:
We want to represent complex numbers in the form:

+ Rectangular:  x+iy
+ Polar:  r*e^iA

Then we would like to define a function that adds two complex numbers without caring about of their implementation (Rectangular or Polar)

## Note
To shows these mechanism I have deliberately avoided to use classes.