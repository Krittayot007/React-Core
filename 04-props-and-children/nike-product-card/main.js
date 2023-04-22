function Avatar({name, src, type, color, price}) {
    return (
        <div className='avatar'>
            <div className='avatar_img'>
                <img src={src}></img>
            </div>
            <p className='avatar_name'>{name}</p>
            <p className='avatar_type'>{type}</p>
            <p className='avatar_volcolor'>{color}</p>
            <p className='avatar_price'>{`฿${price}`}</p>
        </div>
    );
}

// Render

function App() {
    let linkProduct1 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d72af0d8-a19b-462f-b1eb-3f6feb94668b/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-97-f2WGmm.png';
    let linkProduct2 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/90af2c02-5d95-464a-92c7-4454350960d5/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-97-se-ldG7wH.png';
    let linkProduct3 = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cdf52f58-4372-493e-ae8d-509e0c70dfc9/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-max-97-M2vYej.png';
    return (
        <div className='container'>
            <Avatar name='Nike Airmax 97' src={linkProduct1} type='รองเท้าผู้ชาย' color='1 สี' price='6,300'/> 
            <Avatar name='Nike Airmax 97 SE' src={linkProduct2} type='รองเท้าผู้หญิง' color='2 สี' price='6,900'/> 
            <Avatar name='Nike Airmax 97 SE custom' src={linkProduct3} type='รองเท้าเด็กโต' color='1 สี' price='7,100'/> 
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />); 