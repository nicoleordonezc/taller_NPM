

# 💻 Generador de Nombres de Usuario Interactivo

## 📌 Descripción del Problema

En muchas plataformas y servicios digitales, se requiere la creación de nombres de usuario únicos y fáciles de recordar. Esta aplicación de consola interactiva con Node.js permite generar nombres de usuario automáticamente a partir de un correo electrónico, de forma aleatoria o utilizando una palabra base personalizada. Todo esto sin conexión a internet ni uso de APIs externas.

## 📦 Librería Utilizada

**Nombre:** `unique-username-generator`
**Descripción:** Esta librería genera nombres de usuario únicos, ya sea a partir de un correo electrónico, de forma aleatoria o basados en una palabra específica.
**Link oficial:** [https://www.npmjs.com/package/unique-username-generator](https://www.npmjs.com/package/unique-username-generator)

## 🛠️ Implementación

La aplicación implementa un **menú interactivo por consola** utilizando el módulo `readline` de Node.js. El usuario puede elegir entre tres opciones:

1. **Generar usuario con correo electrónico:** Se toma el correo del usuario y se genera un nombre único usando `generateFromEmail()`.
2. **Generar usuario aleatorio:** Genera un nombre sin necesidad de entrada del usuario usando `generateUsername()`.
3. **Generar usuario único personalizado:** Permite introducir una palabra base y genera un nombre único combinándola con otros elementos.

Cada opción devuelve un nombre de usuario distinto y regresa al menú principal para seguir utilizando la app.

## 📋 Instrucciones de Instalación y Uso

### 🔧 Requisitos previos

* Tener instalado [Node.js](https://nodejs.org/) en tu sistema.
* Tener habilitado el uso de scripts en PowerShell si estás en Windows (consulta [este enlace](https://go.microsoft.com/fwlink/?LinkID=135170) para más detalles).

### 🗂️ Pasos de instalación

1. Clona este repositorio o copia el archivo `main.js` a tu proyecto local.
2. Abre una terminal y ubícate en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar la librería necesaria:

```bash
npm install unique-username-generator
```

4. Ejecuta la aplicación:

```bash
node main.js
```

5. Interactúa con el menú en la terminal y genera nombres de usuario según tus necesidades.

## 🎥 Video de Presentación

🔗 [Ver video de presentación](https://drive.google.com/file/d/1_Z3Bp7L8sDbM6GWSt4zl3RuObqHebPbI/view?usp=sharing)
