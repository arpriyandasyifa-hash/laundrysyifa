// ===== DATA PRODUK (ubah sesuai kebutuhan) =====
const produkAwal = [
  {kode:"8991001", nama:"Indomie Goreng", harga:3500, stok:100, kat:"Makanan"},
  {kode:"8991002", nama:"Mie Sedaap Soto", harga:3200, stok:80, kat:"Makanan"},
  {kode:"8991003", nama:"Roti Tawar Sari Roti", harga:16500, stok:25, kat:"Makanan"},
  {kode:"8991004", nama:"Chitato Sapi Panggang", harga:11500, stok:40, kat:"Makanan"},
  {kode:"8991005", nama:"Telur Ayam 1/2 kg", harga:17000, stok:30, kat:"Makanan"},
  {kode:"8992001", nama:"Aqua 600ml", harga:3500, stok:120, kat:"Minuman"},
  {kode:"8992002", nama:"Teh Botol Sosro", harga:5500, stok:60, kat:"Minuman"},
  {kode:"8992003", nama:"Coca-Cola 390ml", harga:6000, stok:50, kat:"Minuman"},
  {kode:"8992004", nama:"Kopi Kapal Api Sachet", harga:1500, stok:200, kat:"Minuman"},
  {kode:"8992005", nama:"Susu Ultra Coklat 250ml", harga:6500, stok:45, kat:"Minuman"},
  {kode:"8993001", nama:"Sabun Lifebuoy", harga:4500, stok:35, kat:"Rumah Tangga"},
  {kode:"8993002", nama:"Shampoo Clear Sachet", harga:1500, stok:150, kat:"Rumah Tangga"},
  {kode:"8993003", nama:"Rinso Detergen 800g", harga:24500, stok:20, kat:"Rumah Tangga"},
  {kode:"8993004", nama:"Tissue Paseo", harga:12000, stok:30, kat:"Rumah Tangga"},
  {kode:"8994001", nama:"Beras Premium 5kg", harga:72000, stok:15, kat:"Sembako"},
  {kode:"8994002", nama:"Minyak Goreng 1L", harga:18500, stok:30, kat:"Sembako"},
  {kode:"8994003", nama:"Gula Pasir 1kg", harga:17500, stok:30, kat:"Sembako"},
  {kode:"8994004", nama:"Beras Premium 10kg", harga:138000, stok:12, kat:"Sembako"},
  {kode:"8994005", nama:"Beras Medium 5kg", harga:64000, stok:20, kat:"Sembako"},
  {kode:"8994006", nama:"Beras Pandan Wangi 5kg", harga:78000, stok:15, kat:"Sembako"},
  {kode:"8994007", nama:"Beras Ketan Putih 1kg", harga:19000, stok:20, kat:"Sembako"},
  {kode:"8994008", nama:"Minyak Goreng Bimoli 2L", harga:37000, stok:25, kat:"Sembako"},
  {kode:"8994009", nama:"Minyak Goreng Tropical 1L", harga:19500, stok:30, kat:"Sembako"},
  {kode:"8994010", nama:"Minyak Goreng Fortune 5L", harga:88000, stok:10, kat:"Sembako"},
  {kode:"8994011", nama:"Gula Pasir 500g", harga:9000, stok:40, kat:"Sembako"},
  {kode:"8994012", nama:"Gula Merah 250g", harga:8500, stok:25, kat:"Sembako"},
  {kode:"8994013", nama:"Tepung Terigu Segitiga Biru 1kg", harga:14500, stok:30, kat:"Sembako"},
  {kode:"8994014", nama:"Tepung Beras Rose Brand 500g", harga:9500, stok:25, kat:"Sembako"},
  {kode:"8994015", nama:"Tepung Maizena 150g", harga:7500, stok:25, kat:"Sembako"},
  {kode:"8994016", nama:"Garam Dapur Refina 250g", harga:3500, stok:60, kat:"Sembako"},
  {kode:"8994017", nama:"Telur Ayam 1kg", harga:33000, stok:25, kat:"Sembako"},
  {kode:"8994018", nama:"Kecap Manis ABC 275ml", harga:15500, stok:30, kat:"Sembako"},
  {kode:"8994019", nama:"Saus Sambal ABC 275ml", harga:14000, stok:30, kat:"Sembako"},
  {kode:"8994020", nama:"Santan Kara 65ml", harga:4500, stok:50, kat:"Sembako"},
  {kode:"8994021", nama:"Susu Kental Manis Frisian Flag 370g", harga:13500, stok:30, kat:"Sembako"},
  {kode:"8994022", nama:"Mentega Blue Band 200g", harga:12500, stok:25, kat:"Sembako"},
  {kode:"8994023", nama:"Kacang Hijau 500g", harga:12000, stok:20, kat:"Sembako"},
  {kode:"8994024", nama:"Sarden ABC 155g", harga:11500, stok:30, kat:"Sembako"},
  {kode:"8994025", nama:"Kornet Pronas 198g", harga:25000, stok:15, kat:"Sembako"},
  {kode:"8994026", nama:"Bumbu Masak Royco Ayam 100g", harga:6500, stok:40, kat:"Sembako"},
  {kode:"8994027", nama:"Penyedap Masako Sapi 100g", harga:6000, stok:40, kat:"Sembako"},
  {kode:"8994028", nama:"Merica Bubuk Ladaku 25g", harga:4500, stok:30, kat:"Sembako"},
  {kode:"8994029", nama:"Teh Celup Sariwangi 25s", harga:7500, stok:40, kat:"Sembako"},
  {kode:"8994030", nama:"Kopi Kapal Api 165g", harga:14500, stok:30, kat:"Sembako"},
  {kode:"8994031", nama:"Bawang Putih 250g", harga:9500, stok:20, kat:"Sembako"},
  {kode:"8994032", nama:"Bawang Merah 250g", harga:11000, stok:20, kat:"Sembako"},
  {kode:"8995001", nama:"Wall's Cornetto Classic Vanilla", harga:9500, stok:25, kat:"Es Krim"},
  {kode:"8995002", nama:"Wall's Cornetto Double Chocolate", harga:9500, stok:25, kat:"Es Krim"},
  {kode:"8995003", nama:"Wall's Cornetto Strawberry", harga:9500, stok:20, kat:"Es Krim"},
  {kode:"8995004", nama:"Wall's Magnum Classic", harga:18000, stok:20, kat:"Es Krim"},
  {kode:"8995005", nama:"Wall's Magnum Almond", harga:19500, stok:15, kat:"Es Krim"},
  {kode:"8995006", nama:"Paddle Pop Rainbow", harga:4500, stok:40, kat:"Es Krim"},
  {kode:"8995007", nama:"Paddle Pop Choco Banana", harga:4500, stok:35, kat:"Es Krim"},
  {kode:"8995008", nama:"Wall's Feast Choco Almond", harga:8500, stok:25, kat:"Es Krim"},
  {kode:"8995009", nama:"Wall's Selection Cup Vanilla", harga:11000, stok:20, kat:"Es Krim"},
  {kode:"8995010", nama:"Aice Stick Coklat", harga:3500, stok:50, kat:"Es Krim"},
  {kode:"8995011", nama:"Aice Mochi Vanilla", harga:7500, stok:30, kat:"Es Krim"},
  {kode:"8995012", nama:"Aice Mochi Coklat", harga:7500, stok:30, kat:"Es Krim"},
  {kode:"8995013", nama:"Campina Concerto Coklat", harga:6500, stok:30, kat:"Es Krim"},
  {kode:"8995014", nama:"Campina Tornado Strawberry", harga:5000, stok:30, kat:"Es Krim"},
  {kode:"8995015", nama:"Campina Cup Vanilla", harga:5500, stok:30, kat:"Es Krim"},
  {kode:"8995016", nama:"Es Krim Tub 700ml Vanilla", harga:32000, stok:12, kat:"Es Krim"}
];

