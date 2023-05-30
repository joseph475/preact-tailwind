import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<main>
            <div class="container mx-auto pt-20">
                <Router>
                    <Home path="/" />
                    <Profile path="/profile/" user="me" />
                </Router>
            </div>
		</main>
	</div>
);

export default App;
