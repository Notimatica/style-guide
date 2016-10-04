<template>
  <div class="form-group select dropdown" :class="{open: show}">
    <label v-if="label" class="control-label">{{ label }}:</label>
    <button @click="show = !show" type="button" class="btn btn-default" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <span v-if="selected">{{ selected }}</span>
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" v-show="show" role="dropdown">
      <li
        v-for="option in options"
        class="dropdown-item">
        <a @click.prevent="select(option)" href="#">{{ option.text }}</a>
      </li>
    </ul>
    <span class="help-block" v-if="help && !error">{{ help }}</span>
    <span class="help-block" v-if="error">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: null,
      twoWay: true
    },
    error: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    message: {
      type: String,
      default: 'You have to select it.',
      twoWay: true
    },
    help: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Choose:'
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    selected () {
      const option = this.options.find(o => o.value === this.value)

      if (option) {
        return option.text
      }

      return this.placeholder
    }
  },
  methods: {
    select (option) {
      this.show = false

      if (this.error) {
        this.error = false
        this.message = ''
      }

      if (this.value !== option.value) {
        this.selected = option.text
        this.value = option.value
        this.$emit('selected', option.value)
      }
    }
  }
}
</script>
