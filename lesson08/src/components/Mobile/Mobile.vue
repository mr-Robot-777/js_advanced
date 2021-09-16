<script>
export default {};
</script>
<template>
    <div class="wrapper mobile">
        <div class="container">
            <div class="mobile__content">
                <div>
                    <div class="mobile__heading">Mobile app</div>
                    <div class="mobile__title">Find. Follow. Favorite.</div>
                    <div class="mobile__description">Save your favorites and share your style.</div>
                </div>
                <div class="mobile__buttons">
                    <a class="mobile__button" href="#" title="App store" />
                    <a class="mobile__button" href="#" title="Google play" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mobile {
  height: 516px;
  background-color: #f9f4f1;
}
.mobile > .container {
  background-repeat: no-repeat;
  background-size: initial;
  background-position: 100% 50%;
  background-clip: border-box;
  background-image: url("back-img.png");
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mobile__buttons {
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.mobile__button {
  width: 135px;
  height: 40px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: initial;
  background-position: 100% 50%;
  background-clip: border-box;
}
.mobile__button[title*="Google"] {
  background-image: url("google-play.png");
}
.mobile__button[title*="App"] {
  background-image: url("app-store.png");
}

.mobile__buttons a + a {
  margin-left: 10px;
}

.mobile__heading {
  font-size: 18px;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
}

.mobile__title {
  font-size: 62px;
  font-weight: 100;
  line-height: 72px;
  text-transform: uppercase;
  width: 500px;
}

.mobile__description {
  margin-top: 26px;
  font-size: 22px;
  font-weight: 300;
  line-height: 24px;
}
</style>
