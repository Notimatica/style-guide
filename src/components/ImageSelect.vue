<template>
  <div
    class="form-group image-preview"
    :class="{
      'disabled': disabled,
      'has-error': error,
      'inline': inline,
      'form-group-sm': size === 'small'
    }">
    <label v-if="label" class="control-label">{{ label }}:</label>
    <div v-if="!preview || error">
      <div :class="{ 'input-group': group }">
        <span v-if="group && group.left" class="input-group-addon">{{{ groupText }}}</span>
        <input
          class="form-control"
          v-model="value"
          :type="type"
          :placeholder="placeholderText"
          :disabled="disabled"
          @input="update"
          @blur="makePreview" />
        <span v-if="group && group.right" class="input-group-addon">{{{ groupText }}}</span>
      </div>

      <p class="help-block" v-if="help && !error">{{ help }}</p>
      <p class="help-block" v-if="error">{{ message }}</p>
    </div>

    <div v-else>
      <div class="preview">
        <img :src="preview" alt="icon" :height="height" :width="width"/>

        <div class="dropzone-close" @click="removeFile">
          <i class="ion-close-round"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      twoWay: true
    },
    height: {
      type: Number,
      default: null
    },
    width: {
      type: Number,
      default: null
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
    help: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    group: {
      type: Object,
      default: null
    },
    https: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      preview: null
    }
  },
  ready () {
    this.makePreview()
  },
  computed: {
    placeholderText () {
      if (this.placeholder.length > 0) {
        return this.placeholder
      }

      return this.required ? 'required' : 'optional'
    },
    groupText () {
      return this.group.icon
        ? '<i class="' + this.group.icon + '"></i>' : this.group.text
    },
    fakeField () {
      return Math.random().toString(36).substr(2, 5)
    }
  },
  methods: {
    update (e) {
      if (this.error) {
        this.error = false
        this.message = ''
      }

      this.preview = null
    },

    /**
     * Handle url is entered.
     */
    makePreview () {
      if (this.value && this.value.length > 0) {
        return this.testImage(this.value)
          .then((image) => {
            this.preview = this.https
              ? this.ensureImageResourceHttps(this.value)
              : this.value
          })
          .catch((message) => {
            this.error = true
            this.message = message
          })
      }

      this.preview = null
    },

    /**
     * Test if url is a valid image and return Image instance.
     *
     * @type {Promise}
     */
    testImage (url, timeout = 3000) {
      return new Promise((resolve, reject) => {
        let timer
        const img = new Image()

        img.onerror = img.onabort = () => {
          clearTimeout(timer)
          reject('Entered URL is not the link to the image.')
        }

        img.onload = () => {
          clearTimeout(timer)
          resolve(img)
        }

        timer = setTimeout(() => {
          reject('Error loading image.')
        }, timeout)

        img.src = url
      })
    },

    /**
     * Remove file.
     *
     * @param  {Object} e The event
     */
    removeFile (e) {
      this.file = null
      this.preview = null
    },
    /**
     * Given an image URL, returns a proxied HTTPS image using the https://images.weserv.nl service.
     * For a null image, returns null so that no icon is displayed.
     * If the image origin contains localhost, starts with 192.168.*.* or already from weserv.nl,
     * we do not proxy the image.
     *
     * @param  {String} imageUrl An HTTP or HTTPS image URL.
     * @return {String}
     */
    ensureImageResourceHttps (imageUrl) {
      try {
        let parsedImageUrl = new URL(imageUrl)
        if (/192\.168|localhost|images\.weserv\.nl/.exec(parsedImageUrl.hostname) !== null) return imageUrl
      } catch (e) { }

      /* HTTPS origin hosts can be used by prefixing the hostname with ssl: */
      let replacedImageUrl = imageUrl.replace(/https:\/\//, 'ssl:')
                                     .replace(/http:\/\//, '')

      return `https://images.weserv.nl/?url=${encodeURIComponent(replacedImageUrl)}`
    }
  },
  events: {
    'form:reset': function () {
      this.value = ''
    }
  }
}
