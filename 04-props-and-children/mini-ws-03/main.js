
// Render

function App() {
    return <div className='container'>
        <div className='calculator'>
          <div className='item--1'>Display</div>
            <div className='item--2'>2</div>
            <div className='item--3'>3</div>
            <div className='item--4'>4</div>
            <div className='item--5'>5</div>
            <div className='item--6'>6</div>
            <div className='item--7'>7</div>
            <div className='item--8'>8</div>
            <div className='item--9'>9</div>
            <div className='item--10'>10</div>
            <div className='item--11'>11</div>
            <div className='item--12'>12</div>
            <div className='item--13'>13</div>
            <div className='item--14'>14</div>
            <div className='item--15'>15</div>
            <div className='item--16'>16</div>
            <div className='item--17'>17</div>
            <div className='item--18'>18</div>
            <div className='item--19'>19</div>
            <div className='item--20'>20</div>
            <div className='item--21'>21</div>
        </div>
    </div>
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);