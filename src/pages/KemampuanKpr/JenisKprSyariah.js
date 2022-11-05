import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion} from '@fortawesome/free-regular-svg-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import "./index.css"

const JenisKprSyariah = ({ jenisKpr, setJenisKpr, setMarginTahunan, marginTahunan }) => {
    const optionsKpr = ['KPR', 'KPR Syariah'];

    const MarginTahunan = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
            Presentase keuntungan bank yang sudah ditentukan di awal saat perjanjian kredit.
        </Tooltip>
      );

    return (
        <div className="d-flex flex-column">
            <div className="d-flex">
                {optionsKpr.map((item, y) => 
                <button key={y} className="jenis-kpr" onClick={() => setJenisKpr(item)}>
                    { jenisKpr === item ? <p style={{color:"#005274"}}>{item}</p> : <p style={{color:"#868f9a"}}>{item}</p> }
                    { jenisKpr === item ? <hr className="hr--selected" /> : <hr className="hr--notselected"/> }
                </button>
                )}
            </div>
            <div className="mb-3 input-group">
                <div className="d-flex flex-column flex-md-column flex-xl-row justify-content-between w-100">
                    <div className="jenis-kpr__content d-flex align-items-center gap-2">
                        <p>Margin/tahun</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={MarginTahunan}
                            >
                            <span><button disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-2 input-persen-width input-group">
                        <input
                        placeholder="0"
                        value={marginTahunan}
                        className="form-control"
                        disabled
                        />
                        <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                    </div>
                </div>
                {/* input marjin tahunan */}
                <input type="range" className="custom-range form-range" min="1" max="15" step="1" value={marginTahunan} onChange={e => setMarginTahunan(e.target.value)}/>
                <div className="custom-range__minmax w-100 d-flex justify-content-between">
                    <span>1%</span>
                    <span>15%</span>
                </div>
            </div>
            <button variant="primary" className="mb-3 simulasi-kemampuan-kpr__button btn btn-primary">Hitung</button>
        </div>
    )
}

export default JenisKprSyariah