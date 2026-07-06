# Deploy en Vercel

Este sitio es estatico. No requiere build ni instalacion de dependencias.

## Opcion rapida: Vercel Drop

1. Entra a https://vercel.com/drop
2. Inicia sesion o crea una cuenta.
3. Arrastra la carpeta `gonce-web` completa, o el ZIP `gonce-web-vercel.zip`.
4. Asigna un nombre de proyecto, por ejemplo `gonce`.
5. Haz clic en `Deploy`.

Vercel publicara una URL temporal tipo:

```text
https://gonce.vercel.app
```

## Conectar dominio de Namecheap

1. En Vercel, abre el proyecto.
2. Ve a `Settings` > `Domains`.
3. Agrega tu dominio, por ejemplo `tudominio.com`.
4. Vercel mostrara los registros DNS exactos.
5. En Namecheap, entra a `Domain List` > `Manage` > `Advanced DNS`.
6. Agrega o ajusta los registros que Vercel indique.

Configuracion comun:

```text
A Record     @      76.76.21.21
CNAME Record www    cname.vercel-dns.com
```

Despues de guardar, espera la propagacion DNS. Puede tardar minutos o hasta 24-48 horas.

## Archivos que deben estar en la raiz del deploy

```text
index.html
styles.css
script.js
assets/
README-DEPLOY.md
```
