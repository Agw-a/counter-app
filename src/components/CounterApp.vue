<template>
<NavBar />
  <main class="main">
    <div>
    <p>How to use calorie counter app:</p>

<p>
Set a calorie goal and add input to view caloroe progress.
</p>
<p>
  Once a goal is set you can add or remove from the value and and reset the goal back to zero.  
</p>
<router-link class='link' to="/counter"> View App -></router-link>
</div>
  </main>
  <Footer/>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from '@/components/FooTer';
export default {
  name: "CounterApp",
    components: {
    NavBar,
    Footer
  },
};
</script>

<style scoped>

p{
  margin-top: 20px;
}
</style>
