<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <AppSidebar />
      </div>
      <div class="content-area">
        <div class="header">
          <AppHeader />
        </div>
        <div class="main-content">
          <!-- <MainContent /> -->
          <router-view />
        </div>
        <div class="footer">
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppSidebar from './components/Sidebar.vue'
// import MainContent from './components/MainContent.vue'
import FooterComponent from './components/Footer.vue'
// import router from './router' // utk konek ke routes

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    // MainContent,
    FooterComponent
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  display: flex;
  height: 100%;
}

.sidebar {
  flex: 0 0 200px; /* Fixed width for sidebar */
  height: 100%; /* Full height */
  position: fixed; /* Make sidebar fixed to the left */
  top: 0;
  left: 0;
  width: 15%;
  background: #e0e0e0;
}

.content-area {
  /* flex: 0 1 1141px; */
  flex: 1;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main-content {
  flex: 0 1 600px; /* Main content takes the remaining space */
  /* padding: 20px; */
  /* display: flex; */
  /* margin-left: 160px; */
  /* width: calc(100% + 40px); */
  /* flex-direction: column; /* Stack header, main content, and footer vertically */
  background: #35bea1; /* Optional background */

}

 .header {
  flex: 0 0 10px; /* Header fixed height */
  /* width: calc(100% + 40px); /* Full width */
  /*justify-content: flex-end; /* Align header to the right */
  /* margin-left: 160px; /* Shift header to the right for sidebar*/
  /* position: fixed; Make sidebar fixed to the left */
  top: 0;
  /* left: 10px; */
  height: 10%;
  background: #f3f3f1; /* Optional background */
}

.footer {
  flex: 0 0 40px; /* Footer fixed height */
  /* width: calc(100% - 155px); /* Footer takes full width minus sidebar */
  /* margin-left: 162px; Align with content */
  background: #4850c5;
}
</style>
