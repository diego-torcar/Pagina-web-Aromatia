
# 📥 Instrucciones para Descargar y Configurar el Proyecto

## 🧹 Limpieza del Proyecto (IMPORTANTE)

Antes de usar el proyecto, **elimina estas carpetas/archivos temporales**:

```
app/node_modules/     ← Eliminar (se regenera con yarn install)
app/.next/           ← Eliminar (archivos de build)
app/.build/          ← Eliminar (archivos de build)
app/dev.db           ← Eliminar (base de datos de desarrollo)
app/*.log            ← Eliminar (archivos de log)
```

## 🚀 Inicio Ultra-Rápido

### **Opción 1: Script Automático**

**En Mac/Linux:**
```bash
./inicio-rapido.sh
```

**En Windows:**
```cmd
inicio-rapido.bat
```

### **Opción 2: Manual**

1. **Instalar dependencias:**
   ```bash
   cd app
   yarn install  # o npm install
   ```

2. **Configurar entorno:**
   ```bash
   cp .env.example .env
   ```

3. **Base de datos:**
   ```bash
   yarn prisma db push
   yarn prisma db seed
   ```

4. **Ejecutar:**
   ```bash
   yarn dev
   ```

## 📁 Archivos Importantes Incluidos

✅ **Código fuente completo** de la aplicación  
✅ **Guía de instalación detallada** (GUIA_INSTALACION.md)  
✅ **README** con instrucciones básicas  
✅ **Scripts de inicio automático** (.sh y .bat)  
✅ **Configuración de ejemplo** (.env.example)  
✅ **Imágenes y assets** originales  
✅ **Base de datos configurada** con SQLite (fácil setup)  

## 🎯 Lo Que Obtienes

- ✨ **Página web profesional** lista para usar
- 🛠️ **Código 100% editable** y personalizable  
- 📱 **Diseño responsive** que funciona en todos los dispositivos
- 💬 **Integración WhatsApp** para recibir pedidos
- 🎨 **Sistema de colores** fácil de personalizar
- 📷 **Galería de productos** optimizada
- 🔗 **Enlaces a redes sociales** integrados

## 🆘 Si Algo Sale Mal

1. **Verifica que Node.js esté instalado** (versión 18+)
2. **Elimina node_modules y reinstala:**
   ```bash
   rm -rf node_modules
   yarn install
   ```
3. **Consulta la guía detallada:** GUIA_INSTALACION.md
4. **Verifica el archivo .env** existe y tiene la configuración correcta

---

🎉 **¡Tu proyecto Aromatia está listo para personalizar y usar!**

Recuerda: puedes cambiar colores, productos, información de contacto y mucho más editando los archivos del proyecto.
