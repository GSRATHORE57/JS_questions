
#### Question 1
```javascript
<div id="progress"></div>
<script>

  function count() {
    for (let i = 0; i < 1e6; i++) {
      i++;
      progress.innerHTML = i;
    }
  }

  count();
</script>
```
<hr/>

#### Question 2

```javascript
setTimeout(() => console.log("timeout"));

Promise.resolve()
  .then(() => console.log("promise"));

console.log("code");
```

<hr/>

#### Question 3

```javascript
const arr = [1,2,3,4,5];
arr.forEach((el) => {
  if(el === 3)
    break;
  console.log(el);
});


const arr = [1,2,3,4,5];
arr.forEach((el) => {
  if(el === 3)
    return;
  console.log(el);
});

```

<hr/>

#### Question 4

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
});

promise1.then(() => {
  console.log(3);
});

console.log(4);
```

<hr/>

#### Question 5

```javascript
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then(() => {
  console.log(3);
});

console.log(4);
```