// ===== STATE =====
const rp = n => "Rp " + Math.round(n).toLocaleString("id-ID");
let produk = [], keranjang = [], kategoriAktif = "Semua", trxTerakhir = null;
function simpan(k,v){ try{localStorage.setItem(k,JSON.stringify(v))}catch(e){} }
function muat(k,d){ try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d} }
produk = muat("kasir_produk", produkAwal);
// Tambahkan produk baru dari daftar awal ke data tersimpan (stok lama tetap aman)
produkAwal.forEach(p => { if(!produk.some(x => x.kode === p.kode)) produk.push({...p}); });
// Hapus produk lama "Es Krim Walls" yang sudah diganti varian baru
produk = produk.filter(x => x.nama !== "Es Krim Walls");
let riwayat = muat("kasir_riwayat", []);

// ===== TAMPILAN PRODUK =====
function renderKategori(){
  const daftar = ["Semua", ...new Set(produk.map(p=>p.kat))];
  document.getElementById("kategori").innerHTML = daftar.map(k =>
    `<button class="btn btn-sm btn-outline-secondary ${k===kategoriAktif?'active':''}" onclick="pilihKategori('${k}')">${k}</button>`).join("");
}
function pilihKategori(k){ kategoriAktif = k; renderKategori(); renderProduk(); }
function renderProduk(){
  const q = document.getElementById("cari").value.toLowerCase();
  const hasil = produk.filter(p => (kategoriAktif==="Semua"||p.kat===kategoriAktif) &&
    (p.nama.toLowerCase().includes(q) || p.kode.includes(q)));
  document.getElementById("grid").innerHTML = hasil.length ? hasil.map(p => `
    <div class="col-6 col-md-4 col-xl-3">
      <div class="card produk h-100 text-center shadow-sm ${p.stok<=0?'habis':''}" onclick="tambah('${p.kode}')">
        <div class="card-body p-2">
          <div class="kat">${p.kat}</div>
          <div class="fw-semibold small my-1">${p.nama}</div>
          <div class="text-danger fw-bold">${rp(p.harga)}</div>
          <span class="badge ${p.stok<=5?'bg-danger':'bg-secondary'}">Stok ${p.stok}</span>
        </div>
      </div>
    </div>`).join("") : `<div class="col-12 text-center text-muted py-5">Barang tidak ditemukan. Coba kata kunci atau kategori lain.</div>`;
}

