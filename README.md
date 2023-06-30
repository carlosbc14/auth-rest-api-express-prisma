# Authentication REST API

API REST para manejar autenticación de usuario y rutas protegidas. Desarrollada con tecnologías como [express](https://expressjs.com/es/), [prisma](https://www.prisma.io/), [jsonwebtoken](https://jwt.io/), etc.

## Variables de entorno

- **MODE**: modo que puede tener el valor de `development` o `production`.
- **PORT**: por defecto es 5000.
- **DATABASE_URL**: url de la base de datos, en este caso se usó MySQL.
- **JWT_SECRET**: secret para generar el token con jwt.
- **JWT_REFRESH**: secret para generar el refresh token con jwt.
