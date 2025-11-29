import React from "react";
import GuestLayout from "../Layouts/GuestLayout";

export default function TermsAndConditions() {
    return (
        <GuestLayout>
            <h1 className="text-3xl font-bold mb-4">Syarat dan Ketentuan</h1>

            <p className="mb-4">
                Selamat datang. Halaman ini menjelaskan syarat dan ketentuan penggunaan layanan kami.
                Dengan mengakses atau menggunakan situs ini, Anda menyetujui syarat-syarat berikut.
            </p>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">1. Penggunaan Layanan</h2>
                <p>
                    Anda setuju untuk menggunakan layanan hanya untuk tujuan yang sah dan mematuhi semua hukum
                    yang berlaku. Dilarang melakukan tindakan yang dapat merusak, mengganggu, atau membebani
                    layanan.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">2. Akun dan Keamanan</h2>
                <p>
                    Jika layanan mengharuskan pembuatan akun, Anda bertanggung jawab menjaga kerahasiaan
                    informasi akun Anda dan semua aktivitas yang dilakukan melalui akun tersebut.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">3. Konten</h2>
                <p>
                    Semua konten yang disediakan pada situs ini dilindungi hak cipta sebagaimana berlaku.
                    Anda boleh menampilkan dan mencetak salinan untuk penggunaan pribadi, kecuali dinyatakan
                    lain.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">4. Batasan Tanggung Jawab</h2>
                <p>
                    Layanan disediakan "sebagaimana adanya". Kami tidak bertanggung jawab atas kerugian langsung,
                    tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan.
                </p>
            </section>

            <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2">5. Perubahan</h2>
                <p>
                    Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif setelah
                    dipublikasikan pada situs ini. Penggunaan layanan setelah perubahan berarti Anda menerima
                    syarat yang diperbarui.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Hukum yang Berlaku</h2>
                <p>
                    Syarat ini diatur oleh hukum yang berlaku di yurisdiksi tempat layanan beroperasi, kecuali
                    jika disepakati lain secara tertulis.
                </p>
            </section>
        </GuestLayout>
    );
}