<template>
  <canvas width="400" height="400"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    type: {
      type: String,
      default: 'pie'
    },
    data: {
      type: Object,
      required: true
    }
  },

  ready () {
    /* eslint no-new: 0 */
    const ctx = this.$el.getContext('2d')
    new Chart(ctx, this.data)
  },
  watch: {
    'data': function () {
      /* eslint no-new: 0 */
      const ctx = this.$el.getContext('2d')
      new Chart(ctx, this.data)
    }
  }
}
</script>
