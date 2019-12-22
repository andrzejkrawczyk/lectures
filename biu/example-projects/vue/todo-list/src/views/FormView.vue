<template>

  <div class="wrapper">

    <parallax class="page-header header-filter" :style="headerStyle">

    </parallax>

    <div class="mt-1 main main-raised">

      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2 style="margin: 0;">Dodaj ToDo: </h2>
            <router-link to="/">
              <md-button style="max-height: 40px" class="md-primary">
                <md-icon>keyboard_arrow_left</md-icon>
              </md-button>
            </router-link>
          </div>
          <Form @added="showSnackbar = true"></Form>
        </div>
      </div>

    </div>

    <md-snackbar :md-position="position" :md-duration="duration" :md-active.sync="showSnackbar" md-persistent>
      <span>Dodano to-do!</span>
    </md-snackbar>

  </div>
</template>

<script>
import Form from "./components/Form";

export default {
  components: {
    Form
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  },
  data(){
    return {
      showSnackbar: false,
      position: 'left',
      duration: 2000,
      isInfinity: false
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
  .page-header {
    height: 155px !important;
  }

  .title {
    margin-bottom: 0; display: flex; justify-content: space-between;
    align-items: center;
  }
</style>
