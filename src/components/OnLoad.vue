<template>
  <b-container fluid id="dash-onload" class="flex-cols">
    <b-row no-gutters>
      <b-col cols="12" class="onLoad-Logo">
        <div class="logo">
          <img class="nav-logo ml-3" src="../assets/m-pink.png">
          <h3 class="display-5">Select an Admin Panel to begin</h3>
        </div>


      </b-col>
    </b-row>
  </b-container>

</template>


<script>

export default {
  name: 'OnLoad',
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

.onLoad-Logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  margin: 0px !important;
  background-color: #555555;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 15%; */
}
h3 {
  color: #dddddd
}

</style>
