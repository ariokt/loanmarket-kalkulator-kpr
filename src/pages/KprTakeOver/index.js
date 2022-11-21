import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./index.css"
import PopupBank from "./PopupBank";
import HasilPerhitungan from "./HasilPerhitungan";

const KprTakeOver = () => {

    const [sisaPinjamanP, setSisaPinjamanP] = useState('');
    const [sisaWaktu, setSisaWaktu] = useState('200');
    const [sukuBunga, setSukuBunga] = useState('12');
    const [jangkaWaktuK, setJangkaWaktuK] = useState('10');
    const [sukuBungaF, setSukuBungaF] = useState('12.0')

    const [jenisPerhitungan, setJenisPerhitungan] = useState('PerhitunganSederhana');

    const [pilihProgram, setPilihProgram] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');
    
    const addCommas = num => num.replace(/\B(?=(\d{3})+(?!\d))/g, "."); //menambah titik saat input
    const removeNonNumeric = num => num.replace(/[^0-9]/g, ""); //membuat input tidak menerima selain numeric

    const handleSisaWaktu = (e) => {
        const value = e.target.value;
        if (value.length < 4 && parseInt(value) <= 360) {
            setSisaWaktu(value);
        } else if (parseInt(value) > 360){
            setSisaWaktu('360');
        } else {
            setSisaWaktu('');
        }
    }

    const handleJangkaWaktuK = (e) => {
        const value = e.target.value;
        if (value.length < 3 && parseInt(value) <= 30) {
            setJangkaWaktuK(value);
        } else if (parseInt(value) > 30){
            setJangkaWaktuK('30');
        } else {
            setJangkaWaktuK('');
        }
    }

    const handleFormDown = () => {
        setJenisPerhitungan('PerhitunganLengkap');
    }

    const handleFormUp = () => {
        setJenisPerhitungan('PerhitunganSederhana');
    }

    return (
        <div className="simulasi-kpr-takeover">
            {pilihProgram && <PopupBank setPilihProgram={setPilihProgram} setSelectedOption={setSelectedOption}/>}
            <h2>Simulasi KPR Take Over</h2>
            <div className="d-flex flex-column flex-md-row gap-5">
                <div className="simulasi-kpr-takeover__data mt-2">
                    <div className="pt-4">
                        <h2 className="mb-4">KPR Saat ini</h2>
                        <div className="mb-3 d-flex flex-column input-group">
                            <div className="d-flex align-items-center">
                                <label className="d-flex align-items-center gap-2 form-label">
                                    <p>Sisa Pinjaman Pokok</p>
                                    {/* <FontAwesomeIcon icon={faCircleQuestion} /> */}
                                </label>
                            </div>
                            <div className="d-flex">
                                <span id="basic-addon1"className="input-group-text--left input-group-text">Rp</span> 
                                <input
                                type="text"
                                placeholder="0"
                                value={sisaPinjamanP}
                                onChange={e => setSisaPinjamanP(addCommas(removeNonNumeric(e.target.value)))}
                                inputMode="numeric"
                                className="input-group-text--right form-control"
                                />   
                            </div> 
                        </div>
                        <div className="mb-3 d-flex input-group">
                            <div className="d-flex flex-column justify-content-between w-100">
                                <p className="mb-2">Sisa Jangka Waktu Cicilan</p>
                                <div className="mb-2 input-tahun-width input-group">
                                    <input
                                    placeholder="1"
                                    value={sisaWaktu}
                                    onChange={handleSisaWaktu}
                                    className="form-control"
                                    />
                                    <span id="basic-addon2" className="input-group-text--right input-group-text">bulan</span>
                                </div>
                            </div>
                            {/* input sisa waktu */}
                            <input type="range" className="custom-range form-range" min="1" max="360" step="1" value={sisaWaktu} onChange={e => setSisaWaktu(e.target.value)}/>
                            <div className="custom-range__minmax w-100 d-flex justify-content-between">
                                <span>1 bulan</span>
                                <span>360 bulan</span>
                            </div>
                        </div>
                        <div className="mb-3 d-flex input-group">
                            <div className="d-flex flex-column justify-content-between w-100">
                                <p className="mb-2">Sisa Bunga KPR Saat ini</p>
                                <div className="mb-2 input-persen-width input-group">
                                    <input
                                    placeholder="12"
                                    value={sukuBunga}
                                    className="form-control"
                                    disabled
                                    />
                                    <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                                </div>
                            </div>
                            {/* input suku bunga kpr */}
                            <input type="range" className="custom-range form-range" min="1" max="15" step="0.5" value={sukuBunga} onChange={e => setSukuBunga(e.target.value)}/>
                            <div className="custom-range__minmax w-100 d-flex justify-content-between">
                                <span>1%</span>
                                <span>15%</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h2 className="mb-4">KPR Take Over</h2>
                        <div className="mb-3 flex-column gap-2 input-group" onClick={() => setPilihProgram(true)}>
                            <p>Pilihan Program Take Over</p>      
                            {selectedOption ?
                            <select className="w-100 form-select" style={{borderRadius:"8px"}}>
                                <option hidden>{selectedOption}</option>
                            </select>
                            : 
                            <select className="w-100 form-select" style={{borderRadius:"8px"}} />}
                        </div>
                        <div className="mb-3 input-group">
                            <div className="d-flex flex-column justify-content-between w-100">
                                <p className="mb-2">Jangka Waktu KPR Take Over</p>
                                <div className="mb-2 input-persen-width input-group">
                                    <input
                                    placeholder="1"
                                    value={jangkaWaktuK}
                                    onChange={handleJangkaWaktuK}
                                    className="form-control"
                                    />
                                    <span id="basic-addon2" className="input-group-text--right input-group-text">Tahun</span>
                                </div>
                            </div>
                            {/* input jangka waktu kpr take over */}
                            <input type="range" className="custom-range form-range" min="1" max="30" step="1" value={jangkaWaktuK} onChange={e => setJangkaWaktuK(e.target.value)}/>
                            <div className="custom-range__minmax w-100 d-flex justify-content-between">
                                <span>1 Tahun</span>
                                <span>30 Tahun</span>
                            </div>
                        </div>
                        {jenisPerhitungan === 'PerhitunganSederhana' ? 
                            <div className="d-flex flex-column">
                                <button className="simulasi-kpr-takeover__button mb-3 btn btn-primary">Hitung</button>
                                <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center" onClick={handleFormDown}>
                                    <p>Perhitungan Lengkap</p>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </div>
                            : 
                            <div className="d-flex flex-column">
                                <div className="mb-3 input-group">
                                    <div className="d-flex flex-column justify-content-between w-100">
                                        <p className="mb-2">Suku Bunga Floating</p>
                                        <div className="mb-2 input-persen-width input-group">
                                            <input
                                            placeholder="1"
                                            value={sukuBungaF}
                                            className="form-control"
                                            disabled
                                            />
                                            <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                                        </div>
                                    </div>
                                    {/* input suku bunga floating */}
                                    <input type="range" className="custom-range form-range" min="1" max="15" step="0.5" value={sukuBungaF} onChange={e => setSukuBungaF(e.target.value)}/>
                                    <div className="custom-range__minmax w-100 d-flex justify-content-between">
                                        <span>1%</span>
                                        <span>15%</span>
                                    </div>
                                </div>
                                <button className="simulasi-kpr-takeover__button mb-3 btn btn-primary">Hitung</button>
                                <button className="simulasi-kpr-takeover__updown d-flex gap-2 align-items-center justify-content-center" onClick={handleFormUp}>
                                    <p>Perhitungan Sederhana</p>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                            </div>
                        }
                    </div>
                </div>
                <HasilPerhitungan />
            </div>
        </div>
    )
}

export default KprTakeOver