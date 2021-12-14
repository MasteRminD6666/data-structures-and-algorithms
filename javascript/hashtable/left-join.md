# HashMap Left Join


## Challenge

Write a function that LEFT JOINs two hashmaps into a single data structure:

- It takes two hash maps as arguments.
- It return the result of left join.

## Efficiency


### Efficiency

Time:

- O(n)

Space:

- O(n)

## Solution

```
function leftJoin(lMap, rMap) {
  const result = [];
  for (let i in lMap.storage) {
    result.push(Object.entries(lMap.storage[i].head.value)[0]);
  }
  for (let i in result) {
    if (rMap.get(result[i][0])) {
      result[i].push(rMap.get(result[i][0]));
    } else {
      result[i].push('null');
    }
  }
  return result;
}

```

### Whiteboard

![left-join](javascript\hashtable\__test__\assets\leftJoin.jpg)

# Testing 
![testing](javascript\hashtable\__test__\assets\lefttest.PNG)
