<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" id="content-container">
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import OnLoad from './OnLoad.vue'
import ProjectList from './ProjectList.vue'
import ContactList from './ContactList.vue'

export default {
  components: {
    'onload': OnLoad,
    'project-list': ProjectList,
    'contact-list': ContactList
  },
  name: 'ContentContainer',
}
</script>

<style scoped>
*{
  margin:0;
  padding: 0px;
}
#content-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #cccccc;
  display: flex;
}

</style>
