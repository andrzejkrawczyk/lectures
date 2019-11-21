<template>

  <div class="wrapper">

    <parallax class="page-header header-filter" :style="headerStyle">

    </parallax>

    <div class="mt-1 main main-raised">

      <div class="section section-basic">
        <div class="container">
          <div class="title" style="margin-bottom: 0">
            <h2 style="margin-bottom: 0;">Dodaj ToDo: </h2>
          </div>
          <Form></Form>
        </div>
      </div>

    </div>

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
</style>
