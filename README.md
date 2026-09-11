# AgroPredict — Landing Page

Sitio estático (HTML + CSS + JS), sin dependencias ni build.

## Estructura
```
agropredict/
├── index.html            # Estructura y contenido
├── css/
│   └── styles.css        # Todos los estilos (variables de marca al inicio)
├── js/
│   └── main.js           # Menú mobile + formulario de contacto
└── assets/
    └── img/
        ├── logo.png       # Logo AgroPredict
        └── hero-bg.jpg    # Imagen de fondo del hero
```

## Cómo verlo
Abrí `index.html` en el navegador. Si las imágenes no cargan por `file://`,
serví la carpeta con un servidor local:

    python -m http.server 8000

y entrá a http://localhost:8000

## Personalizar
- Colores y tipografías: variables `:root` al inicio de `css/styles.css`.
- Datos de contacto: sección `#contacto` en `index.html`.
- El formulario es demo (valida en el navegador). Para recibir mensajes reales,
  conectá un servicio como Formspree o un endpoint propio en `js/main.js`.
