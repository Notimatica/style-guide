<template>
  <div class="container style-guide">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <typography></typography>
        <forms></forms>
        <buttons></buttons>
        <file-upload></file-upload>
        <tables></tables>
        <panels></panels>
      </div>
    </div>
  </div>
  <br />
</template>

<style lang="scss">
.style-guide {
  header {
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #f1f1f1;

    h2 {
      font-size: 20px;
    }
  }
}
</style>

<script>
import Typography from './style-guide/Typography'
import Forms from './style-guide/Forms'
import Buttons from './style-guide/Buttons'
import FileUpload from './style-guide/FileUpload'
import Tables from './style-guide/Tables'
import Panels from './style-guide/Panels'

export default {
  components: {
    Typography,
    Forms,
    Buttons,
    FileUpload,
    Tables,
    Panels
  },
  ready () {
    this.$dispatch('message:success', 'Test successful message.', true)
  }
}
</script>
