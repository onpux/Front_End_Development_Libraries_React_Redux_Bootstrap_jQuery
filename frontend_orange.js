// Fondo: sol amarillo animado y montaña
(function() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = window.innerHeight;
  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }
  window.addEventListener('resize', resize);
  resize();
  let sunAngle = 0;
  function draw() {
    ctx.clearRect(0,0,W,H);
    // Montaña
    ctx.beginPath();
    ctx.moveTo(0,H*0.7);
    ctx.lineTo(W*0.25,H*0.5);
    ctx.lineTo(W*0.5,H*0.75);
    ctx.lineTo(W*0.7,H*0.55);
    ctx.lineTo(W,H*0.7);
    ctx.lineTo(W,H);
    ctx.lineTo(0,H);
    ctx.closePath();
    ctx.fillStyle = '#bc6c25';
    ctx.globalAlpha = 0.7;
    ctx.fill();
    ctx.globalAlpha = 1;
    // Sol amarillo
    const sunX = W*0.15 + Math.sin(sunAngle)*W*0.1;
    const sunY = H*0.22 + Math.cos(sunAngle)*H*0.03;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 60, 0, 2*Math.PI);
    ctx.fillStyle = '#ffd600';
    ctx.shadowColor = '#ffd600';
    ctx.shadowBlur = 60;
    ctx.fill();
    ctx.shadowBlur = 0;
    sunAngle += 0.002;
    requestAnimationFrame(draw);
  }
  draw();
})();

// --- React Dashboard (Project 1) ---
const financeData = [
  { label: "Income", value: 3200 },
  { label: "Expenses", value: 2100 },
  { label: "Savings", value: 1100 }
];
function Dashboard() {
  const [data, setData] = React.useState(financeData);
  const [incomeInput, setIncomeInput] = React.useState("");
  function updateIncome() {
    const val = parseFloat(incomeInput);
    if (!isNaN(val)) {
      // Expenses = 65% of income, Savings = 35% of income
      setData([
        { label: "Income", value: val },
        { label: "Expenses", value: Math.round(val * 0.65) },
        { label: "Savings", value: Math.round(val * 0.35) }
      ]);
      setIncomeInput("");
    }
  }
  return React.createElement('div', null,
    React.createElement('div', {className:'mb-4'},
      React.createElement('input', {
        type: 'number',
        className: 'form-control d-inline-block',
        style: {width: '160px', marginRight: '8px'},
        value: incomeInput,
        onChange: e => setIncomeInput(e.target.value),
        placeholder: 'Set new income...'
      }),
      React.createElement('button', {
        className: 'btn btn-warning',
        onClick: updateIncome
      }, 'Update Income')
    ),
    React.createElement('div', {className:'row'},
      data.map((d,i) =>
        React.createElement('div', {className:'col-md-4 mb-3', key:i},
          React.createElement('div', {className:'card text-center'},
            React.createElement('div', {className:'card-body'},
              React.createElement('h5', {className:'card-title'}, d.label),
              React.createElement('p', {className:'card-text fs-3'}, `$${d.value}`)
            )
          )
        )
      )
    )
  );
}
ReactDOM.createRoot(document.getElementById('react-dashboard')).render(React.createElement(Dashboard));

