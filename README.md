# Convert Base

#### The idea of ​​doing this project came to my mind when I was learning the basics of programming and I implemented all the tips taught in this lesson and considered all the border points so that the program is fully and accurately executed. And the result is absolutely correct.

## What is the base and what is its use?
#### Base in mathematics means the number of single digits that are required to write a number in a place-valued numbering machine. For example, in decimal numbering, which is the most common system in the world today, we use the ten digits 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9; Therefore, the base of this device is ten.

#### Numerical devices are:
- 2 to 36
#### The most famous of them:
- Binary
- Octal
- Decimal
- Hexa Decimal

## This project Convert the bases :

### By running this project and entering the number in the desired base, you can convert it to any base from 2 to 16 and see the result.


#### There are two methods to get the x number in the y base, which are described below:

1. To get the number x in base y, we need to get the result of dividing x by y Then the quotient of Divide by y and continue until the quotient reaches zero. Then put the remainders together from the last to the first until the number x at the base y is obtained.

2. And to convert the number x in base y to the number z, the digits of x from right to left, respectively, in y^1,y^0 Finally in y^m-1 multiply (m is the number of digits of x) and then add the result to get the number z (the base of the z number is 10).

## Project Code 

##### The main part of the project that determines which function to execute under which conditions is here :

```javascript

if (value !== "") {
        if (CheckNumber === true) {
            if ((+value) === 0) {
                result = 0
            } else if (Base === chang_base) {
                result = value
            } else if (chang_base >= 10) {
                if (Base < chang_base) {
                    const Number = BaseConvert(value)
                    result = ConsecutiveDivision(Number)
                } else {
                    result = BaseConvert(value)
                }
            } else if (chang_base <= 9) {
                const Number = BaseConvert(value)
                if (Number < chang_base) {
                    result = Number
                } else {
                    result = ConsecutiveDivision(Number)
                }
            }
            resultDemo = `(${value}) based on ${Base} \n equal(${result}) based on ${chang_base}`
        } else if (CheckNumber === false) {
            resultDemo = `Figures should be smaller than the base ${value} | ${Base}`
        }
    } else {
        resultDemo = `Please fill in the field ${value}`
    }

```

### How does the program run?

- Graphic view:
  - Put the project on your locale and run the html file and enter the number and set the base and see the result.
- Terminal view:
  - Set the values ​​of the variables as desired
  ```javascript
    let value = "1010"
    const Base = 2
    const Chengbase = 10
  ```
  - Change this section like this
  ```javascript
          resultDemo = `(${value}) based on ${Base} \n equal(${result}) based on ${chang_base}`
        } else if (CheckNumber === false) {
            resultDemo = `Figures should be smaller than the base ${value} | ${Base}`
        }
    } else {
        resultDemo = `Please fill in the field ${value}`
    }
    ```
    - Add this at the end and just run the js file
    ```javascript
    const result =Base()
    consol.log(result)
    ```

#### If you have any suggestions for improving the app, send me a pull request to review and implement.
