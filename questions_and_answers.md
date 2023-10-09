<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### A: `{}`

<i>This code declares a variable `greeting`, which assigns an empty object `{}` to it, and then logs the empty object to the console, resulting in `{}` being displayed in the console log.</i>
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### C: `"12"`

<i>Here `sum` function takes two arguments and returns their `sum`. However, when called with `sum(1, "2")`, JavaScript coerces the string "2" into a number, resulting in the string concatenation of "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here `info.favoriteFood` property is initially assigned the value of `food[0]`, which is the first element of the food array, `"🍕"`. Later, it's reassigned to `"🍝"`, but this doesn't affect the `food` array itself, so `food` remains unchanged. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### B: `Hi there, undefined`

<i>In the `sayHi` function, there's a parameter name that is not provided with a value when you call `sayHi()` in `console.log(sayHi());`. When a parameter is not provided with a value, it defaults to `undefined`. So, the function returns `Hi there, undefined`.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### B: 2

<i>Here `forEach` loop, the condition `if (num)` checks if each `num `is truthy. Since `0` is falsy in JavaScript, it doesn't increment `count`. So, the other three numbers `(1, 2, and 3)` are truthy, so `count` gets incremented for each of them. Hence, `count` becomes` 2`</i>

</p>
</details>
