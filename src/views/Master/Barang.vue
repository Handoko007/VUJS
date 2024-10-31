<template>
    <div class="barang-form">
      <h3>Master Barang</h3>
      <form @submit.prevent="submitForm">
        <label>Kode Barang:</label>
        <input type="text" v-model="kode_brg" required />

        <label>Nama Barang:</label>
        <input type="text" v-model="nama_brg" required />

        <label>Type Barang:</label>
        <input type="text" v-model="type_brg" required />

        <label>Quantity:</label>
        <input type="number" v-model="qty" required />

        <label>Berat:</label>
        <input type="number" v-model="berat" required />

        <button type="submit">Simpan</button>
      </form>
    </div>
  </template>

<script>
export default {
  name: 'BarangForm',
  data () {
    return {
      kode_brg: '',
      nama_brg: '',
      type_brg: '',
      qty: 0,
      berat: 0
    }
  },
  methods: {
    submitForm () {
      // Logika untuk menyimpan data
      console.log('Data barang disimpan', this.$data)
    }
  }
}
</script>

  <style scoped>
  .barang-form {
    padding: 20px;
  }
  form label {
    display: block;
    margin-top: 10px;
  }
  form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }
  </style>
