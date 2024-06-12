function KirimData() {
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
    const jurusan = document.getElementById('jurusan').value;
    const tanggal = document.getElementById('tanggal').value;
    const alamat = document.getElementById('Alamat').value;

    alert(`Data Terkirim!\nNama: ${nama}\nNIM: ${nim}\nPeminatan: ${peminatan}\nJurusan: ${jurusan}\nTanggal Lahir: ${tanggal}\nAlamat: ${alamat}`);
}
