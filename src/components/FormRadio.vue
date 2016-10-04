<template>
  <slot></slot>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        twoWay: true,
        default: ''
      },
      name: {
        type: String,
        required: true
      }
    }
  }
