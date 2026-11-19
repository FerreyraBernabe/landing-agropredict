# AgroPredict · Azahar — Landing Page

Sitio estático (HTML + CSS + JS), sin dependencias ni build.

El contenido se basa en `doc/[doc]-documento_maestro.md`, la fuente única de verdad sobre la empresa (AgroPredict), el producto (Azahar) y el modelo de negocio con proveedores aliados.

## Estructura
```
landing-admin/
├── landing.html          # Estructura y contenido
├── css/
│   └── styles.css        # Todos los estilos (variables de marca al inicio)
├── js/
│   └── main.js           # Menú mobile + formulario de contacto
├── assets/
│   └── img/
│       ├── logo.png       # Logo AgroPredict
│       └── hero-bg.jpg    # Imagen de fondo del hero
└── doc/                  # Documentación del proyecto (ver documento maestro)
```

## Cómo verlo
Abrí `landing.html` en el navegador. Si las imágenes no cargan por `file://`,
serví la carpeta con un servidor local:

    python -m http.server 8000

y entrá a http://localhost:8000/landing.html

## Personalizar
- Colores y tipografías: variables `:root` al inicio de `css/styles.css`.
- Datos de contacto: sección `#contacto` en `landing.html`.
- El formulario es demo (valida en el navegador). Para recibir mensajes reales,
  conectá un servicio como Formspree o un endpoint propio en `js/main.js`.
