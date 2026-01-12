# Panadería Pastelería Maria Elena - Instrucciones de Ejecución

## ¿Por qué no funciona al abrir index.html directamente?

Esta es una aplicación React moderna que necesita un proceso de compilación. No puede ejecutarse simplemente abriendo el archivo HTML en el navegador.

## Opción 1: Ejecutar localmente con Node.js (Recomendado)

### Requisitos previos:
- Tener Node.js instalado (versión 16 o superior)
- Puedes descargarlo desde: https://nodejs.org/

### Pasos para ejecutar:

1. **Abre una terminal o línea de comandos** en la carpeta del proyecto

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en la dirección que aparece en la terminal (generalmente http://localhost:5173)

¡Listo! Tu aplicación estará funcionando.

---

## Opción 2: Compilar para producción (Build)

Si quieres generar archivos estáticos para subir a un servidor web:

1. **Instala las dependencias** (si aún no lo has hecho):
   ```bash
   npm install
   ```

2. **Genera el build de producción:**
   ```bash
   npm run build
   ```

3. Los archivos compilados estarán en la carpeta `/dist`

4. **Previsualiza el build:**
   ```bash
   npm run preview
   ```

---

## Opción 3: Seguir usando Figma Make

La forma más sencilla es seguir trabajando directamente en Figma Make, donde todo funciona sin configuración adicional.

---

## Opción 4: Desplegar en un hosting gratuito

Puedes subir tu aplicación a servicios gratuitos como:

- **Vercel** (https://vercel.com) - Recomendado
- **Netlify** (https://netlify.com)
- **GitHub Pages**

Estos servicios compilarán automáticamente tu código React.

---

## Estructura del Proyecto

```
/
├── App.tsx                          # Componente principal
├── components/
│   ├── Navbar.tsx                   # Barra de navegación
│   ├── HeroBanner.tsx               # Banner principal con registro
│   ├── ProductsSection.tsx          # Sección de productos
│   ├── Sidebar.tsx                  # Barra lateral (carrito, contacto, etc.)
│   └── Footer.tsx                   # Pie de página
├── styles/
│   └── globals.css                  # Estilos globales
└── package.json                     # Configuración del proyecto
```

---

## Características de la Aplicación

✅ Navbar con menú de navegación, búsqueda y carrito
✅ Banner principal con slogan "El sabor que endulza tus días"
✅ Panel de registro/inicio de sesión
✅ Productos destacados con precios reales:
   - Pan Mantequilla: 4 por S/ 1.00
   - Pan Italiano: 4 por S/ 1.00
   - Pastel Flan: S/ 2.50 x porción
   - Empanadas de Globo: S/ 0.50 c/u
   - Torta: S/ 25.00
   - Pastel de Chocolate: S/ 22.00
✅ Barra lateral con:
   - Carrito de compras
   - Información de contacto: +51 916 303 949
   - Servicio de delivery
   - Ubicación: 169 Av. Elvira García y García
✅ Diseño responsive
✅ Paleta de colores cálidos (crema, dorado, marrón)

---

## Soporte

Si tienes problemas para ejecutar la aplicación:

1. Asegúrate de tener Node.js instalado
2. Verifica que estás en la carpeta correcta del proyecto
3. Elimina la carpeta `node_modules` y el archivo `package-lock.json`, luego ejecuta `npm install` nuevamente
4. Si el problema persiste, consulta la documentación de Vite: https://vitejs.dev/

---

**Desarrollado en Figma Make**
Diciembre 2025
