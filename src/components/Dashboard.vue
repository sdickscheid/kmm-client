<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col cols="12">
        <my-header></my-header>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="2">
        <sidebar></sidebar>
      </b-col>
      <b-col cols="10">
        <content-container></content-container>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import ContentContainer from './ContentContainer.vue'

export default {
  components: {
    'my-header': Header,
    'sidebar': Sidebar,
    'content-container': ContentContainer
  },
  name: 'Dashboard',

}
</script>




<style>
*{
  margin:0;
  padding: 0px;
}
#dashboard {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #aaaaaa;
  height: 100vh;
  display: flex;
  border: 1px solid #aaaaaa;
}

h1 {
  padding-top: 60px;
  font-weight: normal;
}
</style>
