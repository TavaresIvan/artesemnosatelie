import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ← EXPRIME O SERVIDOR PARA O SANDBOX
    port: 5173, // ← Força sempre a mesma porta (opcional, mas ajuda)
    strictPort: true, // ← Se 5173 estiver ocupada, ele ERRA em vez de mudar a porta
  },
});
