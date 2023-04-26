const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
const calculateBill = () => {
    const bill = Number(billInput.value)
  
    const tipPercent = Number(tipInput.value) / 100

    const tipAmount = bill * tipPercent

    const total = tipAmount + bill

    const perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  }
  const increasePeople = () => {
    // increment the amount
    numberOfPeople += 1

    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
  }
  const decreasePeople = () => {
    if (numberOfPeople <= 1) {
      return
    }
    numberOfPeople -= 1

    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople
  
    // calculate the bill based on the new number of people
    calculateBill()
  }