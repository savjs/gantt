import serve from 'rollup-plugin-serve'
import baseConfig from './rollup.config.base'

export default Object.assign(baseConfig, {
  input: 'demo/main.js',
  output: {
    ...baseConfig.output,
    format: 'iife',
    file: 'dist/main.js'
  },
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8080,
      contentBase: ['dist', 'demo', '']
    })
  ]
})
