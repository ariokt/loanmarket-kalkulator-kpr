import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
import JenisKprBiasa from "./JenisKprBiasa";
import JenisKprSyariah from "./JenisKprSyariah";
// import Button from 'react-bootstrap/Button';
import HasilPerhitungan from "./HasilPerhitungan";
import "./index.css"


const CobaRange = () => {
    const [penghasilan, setPenghasilan] = useState('');
    const [danaKpr, setDanaKpr] = useState('');
    const [cicilanLain, setCicilanLain] = useState('');
    console.log(cicilanLain);
    
    const [lamaKpr, setLamaKpr] = useState('20');
    const [persenPenghasilan, setPersenPenghasilan] = useState(30);
    const [jenisPerhitungan, setJenisPerhitungan] = useState('PerhitunganSederhana');
    const [jenisKpr, setJenisKpr] = useState('KPR');

    const [sukuBungaX, setSukuBungaX] = useState('7.5');
    const [masaKredit, setMasaKredit] = useState('5');
    const [sukuBungaG, setSukuBungaG] = useState('12.0');
    const props = {setSukuBungaX, setMasaKredit, setSukuBungaG, sukuBungaX, masaKredit, sukuBungaG}

    const [marginTahunan, setMarginTahunan] = useState('10');


    const addCommas = num => num.replace(/\B(?=(\d{3})+(?!\d))/g, "."); //menambah titik saat input
    const removeNonNumeric = num => num.replace(/[^0-9]/g, ""); //membuat input tidak menerima selain numeric

    const handleLamaKpr = (e) => {
        const value = e.target.value;
        if (value.length < 3 && parseInt(value) <= 30) {
            setLamaKpr(value);
        } else if (parseInt(value) > 30){
            setLamaKpr('30');
        } else {
            setLamaKpr('');
        }
    }

    const handlePersenPenghasilan = (e) => {
        const value = e.target.value;
        if (value.length < 3 && parseInt(value) <= 30 && parseInt(value) >= 20) {
            setPersenPenghasilan(value);
        } else if (parseInt(value) > 30){
            setPersenPenghasilan('30');
        } else if (parseInt(value) < 20 && value !== '3'){
            setPersenPenghasilan('2');
        } else if (value === '3'){
            setPersenPenghasilan('3');
        } else {
            setPersenPenghasilan('');
        }
    }

    const handleFormDown = () => {
        setJenisPerhitungan('PerhitunganLengkap');
    }

    const handleFormUp = () => {
        setJenisPerhitungan('PerhitunganSederhana');
    }

    return (
        <div className="simulasi-kemampuan-kpr">
            <h2>Simulasi Kemampuan KPR</h2>
            <div className="d-flex flex-column flex-md-row gap-5">
                <div className="profile-finansial mt-2">
                    <h2>Profil Finansial</h2>
                    <hr/>
                    <div className="mb-3 input-group">
                        <label className="form-label">Berapa penghasilan/bulan kamu saat ini</label>
                        <div className="d-flex w-100">
                            <span id="basic-addon1"className="input-group-text--left input-group-text">Rp</span> 
                            <input
                                type="text"
                                placeholder="0"
                                value={penghasilan}
                                onChange={e => setPenghasilan(addCommas(removeNonNumeric(e.target.value)))}
                                inputMode="numeric"
                                className="input-group-text--right form-control"
                            />   
                        </div> 
                    </div>
                    <div className="mb-3 input-group">
                        <label className="form-label">Berapa uang muka yang akan kamu siapkan untuk KPR?</label>
                        <div className="d-flex w-100">
                            <span id="basic-addon1" className="input-group-text--left input-group-text">Rp</span>
                            <input
                                type="text"
                                placeholder="0"
                                value={danaKpr}
                                onChange={e => setDanaKpr(addCommas(removeNonNumeric(e.target.value)))}
                                inputMode="numeric"
                                className="input-group-text--right form-control"
                                />
                        </div>
                    </div>
                    <div className="mb-3 input-group d-flex flex-column">
                        <label className="form-label">Apakah ada cicilan bulanan lainnya saat ini?</label>
                        <div className="d-flex gap-3">
                            <span className="profile-finansial__cicilan-lain"><input type="radio" value="Tidak Ada" name="gender" onChange={e => setCicilanLain(e.target.value)}/> Tidak Ada</span>
                            <span className="profile-finansial__cicilan-lain"><input type="radio" value="Ada" name="gender" onChange={e => setCicilanLain(e.target.value)} /> Ada</span> 
                        </div>
                    </div>
                    <div className="mb-3 input-group">
                        <label className="form-label">Berapa lama masa KPR yang kamu inginkan?</label>
                        <div className="mb-2 input-group">
                            <input
                            placeholder={lamaKpr}
                            value={lamaKpr}
                            onChange={handleLamaKpr}
                            className="form-control"
                            />
                            <span id="basic-addon2" className="input-group-text--right input-group-text">Tahun</span>
                        </div>
                        <input type="range" className="custom-range form-range" min="1" max="30" step="1" value={lamaKpr} onChange={handleLamaKpr}/>
                        <div className="custom-range__minmax w-100 d-flex justify-content-between">
                            <span>1 Tahun</span>
                            <span>30 Tahun</span>
                        </div>
                    </div>
                    <div className="mb-3 input-group">
                        <label className="form-label">Berapa persen penghasilan yang akan kamu siapkan untuk angsuran KPR per bulan?</label>
                        <div className="d-flex flex-column flex-xl-row gap-2 w-100">
                            <div className="mb-2 input-group input-persen-width">
                                <input
                                placeholder={persenPenghasilan}
                                value={persenPenghasilan}
                                onChange={handlePersenPenghasilan}
                                className="form-control"
                                />
                                <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                            </div>
                            <div className="mb-2 input-group">
                                <span id="basic-addon2" className="input-group-text--left input-group-text">Rp</span>
                                <input
                                placeholder="0"
                                className="form-control"
                                value={(penghasilan && persenPenghasilan) ? addCommas((parseInt(penghasilan.split('.').join(''))*parseInt(persenPenghasilan)/100).toString()) : '0'}
                                disabled
                                />
                            </div>
                        </div>
                        <input id="ex1Slider" type="range" className="custom-range form-range" min="20" max="30" step="1" value={persenPenghasilan} onChange={handlePersenPenghasilan}/>
                        <div className="custom-range__minmax w-100 d-flex justify-content-between">
                            <span>20%</span>
                            <span>30%</span>
                        </div>
                    </div>
                    {jenisPerhitungan === 'PerhitunganSederhana' ? 
                        <div className="d-flex flex-column">
                            <button type="button" className="simulasi-kemampuan-kpr__button mb-3 btn btn-primary">Hitung</button>
                            <button className="profile-finansial__updown d-flex gap-2 align-items-center justify-content-center mb-4" onClick={handleFormDown}>
                                <p>Perhitungan Lengkap</p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>
                        : 
                        <div>
                            <div>
                                <h2>Jenis KPR</h2>
                                <hr className="mb-4"/>
                                {jenisKpr === 'KPR' ? <JenisKprBiasa jenisKpr={jenisKpr} setJenisKpr={setJenisKpr} {...props}/> : 
                                <JenisKprSyariah jenisKpr={jenisKpr} setJenisKpr={setJenisKpr} setMarginTahunan={setMarginTahunan} marginTahunan={marginTahunan}/>}
                            </div>
                            <button className="profile-finansial__updown d-flex gap-2 align-items-center justify-content-center mb-4" onClick={handleFormUp}>
                                <p>Perhitungan Sederhana</p>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </button>
                        </div>
                    }   
                </div>
                <HasilPerhitungan />
            </div>
        </div>
        
        
    )
}

export default CobaRange