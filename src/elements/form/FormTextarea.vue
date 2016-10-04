<template>
  <div class="form-group" :class="{ 'disabled': disabled, 'has-error': error }">
    <label v-if="label" class="control-label">{{ label }}:</label>
    <textarea
      class="form-control"
      v-model="value"
      :rows="rows"
      :cols="cols"
      :placeholder="placeholderText"
      :disabled="disabled"
      @input="update">
    </textarea>
    <span class="help-block" v-if="help && !error">{{ help }}</span>
    <span class="help-block" v-if="error">{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      twoWay: true
    },
    error: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    message: {
      type: String,
      default: 'You have to fill it.',
      twoWay: true
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
    },
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 10
    }
  },
  methods: {
    update (e) {
      if (this.error) {
        this.error = false
        this.message = ''
      }
    }
  },
  computed: {
    placeholderText () {
      if (this.placeholder !== '') {
        return this.placeholder
      }

      return this.required ? 'required' : 'optional'
    }
  },
  events: {
    'form:reset': function () {
      this.value = ''
    }
  }
}
