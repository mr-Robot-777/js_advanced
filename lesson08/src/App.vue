<template>
  <div class="layout">
    <Header />
    <router-view class="content"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
    name: 'app',
    components: {
      Header,
      Footer,
    },
}
</script>
