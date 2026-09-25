# Subir el proyecto a GitHub usando Git

## 1. Crear el repositorio en GitHub

1. Entra en [GitHub](https://github.com/) e inicia sesión.
2. Pulsa **New repository**.
3. Escribe un nombre para el repositorio, por ejemplo `web`.
4. Elige si quieres que sea público o privado.
5. No marques las opciones para añadir un README, `.gitignore` o licencia, porque el proyecto ya existe en local.
6. Pulsa **Create repository**.

## 2. Abrir la terminal en la carpeta del proyecto

Abre PowerShell o la terminal de VS Code y sitúate en la carpeta raíz del proyecto:

```powershell
cd "c:\Users\AlumnoM\OneDrive - Digitech\SEGUNDO\Entorno Cliente\EJERCICIOS\Web"
```

Comprueba que estás en la carpeta correcta:

```powershell
Get-ChildItem
```

Deberías ver archivos como `index.html`, `contacto.html`, `css` e `img`.

## 3. Inicializar Git

Si el proyecto todavía no usa Git, ejecuta:

```powershell
git init
```

Configura tu nombre y tu correo si es la primera vez que usas Git en ese ordenador:

```powershell
git config --global user.name "Tu nombre"
git config --global user.email "tu-correo@example.com"
```

## 4. Revisar y preparar los archivos

Comprueba el estado del proyecto:

```powershell
git status
```

Añade todos los archivos al área de preparación:

```powershell
git add .
```

Vuelve a revisar qué archivos se van a guardar:

```powershell
git status
```

## 5. Crear el primer commit

Guarda una primera versión del proyecto:

```powershell
git commit -m "Primer commit del proyecto web"
```

## 6. Conectar el proyecto con GitHub

En la página del repositorio recién creado, copia la URL HTTPS. Tendrá un formato parecido a este:

```text
https://github.com/USUARIO/NOMBRE-DEL-REPOSITORIO.git
```

Añade esa dirección como repositorio remoto:

```powershell
git remote add origin https://github.com/USUARIO/NOMBRE-DEL-REPOSITORIO.git
```

Puedes comprobar que se ha guardado correctamente con:

```powershell
git remote -v
```

## 7. Subir el proyecto a GitHub

Renombra la rama principal como `main` y sube el commit:

```powershell
git branch -M main
git push -u origin main
```

Si GitHub solicita autenticación, inicia sesión mediante el método que te indique GitHub. Para HTTPS, GitHub puede pedir un token de acceso personal en lugar de la contraseña.

Después de actualizar la página del repositorio, deberían aparecer los archivos del proyecto.

## 8. Subir cambios posteriores

Cada vez que modifiques el proyecto, ejecuta:

```powershell
git status
git add .
git commit -m "Describe los cambios realizados"
git push
```

Usa mensajes de commit breves y descriptivos, por ejemplo:

```powershell
git commit -m "Añadir estilos para la página de contacto"
```

## Comandos útiles

Ver el historial de commits:

```powershell
git log --oneline
```

Ver el repositorio remoto configurado:

```powershell
git remote -v
```

Descargar los cambios que existan en GitHub:

```powershell
git pull
```

## Importante

- No subas contraseñas, tokens ni datos privados al repositorio.
- Comprueba siempre `git status` antes de hacer `commit`.
- Si aparece un archivo que no quieres subir, puedes quitarlo del área de preparación con `git restore --staged NOMBRE_DEL_ARCHIVO`.

## Ajuste del tamaño de las imágenes

Para que todas las imágenes de los productos tengan el mismo tamaño, se modificó el selector `.grid-contenedor img` en `css/index.css`:

```css
.grid-contenedor img {
	width: 100%;
	height: 350px;
}
```

### ¿Para qué sirve?

- `width: 100%` hace que cada imagen ocupe todo el ancho disponible de su tarjeta.
- `height: 350px` establece una altura fija para todas las imágenes.
- Al tener el mismo ancho y alto, las tarjetas del catálogo quedan alineadas y uniformes.
- No se utilizó `height: auto` porque cada imagen podía tener una altura diferente según sus dimensiones originales.

Este cambio solo afecta a las imágenes que están dentro de `.grid-contenedor`, por lo que no modifica el tamaño del logo ni del icono del menú.
