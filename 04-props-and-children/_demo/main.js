function Mycomponent(title, age, isAdmin) {
    // Child ระบ Prop
    // console.log(props);

    // 
    // prop destructuring
    // const {title, age, isAdmin} = props;

    return (
        <>
            <h6>{title}</h6>
            <p>{age}</p>
            {isAdmin && <button>Click for delete</button>}
        </>
    )
}

function MyLists(props) {
    console.log(props);
    return (
        <ul>
            <h6>{props.listName} List</h6>
            {props.children}
        </ul>
    );
}


// Parent
function App() {
    // เรียก Render == Call Function Component
    // Pass Prop == Pass ที่ App (Parent)

    // let name = 'pavit';
    // let age = 20;
    // let isAdmin = true;
    // Child
    return (
        <div className='container'>
            {/* <MyComponent title='pavit' age={20} isAdmin={true} />
            <MyComponent title={name} age={age} isAdmin={isAdmin} />
            <MyComponent title='max' age={23} isAdmin={false} />
            <MyComponent title='bung' age={27} isAdmin={false} /> */}
            {/* <MyComponent />
            <MyComponent />
            <MyComponent /> */}
            {/* <MyLists /> */}
            <MyLists listName='fruit'>
                <li>Apple</li>
                <li>Banana</li>
            </MyLists>

            <MyLists listName='hobby'>
                <li>Sleep</li>
                <li>Dota2</li>
                <li>football</li>
            </MyLists>
        </div>
    );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);