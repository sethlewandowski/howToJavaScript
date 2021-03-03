const FAVORITE_FOOD = 'Pizza'

function makeDinner() {
  console.log(FAVORITE_FOOD) // works
  console.log(FAVORITE_DESSERT) // works
  const FAVORITE_BEER = 'IPA'
}

const FAVORITE_DESSERT = 'Cheesecake'

makeDinner()
console.log(FAVORITE_BEER) //error
