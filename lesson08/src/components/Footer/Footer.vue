<script>
export default {
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>
<template>
  <div class="wrapper footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__nav">
          <div>
            <h3>Contact us</h3>
            <address>
              132A Bridge Road Richmond VIC
              Australia.
            </address>
            <div>
              Talk to us on <a href="tel:000000">1300 132</a>
              <a href="mailto:info@interior.com">info@interior.com</a>
            </div>
          </div>
          <div>
            <h3>Useful Information</h3>
            <div>
              <ul>
                <li><a href="#">Sales terms</a></li>
                <li><a href="#">Customer care</a></li>
                <li><a href="#">Delivery</a></li>
              </ul>
              <ul>
                <li><a href="#">Architect accounts</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Exchanges & returns</a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Let’s Stay in Touch!</h3>
            <p>Suscribe to know about our latest news, products and special offers just for suscribers.</p>
            <input placeholder="your email address" type="email"/>
          </div>
        </div>
        <div class="footer__copy">
          <div>© Copyright - INTERIOR 2016. All Rights Reserved.</div>
          <div><img alt="" src="../../../public/img/social-links.png"/></div>
          <div>
            <a href="#">Terms & Conditions</a> / <a href="#">Privacy policy & Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.footer {
  background-color: #f7f7f7;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer h3 {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.footer__content {
  margin-bottom: 40px;
}

.footer__nav,
.footer__copy {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width:961px) {
  .footer__nav,
  .footer__copy {
    flex-direction: column;
    align-items: center;
  }
}
.footer__nav > div {
  margin-top: 40px;
}
.footer__nav ul {
  margin: 0;
  padding: 0;
}

.footer__nav li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer__nav address {
  font-size: 14px;
  font-weight: 300;
  line-height: 22px;
  margin-bottom: 30px;
  font-style: normal;
}

.footer__nav > div + div {
  margin-left: 60px;
}

.footer__nav > div:nth-child(1) {
  width: 220px;
}

.footer__nav > div:nth-child(2) {
  flex: 1;
}

.footer__nav > div:nth-child(2) > div {
  display: flex;
  flex-direction: row;
}

.footer__nav > div:nth-child(2) ul {
  font-weight: 700;
}

.footer__nav > div:nth-child(2) ul + ul {
  margin-left: 100px;
}

.footer__nav > div:nth-child(3) {
  width: 370px;
}

.footer__copy {
  margin-top: 60px;
  text-transform: uppercase;
  font-weight: 700;
}

.footer__copy > div:nth-child(2) {
  flex: 1;
  text-align: center;
}
</style>
