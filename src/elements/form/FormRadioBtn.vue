<template>
  <div class="radio" :class="{ 'disabled': disabled }">
    <label :class="{ 'active': active }">

      <input type="radio" autocomplete="off"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        @click="handleClick"
      />

      <i :class="{
        'ion-ios-circle-outline': !active,
        'ion-ios-circle-filled': active
      }"></i>

      <slot></slot>

    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active () {
      return this.$parent.value === this.value
    },
    name () {
      return this.$parent.name
    }
  },
  methods: {
    handleClick () {
      this.$parent.value = this.value
    }
  },
  created () {
    if (this.$parent.value === this.value) {
      this.checked = true
    } else if (!this.$parent.value.length && this.checked) {
      this.$parent.value = this.value
    }
  }
}
