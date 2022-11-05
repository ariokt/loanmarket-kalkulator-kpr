import React from "react";
import "../KemampuanKpr/index.css";

const KprSyariah = ({ setJenisKpr, setBankTerpilih }) => {
    return (
        <div className="kpr-biasa">
            <div className="d-flex mt-2">
                <span className="w-100 text-center jenis-kpr" onClick={() => setJenisKpr('KPR')}>
                    <p>KPR</p>
                    <hr className="hr--notselected"/>
                </span>
                <span className="w-100 text-center jenis-kpr">
                    <p>KPR Syariah</p>
                    <hr className="hr--selected"/>
                </span>
            </div>
            <select className="form-select mt-3" aria-label="Default select example" defaultValue='' onChange={(e) => setBankTerpilih(e.target.value)}>
                <option>Pilih bank kamu</option>
                <option value="bsiS">Bank Syariah Indonesia</option>
                <option value="btnS">BTN Syariah</option>
                <option value="cimbniagaS">CIMB NIAGA Syariah</option>
                <option value="ocbcnispS">OCBC NISP Syariah</option>
                <option value="danamonS">Danamon Syariah</option>
                <option value="maybankS">Maybank Syariah</option>
            </select>
        </div>
    )
}

export default KprSyariah