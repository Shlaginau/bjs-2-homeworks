function compareArrays(arr1, arr2) {
 return arr1.every((element, index) => arr1.length === arr2.length && element === arr2[index]); 
}

function getUsersNamesInAgeRange(users, gender) {
	return users.
    filter(user => user.gender === gender).
    map(user => user.age).
    reduce((average, userAge, index, array) => average + userAge / array.length, 0);
}


/* мой вариант 

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender && user.age !== 0).map(user => user.age).reduce((acc, age, index, people) => {
      acc+=age;
      if (index === people.length - 1) {
          return acc / people.length;
          }
      return acc;
      },0)
    }
*/