<template>
  <!-- Modal -->
  <div
    class="modal fade"
    tabindex="-1"
    role="dialog"
    :id="id"
    :aria-labelledby="labelId">
    <div class="modal-dialog" :class="[typeClass, sizeClass]" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" :id="labelId">{{ title }}</h4>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      requred: true
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    labelId () {
      return this.id + '-label'
    },
    typeClass () {
      const type = this.type

      return {
        'modal-success': type === 'success',
        'modal-warning': type === 'warning',
        'modal-info': type === 'info',
        'modal-danger': type === 'danger',
        'modal-default': type === 'default',
        'modal-primary': type === 'primary'
      }
    },
    sizeClass () {
      const size = this.size

      return {
        'modal-lg': size === 'lg',
        'modal-sm': size === 'sm',
        'modal-xs': size === 'xs'
      }
    }
  },
  methods: {
    close () {
      $('#' + this.id).modal('hide')
    }
  },
  events: {
    'modal:close': function () {
      console.log('close fired')
      this.close()
    }
  }
}
</script>
