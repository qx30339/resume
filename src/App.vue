<template lang="pug">
  //- template lang="pug"
  #app(:class="textClasses")
    resume#resume(
      @add-css="addCSS",
      @add-app="addApp",
      @add-codes="addCodes"
    )
    // await

    codes#app-vue(
      v-if="loadApp",
      :codes-text="appText"
    )
    // await

    codes#codes-vue(
      v-if="loadCodes",
      :codes-text="codesText"
    )
    // await

</template>

<script>
  // script
  import Resume from 'components/Resume'
  import Codes from 'components/Codes'
  // await

  import appText from 'assets/text/app.txt'
  import codesText from 'assets/text/codes.txt'
  // await

  export default {
    data () {
      return {
        appText,
        codesText,
        loadApp: false,
        loadCodes: false,
        counter: 0,
        textClasses: [],
        preLoad: [
          'padding',
          'color'
        ]
      }
    },
  // await

    methods: {
      addCSS () {
        this.textClasses
          .push(this.preLoad[this.counter++])

        if (this.counter === 2) {
          require('highlight.js/styles/atom-one-dark.css')
        }
      },
  // await

      addApp () {
        this.loadApp = true
      },

      addCodes () {
        this.loadCodes = true
      }
    },
  // await

    components: {
      Resume,
      Codes
    }
  }
  // await

</script>

<style lang="sass">
  // style lang="sass"
  $code: #abb2bf
  $code-bg: #282c34
  $code-border: #111
  $link: #d19a66
  // await

  *
    box-sizing: border-box
    transition: all .4s ease-out

  html, body, #app
    height: 100%

  body, pre
    margin: 0
  // await

  #app
    display: flex
    padding: 0 1.5%
    // await

    section
      flex: 0 30%
      margin-top: 1.2%

      h2
        font-family: monospace
        margin-top: 0

      pre
        border-radius: 4px
        overflow-y: auto
        white-space: pre-wrap
        max-height: 91%
        word-wrap: break-word

        a
          color: $link
          text-decoration: none
    // await

    #app-vue
      margin:
        left: 1.2%
        right: 1.2%

    #resume
      flex: 0 40%

      pre
        h2:first-child
          margin-top: 5px

        ul:last-child
          margin-bottom: 0
  // await

  .padding
    section
      margin-top: 1.5% !important

      pre
        padding: 12px
  // await

  .color
    pre
      color: $code
      border: 3px solid $code-border
      background-color: $code-bg
</style>
