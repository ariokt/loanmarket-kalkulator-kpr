import React from "react";

const PilihProgram = ({ bankTerpilih, setProgramTerpilih }) => {
    // BANK normal
    const mandiri = {bank: 'Mandiri', persen: '3,98', tahun: '3'};
    const btn = [{bank: 'BTN', persen: '5,99', tahun: '2'}, {bank: 'BTN', persen: '7,49', tahun: '3'}, 
                {bank: 'BTN', persen: '8,49', tahun: '5'}, {bank: 'BTN', persen: '9,49', tahun: '10'}];
    const cimbniaga = [{bank: 'CIMB Niaga', persen: '5,00', tahun: '3'}, {bank: 'CIMB Niaga', persen: '5,25', tahun: '5'}];
    const danamon = {bank: 'Bank Danamon', persen: '4,25', tahun: '3'};
    const maybank = [{bank: 'Maybank', persen: '2,63', tahun: '1'}, {bank: 'Maybank', persen: '3,63', tahun: '2'}, 
                    {bank: 'Maybank', persen: '7,30', tahun: '10'}];
    const ocbc = [{bank: 'OCBC NISP', persen: '2,70', tahun: '1'}, {bank: 'OCBC NISP', persen: '3,75', tahun: '2'}, 
                 {bank: 'OCBC NISP', persen: '4,75', tahun: '3'}, {bank: 'OCBC NISP', persen: '6,69', tahun: '5'},
                 {bank: 'OCBC NISP', persen: '6,25', tahun: '5'}, {bank: 'OCBC NISP', persen: '5,75', tahun: '5'}];

    // BANK syariah
    const bsiS = {bank: 'Bank Syariah Indonesia', persen: '3,33'};
    const btnS = {bank: 'BTN Syariah', persen: '6,75'};
    const ocbcS = {bank: 'OCBC NISP Syariah', persen: '6,50'};
    const danamonS = {bank: 'Danamon Syariah', persen: '7,99'};
    const cimbniagaS = [{bank: 'CIMB Niaga Syariah', persen: '3,33'}, {bank: 'CIMB Niaga Syariah', persen: '5,00'}];
    const maybankS = [{bank: 'Maybank Syariah', persen: '2,63'}, {bank: 'Maybank Syariah', persen: '3,63'}, {bank: 'Maybank Syariah', persen: '7,30'}];

    // const [test, SetTest] = useState('');
    const handleOption = (e) => {
        setProgramTerpilih(e.target.value);
    }



    return (
        <div className="pilih-program__container">
            {bankTerpilih.length === 0 && (
                <div className="pilih-program">
                    <p className="text-center">Silahkan pilih bank terlebih dahulu</p>
                </div>
            )}
            {/* BANK NORMAL */}
            {bankTerpilih === 'mandiri' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank Mandiri</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{mandiri.bank} Take Over {mandiri.persen}% {mandiri.tahun} Tahun</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${mandiri.bank}|${mandiri.persen}|${mandiri.tahun}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'btn' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank BTN</p>
                    <div className="d-flex flex-column gap-2">
                        {btn.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun} Tahun</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}|${e.tahun}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}
            {bankTerpilih === 'cimbniaga' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank CIMB Niaga</p>
                    <div className="d-flex flex-column gap-2">
                        {cimbniaga.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun} Tahun</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}|${e.tahun}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}
            {bankTerpilih === 'danamon' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank Danamon</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{danamon.bank} Take Over {danamon.persen}% {danamon.tahun} Tahun</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${danamon.bank}|${danamon.persen}|${danamon.tahun}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'ocbcnisp' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank OCBC NISP</p>
                    <div className="d-flex flex-column gap-2">
                        {ocbc.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun} Tahun</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}|${e.tahun}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}   
            {bankTerpilih === 'maybank' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Maybank</p>
                    <div className="d-flex flex-column gap-2">
                        {maybank.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun} Tahun</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}|${e.tahun}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}  
            {/* BANK NORMAL END*/}

            {/* BANK SYARIAH */}
            {bankTerpilih === 'bsiS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank Syariah Indonesia</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{bsiS.bank} Take Over {bsiS.persen}%</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${bsiS.bank}|${bsiS.persen}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'btnS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank BTN Syariah</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{btnS.bank} Take Over {btnS.persen}% {btnS.tahun}</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${btnS.bank}|${btnS.persen}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'ocbcnispS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank OCBC NISP Syariah</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{ocbcS.bank} Take Over {ocbcS.persen}% {ocbcS.tahun}</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${ocbcS.bank}|${ocbcS.persen}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'danamonS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank Danamon Syariah</p>
                    <div className="d-flex flex-column gap-2">
                        <div className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                            <p>{danamonS.bank} Take Over {danamonS.persen}% {danamonS.tahun}</p>
                            <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                            id="radioNoLabel1" value={`${danamonS.bank}|${danamonS.persen}`} aria-label="..."></input>
                        </div>
                    </div>
                </div>
            )}
            {bankTerpilih === 'cimbniagaS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank CIMB Niaga Syariah</p>
                    <div className="d-flex flex-column gap-2">
                        {cimbniagaS.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun}</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}
            {bankTerpilih === 'maybankS' && (
                <div className="pilih-program">
                    <p className="mb-3">Program Take Over Bank Maybank Syariah</p>
                    <div className="d-flex flex-column gap-2">
                        {maybankS.map((e, y) => (
                            <div key={y} className="pilih-program__option d-flex justify-content-between w-100 py-3 px-2" onChange={handleOption}>
                                <p>{e.bank} Take Over {e.persen}% {e.tahun}</p>
                                <input className="form-check-input pilih-program__radio" type="radio" name="radioNoLabel" 
                                id="radioNoLabel1" value={`${e.bank}|${e.persen}`} aria-label="..."></input>
                            </div>
                        ))} 
                    </div>
                </div>
            )}
            {/* BANK SYARIAH END*/}
        </div>
    )
}

export default PilihProgram