// import alias from 'rollup-plugin-alias'
// import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

const isProduction = !process.env.ROLLUP_WATCH

export default {
  external: ['vue'],
  output: {
    globals: {vue: 'Vue'}
  },
  plugins: [
    vue({
      template: {
        isProduction,
      },
      css: true,
    }),
    resolve()
  ]
}
