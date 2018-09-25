module.exports = function getZerosCount(number) {
  // your implementation
       
            var numA = 0;
            var numB = 0;
            var arrPow = [5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625];
            for (let i = 0; arrPow[i] <= number; i++) {
                if (number % arrPow[i] == 0) {
                    numB += number / arrPow[i];
                }
                else {
                    numA = number / arrPow[i];
                    numA = numA - (numA % 1);
                    numB += numA;
                }
            }
            return numB;
        }        
    