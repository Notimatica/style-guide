<template>
  <span>
    <button @click="clicked" type="button" class="btn" :class="[typeClass, sizeClass]" :disabled="disabled" v-if="! isClicked">
      <i v-if="icon" :class="icon"></i>
      <slot></slot>
    </button>
    <div class="btn-group btn-approve" role="group" aria-label="approve" v-else>
      <button @click="approved" type="button" class="btn btn-warning" :class="sizeClass">
        <i v-if="!isLoading" class="ion-checkmark-round"></i>
        <i v-else class="ion-ios-loop-strong spin"></i>
      </button>
      <button @click="cancel" type="button" class="btn btn-default" :class="sizeClass">
        <i class="ion-close-round"></i>
      </button>
    </div>
  </span>
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
      isClicked: false,
      isLoading: false
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
  methods: {
    clicked () {
      this.isClicked = true
      this.$emit('clicked')
    },
    cancel () {
      this.isClicked = false
      this.$emit('canceled')
    },
    approved () {
      this.$emit('approved')
      this.isClicked = false
    }
  },
  events: {
    'button:loading': function () {
      this.disabled = true
      this.isLoading = true
    },
    'button:loaded': function () {
      this.disabled = false
      this.isLoading = false
      this.isClicked = false
    },
    'button:disabled': function () {
      this.disabled = true
    },
    'button:enabled': function () {
      this.disabled = false
    }
  }
}
