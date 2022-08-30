import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
    {
      input: 'src/components/index.ts',
      output: [
        {
          format: 'esm',
          dir: 'dist/library.esm.js'
        },
        {
          format: 'cjs',
          dir: 'dist/library.ssr.js'
        }
      ],
      external: ['vue'],
      plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            experimentalDecorators: true,
            module: 'es2022'
        }), vue(), peerDepsExternal()
      ]
    }
  ]