// ===== KERANJANG =====
function tambah(kode){
  const p = produk.find(x=>x.kode===kode); if(!p) return;
  const item = keranjang.find(x=>x.kode===kode);
  const qty = item ? item.qty : 0;
  if(qty >= p.stok){ alert("Stok " + p.nama + " tidak cukup."); return; }
  if(item) item.qty++; else keranjang.push({kode:p.kode, nama:p.nama, harga:p.harga, qty:1});
  renderKeranjang();
}
function ubahQty(kode, d){
  const item = keranjang.find(x=>x.kode===kode); const p = produk.find(x=>x.kode===kode);
  item.qty += d;
  if(item.qty > p.stok){ item.qty = p.stok; alert("Stok maksimal tercapai."); }
  if(item.qty <= 0) keranjang = keranjang.filter(x=>x.kode!==kode);
  renderKeranjang();
}
function hapusItem(kode){ keranjang = keranjang.filter(x=>x.kode!==kode); renderKeranjang(); }
function kosongkan(){ if(keranjang.length && confirm("Kosongkan keranjang?")){ keranjang=[]; renderKeranjang(); } }

function hitung(){
  const sub = keranjang.reduce((s,i)=>s+i.harga*i.qty,0);
  const persen = Math.min(100, Math.max(0, +document.getElementById("diskon").value||0));
  const potongan = sub*persen/100;
  const ppn = (sub-potongan)*0.11;
  return {sub, persen, potongan, ppn, total: sub-potongan+ppn};
}
function renderKeranjang(){
  const el = document.getElementById("daftarKeranjang");
  el.innerHTML = keranjang.length ? keranjang.map(i => `
    <div class="list-group-item">
      <div class="d-flex justify-content-between"><span class="small fw-semibold">${i.nama}</span>
        <button class="btn btn-sm text-danger p-0" onclick="hapusItem('${i.kode}')"><i class="bi bi-x-lg"></i></button></div>
      <div class="d-flex justify-content-between align-items-center mt-1">
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-outline-secondary qty-btn" onclick="ubahQty('${i.kode}',-1)">−</button>
          <strong>${i.qty}</strong>
          <button class="btn btn-outline-secondary qty-btn" onclick="ubahQty('${i.kode}',1)">+</button>
          <small class="text-muted">× ${rp(i.harga)}</small>
        </div>
        <strong>${rp(i.harga*i.qty)}</strong>
      </div>
    </div>`).join("") : `<div class="text-center text-muted p-4">Keranjang kosong.<br>Klik barang atau scan barcode untuk mulai.</div>`;
  const h = hitung();
  document.getElementById("subtotal").textContent = rp(h.sub);
  document.getElementById("ppn").textContent = rp(h.ppn);
  document.getElementById("total").textContent = rp(h.total);
  document.getElementById("jumlahItem").textContent = keranjang.reduce((s,i)=>s+i.qty,0);
  document.getElementById("btnBayar").disabled = !keranjang.length;
}

