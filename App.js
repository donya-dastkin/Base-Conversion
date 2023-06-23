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

    

}