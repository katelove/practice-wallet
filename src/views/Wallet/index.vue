<template lang="">
  <div class="wallet-home">
    <Nav />
    <section>
      <SecOne />
    </section>
    <section>
      <SecTwo />
    </section>
    <section>
      <SecThree />
    </section>
    <section>
      <Card/>
    </section>
    <section></section>
    <section></section>
  </div>
</template>
<script>
import Nav from '@/components/Nav/index.vue'
import SecOne from '@/components/Wallet/SecOne.vue'
import SecTwo from '@/components/Wallet/SecTwo.vue'
import SecThree from '@/components/Wallet/SecThree.vue'
import Card from '@/components/Wallet/Card.vue'
export default {
  name: 'WalletPage',
  components: {
    Nav,
    SecOne,
    SecTwo,
    SecThree,
    Card
  }
}
</script>
<style lang="scss" scope>
.wallet-home {
  width: 100%;
  section {
    height: 100%;
    width: 100%;
  }
}
</style>
