<template>
  <div class="checkbox" :class="{ 'disabled': disabled, 'has-error': error }">
    <label>
      <input
        type="checkbox"
        :checked="checked"
        :disabled="disabled"
        @change="update">

      <i :class="{
        'ion-android-checkbox-outline-blank': !checked,
        'ion-android-checkbox-outline': checked
      }"></i>

      <slot></slot>
      <span class="help-block" v-if="error">{{ message }}</span>

    </label>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'You have to check this.'
    }
  },
  methods: {
    update () {
      if (this.error) {
        this.error = false
        this.message = ''
      }

      this.checked = !this.checked
    }
  },
  events: {
    'form:reset': function () {
      this.checked = false
    }
  }
}