// ===== PENCARIAN / SCAN =====
const cari = document.getElementById("cari");
cari.addEventListener("input", renderProduk);
cari.addEventListener("keydown", e => {
  if(e.key !== "Enter") return;
  const q = cari.value.trim().toLowerCase(); if(!q) return;
  const p = produk.find(x=>x.kode===q) || produk.filter(x=>x.nama.toLowerCase().includes(q))[0];
  if(p){ tambah(p.kode); cari.value=""; renderProduk(); }
});
document.getElementById("diskon").addEventListener("input", renderKeranjang);

// ===== PEMBAYARAN =====
let modalBayar, modalStruk;
function bukaBayar(){
  const t = Math.round(hitung().total);
  document.getElementById("bayarTotal").textContent = rp(t);
  document.getElementById("uang").value = "";
  document.getElementById("errBayar").textContent = "";
  const cepat = [...new Set([t, Math.ceil(t/5000)*5000, Math.ceil(t/10000)*10000, Math.ceil(t/50000)*50000, Math.ceil(t/100000)*100000])];
  document.getElementById("uangCepat").innerHTML = cepat.map(n =>
    `<button class="btn btn-sm btn-outline-primary" onclick="isiUang(${n})">${n===t?'Uang pas':rp(n)}</button>`).join("");
  hitungKembali();
  modalBayar.show();
}
function isiUang(n){ document.getElementById("uang").value = n; hitungKembali(); }
function hitungKembali(){
  const t = Math.round(hitung().total);
  const uang = +document.getElementById("uang").value || 0;
  document.getElementById("kembali").textContent = rp(Math.max(0, uang-t));
}
function prosesBayar(){
  const h = hitung(), t = Math.round(h.total);
  const metode = "Tunai";
  const uang = +document.getElementById("uang").value || 0;
  if(uang < t){ document.getElementById("errBayar").textContent = "Uang kurang " + rp(t-uang) + ". Tambah nominal pembayaran."; return; }

  const trx = {
    no: "TRX" + String(riwayat.length+1).padStart(4,"0"),
    waktu: new Date().toISOString(),
    item: keranjang.map(i=>({...i})),
    sub:h.sub, potongan:h.potongan, persen:h.persen, ppn:h.ppn, total:t, uang, kembali:uang-t, metode,
    kasir:TOKO.kasir, kassa:TOKO.kassa
  };
  keranjang.forEach(i => { const p = produk.find(x=>x.kode===i.kode); p.stok -= i.qty; });
  riwayat.push(trx);
  simpan("kasir_riwayat", riwayat); simpan("kasir_produk", produk);

  trxTerakhir = trx; tampilStruk(trx);
  keranjang = []; document.getElementById("diskon").value = 0;
  renderKeranjang(); renderKategori(); renderProduk();
  modalBayar.hide(); modalStruk.show();
}

