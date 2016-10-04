<template>
  <header>
    <h2>Buttons</h2>
  </header>
  <div class="buttons">
    <form-button>
      Default button
    </form-button>
    <form-button type="primary">
      Primary button
    </form-button>
    <form-button type="info">
      Info button
    </form-button>
    <form-button type="success">
      Success button
    </form-button>
    <form-button type="warning">
      Warning button
    </form-button>
    <form-button type="danger">
      Danger button
    </form-button>
    <br /><br />

    <form-button type="danger" :disabled="true">
      Disabled button
    </form-button>
    <form-button
      type="primary"
      icon="ion-paper-airplane">
      Button with icon
    </form-button>
    <form-button
      @click="click"
      type="primary"
      icon="ion-paper-airplane">
      Button with loading icon
    </form-button>
    <form-button type="info" size="sm">
      Small button
    </form-button>
    <form-button type="success" size="xs">
      Extra-small button
    </form-button>

    <br /><br />

    <form-button-approve
      :callback="approved"
      type="danger"
      icon="ion-trash-a">
      Delete
    </form-button-approve>
    <form-button-approve
      :callback="approved"
      size="sm"
      type="danger"
      icon="ion-trash-a">
      Delete
    </form-button-approve>
    <form-button-approve
      :callback="approved"
      size="xs"
      type="danger"
      icon="ion-trash-a">
      Delete
    </form-button-approve>
  </div>
</template>

<script>
import FormButton from 'src/elements/form/FormButton'
import FormButtonApprove from 'src/elements/form/FormButtonApprove'

export default {
  components: {
    FormButton,
    FormButtonApprove
  },
  methods: {
    click () {
      this.$broadcast('button:loading')
      setTimeout(() => {
        this.$broadcast('button:loaded')
      }, 1000)
    },
    approved () {
      this.$broadcast('button:loading')
      setTimeout(() => {
        alert('Done')
        this.$broadcast('button:loaded')
      }, 1000)
    }
  }
}
</script>
