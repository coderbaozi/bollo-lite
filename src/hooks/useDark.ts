// based windicss class dark mode
import { ref } from 'vue'
import Catch from '@/utils/cache'
type themeType = 'light'|'dark'

export default function useDark (mode: themeType = 'light') {
  
  let theme = ref<themeType>(Catch.getCatch('theme') ?? mode)

  // init
  document.documentElement.classList.add(theme.value)

  function toggleTheme() {
    document.documentElement.classList.remove(theme.value)
    theme.value === 'dark' ? theme.value ='light' : theme.value = 'dark'
    document.documentElement.classList.add(theme.value)
    Catch.setCatch('theme',theme.value)
  }

  return {
    theme,
    toggleTheme
  }
}