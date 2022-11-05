import React, { useState } from "react";
import "../KemampuanKpr/index.css";

const KprBiasa = ({ setJenisKpr, setBankTerpilih }) => {
    return (
        <div className="kpr-biasa">
            <div className="d-flex mt-2">
                <button className="w-100 text-center jenis-kpr">
                    <p>KPR</p>
                    <hr className="hr--selected"/>
                </button>
                <button className="w-100 text-center jenis-kpr" onClick={() => setJenisKpr('KPRsy')}>
                    <p>KPR Syariah</p>
                    <hr className="hr--notselected"/>
                </button>
            </div>
            <select className="form-select mt-3" aria-label="Default select example" defaultValue='' onChange={(e) => setBankTerpilih(e.target.value)}>
                <option>Pilih bank kamu</option>
                <option value="mandiri">Mandiri</option>
                <option value="btn">BTN</option>
                <option value="cimbniaga">CIMB NIAGA</option>
                <option value="ocbcnisp">OCBC NISP</option>
                <option value="danamon">Danamon</option>
                <option value="maybank">Maybank</option>
            </select>
        </div>
    )
}

export default KprBiasa