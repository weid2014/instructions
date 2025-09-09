import pluginVue from 'eslint-plugin-vue'
import parser from '@typescript-eslint/parser'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import eslintPluginPrettierRecommanded from 'eslint-plugin-prettier/recommended'

export default [
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      parserOptions: {
        // ts项目需要用到这个
        parser: parser,
        ecmaVersion: 'latest'
      }
    },
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
        }
      ],
      'vue/no-setup-props-destructure': ['off'] // 关闭 props 解构的校验 (props解构丢失响应式)
    }
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  eslintPluginPrettierRecommanded
]
