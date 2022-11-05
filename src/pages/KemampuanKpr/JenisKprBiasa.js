import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion} from '@fortawesome/free-regular-svg-icons';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./index.css"

const JenisKprBiasa = ({ jenisKpr, setJenisKpr, setSukuBungaX, setMasaKredit, setSukuBungaG, sukuBungaX, masaKredit, sukuBungaG}) => {
    const optionsKpr = ['KPR', 'KPR Syariah'];

    const SukuBungaTooltipX = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          Suku bunga tetap yang besarnya mengacu pada sisa pokok utang, berlaku selama masa kredit fix.
        </Tooltip>
      );

    const MasaKreditTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
        Masa berlaku suku bunga fix sesuai produk KPR bank yang kamu pilih.
    </Tooltip>
    );

    const SukuBungaTooltipG = (props) => (
        <Tooltip id="button-tooltip" {...props} className="custom-tooltip">
          Suku bunga yang besarnya dapat terus berubah mengacu pada suku bunga Bank Indonesia atau kebijakan bank.
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
                        <p>Suku Bunga Fix</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={SukuBungaTooltipX}
                            >
                            <span><button disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-2 input-persen-width input-group">
                        <input
                        placeholder="0"
                        value={sukuBungaX}
                        className="form-control"
                        disabled
                        />
                        <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                    </div>
                </div>
                {/* input suku bunga fix */}
                <input type="range" className="custom-range form-range" min="1" max="15" step="0.5" value={sukuBungaX} onChange={e => setSukuBungaX(e.target.value)}/>
                <div className="custom-range__minmax w-100 d-flex justify-content-between">
                    <span>1%</span>
                    <span>15%</span>
                </div>
            </div>
            <div className="mb-3 input-group">
                <div className="d-flex flex-column flex-md-column flex-xl-row justify-content-between w-100">
                    <div className="jenis-kpr__content d-flex align-items-center gap-2">
                        <p>Masa Kredit Fix</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={MasaKreditTooltip}
                            >
                            <span><button disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-2 input-tahun-width input-group">
                        <input
                        placeholder="0"
                        value={masaKredit}
                        className="form-control"
                        disabled
                        />
                        <span id="basic-addon2" className="input-group-text--right input-group-text">Tahun</span>
                    </div>
                </div>
                {/* input masa kredit fix */}
                <input type="range" className="custom-range form-range" min="1" max="10" step="1" value={masaKredit} onChange={e => setMasaKredit(e.target.value)}/>
                <div className="custom-range__minmax w-100 d-flex justify-content-between">
                    <span>1 tahun</span>
                    <span>10 tahun</span>
                </div>
            </div>
            <div className="mb-3 input-group">
                <div className="d-flex flex-column flex-md-column flex-xl-row justify-content-between w-100">
                    <div className="jenis-kpr__content d-flex align-items-center gap-2">
                        <p>Suku Bunga Floating</p>
                        <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={SukuBungaTooltipG}
                            >
                            <span><button disabled style={{ pointerEvents: 'none' }}><FontAwesomeIcon icon={faCircleQuestion} /></button></span>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-2 input-persen-width input-group">
                        <input
                        placeholder="0"
                        value={sukuBungaG}
                        className="form-control"
                        disabled
                        />
                        <span id="basic-addon2" className="input-group-text--right input-group-text">%</span>
                    </div>
                </div>
                {/* input suku bunga floating */}
                <input type="range" className="custom-range form-range" min="1" max="15" step="0.5" value={sukuBungaG} onChange={e => setSukuBungaG(e.target.value)}/>
                <div className="custom-range__minmax w-100 d-flex justify-content-between">
                    <span>1%</span>
                    <span>15%</span>
                </div>
            </div>
            <button variant="primary" className="mb-3 simulasi-kemampuan-kpr__button btn btn-primary">Hitung</button>
        </div>
    )
}

export default JenisKprBiasa