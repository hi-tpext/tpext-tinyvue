import { createI18n } from 'vue-i18n'
import locale from '@opentiny/vue-locale'

const initI18n = (i18n) =>
    locale.initI18n({
        i18n,
        createI18n
    })

export const i18n = initI18n({ locale: __blang.builder_js_lang_key || 'enUS' })