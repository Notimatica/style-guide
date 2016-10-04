<template>
  <div class="overlay" :class="type" v-if="show">
    <div class="text">
      <i :class="icon"></i><br />
      {{ overlayText }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'loading'
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    /**
     * Icon classes.
     *
     * @return {Object}
     */
    icon () {
      const type = this.type

      return {
        'ion-ios-loop-strong': type === 'loading',
        'spin': type === 'loading',
        'ion-android-warning': type === 'error'
      }
    },

    /**
     * Overlay text.
     *
     * @return {String}
     */
    overlayText () {
      return this.text
    }
  },
  methods: {
    /**
     * Show loading overlay.
     */
    loading () {
      this.show = true
      this.type = 'loading'
      this.text = 'Loading'
    },

    /**
     * Show error overlay.
     */
    error () {
      this.show = true
      this.type = 'error'
      this.text = 'Something bad happend'
    }
  },
  events: {
    'app:ready': function () {
      this.show = false
    },
    'app:loading': function () {
      this.loading()
    },
    'app:error': function () {
      this.error()
    }
  }
}
