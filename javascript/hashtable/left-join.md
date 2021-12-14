# HashMap Left Join

# Author : Rami Zaitoun

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
- 
### Whiteboard

![left-join](https://github.com/MasteRminD6666/data-structures-and-algorithms/blob/main/javascript/hashtable/__test__/assets/leftJoin.jpg)

# Testing 
![testing](https://github.com/MasteRminD6666/data-structures-and-algorithms/blob/main/javascript/hashtable/__test__/assets/lefttest.PNG)
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

got helped from somone on github

[github](https://gist.github.com/robotlolita/8208773)
