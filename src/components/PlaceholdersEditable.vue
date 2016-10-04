<template>
  <div class="form-group placehoder-editable" :class="{'disabled': disabled, 'has-warning': error}">
    <label v-if="label" class="control-label">{{ label }}:</label>
    <div class="form-control" v-show="showMarkup" @mousedown="focus">{{{ markup }}}</div>
    <textarea
      maxlength="100"
      class="form-control"
      v-model="value"
      v-show=" ! showMarkup"
      @blur="blur"></textarea>
    <span class="help-block" v-if="help && !error">{{ help }}</span>
    <span class="help-block" v-if="error">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      twoWay: true,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: 'You have to update this.'
    },
    help: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showMarkup: true
    }
  },
  computed: {
    markup () {
      if (this.value !== '') {
        return this.convertMarkup()
      }
      return '<span class="placeholder">' + (this.required ? 'required' : 'optional') + '</span>'
    }
  },
  methods: {
    convertMarkup () {
      const regex = /%(\w+)%/g

      return this.value.replace(regex, (all) => {
        return '<code>' + all + '</code>'
      })
    },
    focus (e) {
      this.showMarkup = false
      setTimeout(function () {
        e.target.nextElementSibling.focus()
      }, 50)
    },
    blur (e) {
      this.showMarkup = true
    }
  },
  events: {
    'form:reset': function () {
      this.value = ''
    }
  }
}
</script>
