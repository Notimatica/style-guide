<template>
  <div class="form-toggle" :class="{ 'on':checked, 'off':!checked, 'disabled': disabled }">
    <div class="track"></div>
    <div class="thumb" @click="update"></div>
    <label @click="update"><slot></slot></label>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      twoWay: true,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    update () {
      if (!this.disabled) {
        this.checked = !this.checked
      }
    }
  },
  'form:reset': function () {
    this.checked = false
  }
}
