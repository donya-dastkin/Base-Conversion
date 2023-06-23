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
    
}