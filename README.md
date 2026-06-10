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

## Migraciones (Base de Datos)

### Ejecutar migraciones localmente

```bash
npm run build
npm run migrate:run
```

### Revertir última migración

```bash
npm run migrate:revert
```

## Despliegue en Render + Aiven

### Pasos:

1. **En Render, crear nuevo Web Service y conectar repo GitHub.**

2. **Configurar en Render (Build & Deploy):**
   - **Build Command:** `npm ci && npm run build`
   - **Release Command:** `npm run migrate:run`
   - **Start Command:** `npm run start:prod`

3. **Variables de entorno en Render (copiar de Aiven):**
   ```
   DB_HOST=xxxxx.aivencloud.com
   DB_PORT=12345
   DB_USER=avnadmin
   DB_PASS=your_password
   DB_NAME=defaultdb
   DB_SSL=true
   NODE_ENV=production
   ```

4. **Verificar en Aiven:**
   - Tabla `students` se crea automáticamente en primer despliegue.
   - Endpoints disponibles en `https://your-render-url.com/api/docs`

## Resumen de configuración
