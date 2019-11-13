import { ref, watch } from '@vue/composition-api'

export const ColorThemes = 'abaculus backstay bubblegum business-tycoon cable cerulean charming cosmo cyborg dalton darkly daydream ectype executive-suite ferula flatly good-news growth harbor hello-world journal litera lumen lux materia minty neon-glow pleasant pulse retro sandstone simplex sketchy slate solar spacelab superhero united vibrant-sea wizardry yeti'.split(
  ' '
)

const ColorThemesUrl = 'https://cdn.jsdelivr.net/npm/bootstrap-color/dist/abaculus/bootstrap-color.css'
const ColorThemesUrlMin = 'https://cdn.jsdelivr.net/npm/bootstrap-color/dist/abaculus/bootstrap-color.min.css'

export const activeTheme = ref('abaculus')
watch(
  () => activeTheme.value,
  () => switchTheme(),
  { lazy: true }
)

// use activeTheme if no "theme" provided
export function themeCssUrl(min, theme) {
  if (!theme) theme = activeTheme.value
  return (min ? ColorThemesUrlMin : ColorThemesUrl).replace(/abaculus/g, theme)
}

export function switchTheme(theme) {
  const cssUrl = themeCssUrl(true, theme)

  const newlink = document.createElement('link')
  newlink.setAttribute('class', 'ThemeSwitch')
  newlink.setAttribute('rel', 'stylesheet')
  newlink.setAttribute('type', 'text/css')
  newlink.setAttribute('href', cssUrl)

  const head = document.getElementsByTagName('head').item(0)
  head.appendChild(newlink)

  // make sure new css loaded before unload previous one
  onloadCSS(newlink, keepOnlyLatestLink)

  saveLatestActiveTheme()
}

function keepOnlyLatestLink() {
  const head = document.getElementsByTagName('head').item(0)
  const oldlinks = document.getElementsByClassName('ThemeSwitch')
  if (oldlinks.length <= 1) return
  for (let i = 0; i < oldlinks.length - 1; ++i) {
    head.removeChild(oldlinks[i])
  }
}

const LAST_ACTIVE_THEME = 'LAST_ACTIVE_THEME'

export function saveLatestActiveTheme() {
  localStorage.setItem(LAST_ACTIVE_THEME, activeTheme.value)
}

(function () {
  const lastActiveTheme = localStorage.getItem(LAST_ACTIVE_THEME)
  if (lastActiveTheme) activeTheme.value = lastActiveTheme
}())

// author: https://github.com/filamentgroup/loadCSS/blob/master/src/onloadCSS.js
function onloadCSS(ss, callback) {
  let called, timeout
  function newcb() {
    if (timeout) clearTimeout(timeout)
    if (!called && callback) {
      called = true
      callback.call(ss)
    }
  }

  if (ss.addEventListener) {
    ss.addEventListener('load', newcb)
  }

  if (ss.attachEvent) {
    ss.attachEvent('onload', newcb)
  }

  // This code is for browsers that don’t support onload
  // No support for onload (it'll bind but never fire):
  //	* Android 4.3 (Samsung Galaxy S4, Browserstack)
  //	* Android 4.2 Browser (Samsung Galaxy SIII Mini GT-I8200L)
  //	* Android 2.3 (Pantech Burst P9070)

  // Weak inference targets Android < 4.4
  if ('isApplicationInstalled' in navigator && 'onloadcssdefined' in ss) {
    ss.onloadcssdefined(newcb)
  }

  // TODO setTimeout auto call newcb if not
  timeout = setTimeout(newcb, 3000)
}
