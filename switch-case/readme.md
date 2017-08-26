# Switch - Case 

In this section I tried to refactor a switch case construct using using functional approach instead of using inherithance.

 based on this interesting  [post](https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c04) 
#### Calculator
Scenario: we want build a calculator with basic operation like sum and sub.

 To test the differences between the two approaches I tried to:

 + Implement add and sub operations
 + Add new operation % 
 + Add a new calc with programmer fetaures in which the % operator represent the module instead of percentage
 + Use custom operations
 + Add a composite operation (subtract the percentage)
 
 #### Employee
 In this scenario (based on Clean Code Book example) we want to refactor this code:
```javascript
 const calculatePay = (employee) => {
  switch (employee.type) {
    case COMMSIONED: return e.calculateCommisionedPay(employee);
    case HOURLY: return e.calculateHourlyPay(employee);
    case SALARIED: return e.calculateSalariedPay(employee);
    default: return 0;
  }
};
```
in a firts step we replaced the switch-case statement with using the same functional approch described before; then we replaced the statement using a "factory function inheritance" (as described in this [post](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c))
in this way we have removed the "enum"  (replaced with specifc methods), the usages become more simple:
```javascript
 const employee = e.getHourlyEmployee();
 assert.equal(employee.calculatePay(), 80);
```
In this case we have not used mixin beacuse we have an inheritance that not extends base employee with new behavior but the same methods are overridden
