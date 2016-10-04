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
import Typography from './StyleGuide/Typography'
import Forms from './StyleGuide/Forms'
import Buttons from './StyleGuide/Buttons'
import FileUpload from './StyleGuide/FileUpload'
import Tables from './StyleGuide/Tables'
import Panels from './StyleGuide/Panels'

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
