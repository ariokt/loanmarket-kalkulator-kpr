import React, { useState } from "react";
import PembayaranKpr from "./PembayaranKpr";
import "../KemampuanKpr/hasilperhitungan.css";

const HasilPerhitungan = () => {
    const data = [{jenis: "Saat Ini", estimasiA: "2.000.000.000"}, {jenis: "Take Over", estimasiA: "1.000.000.000"}];
    const [lengkapKiri, setLengkapKiri] = useState('tutup');
    const [lengkapKanan, setLengkapKanan] = useState('tutup');

    return (
        <div className="hasil-perhitungan d-flex flex-column pt-4 pe-l-5 w-100">
            <h2>Hasil Perhitungan</h2>
            <hr className="mb-4"/>
            <div className="d-flex flex-column flex-lg-row gap-4">
                {data.map((e, y) => {
                    if (y === 0) {
                        return (<PembayaranKpr key={y} param={e} lengkapK={lengkapKiri} setLengkapK={setLengkapKiri}/>)
                    } else {
                        return (<PembayaranKpr key={y} param={e} lengkapKn={lengkapKanan} setLengkapKn={setLengkapKanan}/>)
                    }
                } 
                )}
            </div>
            <div className="hasil-hitungan__last-box w-100 mt-4">
                <div className="d-flex flex-column align-items-center w-100 px-4 py-2 gap-2">
                    <div className="d-flex flex-column flex-lg-row text-center justify-content-between w-100">
                        <p className="mb-0">Selisih Angsuran/bulan</p>
                        <p className="mb-0">Rp 100.000</p>
                    </div>
                    <div className="d-flex flex-column flex-lg-row text-center justify-content-between w-100">
                        <p className="mb-0">Selisih Total Pembayaran</p>
                        <p className="mb-0">Rp 1.000.000</p>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row text-center justify-content-between px-4 py-3">
                    <p className="mb-2">Hasil perhitungan belum termasuk biaya bank lainnya</p>
                    {/* <button className="simulasi-kpr-takeover__lengkap" style={{color:"white"}}>
                        <p className="mb-0">Selengkapnya</p>
                    </button> */}
                </div>
            </div>
            <hr className="mt-4 mb-0"/>
            <p className="hasil-perhitungan__disclaimer mt-1"><b>Disclaimer: </b>Hasil di atas merupakan angka estimasi, data perhitungan dapat berbeda dengan perhitungan bank. untuk lebih akuratnya mohon hubungi bank penyedia KPR.</p>
        </div>
    )
}

export default HasilPerhitungan