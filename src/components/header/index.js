import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/preact-logo-inverse.svg" alt="Preact Logo" height="32" width="32" />
			<h1>Preact-Tailwind</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>

			<Link activeClassName={style.active} href="/profile/Joseph">
                About Us
			</Link>
		</nav>
	</header>
);

export default Header;
