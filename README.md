# Página web de marca personal

Sitio web estático de presentación personal. Está construido con HTML, CSS y JavaScript, sin dependencias ni pasos de compilación.

## Archivos

- `index.html`: estructura y contenido de la página.
- `style.css`: diseño adaptable, desplazamiento entre secciones y animaciones.
- `script.js`: animaciones de entrada y barras de habilidades.
- `profile.jpg`: fotografía de perfil (archivo opcional; agrega tu imagen con este nombre en la raíz del proyecto).

## Ejecutar localmente

Abre `index.html` en un navegador. Para una vista local más fiel, también puedes iniciar un servidor desde esta carpeta:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar con GitHub Pages

1. Sube los archivos del proyecto a la rama `main` de tu repositorio.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
5. Espera a que GitHub Pages publique el sitio y utiliza la URL que aparece en esa sección.

## Personalización

- Cambia textos y enlaces en `index.html`.
- Ajusta colores y estilos en `style.css`.
- Cambia los niveles de las habilidades modificando `data-level` en cada elemento `.skill` (valores entre 0 y 100).
- Para mostrar tu foto, guarda una imagen llamada `profile.jpg` en la misma carpeta que `index.html`.