// ===== DATA TOKO (ubah sesuai toko kamu) =====
const TOKO = {
  nama: "INDOMARET",
  cabang: "Cabang Contoh Medan",
  alamat: "Jl. Contoh No. 1, Medan, Sumatera Utara",
  telp: "(061) 000-0000",
  npwp: "00.000.000.0-000.000",
  kasir: "Kasir 01",
  kassa: "Kassa 01",
  cs: "0800-000-0000"
};

// ===== STRUK (satu susunan dipakai untuk layar dan PDF) =====
function susunStruk(t){
  const num = n => Math.round(n).toLocaleString("id-ID");
  const w = new Date(t.waktu);
  const tgl = w.toLocaleDateString("id-ID", {day:"2-digit", month:"2-digit", year:"numeric"});
  const jam = w.toLocaleTimeString("id-ID");
  const jenis = t.item.length, pcs = t.item.reduce((s,i)=>s+i.qty,0);
  const dpp = t.sub - t.potongan;
  const pembulatan = t.total - (dpp + t.ppn);
  const ops = [];
  const c = (x,b) => ops.push({t:"c",x,b});
  const g = () => ops.push({t:"g"});
  const p = (l,r,b) => ops.push({t:"p",l,r,b});

  // kepala struk
  c(TOKO.nama, true); c(TOKO.cabang); c(TOKO.alamat); c("Telp. " + TOKO.telp); c("NPWP: " + TOKO.npwp);
  g();
  p("Tanggal", tgl); p("Jam", jam); p("No. Struk", t.no); p("Kasir", (t.kasir||TOKO.kasir) + " / " + (t.kassa||TOKO.kassa));
  g();
  // daftar barang
  t.item.forEach(i => {
    ops.push({t:"t", x:i.nama});
    p("  " + i.kode + "  " + i.qty + " x " + num(i.harga), num(i.qty*i.harga));
  });
  g();
  // ringkasan
  p("Total Item", jenis + " jenis / " + pcs + " pcs");
  p("Harga Jual", num(t.sub));
  if(t.potongan > 0) p("Diskon" + (t.persen ? " " + t.persen + "%" : ""), "-" + num(t.potongan));
  p("DPP", num(dpp));
  p("PPN 11%", num(t.ppn));
  if(Math.abs(pembulatan) >= 0.5) p("Pembulatan", (pembulatan>0?"+":"") + num(pembulatan));
  g();
  p("TOTAL", num(t.total), true);
  p(t.metode || "Tunai", num(t.uang));
  p("Kembali", num(t.kembali), true);
  g();
  // kaki struk
  c("Terima kasih atas kunjungan Anda", true);
  c("Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan");
  c("Simpan struk ini sebagai bukti pembayaran yang sah");
  c("Layanan konsumen: " + TOKO.cs);
  return ops;
}

function tampilStruk(t){
  document.getElementById("struk").innerHTML = susunStruk(t).map(o => {
    if(o.t==="c") return `<div class="text-center ${o.b?'fw-bold':''}">${o.x}</div>`;
    if(o.t==="g") return `<div class="garis"></div>`;
    if(o.t==="t") return `<div>${o.x}</div>`;
    return `<div class="d-flex justify-content-between ${o.b?'fw-bold':''}"><span style="white-space:pre">${o.l}</span><span>${o.r}</span></div>`;
  }).join("");
}