// --- Redux Task Manager (Project 2) ---
const { createStore } = window.Redux;
const { Provider, useDispatch, useSelector } = window.ReactRedux;
const initialTasks = [
  { id: 1, text: "Learn React", done: false },
  { id: 2, text: "Practice Redux", done: false },
  { id: 3, text: "Build a project", done: false }
];
function tasksReducer(state=initialTasks, action) {
  switch(action.type) {
    case 'ADD': return [...state, {id:Date.now(), text:action.text, done:false}];
    case 'TOGGLE': return state.map(t=>t.id===action.id?{...t,done:!t.done}:t);
    case 'REMOVE': return state.filter(t=>t.id!==action.id);
    default: return state;
  }
}
const store = createStore(tasksReducer);
function TaskApp() {
  const tasks = useSelector(s=>s);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  return React.createElement('div', null,
    React.createElement('div', {className:'input-group mb-3'},
      React.createElement('input', {
        className:'form-control',
        value:input,
        onChange:e=>setInput(e.target.value),
        placeholder:'New task...'
      }),
      React.createElement('button', {
        className:'btn btn-warning',
        onClick:()=>{if(input){dispatch({type:'ADD',text:input});setInput("");}}
      }, 'Add')
    ),
    React.createElement('ul', {className:'list-group'},
      tasks.map(t=>
        React.createElement('li', {
          key:t.id,
          className:'list-group-item d-flex justify-content-between align-items-center' + (t.done?' list-group-item-success':''),
          style:{textDecoration:t.done?'line-through':'none'}
        },
          React.createElement('span', {onClick:()=>dispatch({type:'TOGGLE',id:t.id}), style:{cursor:'pointer'}}, t.text),
          React.createElement('button', {className:'btn btn-sm btn-danger', onClick:()=>dispatch({type:'REMOVE',id:t.id})}, 'Delete')
        )
      )
    )
  );
}
ReactDOM.createRoot(document.getElementById('redux-tasks')).render(
  React.createElement(Provider, {store}, React.createElement(TaskApp))
);

// --- Weather App (Project 3, jQuery + OpenWeather) ---
const mockWeather = {
  "New York": {
    name: "New York", sys: { country: "US" }, weather: [{ main: "Clouds", description: "broken clouds" }], main: { temp: 22, humidity: 65 }
  },
  "London": {
    name: "London", sys: { country: "GB" }, weather: [{ main: "Rain", description: "light rain" }], main: { temp: 16, humidity: 80 }
  },
  "Paris": {
    name: "Paris", sys: { country: "FR" }, weather: [{ main: "Clear", description: "clear sky" }], main: { temp: 24, humidity: 55 }
  },
  "Tokyo": {
    name: "Tokyo", sys: { country: "JP" }, weather: [{ main: "Clouds", description: "scattered clouds" }], main: { temp: 27, humidity: 70 }
  },
  "Mexico City": {
    name: "Mexico City", sys: { country: "MX" }, weather: [{ main: "Thunderstorm", description: "thunderstorm" }], main: { temp: 20, humidity: 75 }
  },
  "Buenos Aires": {
    name: "Buenos Aires", sys: { country: "AR" }, weather: [{ main: "Clear", description: "clear sky" }], main: { temp: 18, humidity: 60 }
  },
  "Madrid": {
    name: "Madrid", sys: { country: "ES" }, weather: [{ main: "Clear", description: "sunny" }], main: { temp: 28, humidity: 40 }
  },
  "Berlin": {
    name: "Berlin", sys: { country: "DE" }, weather: [{ main: "Clouds", description: "overcast clouds" }], main: { temp: 19, humidity: 68 }
  }
};
$('#weather-app').html(`
  <div class="input-group mb-3">
    <input type="text" id="cityInput" class="form-control" placeholder="Enter city...">
    <button id="getWeather" class="btn btn-warning">Get Weather</button>
  </div>
  <div class="mb-2" id="city-suggestions">
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">New York</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">London</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Paris</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Tokyo</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Mexico City</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Buenos Aires</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Madrid</span>
    <span class="badge bg-warning text-dark city-sugg" style="cursor:pointer;">Berlin</span>
  </div>
  <div id="weatherResult"></div>
`);
$('.city-sugg').on('click', function() {
  $('#cityInput').val($(this).text());
  $('#getWeather').trigger('click');
});
$('#cityInput').on('keydown', function(e) {
  if(e.key === 'Enter') $('#getWeather').trigger('click');
});
$('#getWeather').on('click', function() {
  const city = $('#cityInput').val().trim();
  if(!city) return;
  $('#weatherResult').html('<span>Loading...</span>');
  setTimeout(function() {
    const data = mockWeather[city];
    if(data) {
      $('#weatherResult').html(`
        <div class='card p-3'>
          <h5>${data.name}, ${data.sys.country}</h5>
          <p><b>${data.weather[0].main}</b> - ${data.weather[0].description}</p>
          <p>🌡️ ${data.main.temp}°C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        </div>
      `);
    } else {
      $('#weatherResult').html('<span class="text-danger">City not found in mock data.</span>');
    }
  }, 500);
});
