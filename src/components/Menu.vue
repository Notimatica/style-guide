<template>
  <nav class="navbar navbar-default navbar-static-top" :class="{'navbar-scrolled': navScrolled}">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img src="https://notimatica.io/assets/common/logo_white_h32.svg" />
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-if="isAuthenticated"><a href="#">Projects</a></li>
        </ul>
        <!-- Right Side Of Navbar -->
			  <ul class="nav navbar-nav navbar-right">
          <li v-if=" ! isAuthenticated"><a href="#">Login</a></li>
          <li v-if=" ! isAuthenticated"><a href="#">Register</a></li>
          <!-- Authenticated Right Dropdown -->
  				<li class="dropdown" v-if="isAuthenticated">
  					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" v-else>
  						{{ profile.name }}&nbsp;<span class="caret"></span>
  					</a>

  					<ul class="dropdown-menu" role="menu">
  						<!-- Settings -->
  						<li class="dropdown-header">Settings</li>
  						<li>
  							<a href="#">
  								<i class="ion-person"></i>Your profile
  							</a>
  						</li>

  						<!-- Logout -->
  						<li class="divider"></li>
  						<li>
  							<a href="#">
  								<i class="ion-log-out"></i>Logout
  							</a>
  						</li>
  					</ul>
  				</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      navScrolled: false,
      authenticated: true,
      profile: {
        name: 'Max Lanin'
      }
    }
  },
  ready () {
    window.addEventListener('scroll', this.scrolled)
  },
  methods: {
    scrolled () {
      this.navScrolled = window.scrollY > 0
    }
  },
  computed: {
    isAuthenticated () {
      return this.authenticated && this.profile.name !== ''
    }
  }
}
</script>
