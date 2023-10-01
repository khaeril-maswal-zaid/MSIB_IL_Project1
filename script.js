// Ambil elemen navbar
const navbar = document.getElementById('navbar');
const banner = document.getElementById('banner');

// Atur tinggi munculnya navbar
const showNavbarHeight = 100; // Sesuaikan tinggi yang Anda inginkan

// Atur delay sebelum jatuh
const fallDelay = 1000; // 1000 ms = 1 detik, sesuaikan dengan yang Anda inginkan

// Tambahkan event listener untuk event scroll
window.addEventListener('scroll', () => {
  // Dapatkan posisi scroll vertikal
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Jika posisi scroll melebihi tinggi yang ditentukan, atur navbar menjadi fixed
  if (scrollPosition > showNavbarHeight) {
    setTimeout(() => {
      navbar.style.position = 'fixed';
      navbar.style.top = '0';
      navbar.style.left = '0';
      navbar.style.right = '0';
      navbar.style.backgroundColor = '#fff'; // Ganti warna latar belakang sesuai kebutuhan
      navbar.style.zIndex = '999';
      navbar.style.transition = 'top 0.3s ease-in-out'; // Efek jatuh

      banner.style.position = 'relative';
      banner.style.top = '70px';
      
    }, fallDelay);
  } else {
    // Jika posisi scroll kurang dari tinggi yang ditentukan, kembalikan navbar ke posisi normal
    navbar.style.position = 'relative';
    navbar.style.backgroundColor = 'transparent'; // Ganti dengan latar belakang yang sesuai
  }
});
