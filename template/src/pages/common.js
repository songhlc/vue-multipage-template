import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Enlang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

if (window.locale === 'en') {
  // 设置语言
  locale.use(Enlang)
}

Vue.use(ElementUI, { locale })
