
@echo off
REM 🕯️ Script de Inicio Rápido - Proyecto Aromatia (Windows)
REM Este script configura e inicia el proyecto automáticamente

echo 🕯️  Configurando Proyecto Aromatia...
echo ==================================

REM Navegar a la carpeta de la app
cd app

REM Verificar si existe .env, si no, crearlo desde .env.example
if not exist .env (
    echo 📝 Creando archivo .env...
    copy .env.example .env
    echo ✅ Archivo .env creado. ¡Recuerda personalizarlo!
)

REM Instalar dependencias
echo 📦 Instalando dependencias...
where yarn >nul 2>nul
if %ERRORLEVEL% == 0 (
    yarn install
) else (
    echo ⚠️  Yarn no encontrado, usando npm...
    npm install
)

REM Configurar base de datos
echo 🗄️  Configurando base de datos...
where yarn >nul 2>nul
if %ERRORLEVEL% == 0 (
    yarn prisma generate
    yarn prisma db push
    yarn prisma db seed
) else (
    npx prisma generate
    npx prisma db push
    npx prisma db seed
)

echo.
echo 🎉 ¡Proyecto configurado exitosamente!
echo ==================================
echo.
echo Para iniciar el servidor de desarrollo, ejecuta:
where yarn >nul 2>nul
if %ERRORLEVEL% == 0 (
    echo    yarn dev
) else (
    echo    npm run dev
)
echo.
echo Después abre: http://localhost:3000
echo.
echo 📖 Para más información, consulta README.md o GUIA_INSTALACION.md
echo.
pause
