function Todo({todo,index,remove}){
    function handle(){
        remove(index);
    }
    return (
        <div className='todo'>
          <input type="checkbox" id="myCheck" value="myvalue"/>
          {todo.text}
          <button className="btn" onClick={handle}> X </button> 
        </div>
    );
}