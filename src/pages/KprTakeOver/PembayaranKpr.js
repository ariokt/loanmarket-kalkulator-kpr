import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../KemampuanKpr/hasilperhitungan.css";
import "./index.css";


const PembayaranKpr = ({ param, lengkapK, lengkapKn, setLengkapK, setLengkapKn }) => {

    const handleKiriDown = () => {
        setLengkapK('buka');
    }

    const handleKiriUp = () => {
        setLengkapK('tutup');
    }

    const handleKananDown = () => {
        setLengkapKn('buka');
    }

    const handleKananUp = () => {
        setLengkapKn('tutup');
    }

    const dataKiri = [{title: "Bunga Pinjaman", total: "263.000.000"}, {title: "Total Pembayaran", total: "463.000.000"}];
    const dataKanan = [{title: "Angsuran/bulan (Masa kredit floating)", total: "2.000.000"}, {title: "Margin Pinjaman", total: "116.000.000"}, {title: "Total Pembayaran", total: "316.000.000"}];

    return (
        <>
            <div className="pembayaran-kpr w-100">
                <div className="d-flex flex-column align-items-center w-100 pb-3">
                    <div className="pembayaran-kpr__tittle w-100 pt-3">
                        <h2 className="text-center">Pembayaran KPR {param.jenis}</h2>
                        <hr className="w-100 mb-0"/>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <p className="pembayaran-kpr__estimasi">Estimasi Angsuran/bulan</p>
                        <div className="hasil-perhitungan__content-result d-flex align-items-center">
                            <p>Rp</p>
                            <span>{param.estimasiA}</span>
                        </div>
                    </div>
                </div>
                {lengkapK === 'buka' &&
                <div className="pembayaran-kpr__detail pt-2">
                    <div className="d-flex flex-column gap-1">
                        {dataKiri.map((e,y) =>  
                            <div key={y} className="d-flex justify-content-between px-2">
                                <p className="w-50">{e.title}</p>
                                <p>Rp {e.total}</p>
                            </div>
                        )}
                    </div>
                    <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center mb-2 mt-2" onClick={handleKiriUp}>
                        <p>Selengkapnya</p>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                </div>}
                {lengkapK === 'tutup' && 
                <div>
                    <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center mb-2 mt-2" onClick={handleKiriDown}>
                        <p>Selengkapnya</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
                }
                {lengkapKn === 'buka' &&
                <div className="pembayaran-kpr__detail pt-2">
                    <div className="d-flex flex-column gap-1">
                        {dataKanan.map((e,y) =>  
                            <div key={y} className="d-flex justify-content-between px-2">
                                <p className="w-50">{e.title}</p>
                                <p>Rp {e.total}</p>
                            </div>
                        )}
                    </div>
                    <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center mb-2 mt-2" onClick={handleKananUp}>
                        <p>Selengkapnya</p>
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                </div>}
                {lengkapKn === 'tutup' && 
                <div>
                    <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center mb-2 mt-2" onClick={handleKananDown}>
                        <p>Selengkapnya</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
                }
            </div>
        </>
    )
}

export default PembayaranKpr