// ===== STRUK PDF (ukuran kertas thermal 80mm) =====
function buatPDF(t){
  if(!t) return;
  if(!window.jspdf){ alert("Library PDF belum termuat. Pastikan koneksi internet aktif lalu muat ulang halaman."); return; }
  const {jsPDF} = window.jspdf, W = 80, M = 5, LH = 4.3, LEBAR = W - 2*M;
  const ukur = new jsPDF(); ukur.setFont("courier","normal"); ukur.setFontSize(9);
  const ops = susunStruk(t);
  const jmlBaris = o => (o.t==="c"||o.t==="t") ? ukur.splitTextToSize(o.x, LEBAR).length : 1;
  const tinggi = ops.reduce((s,o) => s + jmlBaris(o)*LH, 0) + 2*M + 3;

  const doc = new jsPDF({unit:"mm", format:[W, Math.max(tinggi, 60)]});
  doc.setFontSize(9);
  let y = M + 3;
  ops.forEach(o => {
    doc.setFont("courier", o.b ? "bold" : "normal");
    if(o.t==="c" || o.t==="t"){
      const ls = doc.splitTextToSize(o.x, LEBAR);
      ls.forEach((b,k) => doc.text(b, o.t==="c" ? W/2 : M, y + k*LH, o.t==="c" ? {align:"center"} : undefined));
      y += (ls.length-1)*LH;
    }
    else if(o.t==="g"){ doc.setLineDashPattern([0.8,0.8],0); doc.line(M, y-1.5, W-M, y-1.5); }
    else { doc.text(o.l, M, y); doc.text(o.r, W-M, y, {align:"right"}); }
    y += LH;
  });
  doc.save("Struk-" + t.no + ".pdf");
}

// ===== RIWAYAT =====
document.getElementById("modalRiwayat").addEventListener("show.bs.modal", renderRiwayat);
function renderRiwayat(){
  const hariIni = new Date().toDateString();
  const omzet = riwayat.filter(r=>new Date(r.waktu).toDateString()===hariIni).reduce((s,r)=>s+r.total,0);
  document.getElementById("omzet").textContent = rp(omzet);
  document.getElementById("tabelRiwayat").innerHTML = riwayat.length ? riwayat.map((r,i)=>({r,i})).reverse().map(({r,i}) => `
    <tr><td>${r.no}</td><td>${new Date(r.waktu).toLocaleString("id-ID")}</td>
    <td>${r.item.reduce((s,i)=>s+i.qty,0)}</td><td>${r.metode}</td><td class="text-end">${rp(r.total)}</td><td><button class="btn btn-sm btn-outline-danger" onclick="buatPDF(riwayat[${i}])">PDF</button></td></tr>`).join("")
    : `<tr><td colspan="6" class="text-center text-muted">Belum ada transaksi.</td></tr>`;
}
function hapusRiwayat(){
  if(!confirm("Hapus semua riwayat dan kembalikan stok awal?")) return;
  riwayat = []; produk = JSON.parse(JSON.stringify(produkAwal));
  simpan("kasir_riwayat", riwayat); simpan("kasir_produk", produk);
  renderRiwayat(); renderKategori(); renderProduk();
}

// ===== JAM & INISIALISASI =====
setInterval(()=>document.getElementById("jam").textContent = new Date().toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"medium"}),1000);
document.getElementById("modalBayar").addEventListener("shown.bs.modal", () => document.getElementById("uang").focus());
document.getElementById("uang").addEventListener("keydown", e => { if(e.key === "Enter") prosesBayar(); });
modalBayar = new bootstrap.Modal("#modalBayar"); modalStruk = new bootstrap.Modal("#modalStruk");
renderKategori(); renderProduk(); renderKeranjang();