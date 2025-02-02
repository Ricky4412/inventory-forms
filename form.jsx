import './form.css'

const LoginForm = () => {
    return (
        <div className="App-container">
            <form className='form'>
            <div className="form-group1">
            <label htmlFor="Machine Name" className="form-label">Type of machine:</label>
            <select name="form-select" className='form-group' id="form-select1">
            <option value="select type">Select Type --</option>
                <option value="All-in-One">All in One PC</option>
                <option value="laptop">Laptop</option>
                <option value="desktop">Desktop</option>
            </select>
            </div><br />

            <div className="form-group1">
            <label htmlFor="Machine Name" className="form-label">Brand:</label>
            <select name="form-select" className='form-group' id="form-select">
            <option value="choose">Select brand --</option>
                <option value="acer">Accer</option>
                <option value="apple">Apple</option>
                <option value="dell">Dell</option>
                <option value="hp">HP</option>
                <option value="alienware">Alienware</option>
                <option value="asus">Asus</option>
                <option value="e-machine">E - Machine</option>
                <option value="huawei">Huawei</option>
                <option value="Msi">Msi</option>
            </select>
            </div><br />

            <div className="form-group1">
            <label htmlFor="Machine Name" className="form-label">Serial Number</label>
            <input type="text" className="form-group" placeholder='enter serial number' />
            </div><br />

            <div className="form-group1">
            <label htmlFor="Machine Name" className="form-label">Model Number</label>
            <input type="text" className="form-group" placeholder='enter model number' />
            </div>
            </form>
            <button type='submit' className='submit' >Save entry</button>
        </div>
    )
}
 

export default LoginForm;
