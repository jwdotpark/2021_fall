const transferMoney = (name) => {
  return function (amount) {
    return function (fromAccount) {
      return function (toAccount) {
        return `${name} transfered ${amount} from ${fromAccount} to ${toAccount}`
      }
    }
  }
}

transferMoney('John')(100)('Savings')('Checking');