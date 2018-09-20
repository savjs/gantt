import vue from 'rollup-plugin-vue'

const isProduction = !process.env.ROLLUP_WATCH

export default {
  plugins: [
    vue({
      template: {
        isProduction,
      },
      css: true,
    })
  ]
}
