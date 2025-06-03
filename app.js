// app.js
// SPA con React, Redux, Bootstrap y jQuery desde CDN

const { useState, useEffect } = React;
const { createStore } = Redux;
const { Provider, useDispatch, useSelector } = ReactRedux;

// --- REDUX ---
// Estado inicial para To-Do
const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, { text: action.text, done: false }] };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((t, i) => i === action.idx ? { ...t, done: !t.done } : t)
      };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter((_, i) => i !== action.idx) };
    default:
      return state;
  }
}
const store = createStore(todoReducer);

// --- COMPONENTES ---
function ToDoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  return (
    <div className="mb-4">
      <h3>To-Do List (Redux)</h3>
      <div className="input-group mb-3">
        <input className="form-control" value={input} onChange={e => setInput(e.target.value)} placeholder="Nueva tarea..." />
        <button className="btn btn-primary" onClick={() => { if(input.trim()){ dispatch({type:'ADD_TODO', text:input}); setInput(""); } }}>Agregar</button>
      </div>
      <ul className="list-group">
        {todos.map((t, i) => (
          <li key={i} className={`list-group-item d-flex justify-content-between align-items-center ${t.done ? 'list-group-item-success' : ''}`}>
            <span style={{cursor:'pointer'}} onClick={() => dispatch({type:'TOGGLE_TODO', idx:i})}>{t.text}</span>
            <button className="btn btn-sm btn-danger" onClick={() => dispatch({type:'REMOVE_TODO', idx:i})}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Calculator() {
  const [value, setValue] = useState("");
  const handleClick = val => {
    if (val === "C") setValue("");
    else if (val === "=") {
      try { setValue(eval(value).toString()); } catch { setValue("Error"); }
    } else { setValue(value + val); }
  };
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];
  useEffect(() => {
    // Demo de jQuery: animar el input al calcular
    if (value === "Error" || value === "") {
      $("#calc-screen").removeClass("bg-success bg-danger");
    } else if (!isNaN(Number(value))) {
      $("#calc-screen").addClass("bg-success");
      setTimeout(()=>{$("#calc-screen").removeClass("bg-success");}, 500);
    }
  }, [value]);
  return (
    <div className="mb-4">
      <h3>Calculadora (React + Bootstrap + jQuery)</h3>
      <input id="calc-screen" className="form-control mb-2 text-end" value={value} readOnly style={{fontSize:'1.3em'}} />
      <div className="row g-2">
        {buttons.map((b, i) => (
          <div className="col-3" key={i}>
            <button className="btn btn-outline-primary w-100" onClick={() => handleClick(b)}>{b}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const getWeather = async () => {
    setError("");
    setWeather(null);
    if (!city.trim()) return;
    try {
      const res = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
      if (!res.ok) throw new Error("No se pudo obtener el clima");
      const data = await res.json();
      setWeather({
        temp: data.current_condition[0].temp_C,
        desc: data.current_condition[0].weatherDesc[0].value,
        feels: data.current_condition[0].FeelsLikeC
      });
    } catch {
      setError("No se pudo obtener el clima. Intenta otra ciudad.");
    }
  };
  return (
    <div className="mb-4">
      <h3>Dashboard del Clima (API pública)</h3>
      <div className="input-group mb-2">
        <input className="form-control" value={city} onChange={e => setCity(e.target.value)} placeholder="Ciudad (ej: Madrid)" onKeyDown={e => e.key === 'Enter' && getWeather()} />
        <button className="btn btn-info" onClick={getWeather}>Buscar</button>
      </div>
      {error && <div className="alert alert-danger py-2">{error}</div>}
      {weather && (
        <div className="alert alert-success py-2">
          <b>Temperatura:</b> {weather.temp}°C<br/>
          <b>Sensación:</b> {weather.feels}°C<br/>
          <b>Descripción:</b> {weather.desc}
        </div>
      )}
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <h1 className="titulo-principal">SPA React + Redux + Bootstrap + jQuery</h1>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item"><button className={`nav-link ${tab===0?'active':''}`} onClick={()=>setTab(0)}>To-Do List</button></li>
        <li className="nav-item"><button className={`nav-link ${tab===1?'active':''}`} onClick={()=>setTab(1)}>Calculadora</button></li>
        <li className="nav-item"><button className={`nav-link ${tab===2?'active':''}`} onClick={()=>setTab(2)}>Clima</button></li>
      </ul>
      {tab===0 && <ToDoList />}
      {tab===1 && <Calculator />}
      {tab===2 && <WeatherDashboard />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
