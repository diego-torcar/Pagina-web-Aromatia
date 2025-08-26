
#!/bin/bash

# 🕯️ Script de Inicio Rápido - Proyecto Aromatia
# Este script configura e inicia el proyecto automáticamente

echo "🕯️  Configurando Proyecto Aromatia..."
echo "=================================="

# Navegar a la carpeta de la app
cd app

# Verificar si existe .env, si no, crearlo desde .env.example
if [ ! -f .env ]; then
    echo "📝 Creando archivo .env..."
    cp .env.example .env
    echo "✅ Archivo .env creado. ¡Recuerda personalizarlo!"
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
if command -v yarn &> /dev/null; then
    yarn install
else
    echo "⚠️  Yarn no encontrado, usando npm..."
    npm install
fi

# Configurar base de datos
echo "🗄️  Configurando base de datos..."
if command -v yarn &> /dev/null; then
    yarn prisma generate
    yarn prisma db push
    yarn prisma db seed
else
    npm run prisma generate
    npm run prisma db push  
    npm run prisma db seed
fi

echo ""
echo "🎉 ¡Proyecto configurado exitosamente!"
echo "=================================="
echo ""
echo "Para iniciar el servidor de desarrollo, ejecuta:"
if command -v yarn &> /dev/null; then
    echo "   yarn dev"
else
    echo "   npm run dev"
fi
echo ""
echo "Después abre: http://localhost:3000"
echo ""
echo "📖 Para más información, consulta README.md o GUIA_INSTALACION.md"
echo ""
