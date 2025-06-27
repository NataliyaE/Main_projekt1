let calculator = {
    num1: null,
    num2: null,
    read() {
    this.num1 = +prompt('Введите любите ли вы животных от одного до десяти ',0)
    this.num2 = +prompt('Введите любите ли вы насекомых от одного до десяти ',0)
    },
    mul()  {
    return this.num1 * this.num2
    }
}
calculator.read()
console.log(calculator.mul())