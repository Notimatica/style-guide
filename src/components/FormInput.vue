<template>
  <div
    class="form-group"
    :class="{
      'disabled': disabled,
      'has-error': error,
      'inline': inline,
      'form-group-sm': size === 'small'
    }">
    <label v-if="label" class="control-label">{{ label }}:</label>
    <div :class="{ 'input-group': group }">
      <span v-if="group && group.left" class="input-group-addon">{{{ groupText }}}</span>
      <input
        class="form-control"
        v-model="value"
        :type="type"
        :placeholder="placeholderText"
        :disabled="disabled"
        @input="update" />
      <input v-if="autocomplete" style="display:none" :type="type" :name="fakeField"/>
      <span v-if="group && group.right" class="input-group-addon">{{{ groupText }}}</span>
    </div>

    <p class="help-block" v-if="help && !error">{{ help }}</p>
    <p class="help-block" v-if="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: ''
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
    autocomplete: {
      type: Boolean,
      default: true
    },
    group: {
      type: Object,
      default: null
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
      if (this.placeholder.length > 0) {
        return this.placeholder
      }

      return this.required ? 'required' : 'optional'
    },
    groupText () {
      return this.group.icon
        ? '<i class="' + this.group.icon + '"></i>' : this.group.text
    },
    fakeField () {
      return Math.random().toString(36).substr(2, 5)
    }
  },
  events: {
    'form:reset': function () {
      this.value = ''
    }
  }
}
