class Cursos {
  constructor() {
    this.cursos = [
      {
        nombre_lenguaje: "Backend",
        nombre_curso: "Introducción al Desarrollo Backend",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java SE",
        nombre_curso: "Introducción",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java - SpringBoot",
        nombre_curso: "Backend con Spring Boot",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java SE",
        nombre_curso: "Orientado a Objetos",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java SE",
        nombre_curso: "Persistencia de Datos",
        academia: "platzi",
      },

      {
        nombre_lenguaje: "Java SE",
        nombre_curso: "Programación Funcional",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java",
        nombre_curso: "Buenas practicas para la escritura de codigo",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Java",
        nombre_curso: "Básico de Testing",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Kotlin",
        nombre_curso: "Desde cero",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "POO",
        nombre_curso: "Programación Orientada a Objetos",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Angular 12",
        nombre_curso: "De cero a experto - (Edición 2021)",
        academia: "udemy",
      },
      {
        nombre_lenguaje: "JavaScript",
        nombre_curso: "Avanzado 1",
        academia: "linkedin",
      },
      {
        nombre_lenguaje: "JavaScript",
        nombre_curso: "Avanzado 2",
        academia: "linkedin",
      },
      {
        nombre_lenguaje: "Laravel - PHP",
        nombre_curso: "Programación laravel y PHP",
        academia: "comfenalco",
      },
      {
        nombre_lenguaje: "Python",
        nombre_curso: "Fundamentos",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Python",
        nombre_curso: "Profesional de Python",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Power BI",
        nombre_curso: "Análisis de Datos",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "C#",
        nombre_curso: "Buenas Prácticas y Código Limpio",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "C#",
        nombre_curso: "Básico de Programación",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "AWS",
        nombre_curso: "Cómputo, Almacenamiento y Bases de Datos",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "AWS",
        nombre_curso: "Fundamentos de Cloud Computing",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "AWS",
        nombre_curso: "Práctico de AWS Cloud",
        academia: "platzi",
      },
      {
        nombre_lenguaje: "Mercado Laboral",
        nombre_curso: "Retos y Oportunidades",
        academia: "comfama",
      },
    ];
  }

  async mostrar_cursos() {
    return new Promise((resolve, reject) => {
      this.cursos.map((curso, index) => {
        document.getElementById("listado-cursos").innerHTML += `
                      <div class="curso d-flex align-items-center justify-content-between">
                            <div class="d-flex">
                                <img width="20%" src="img/${
                                  curso.academia == "platzi"
                                    ? "platzi.svg"
                                    : curso.academia == "udemy"
                                    ? "udemy.svg"
                                    : curso.academia == "linkedin"
                                    ? "linkedin.svg"
                                    : curso.academia == "comfama"
                                    ? "comfama.svg"
                                    : curso.academia == "comfenalco"
                                    ? "comfenalco.svg"
                                    : ""
                                }" alt="" class="icono-curso me-2">
                                <div>
                                    <h4 class="m-0 p-0 title">${
                                      curso.nombre_lenguaje
                                    }</h4>
                                    <p class="m-0 p-0">${curso.nombre_curso}</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <i class="fa-solid fa-eye eye-icon" id="eye-icon-${index}"></i>
                            </div>
                      </div>
                      <hr>
                    `;
      });
      resolve();
    });
  }

  async mostrar_imagen() {
    this.cursos.forEach((curso, index) => {
      document
        .getElementById(`eye-icon-${index}`)
        .addEventListener("click", () => {
          document.getElementById("img-1").src = `img/cursos/${index}.png`;
          document.getElementById("img-2").src = `img/cursos/${index}.png`;
          document.getElementById("img-3").src = `img/cursos/${index}.png`;
        });
    });
  }
}

const main = async () => {
  const cursos = new Cursos();
  await cursos.mostrar_cursos();
  await cursos.mostrar_imagen();
};

main();
