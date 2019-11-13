const PUB_PATH = 'https://bum.github.io/bootstrap-color/theme-play/'
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? PUB_PATH : '/',
}
