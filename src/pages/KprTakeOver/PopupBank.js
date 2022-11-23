import React, { useState } from "react";
import "./PopupBank.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import KprBiasa from "./KprBiasa";
import KprSyariah from "./KprSyariah";
import PilihProgram from "./PilihProgram";

const PopupBank = ({ setPilihProgram, setSelectedOption }) => {

    const [jenisKpr, setJenisKpr] = useState('KPR');
    const [bankTerpilih, setBankTerpilih] = useState('');
    const [programTerpilih, setProgramTerpilih] = useState('');

    const handleSimpan = () => {
        const list = programTerpilih.split('|');
        let program
        if (list[2]) {
            program = `${list[0]} Take Over ${list[1]}% ${list[2]} tahun`;
        } else {
            program = `${list[0]} Take Over ${list[1]}%`;
        }
        
        setSelectedOption(program);
        setPilihProgram(false)
    }

    return (
        <div>
            <div className="popup-bank__background" onClick={() => setPilihProgram(false)}></div>
            <div className="popup-bank">
                <div>
                    <div className="d-flex align-items-center justify-content-between">
                        <p>Bank Penyedia Take Over</p>
                        <FontAwesomeIcon icon={faXmark} onClick={() => setPilihProgram(false)}/>
                    </div>
                    <hr/>
                    {jenisKpr === 'KPR' ? <KprBiasa setJenisKpr={setJenisKpr} setBankTerpilih={setBankTerpilih} /> : <KprSyariah setJenisKpr={setJenisKpr} setBankTerpilih={setBankTerpilih}/>}
                </div>
                <PilihProgram bankTerpilih={bankTerpilih} setProgramTerpilih={setProgramTerpilih}/>
                <div className="popup-bank__button">
                    {programTerpilih ? <button type="button" className="simulasi-kpr-takeover__button btn btn-primary w-75 mb-3" onClick={handleSimpan}>Simpan</button> 
                    : <button type="button" className="btn btn-secondary w-75 mb-3" disabled>Simpan</button>}   
                </div>
            </div>
        </div>
    )
}

export default PopupBank