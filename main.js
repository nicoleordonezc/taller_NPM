
const { generateFromEmail, generateUsername } = require("unique-username-generator");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Opción 1: Generar desde correo
function usuarioEmail() {
    rl.question("\n📧 Ingresa tu correo electrónico: ", (correo) => {
    const username = generateFromEmail(correo, 3);
    console.log("👤 Usuario generado:", username); 
    mostrarMenu();
    });
};

// Opción 2: Generar usuario aleatorio
function usuarioRandom() {
  const username = generateUsername();
  console.log("🎲 Usuario aleatorio:", username);
  mostrarMenu();
}

// Opción 3: Generar usuario único personalizado
function usuarioUnico() {
  rl.question("📝 Palabra base: ", (base) => {
    const username = generateUsername(base, 2, 20, 'unique username');
    console.log("🆕 Usuario único generado:", username);
    mostrarMenu();
  });
}

// Menú principal
function mostrarMenu() {
  console.log("=== MENÚ PRINCIPAL ===");
  console.log("1. Generar usuario con correo");
  console.log("2. Generar usuario random");
  console.log("3. Generar usuario único");
  console.log("4. Salir");

  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion.trim()) {
      case "1":
        usuarioEmail();
        break;
      case "2":
        usuarioRandom();
        break;
      case "3":
        usuarioUnico();
        break;
      case "4":
        console.log("👋 ¡Hasta luego!");
        rl.close();
        break;
      default:
        console.log("❌ Opción no válida. Intenta de nuevo.\n");
        mostrarMenu();
        break;
    }
  });
}

mostrarMenu();
