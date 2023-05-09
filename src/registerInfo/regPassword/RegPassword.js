
function RegPassword({ validPassword, validVerifyPassword}) {

    return (
        <>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" onChange={validPassword}></input>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">
                    Verify Password
                </label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword4" onChange={validVerifyPassword}>
                    </input>
                </div>
            </div>
        </>
    );
}
export default RegPassword;