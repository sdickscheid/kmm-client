<template>
  <div class="sidebar">
    <div id="sidebar-top">
      <h4 class="pt-4 ml-3">Admin Panels</h4>
      <ul>
        <li class="ml-5"><router-link class="link" to="/dashboard/project-mgmt">Projects</router-link></li>
        <li class="ml-5"><router-link class="link" to="/dashboard/contact-mgmt">Contacts</router-link></li>
      </ul>
    </div>
    <div id="sidebar-middle">
      <h4 class="pt-4 ml-3">KMM Website</h4>
      <ul>
        <li class="ml-5"><a href="http://www.kmitchellmedia.com" target="blank">Visit Site</a></li>
      </ul>
    </div>
    <div id="sidebar-bottom">
      <h4 class="pt-4 ml-3">Social Media</h4>
      <ul>
        <li class="ml-5"><a href="https://www.facebook.com/kmitchellmediallc" target="blank">Visit Facebook</a></li>
        <li class="ml-5"><a href="https://www.twitter.com/kmitchellmedia" target="blank">Visit Twitter</a></li>
        <li class="ml-5"><a href="https://www.vimeo.com/kmitchellmediallc" target="blank">Visit Vimeo</a></li>
        <li class="ml-5"><a href="https://www.instagram.com/kmitchellmedia" target="blank">Visit Instagram</a></li>
      </ul>
    </div>
  </div>

</template>


<script>
export default {
  name: 'Sidebar',
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.sidebar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  background-color: #333333;
  height: 85vh;
  border-top: 2px solid #666666;
  padding-top: 50 px;
  padding-left: 15px;

}
li {
  font-size: 20px;
  list-style-type: square;
  /* color: blue; */
}

a:hover,
.link:hover {
  color: #eb37cb;
  text-decoration: none;
}
</style>
