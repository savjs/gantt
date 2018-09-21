import baseConfig from './rollup.config.base'

export default Object.assign(baseConfig, {
  input: 'demo/main.js',
  output: {
    format: 'es',
    file: 'dist/gantt.esm.js'
  },
  plugins: [
    ...baseConfig.plugins
  ]
})
