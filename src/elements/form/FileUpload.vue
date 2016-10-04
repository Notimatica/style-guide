<template>
  <div class="form-group file-upload" :class="{ 'has-error': error }">
    <label v-if="label" class="control-label">{{ label }}:</label>

    <div v-if="!file && !selected">
      <div class="dropzone-area" :class="{'dropzone-area-small': small}">
        <div class="dropzone-text">
          <span class="dropzone-title">{{ title }}</span>
          <span class="dropzone-info" v-if="info">{{ info }}</span>
        </div>
        <input
          type="file"
          :id="name"
          :name="name"
          @change="onFileChange">
      </div>
    </div>
    <div class="dropzone-preview" v-else>
      <span v-if="isPreviewable">
        <img :src="file" alt="icon" v-if="file" />
        <img :src="previewImage" alt="icon" v-if="selected" />
      </span>

      <span v-else>
        <span class="filename" v-if="selected">{{ selected.name }}</span>
        <a :href="file" title="Uploaded file" v-if="file">{{ file }}</a>
      </span>

      <div class="dropzone-close modal-close" @click="removeFile">
        <i class="ion-close-round"></i>
      </div>
    </div>

    <p class="help-block" v-if="error">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'file'
    },
    title: {
      type: String,
      default: 'Drop image here or click to select'
    },
    info: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    message: {
      type: String,
      default: 'You have to fill it.',
      twoWay: true
    },
    file: {
      type: String,
      default: null
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: null,
      previewImage: '',
      progress: {
        loaded: 0,
        total: 0,
        percent: 0
      }
    }
  },
  computed: {
    /**
     * If selected or uploaded file can be previewed.
     */
    isPreviewable () {
      if (this.selected) {
        return /^image\//.test(this.selected.type)
      }

      if (this.file) {
        const extension = this.file.split('.').pop()
        return ['png', 'jpg', 'jpeg', 'gif'].indexOf(extension) !== -1
      }

      return false
    }
  },
  methods: {
    /**
     * File was selected.
     *
     * @param  {Object} e The event
     */
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files

      if (files.length > 0) {
        this.selected = files[0]
        this.$emit('selected', this.selected, this.name)
      }
    },

    /**
     * Render selected image preview.
     */
    makeImagePreview () {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.previewImage = e.target.result
      }
      reader.readAsDataURL(this.selected)
    },

    /**
     * Remove file.
     *
     * @param  {Object} e The event
     */
    removeFile (e) {
      this.selected = null
      this.file = null

      this.$emit('removed')
    },

    /**
     * Reset input error.
     */
    resetError () {
      this.error = false
      this.message = ''
    }
  },
  events: {
    'form:reset': function () {
      this.selected = null
      this.file = null

      this.$emit('removed')
    },
    'upload:uploaded': function (file) {
      this.file = file
    },
    'upload:progress': function (e) {
      this.progress.loaded = e.loaded
      this.progress.total = e.total
      this.progress.percent = (e.loaded / e.total) * 100
    }
  },
  watch: {
    'selected': function () {
      if (this.isPreviewable) this.makeImagePreview()

      this.resetError()
    },
    'file': function () {
      this.resetError()
    }
  }
}
</script>
