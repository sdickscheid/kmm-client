<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col cols="12" class="admin-header">
          <b-navbar id="admin-nav">
            <div id="nav-logo">
              <b-navbar-brand href="#"><img class="nav-logo ml-3" src="../assets/m-pink.png"></b-navbar-brand>
            </div>
            <div class="nav-title">
              <h3 class="text-center display-4">KMM Admin Dashboard</h3>
            </div>
            <div>
              <a class="mr-3 logout" href="/login">logout</a>
            </div>
          </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  name: 'Header',

  data(){
    return {
      title: 'Admin Panel - K Mitchell Media',
      owner: 'Kathryn'
    }
  }
}
</script>

<!-- ****************** CUSTOM STYLING ****************** -->
<style scoped>

* {
  margin:0;
  padding:0;
}
.admin-header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #333333;
  padding-top: 10px;
  height: 15vh;
}
#admin-nav {
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.nav-logo {
  height: 85px;
  width: 85px;
}
.nav-title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  /*PINK color: #eb37cb; */
  color: #cccccc;
}

.logout {

}
.logout:hover {
  color: #eb37cb;
}

</style>
