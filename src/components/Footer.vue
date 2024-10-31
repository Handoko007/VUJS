<template>
    <CFooter :fixed="false">
      <div>
        <a href="#" target="_blank"> GOES</a>
        <span class="ml-1">&copy; {{new Date().getFullYear()}} </span>
      </div>
      <div class="mfs-auto">
        <span class="me-1" target="_blank">Last Build {{ (new Date()).toLocaleString('id-ID', { style: 'currency', currency: 'IDR'}) }}</span>
      </div>
    </CFooter>
  </template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

  <style scoped>
  footer {
    background: #f0f0f0;
    padding: 10px;
    text-align: center;
  }
  </style>
