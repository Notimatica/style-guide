<template>
  <div class="panel panel-default panel-flush">
    <div class="panel-heading">
      <h3 class="panel-title">
        {{ heading | truncate(20) }}
      </h3>
    </div>
    <div class="panel-body">
      <div class="app-tabs">
        <ul class="nav app-tabs-stacked">
          <li v-for="link in links">
            <a v-link="link.route">
              <i :class="link.icon"></i>{{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
