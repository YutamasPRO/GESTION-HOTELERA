# GESTION-HOTELERA

API NestJS para la gestión hotelera.

## Swagger

La documentación Swagger se expone en:

- `http://localhost:3000/api/docs`

Si el puerto `3000` ya está en uso, puedes ejecutar la aplicación en otro puerto con el script npm:

```cmd
npm run start:dev:3001
```

Esto funciona en Windows CMD y PowerShell.

## Ejecutar la aplicación

```cmd
npm install
npm run start:dev
```

## Configuración de entorno

Copia el archivo `.env.example` a `.env` y configura tus variables:

```cmd
copy .env.example .env
```

Luego edita `.env` con tus valores.

## Docker

### Construir imagen Docker

```bash
docker build -t gestion-hotelera .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 \
  -e DB_HOST=localhost \
  -e DB_USERNAME=root \
  -e DB_PASSWORD=root123 \
  -e DB_DATABASE=gestion_hotelera \
  gestion-hotelera
```

## Resumen de configuración
