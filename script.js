function goToPrank() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('prank').style.display = 'flex';

  // Delay prank text
  setTimeout(() => {
    document.getElementById('prankText').style.display = 'none';
    document.getElementById('bercandaBox').style.display = 'block';

    // Lanjut ke ucapan
    setTimeout(() => {
      document.getElementById('prank').style.display = 'none';
      document.getElementById('ucapan').style.display = 'flex';
    }, 2000);
  }, 3000);
}