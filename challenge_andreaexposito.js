import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const students = [
  {
    age: 32,
    examScores: [],
    gender: "male",
    name: "edu",
  },
  {
    age: 29,
    examScores: [],
    gender: "female",
    name: "silvia",
  },
];

const availableMaleNames = [
  "pepe",
  "juan",
  "victor",
  "leo",
  "francisco",
  "carlos",
];
const availableFemaleNames = [
  "cecilia",
  "ana",
  "luisa",
  "silvia",
  "isabel",
  "virginia",
  "andrea",
];
const availableGenders = ["male", "female"];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1
const requirementOne = () => {
  console.table(students);
};

// 2
const requirementTwo = () => {
  console.log(`Hay ${students.length} alumno(s) en clase.`);
};

// 3
const requirementThree = () => {
  students.forEach((student) => {
    console.log(student.name);
  });
};

// 4
const requirementFour = () => {
  students.pop();
};

// 5
const requirementFive = () => {
  students.splice(getRandomNumber(0, students.length), 1);
};

// 6
const requirementSix = () => {
  students.forEach((student) => {
    if (student.gender === "female") {
      console.log(student);
    }
  });
};

// 7
const requirementSeven = () => {
  let maleCount = 0;
  let femaleCount = 0;

  students.forEach((student) => {
    if (student.gender === "female") {
      femaleCount++;
    } else {
      maleCount++;
    }
  });

  console.log(`Hay ${maleCount} chico(s) y ${femaleCount} chica(s) en clase.`);
};

// 8
// Uso un for y no un foreach porque no puedo hacer break a un foreach porque es una función, no un bucle
const requirementEight = () => {
  let allFemales = true;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    if (element.gender === "male") {
      allFemales = false;
      break;
    }
  }
  console.log(allFemales);
};

// 9
const requirementNine = () => {
  students.forEach((student) => {
    if (student.age >= 20 && student.age <= 25) {
      console.log(student.name);
    }
  });
};

// 10
const requirementTen = () => {
  let randomGender =
    availableGenders[getRandomNumber(0, availableGenders.length)];
  let randomName =
    randomGender === "male"
      ? availableMaleNames[getRandomNumber(0, availableMaleNames.length)]
      : availableFemaleNames[getRandomNumber(0, availableFemaleNames.length)];
  let randomAge = getRandomNumber(20, 50);

  students.push({
    age: randomAge,
    examScores: [],
    gender: randomGender,
    name: randomName,
  });
};

// 11
const requirementEleven = () => {
  let youngestStudent;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    if (youngestStudent == undefined || youngestStudent.age > element.age) {
      youngestStudent = element;
    }
  }
  console.log(
    `El alumno más joven es ${youngestStudent.name} con ${youngestStudent.age} años.`
  );
};

// 12
const requirementTwelve = () => {
  let averageAge = 0;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    averageAge += element.age;
  }
  averageAge /= students.length;
  console.log(`La media de edad de la clase es ${averageAge}.`);
};

// 13
const requirementThirteen = () => {
  let averageFemaleAge = 0;
  let femaleCount = 0;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    if (element.gender === "female") {
      femaleCount++;
      averageFemaleAge += element.age;
    }
  }
  averageFemaleAge /= femaleCount;
  console.log(
    `La media de edad de las mujeres de la clase es ${averageFemaleAge}.`
  );
};

// 14
const requirementFourteen = () => {
  students.forEach((element) => {
    element.examScores.push(getRandomNumber(0, 10));
  });
};

// 15
const requirementFifteen = () => {
  let studentsSorted = [];
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    if (studentsSorted.length == 0) {
      studentsSorted.push(element);
    } else {
      let pointer = 0;
      while (
        pointer < studentsSorted.length &&
        element.name > studentsSorted[pointer].name
      ) {
        pointer++;
      }
      studentsSorted.splice(pointer, 0, element);
    }
  }
  // Una vez tenemos la lista ordenada en el array auxiliar, sustituimos la original
  for (let index = 0; index < students.length; index++) {
    students[index] = studentsSorted[index];
  }
  console.table(students);
};

