<template>
  <div class="sidebar">
    <h2>APP</h2>
    <ul>
      <li @click="toggleDropdown('master')">
        Master <span class="arrow">▼</span>
        <ul v-show="dropdowns.master" class="submenu">
        <!-- <ul> -->
          <li></li>
          <!-- <li>Barang</li> -->
          <li><router-link to="/barang">Barang</router-link></li>
          <li>Satuan</li>
          <li>Kategori</li>
          <li>Lain-lain</li>
        </ul>
      </li>
      <li @click="toggleDropdown('pembelian')">
        Pembelian <span class="arrow">▼</span>
        <!-- <ul v-show="dropdowns.pembelian" class="submenu"> -->
        <ul>
          <li @click="toggleDropdown('pembelianTransaksi')">
            Transaksi <span class="arrow">▼</span>
            <ul v-show="dropdowns.pembelianTransaksi" class="sub-submenu">
            <!-- <ul> -->
              <li></li>
              <li>Pemesanan</li>
              <li>Penerimaan</li>
              <li>Ekspedisi</li>
              <li>Lain-lain</li>
            </ul>
          </li>
          <li @click="toggleDropdown('pembelianReport')">
            Report <span class="arrow">▼</span>
            <ul v-show="dropdowns.pembelianReport" class="sub-submenu">
              <li></li>
              <li>Pemesanan</li>
              <li>Penerimaan</li>
              <li>Ekspedisi</li>
              <li>Lain-lain</li>
            </ul>
          </li>
        </ul>
      </li>
      <li @click="toggleDropdown('penjualan')">
        Penjualan <span class="arrow">▼</span>
        <ul v-show="dropdowns.penjualan" class="submenu">
          <li @click="toggleDropdown('penjualanTransaksi')">
            Transaksi <span class="arrow">▼</span>
            <ul v-show="dropdowns.penjualanTransaksi" class="sub-submenu">
              <li></li>
              <li>Pemesanan</li>
              <li>Pengiriman</li>
              <li>Faktur</li>
              <li>Penerimaan</li>
              <li>Ekspedisi</li>
              <li>Lain-lain</li>
            </ul>
          </li>
          <li @click="toggleDropdown('penjualanReport')">
            Report <span class="arrow">▼</span>
            <ul v-show="dropdowns.penjualanReport" class="sub-submenu">
              <li></li>
              <li>Pemesanan</li>
              <li>Pengiriman</li>
              <li>Faktur</li>
              <li>Penerimaan</li>
              <li>Ekspedisi</li>
              <li>Lain-lain</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>Pajak</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  data () {
    return {
      dropdowns: {
        master: false,
        pembelian: false,
        pembelianTransaksi: false,
        pembelianReport: false,
        penjualan: false,
        penjualanTransaksi: false,
        penjualanReport: false
      }
    }
  },
  methods: {
    toggleDropdown (menu) {
      this.dropdowns[menu] = !this.dropdowns[menu]
    }
  }
}
</script>

<style scoped>
.sidebar {
  /* width: 250px; */
  /* background-color: #f8f9fa; */
  padding: 8px;
  /* margin-bottom: 10px; */
}

.sidebar h2 {
  font-size: 20px;
  /* margin-bottom: 10px; */
}
.sidebar ul {
  list-style: none;
  padding: 0;
  font-family: Arial, sans-serif;
  margin-bottom: 10px;
}
.sidebar li {
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 20px;
  position: relative;
}
.sidebar li .arrow {
  margin-left: 10px;
  font-size: 15px;
  color: #666;
}

/* Dropdown untuk submenu level pertama */
.submenu {
  padding-left: 15px;
  /* background-color: #f1f1f1; */
  display: none;
  position: relative;
  margin-bottom: 10px;
}

/* Dropdown untuk submenu level kedua */
.sub-submenu {
  padding-left: 30px;
  /* background-color: #e9ecef; */
  display: none;
  position: relative;
  margin-bottom: 10px;
}

/* Menampilkan submenu saat hover */
.sidebar ul li:hover > .submenu {
  display: block;
  margin-left: 30px;
  margin-bottom: 10px;
}
.submenu li:hover > .sub-submenu {
  display: block;
  left: 35px;
  width: 50%;
  margin-bottom: 10px;
}

/* Display submenu and sub-submenu only when v-show is active */
.submenu[v-show="false"],
.sub-submenu[v-show="false"] {
  display: block;
}

/* Styling untuk item dropdown */
.sidebar li ul li {
  margin-bottom: 10px;
}
</style>
