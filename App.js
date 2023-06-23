const BaseConversion = () => {
    let value = document.forms["formBase"]["Number"].value
    const Base = +document.forms["formBase"]["Base"].value
    const chang_base = +document.forms["formBase"]["chang_base"].value
    let result = 0
    let resultDemo

    const ReverseConvertNumber = (num) => {
        let number = ""
        for (let i = num.length - 1; i >= 0; i--) {
            number += num[i]
        }
        return (number)
    }

    const CheckNumberBase = (num) => {
        let BaseMax = true
        for (let i = 0; i <= num.length - 1; i++) {
            if (num[i] >= Base) {
                BaseMax = false
            }
        }
        return BaseMax
    }

    const CharacterConversion = (number) => {
        let result = 0
        let num = ""
        switch (number) {
            case 10:
                num = "A" //11
                break;
            case 11:
                num = "B"  //12
                break;
            case 12:
                num = "C" //13
                break;
            case 13:
                num = "D"  //14
                break;
            case 14:
                num = "E"  //15
                break;
            case 15:
                num = "F" ///16
                break;
            default:
                if (chang_base > 10 && chang_base <= 16) {
                    num = "NAN"
                } else if (number >= 16) {
                    num = number
                }
                break;
        }
        result = num
        return result
    }

    const BaseConvert = (number) => {
        number = ReverseConvertNumber(number)
        let result = 0
        let value = 0
        let num = ""
        for (let i = 0; i <= number.length - 1; i++) {
            switch (number[i]) {
                case "A":
                    num = "10"
                    break;
                case "B":
                    num = "11"
                    break;
                case "C":
                    num = "12"
                    break;
                case "D":
                    num = "13"
                    break;
                case "E":
                    num = "14"
                    break;
                case "F":
                    num = "15"
                    break;
                default:
                    num = number[i]
                    break;
            }
            result += (+ num) * Base ** i
            if (result >= 10 && result <= 15 && chang_base >= 11) {
                value = ConsecutiveDivision(result)
                result = value
            }
        }

        return result
    }

    const ConsecutiveDivision = (number) => {
        let divisor
        let mod
        let result = ""
        divisor = Math.floor(number / chang_base)
        mod = number % chang_base
        if (divisor === 0) {
            result = "1"
            return result
        } else {
            while (true) {
                if (mod >= 10 && mod <= 15 && chang_base >= 11) {
                    result += CharacterConversion(mod)
                } else {
                    result += mod
                }
                if (divisor === 0) {
                    result = ReverseConvertNumber(result)
                    return result
                }
                mod = divisor % chang_base
                divisor = Math.floor(divisor / chang_base)
            }
        }
    }

    const CheckNumber = CheckNumberBase(value)

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

    document.getElementById("changBase").innerHTML = resultDemo
    document.getElementById("changBase").style.color = "green"
    document.getElementById("changBase").style.background = "#e0dede"
    document.getElementById("changBase").style.width = "59%"
    document.getElementById("changBase").style.padding = "10px"
}