// 16
const requirementSixteen = () => {
  let highestTotalMark = 0;
  let highestTotalMarkStudent;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    let sum = 0;
    for (let index = 0; index < element.examScores.length; index++) {
      const mark = element.examScores[index];
      sum += mark;
    }

    if (sum > highestTotalMark) {
      highestTotalMark = sum;
      highestTotalMarkStudent = element;
    }
  }
  console.log(highestTotalMarkStudent);
};

// 17
const requirementSeventeen = () => {
  let highestAverageMark = 0;
  let highestAverageMarkStudent;
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    let sum = 0;
    for (let index = 0; index < element.examScores.length; index++) {
      const mark = element.examScores[index];
      sum += mark;
    }

    sum /= element.examScores.length;

    if (sum > highestAverageMark) {
      highestAverageMark = sum;
      highestAverageMarkStudent = element;
    }
  }
  console.log(highestAverageMark, highestAverageMarkStudent.name);
};

// 18
const requirementEighteen = () => {
  for (let index = 0; index < students.length; index++) {
    const element = students[index];

    if (element.examScores.length == 0) {
      element.examScores.push(10);
    } else {
      for (let index = 0; index < element.examScores.length; index++) {
        const mark = element.examScores[index];
        element.examScores[index] = mark != 10 ? mark + 1 : mark;
      }
    }
  }
};

// Pedir número
function requestNumber() {
  const promise = new Promise((resolve, reject) => {
    rl.question("Introduce un número (1-18): ", (userInput) => {
      rl.pause();
      if (
        /^[0-9]+$/.test(userInput) &&
        userInput != 0 &&
        userInput <= 18 &&
        userInput >= 1
      ) {
        resolve(userInput);
      } else {
        reject(
          "Has introducido un valor no numérico, 0, o un número que no se encuentra entre 0 y 18."
        );
      }
    });
  });

  return promise;
}

// Función principal
async function main() {
  while (true) {
    // Listado completo de requisitos
    console.log(
      "\nListado de requisitos:",
      "\n1- Mostrar en formato de tabla todos los alumnos.",
      "\n2- Mostrar por consola la cantidad de alumnos que hay en clase.",
      "\n3- Mostrar por consola todos los nombres de los alumnos.",
      "\n4- Eliminar el último alumno de la clase.",
      "\n5- Eliminar un alumno aleatoriamente de la clase.",
      "\n6- Mostrar por consola todos los datos de los alumnos que son chicas.",
      "\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.",
      "\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.",
      "\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.",
      "\n10- Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío.",
      "\n11- Mostrar por consola el nombre de la persona más joven de la clase.",
      "\n12- Mostrar por consola la edad media de todos los alumnos de la clase.",
      "\n13- Mostrar por consola la edad media de las chicas de la clase.",
      "\n14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.",
      "\n15- Ordenar el array de alumnos alfabéticamente según su nombre.",
      "\n16- Mostrar por consola el alumno de la clase con las mejores notas. El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.",
      "\n17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.",
      "\n18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10."
    );

    let requestedNumber;
    try {
      requestedNumber = await requestNumber();
    } catch (error) {
      console.log(error);
      break;
    }

    switch (requestedNumber) {
      case "1":
        requirementOne();
        break;
      case "2":
        requirementTwo();
        break;
      case "3":
        requirementThree();
        break;
      case "4":
        requirementFour();
        break;
      case "5":
        requirementFive();
        break;
      case "6":
        requirementSix();
        break;
      case "7":
        requirementSeven();
        break;
      case "8":
        requirementEight();
        break;
      case "9":
        requirementNine();
        break;
      case "10":
        requirementTen();
        break;
      case "11":
        requirementEleven();
        break;
      case "12":
        requirementTwelve();
        break;
      case "13":
        requirementThirteen();
        break;
      case "14":
        requirementFourteen();
        break;
      case "15":
        requirementFifteen();
        break;
      case "16":
        requirementSixteen();
        break;
      case "17":
        requirementSeventeen();
        break;
      case "18":
        requirementEighteen();
        break;
    }
  }
}

main();
