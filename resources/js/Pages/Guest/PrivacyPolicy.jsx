import GuestLayout from "../Layouts/GuestLayout";

const PrivacyPolicy = () => {
    return (
        <GuestLayout>
            <h1 className="mb-4">Kebijakan Privasi</h1>
            <p className="text-muted">Tanggal efektif: 1 Januari 2025</p>

            <p>Kami menghargai privasi Anda. Kebijakan Privasi ini menjelaskan jenis informasi yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hak Anda terkait data pribadi saat Anda menggunakan situs kami.</p>

            <h2>Informasi yang Kami Kumpulkan</h2>
            <ul>
                <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, atau informasi lain yang Anda berikan secara sukarela saat menghubungi kami atau mendaftar layanan.</li>
                <li><strong>Informasi Non-pribadi / Penggunaan:</strong> Data teknis seperti alamat IP, jenis browser, halaman yang dikunjungi, waktu akses, dan data penggunaan lainnya yang dikumpulkan secara otomatis.</li>
            </ul>

            <h2>Bagaimana Kami Menggunakan Informasi Anda</h2>
            <ul>
                <li>Memberikan, memelihara, dan meningkatkan layanan kami.</li>
                <li>Menanggapi pertanyaan dan permintaan dukungan.</li>
                <li>Mengirim pemberitahuan penting terkait layanan, termasuk pembaruan dan perubahan kebijakan.</li>
                <li>Mengirim materi pemasaran dan promosi jika Anda telah memberikan persetujuan.</li>
            </ul>

            <h2>Cookie dan Teknologi Pelacakan</h2>
            <p>Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis lalu lintas situs, dan menyediakan fitur yang relevan. Anda dapat mengelola preferensi cookie melalui pengaturan browser Anda.</p>

            <h2>Penyimpanan dan Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah teknis dan organisasi yang sesuai untuk melindungi data Anda dari akses, pengungkapan, atau perusakan yang tidak sah. Kami menyimpan data hanya selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini atau untuk memenuhi kewajiban hukum.</p>

            <h2>Hak Anda</h2>
            <p>Anda memiliki hak untuk mengakses, memperbarui, memperbaiki, atau menghapus data pribadi Anda. Jika berwenang, Anda juga dapat meminta pembatasan pemrosesan atau menolak pemrosesan tertentu. Untuk permintaan terkait data, silakan hubungi kami menggunakan informasi kontak di bawah.</p>

            <h2>Anak-anak</h2>
            <p>Situs ini tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak di bawah usia tersebut. Jika Anda mengetahui adanya pengumpulan data dari anak, hubungi kami untuk penghapusan.</p>

            <h2>Perubahan pada Kebijakan Privasi</h2>
            <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diumumkan dengan mempublikasikan Kebijakan Privasi yang diperbarui di halaman ini dengan tanggal efektif yang baru.</p>

            <h2>Kontak</h2>
            <p>Jika Anda memiliki pertanyaan atau permintaan terkait kebijakan ini, silakan hubungi kami di <a href="mailto:admin@gmail.com">admin@gmail.com</a>.</p>
        </GuestLayout>
    );
};

export default PrivacyPolicy;