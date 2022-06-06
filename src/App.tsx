import './App.css';
import { ChatBox } from './containers/ChatBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActivityHistory } from './containers/ActivityHistory';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/iot' element={<ActivityHistory />} />
					<Route path='/' element={<ChatBox />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
