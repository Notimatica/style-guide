<template>
  <div class="multiple-select">
    <label v-if="label">{{ label }}:</label>
    <ul>
      <li class="item" v-for="option in options" @click="select(option)" :class="{ 'selected': option.selected }">
          {{ option.text }}
          <span class="check">
            <i class="ion-checkmark"></i>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    values: {
      type: Array,
      twoWay: true,
      default: []
    },
    label: {
      type: String,
      default: ''
    }
  },
  ready () {
    this.rebuildValues()
  },
  methods: {
    select (option) {
      option.selected = !option.selected
      this.rebuildValues()
    },
    rebuildValues () {
      this.values = []
      this.options.forEach((o) => {
        if (o.selected) {
          this.values.push(o.value)
        }
      })
    }
  }
}
</script>
