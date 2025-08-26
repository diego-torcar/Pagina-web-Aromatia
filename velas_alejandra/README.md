
# 🕯️ Aromatia - Página Web de Velas Artesanales

Una hermosa página web construida con **Next.js** para mostrar y vender velas artesanales hechas a mano.

![Aromatia](./app/public/aromatia-logo.jpg)

## ✨ Características

- 🎨 **Diseño Elegante**: Minimalista con colores cálidos y tipografía profesional
- 📱 **Totalmente Responsive**: Funciona perfectamente en móvil, tablet y desktop  
- 💬 **Integración WhatsApp**: Botones que abren WhatsApp directamente para pedidos
- 🎭 **Animaciones Suaves**: Efectos visuales con Framer Motion
- 📷 **Galería de Productos**: Catálogo optimizado con imágenes de alta calidad
- 🔗 **Redes Sociales**: Enlaces directos a Facebook e Instagram
- 📧 **Formulario de Contacto**: Envía mensajes directamente a WhatsApp

## 🚀 Instalación Rápida

1. **Instalar dependencias:**
   ```bash
   cd app
   yarn install
   ```

2. **Configurar base de datos:**
   ```bash
   yarn prisma db push
   yarn prisma db seed
   ```

3. **Ejecutar proyecto:**
   ```bash
   yarn dev
   ```

4. **Abrir en el navegador:** http://localhost:3000

📖 **Para instrucciones detalladas, consulta [GUIA_INSTALACION.md](./GUIA_INSTALACION.md)**

## 🛠️ Personalización Rápida

### Cambiar Información de Contacto
Edita `app/app/page.tsx`:
```javascript
const phoneNumber = "523332471667"  // Tu número de WhatsApp
```

### Modificar Productos
En `app/app/page.tsx` busca el array `products` y personaliza tu catálogo.

### Cambiar Colores
Modifica `app/app/globals.css` en la sección `:root`.

## 📁 Estructura

```
velas_alejandra/
├── app/                    # Aplicación Next.js
│   ├── app/               # Páginas y rutas
│   ├── components/        # Componentes UI
│   ├── prisma/           # Base de datos
│   ├── public/           # Imágenes y archivos estáticos
│   └── package.json      # Dependencias
├── GUIA_INSTALACION.md   # Guía detallada
└── README.md            # Este archivo
```

## 🌐 Despliegue

El proyecto está listo para desplegarse en:
- **Vercel** (recomendado)
- **Netlify**  
- **Railway**
- **Cualquier hosting de Node.js**

## 📞 Funcionalidades Incluidas

✅ Landing page profesional  
✅ Catálogo de productos  
✅ Sección "Sobre nosotros"  
✅ Testimonios de clientes  
✅ Formulario de contacto  
✅ Integración completa con WhatsApp  
✅ Enlaces a redes sociales  
✅ SEO optimizado  
✅ Animaciones y efectos visuales  

---

**¡Tu negocio de velas artesanales online está listo!** 🎉

Para soporte detallado, revisa la [Guía de Instalación Completa](./GUIA_INSTALACION.md).
