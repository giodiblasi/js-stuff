# Functional Mixins
In this code section I try to implement inheritance using functional mixin as describe in this [post](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c) by Eric Elliot

As scenario we have an employee that has a calculatePay and isDayPay methods, then we would to extends an employee with manager feaures and with developer feature.
##### For Manager role we would:
+ add managed employees
+ get managed emplyees

##### For Developer role we would:
+ assign projects
+ get assigned projects

we have used the same employee implemented in the [factory function inheritance example](https://github.com/giodiblasi/js-stuff/tree/master/switch-case)
and then we have extended this employee with functional mixins.
In this case we can use mixins because the developer role and manager role are independent and they does'not need to know other mixins existences.

So if we want to add manager feature to an employee:
```javascript
const manager = promoteToManager(e.getCommissionedEmployee());
```
The manager object has now all methods from employee definitions and all methods from  manager defintion:
```javascript
manager.calculatePay(); //from Employee
manager.addEmployees(); //from Manager
```

Using mixin allow us to use **multiple inheritance** :

```javascript
const managerDev = compose(promoteToManager, promoteToDeveloper)(e.getCommissionedEmployee());

managerDev
      .assignToProject('The Best Project')
      .assignToProject('Other Project')
      .addEmployees(3);
```

> **Note:**
>
> A possible approach can be:
> + apply **factory function** to override methods
> + apply **mixin** to add behavior
