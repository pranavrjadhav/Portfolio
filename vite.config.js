import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(
    {
      // Fast Refresh is enabled by default
      fastRefresh: true, 
      // Add this line if you are using .jsx or .tsx files explicitly
      // include: "**/*.{jsx,tsx}", 
    }
  ),tailwindcss()],
})
