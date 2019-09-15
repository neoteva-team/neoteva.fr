/* eslint-disable */
const withImages = require('next-images')
module.exports = 
withImages(
     {
        webpack: (config, { isServer }) => {
          // Fixes npm packages that depend on `fs` module
//          if (!isServer) {
            config.node = {
              fs: 'empty'
            }
//          }
      
          return config
        }
      }
 /*     {
        webpack(config, options) {
          // Further custom configuration here
          config.module.rules.push({
            test: /\.(gif|jpeg|jpg|png|svg)$/,
            loader: '@lesechos/image-size-loader',
            options: {
                publicPath: '/static/'
            }
          })
          return config
        },
      }
 */
)