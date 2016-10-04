<template>
  <div class="messages">
    <div v-if="message" class="alert alert-dismissible" :class="'alert-' + type" transition="fade" role="alert">
      <button type="button" class="close" aria-label="Close" @click="clear">
        <span aria-hidden="true">&times;</span>
      </button>
      {{ message }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  position:fixed;
  top: 0;
  z-index:1000;
  width: 500px;
  left: 50%;
  margin-left: -250px;
}
.alert {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.75);
  .close {
    top: 3px;
  }
}
.fade-transition {
  transition: all 0.4s ease;
  opacity: 1;
  overflow: hidden;
  max-height: 100px;
}
.fade-enter, .fade-leave {
  opacity: 0;
  max-height: 0;
  padding: 0 15px;
}
</style>

<script>
export default {
  data () {
    return {
      type: '',
      message: ''
    }
  },
  methods: {
    show (type, message, permanent = false) {
      this.type = type
      this.message = message

      if (!permanent) setTimeout(this.clear, 3000)
    },
    clear () {
      this.type = ''
      this.message = ''
    }
  }
}
</script>
