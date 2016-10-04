<template>
  <header>
    <h2>Components</h2>
  </header>

  <h4>Notification preview</h4>
  <notification-preview-chrome
    title="New notification"
    body="Lorem ipsum dolor sit amet, his in omnes luptatum definitiones."
    domain="subscribe.notimatica.io">
  </notification-preview-chrome>
</div>
</template>

<script>
import NotificationPreviewChrome from 'src/elements/notifications/Chrome'

export default {
  components: {
    NotificationPreviewChrome
  }
}
</script>
