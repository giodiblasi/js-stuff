# Data Type Composition
based on Eric Elliot [post](https://medium.com/javascript-scene/composable-datatypes-with-functions-aec72db3b093) on data type composition.

In this scenario we would like to implement a water bucket with this specs:
+ initialize bucket with a given capacity and a initial content
+ when content reachs bucket capacity a bucket with content = capacity is returned
+ "compose two buckets" means to pour the content of the first bucket to the second (according with its capacity)
+ it possible add some content using a filling methods (according with bucket capacity)


```javascript
const bucket = ({ capacity = 0, content = 0 } = {}) => {
  if (content > capacity) return bucket({ capacity, content: capacity });
  const pour = otherContent => bucket({ capacity, content: (content + otherContent) });
  return Object.assign(pour,
    {
      fill: contentToAdd => bucket({ capacity, content: contentToAdd + content }),
      valueOf: () => content,
    });
};
```
This implementation provide only pure functions and immutable bucket (a new one bucket is returned on fill and pour methods).

example of usages:
```javascript
    const waterBucket = compose(
      bucket({ capacity: 20, content: 5 }).fill(1),
      bucket({ capacity: 20, content: 8 }).fill(2))
      (bucket()); // bucket of 16
```
