<template>
  <div class="app-screen">
    <div>
      <!-- Menu -->
      <menu></menu>

      <div class="layout">
        <!-- Messages -->
        <messages v-ref:messages></messages>

        <page></page>
      </div>

      <!-- Footer -->
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import Menu from 'src/Menu'
import Messages from 'src/Messages'
import FooterComponent from 'src/Footer'
import Overlay from 'src/Overlay'
import Page from './StyleGuide'

export default {
  components: {
    Menu,
    Messages,
    FooterComponent,
    Overlay,
    Page
  },
  events: {
    'message:success': function (message, permanent) {
      this.$refs.messages.show('success', message, permanent)
    },
    'message:warn': function (message, permanent) {
      this.$refs.messages.show('warning', message, permanent)
    },
    'message:danger': function (message, permanent) {
      this.$refs.messages.show('danger', message, permanent)
    },
    'message:info': function (message, permanent) {
      this.$refs.messages.show('info', message, permanent)
    }
  }
}
</script>
