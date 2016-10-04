<template>
  <slot></slot>
  <nav v-if="numRows > perPage">
    <ul class="pager">
      <li class="previous" :class="{disabled: currentPage === 0}">
        <a class="btn btn-default" @click.prevent="goPrevious">
          <span aria-hidden="true">&larr;</span> {{ previous }}
        </a>
      </li>
      <li class="next" :class="{disabled: currentPage === numPages-1}">
        <a class="btn btn-default" @click.prevent="goNext">
          {{ next }} <span aria-hidden="true">&rarr;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    previous: {
      type: String,
      default: 'Previous'
    },
    next: {
      type: String,
      default: 'Next'
    },
    perPage: {
      type: Number,
      default: 10
    },
    rowsSelector: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      numRows: 0,
      numPages: 0,
      currentPage: 0
    }
  },
  ready () {
    this.repaginate()
  },
  methods: {
    repaginate () {
      this.prepare()
      this.paginate()
    },
    prepare () {
      this.numRows = $(this.rowsSelector).length
      this.numPages = Math.ceil(this.numRows / this.perPage)
    },
    paginate () {
      $(this.rowsSelector)
        .hide()
        .slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage)
        .show()
    },
    goPrevious () {
      if (this.currentPage !== 0) {
        this.currentPage--
        this.paginate()
      }
    },
    goNext () {
      if (this.currentPage !== this.numPages - 1) {
        this.currentPage++
        this.paginate()
      }
    }
  },
  events: {
    'repaginate': function () {
      this.repaginate()
    }
  }
}
</script>
