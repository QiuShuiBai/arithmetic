    const value = [4, 4, 2, 1, 3]
    const weight = [3, 5, 4, 1, 2]
    const bag = 10
    
    function initArr(num, bag) {
      let arr = []
      let i = num + 1
      while(i > 0){
        let j = bag + 1
        i --
        arr[i] = []
        while(j > 0){
          j--
          arr[i][j] = 0
        }
      }
      return arr
    }
    
    function getMaxValue(value, weight, bag) {
      let num = value.length
      let arr = initArr(num, bag)
      for(let i = 1; i <= num; i++){
        for(let j = 1; j <= bag; j++){
          if(weight[i-1] <= j){
            if(arr[i-1][j-weight[i-1]] + value[i-1] < arr[i-1][j]){
              arr[i][j] = arr[i-1][j]
            } else {
              arr[i][j] = arr[i-1][j-weight[i-1]] + value[i-1]
            }
          }else{
            arr[i][j] = arr[i-1][j]
          }
        }
      }
      console.log(arr)
      return arr[num][bag]
    }
    let maxValue = getMaxValue(value, weight, bag)
    console.log(maxValue)