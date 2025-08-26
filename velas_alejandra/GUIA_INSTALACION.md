
# 🕯️ Guía de Instalación - Proyecto Aromatia

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **Git** - [Descargar aquí](https://git-scm.com/)
- **Yarn** (recomendado) o npm
- Un editor de código como **VS Code**

## 🚀 Instalación Paso a Paso

### 1. **Preparar el Proyecto**
```bash
# Navegar a la carpeta del proyecto
cd ruta/donde/descargaste/velas_alejandra

# Ir a la carpeta de la aplicación
cd app

# Instalar dependencias
yarn install
# O si usas npm:
# npm install
```

### 2. **Configurar Variables de Entorno**
Crea un archivo `.env` en la carpeta `app/` con el siguiente contenido:

```env
# Base de datos (para desarrollo local, puedes usar SQLite)
DATABASE_URL="file:./dev.db"

# Secreto de NextAuth (genera uno nuevo)
NEXTAUTH_SECRET="tu-secreto-muy-seguro-aqui-cambialo"

# URL de la aplicación (para desarrollo local)
NEXTAUTH_URL="http://localhost:3000"
```

### 3. **Configurar Base de Datos**
```bash
# Generar el cliente de Prisma
yarn prisma generate

# Crear/actualizar la base de datos
yarn prisma db push

# Poblar con datos iniciales
yarn prisma db seed
```

### 4. **Ejecutar el Proyecto**
```bash
# Modo desarrollo
yarn dev

# El proyecto estará disponible en: http://localhost:3000
```

## 🛠️ Comandos Útiles

### **Desarrollo**
```bash
# Ejecutar en modo desarrollo
yarn dev

# Verificar tipos de TypeScript
yarn tsc --noEmit

# Linter
yarn lint
```

### **Base de Datos**
```bash
# Ver la base de datos en interfaz gráfica
yarn prisma studio

# Reset de base de datos
yarn prisma db push --force-reset

# Crear nueva migración
yarn prisma migrate dev --name nombre-migracion
```

### **Producción**
```bash
# Construir para producción
yarn build

# Ejecutar en producción
yarn start
```

## 🔧 Personalización

### **Cambiar Información de Contacto**
Edita el archivo `app/page.tsx` y busca:
```javascript
const phoneNumber = "523332471667"  // Cambiar número de WhatsApp
```

Y también actualiza los enlaces de redes sociales en la sección de contacto.

### **Modificar Productos**
En `app/page.tsx` encuentra el array `products` y modifica:
```javascript
const products = [
  {
    id: 1,
    name: "Nombre de tu vela",
    description: "Descripción personalizada",
    price: "$200",
    image: "/ruta/a/tu/imagen.jpg"
  }
  // ... más productos
]
```

### **Cambiar Colores y Estilos**
Modifica `app/globals.css` en la sección `:root` para cambiar la paleta de colores:
```css
:root {
  --primary: 92 71 58; /* Color principal */
  --background: 251 249 246; /* Color de fondo */
  /* ... más colores */
}
```

### **Agregar Nuevas Imágenes**
1. Coloca tus imágenes en la carpeta `public/`
2. Úsalas en el código con `/nombre-imagen.jpg`

## 📱 Configuración para Producción

### **Variables de Entorno para Producción**
```env
# Base de datos de producción (por ejemplo, PostgreSQL)
DATABASE_URL="postgresql://usuario:password@host:5432/database"

# Secreto seguro para producción
NEXTAUTH_SECRET="un-secreto-muy-seguro-y-largo-para-produccion"

# URL de tu dominio
NEXTAUTH_URL="https://tudominio.com"
```

### **Despliegue**

**Opciones populares:**
- **Vercel** (recomendado para Next.js) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)  
- **Railway** - [railway.app](https://railway.app)

## 📁 Estructura del Proyecto

```
velas_alejandra/
├── app/
│   ├── app/                 # Páginas y componentes
│   │   ├── globals.css     # Estilos globales
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Página principal
│   ├── components/         # Componentes reutilizables
│   ├── prisma/            # Configuración de base de datos
│   ├── public/            # Archivos estáticos (imágenes, etc.)
│   ├── scripts/           # Scripts de utilidad
│   ├── package.json       # Dependencias
│   └── .env              # Variables de entorno
```

## 🆘 Solución de Problemas

### **Error: "Module not found"**
```bash
# Reinstalar dependencias
rm -rf node_modules
yarn install
```

### **Error de Base de Datos**
```bash
# Resetear base de datos
yarn prisma db push --force-reset
yarn prisma db seed
```

### **Puerto ocupado**
```bash
# Usar puerto diferente
yarn dev -p 3001
```

### **Errores de TypeScript**
```bash
# Verificar tipos
yarn tsc --noEmit
```

## 💡 Tips Adicionales

1. **Backup**: Siempre haz backup antes de hacer cambios importantes
2. **Git**: Usa control de versiones para trackear cambios
3. **Testing**: Prueba en diferentes dispositivos y navegadores
4. **Performance**: Optimiza imágenes antes de subirlas
5. **SEO**: Actualiza meta tags en `layout.tsx` para mejor posicionamiento

## 📞 Funcionalidades Incluidas

✅ **WhatsApp Integration** - Botones que abren WhatsApp directamente  
✅ **Responsive Design** - Funciona en móvil, tablet y desktop  
✅ **Animaciones** - Efectos suaves con Framer Motion  
✅ **Formulario de Contacto** - Envía mensajes a WhatsApp  
✅ **Galería de Productos** - Catálogo con imágenes optimizadas  
✅ **SEO Optimizado** - Meta tags y estructura correcta  
✅ **Enlaces a Redes** - Facebook, Instagram integrados  

## 🔄 Actualizaciones

Para actualizar el proyecto:
1. Haz backup de tus cambios
2. Actualiza dependencias: `yarn upgrade`
3. Verifica que todo funcione: `yarn dev`

---

¡Listo! Ya tienes todo lo necesario para trabajar con tu proyecto Aromatia. 

**¿Necesitas ayuda?** Consulta esta guía o busca en la documentación oficial de [Next.js](https://nextjs.org/docs).
