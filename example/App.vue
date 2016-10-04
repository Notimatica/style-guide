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
import Page from './StyleGuide'

import Menu from 'components/Menu'
import Messages from 'components/Messages'
import FooterComponent from 'components/Footer'
import Overlay from 'components/Overlay'

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
