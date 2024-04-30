let estudiantes = []; 

let carreraContador = [0, 0, 0, 0];

 let salarioAdmin = 0;
 
 let sumaSalariosAdmin = 0;

  let maxSalario = 0;
  
  let edadMaxSalario = 0; 

  let encuestadas = "";

  do { let nombre = prompt("Ingrese el nombre del estudiante:");

   let salario = parseFloat(prompt("Ingrese el salario del estudiante:"));

    let edad = parseInt(prompt("Ingrese la edad del estudiante:")); 

    let carrera = parseInt(prompt("Ingrese la carrera del estudiante (1: Administración, 2: Derecho, 3: Medicina, 4: Sistemas):")); 
   
    estudiantes.push({nombre, salario, edad, carrera});
      carreraContador[carrera - 1]++; 

    if (carrera === 1) { sumaSalariosAdmin += salario; }

    if (salario > maxSalario)  { maxSalario = salario; edadMaxSalario = edad;

    } } while (confirm(`¿Desea ingresar otro estudiante?`)); 

    let maxAlumnos = Math.max(...carreraContador); let carreraMasAlumnos = carreraContador.indexOf(maxAlumnos) + 1; 
      
    let promedioSalarioAdmin = sumaSalariosAdmin / carreraContador[0]; 

    alert (`Promedio de salario de los alumnos:` + maxSalario); 
     
    alert (`Personas encuestadas:` + encuestadas );

    alert (`Carrera con más alumnos:` + carreraMasAlumnos);

    alert (`Edad de la persona con mayor salario:` + edadMaxSalario);

     //alert (estudiantes);