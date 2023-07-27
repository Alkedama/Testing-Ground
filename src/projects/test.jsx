import './../scss/test.scss'

const test = () => {
  return (
    <div>
      <div className="test">test</div>

      <button id="btnInvoke" className="btnInvoke">Invoke</button>
    </div>
    
  )
}

'use strict';

const btnInvoke = document.querySelector('#btnInvoke');

btnInvoke.addEventListener('click', function(e){
  alert('hello');
})

export default test