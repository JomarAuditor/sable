import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],

  build: {
    // Target modern browsers — smaller, faster output
    target: 'es2020',

    // Increase chunk size warning threshold (we have a large reviews list)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code into its own chunk for better caching
        manualChunks: {
          vendor:  ['react', 'react-dom'],
          router:  ['react-router-dom'],
          helmet:  ['react-helmet-async'],
          icons:   ['lucide-react'],
        },
        // Stable, readable chunk names for CDN caching
        chunkFileNames:  'assets/[name]-[hash].js',
        entryFileNames:  'assets/[name]-[hash].js',
        assetFileNames:  'assets/[name]-[hash][extname]',
      },
    },

    // Inline small assets directly in CSS/HTML
    assetsInlineLimit: 4096,

    // Generate source maps for production error tracking (optional — remove if not needed)
    sourcemap: false,

    // CSS code splitting — one file per async chunk
    cssCodeSplit: true,

    // Minification
    minify: 'esbuild',
  },

  // Preview server mirrors production headers
  preview: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options':        'DENY',
      'Referrer-Policy':        'strict-origin-when-cross-origin',
    },
  },
})
