import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./hasilperhitungan.css";


const HasilPerhitungan = () => {
    

    const HpmTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          Dihitung berdasarkan maksimal pinjaman yang bisa diambil dan DP 20%
        </Tooltip>
    );

    const AngsuranM = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          Dihitung berdasarkan 30% gaji dikurangi cicilan bulanan kamu. Biasanya kita sebut nominal 30% ini sebagai
          debt to income ratio yang menjadi persyaratan KPR
        </Tooltip>
    );

    const PinjamanP = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          Jumlah pinjaman total yang dihitung dari Harga Properti - Uang Muka
        </Tooltip>
    );

    const EstimasiB = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          <p>Estimasi biaya-biaya yang harus disiapkan saat melakukan akad KPR. Jumlahnya berkisar 6% dari pokok pinjaman. Jumlah dapat berbeda di setiap bank.</p>
          <br/>
          <div>
            <p>Meliputi</p>
            <ul>
                <li>Biaya Bank</li>
                <li>Biaya Notaris</li>
                <li>Biaya Asuransi</li>
            </ul>
          </div>
        </Tooltip>
    );

    return (
        <div className="hasil-perhitungan d-flex flex-column pt-4 pe-l-5 w-100">
            <h2>Hasil Perhitungan</h2>
            <hr></hr>
            <div className="d-flex flex-column flex-lg-row gap-3 mb-3">
                <div className="hasil-perhitungan__content py-4 d-flex flex-column align-items-center w-100">
                    <div className="d-flex gap-1 align-items-center">
                        <p className="hasil-perhitungan__judul-content">Hasil Properti Maksimal</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={HpmTooltip}
                            >
                            <span><button className="hasil-perhitungan__question" disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="hasil-perhitungan__content-result d-flex align-items-center">
                        <p>Rp</p>
                        <span>2.000.000.000</span>
                    </div>
                </div>
                <div className="hasil-perhitungan__content py-4 d-flex flex-column align-items-center w-100">
                    <div className="d-flex gap-1 align-items-center">
                        <p className="hasil-perhitungan__judul-content">Angsuran/bulan Maksimal</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={AngsuranM}
                            >
                            <span><button className="hasil-perhitungan__question" disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="hasil-perhitungan__content-result d-flex align-items-center">
                        <p>Rp</p>
                        <span>100.000</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row gap-3 mb-3">
                <div className="hasil-perhitungan__content py-4 d-flex flex-column align-items-center w-100">
                    <div className="d-flex gap-1 align-items-center">
                        <p className="hasil-perhitungan__judul-content">Pinjaman Pokok</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={PinjamanP}
                            >
                            <span><button className="hasil-perhitungan__question" disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="hasil-perhitungan__content-result d-flex align-items-center">
                        <p>Rp</p>
                        <span>100.000</span>
                    </div>
                </div>
                <div className="hasil-perhitungan__content py-4 d-flex flex-column align-items-center w-100">
                    <div className="d-flex gap-1 align-items-center">
                        <p className="hasil-perhitungan__judul-content">Estimasi Biaya Lainnya</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={EstimasiB}
                            >
                            <span><button className="hasil-perhitungan__question" disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="hasil-perhitungan__content-result d-flex align-items-center">
                        <p>Rp</p>
                        <span>100.000</span>
                    </div>
                </div>
            </div>
            <div className="persyaratan-uang-muka d-flex flex-column mb-4">
                <div className="hasil-perhitungan__content py-4 d-flex flex-column align-items-center w-100 mb-3">
                    <div className="d-flex gap-1 align-items-center">
                        <p className="hasil-perhitungan__judul-content">Persyaratan Uang Muka</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={HpmTooltip}
                            >
                            <span><button className="hasil-perhitungan__question" disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="hasil-perhitungan__content-result d-flex align-items-center">
                        <p>Rp</p>
                        <span>100.000</span>
                    </div>
                </div>
                <div className="mx-3 pb-2 d-flex flex-column flex-lg-row justify-content-between mb-4">
                    <p style={{color:"white"}}>Uang muka yang sudah kamu siapkan</p>
                    <span>Rp 0</span>
                </div>
            </div>
            <h2 className="mb-3">Hasil Perhitungan Berdasarkan:</h2>
            <div className="hasil-perhitungan__berdasarkan d-flex flex-column gap-3 pb-3">
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Penghasilan Per Bulan</p>
                    <span>Rp 0</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Cicilan Bulanan Lainnya</p>
                    <span>Rp 0</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Kesiapan Uang Muka</p>
                    <span>Rp 0</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Masa Kredit KPR</p>
                    <span>20 Tahun (240 Bulan)</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>% Angsuran KPR dari Penghasilan</p>
                    <span>30%</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Jenis KPR</p>
                    <span>KPR Konvensional</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Suku Bunga Fix</p>
                    <span>7.5%</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Masa Kredit Fix</p>
                    <span>5 Tahun</span>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <p>Suku Bunga Floating</p>
                    <span>12%</span>
                </div>
            </div>
            <p className="hasil-perhitungan__disclaimer mt-2"><b>Disclaimer: </b>Hasil di atas merupakan angka estimasi, data perhitungan dapat berbeda dengan perhitungan bank. untuk lebih akuratnya mohon hubungi bank penyedia KPR.</p>
        </div>
    )
}

export default HasilPerhitungan