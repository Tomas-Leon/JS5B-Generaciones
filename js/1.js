class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;
  
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#dni = dni;
      this.#sexo = sexo;
      this.#peso = peso;
      this.#altura = altura;
      this.#anioNacimiento = anioNacimiento;
    }
  
    get nombre() {
      return this.#nombre;
    }
    set nombre(nombre) {
      this.#nombre = nombre;
    }
  
    get edad() {
      return this.#edad;
    }
    set edad(edad) {
      this.#edad = edad;
    }
  
    get dni() {
      return this.#dni;
    }
    set dni(dni) {
      this.#dni = dni;
    }
  
    get sexo() {
      return this.#sexo;
    }
    set sexo(sexo) {
      if (sexo === "H" || sexo === "M") {
        this.#sexo = sexo;
      } else {
        console.error("Sexo inválido. Debe ser 'H' o 'M'.");
      }
    }
  
    get peso() {
      return this.#peso;
    }
    set peso(peso) {
      this.#peso = peso;
    }
  
    get altura() {
      return this.#altura;
    }
    set altura(altura) {
      this.#altura = altura;
    }
  
    get anioNacimiento() {
      return this.#anioNacimiento;
    }
    set anioNacimiento(anioNacimiento) {
      this.#anioNacimiento = anioNacimiento;
    }
  
    // Métodos
    mostrarGeneracion() {
      let generacion = "";
      let rasgoCaracteristico = "";
  
      if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgoCaracteristico = "Irreverencia";
      } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgoCaracteristico = "Frustración";
      } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
        generacion = "Generación X";
        rasgoCaracteristico = "Obsesión por el éxito";
      } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
        generacion = "Baby Boom";
        rasgoCaracteristico = "Ambición";
      } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
        generacion = "Silent Generation (Los niños de la posguerra)";
        rasgoCaracteristico = "Austeridad";
      } else {
        generacion = "Generación desconocida";
        rasgoCaracteristico = "Desconocido";
      }
  
      alert(
        `Generación: ${generacion}\nRasgo característico: ${rasgoCaracteristico}`
      );
    }
  
    esMayorDeEdad() {
      if (this.#edad >= 18) {
        alert(`${this.#nombre} es mayor de edad.`);
      } else {
        alert(`${this.#nombre} no es mayor de edad.`);
      }
    }
  
    mostrarDatos() {
      alert(
        `Nombre: ${this.#nombre}\nEdad: ${this.#edad}\nDNI: ${this.#dni}\nSexo: ${
          this.#sexo
        }\nPeso: ${this.#peso} kg\nAltura: ${
          this.#altura
        } cm\nAño de Nacimiento: ${this.#anioNacimiento}`
      );
    }
  }
  
  // Variables globales
  let persona;
  
  // Función para crear una nueva persona
  document.getElementById("crearPersona").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const dni = document.getElementById("dni").value;
    const sexo = document.getElementById("sexo").value.toUpperCase();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const anioNacimiento = parseInt(
      document.getElementById("anioNacimiento").value
    );
  
    persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    alert("Persona creada exitosamente.");
  });
  
  // Función para mostrar la generación
  document
    .getElementById("mostrarGeneracion")
    .addEventListener("click", function () {
      if (persona) {
        persona.mostrarGeneracion();
      } else {
        alert("Primero debes crear una persona.");
      }
    });
  
  // Función para verificar si es mayor de edad
  document.getElementById("esMayorDeEdad").addEventListener("click", function () {
    if (persona) {
      persona.esMayorDeEdad();
    } else {
      alert("Primero debes crear una persona.");
    }
  });
  
  // Función para mostrar los datos de la persona
  document.getElementById("mostrarDatos").addEventListener("click", function () {
    if (persona) {
      persona.mostrarDatos();
    } else {
      alert("Primero debes crear una persona.");
    }
  });