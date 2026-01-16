import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Define explicitamente onde estão os testes
    include: ['src/tests/**/*.test.ts'],
    // Habilita APIs globais como describe/it/expect sem precisar importar (opcional, mas comum)
    globals: true,
    // Define o ambiente como Node.js (padrão para backend)
    environment: 'node',
  },
});
