<template>
  <header>
    <h2>Image uploading</h2>
  </header>

  <file-upload
    label="User avatar"
    info="Should be squared, 80*80px. Will be cropped.">
  </file-upload>
</template>

<script>
import FileUpload from 'components/FileUpload'

export default {
  components: {
    FileUpload
  }
}
</script>
