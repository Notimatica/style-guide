<template>
  <button type="button" class="btn" :class="[typeClass, sizeClass]" :disabled="disabled">
    <i v-if="icon && ! loading" :class="icon"></i>
    <i v-if="icon && loading" class="ion-ios-loop-strong spin"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    typeClass () {
      const type = this.type

      return {
        'btn-success': type === 'success',
        'btn-warning': type === 'warning',
        'btn-info': type === 'info',
        'btn-danger': type === 'danger',
        'btn-default': type === 'default',
        'btn-primary': type === 'primary',
        'btn-link': type === 'link'
      }
    },
    sizeClass () {
      const size = this.size

      return {
        'btn-lg': size === 'lg',
        'btn-sm': size === 'sm',
        'btn-xs': size === 'xs'
      }
    }
  },
  events: {
    'button:loading': function () {
      this.disabled = true
      this.loading = true
    },
    'button:loaded': function () {
      this.disabled = false
      this.loading = false
    },
    'button:disabled': function () {
      this.disabled = true
    },
    'button:enabled': function () {
      this.disabled = false
    }
  }
}
