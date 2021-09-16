<script>
export default {};
</script>
<template>
    <div class="wrapper header">
        <div class="container">
            <div class="header__logo"></div>
            <div class="header__menu">
                <router-link :class="['header__link']" :to="{ path: '/' }">Home</router-link>
                <router-link :class="['header__link']" :to="{ path: '/contacts' }">Contact Us</router-link>
                <Cart/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.header {
  position: absolute;
  top: 63px;
  right: 0;
  left: 0;
  z-index: 1;
}

.header > .container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.header__logo {
  width: 185px;
  height: 22px;
  background: url("logo.png") no-repeat 50% 50%;
  display: inline-block;
  flex-shrink: 0;
  margin-bottom: 32px;
}

.header__menu {
  white-space: nowrap;
}
.header__menu > * {
  display: inline-block;
  vertical-align: top;
  border-bottom: 3px solid transparent;
  padding: 0 13px 10px 13px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9c9c9c;
}
.header__menu > *:hover {
  cursor: pointer;
  color: #8c8c8c;
}

.header__menu > * + * {
  margin-left: 10px;
}

.header__link_active {
  color: #212121;
  font-weight: 700;
  border-bottom-color: #212121;
}
</style>
