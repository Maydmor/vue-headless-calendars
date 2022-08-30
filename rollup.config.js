import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import packageJson from "./package.json";

export default [
    {
      input: 'src/components/index.ts',
      output: [
        {
          format: 'esm',
          file: packageJson.module,
          sourcemap: true
        },
        {
          format: 'cjs',
          file: packageJson.main,
          sourcemap: true
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