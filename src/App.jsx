import { useState } from "react";
import { Header } from "./components/Common/Header";
import { Home } from "./components/pages/home";
function App() {
	const [navItems, setNavItems] = useState({});
	function handleNavItemsChange(newValue) {
		setNavItems(newValue);
	}
	return (
		<>
			<Header navItems={navItems} />
			<Home setNavItems={handleNavItemsChange} />
		</>
	);
}

export default App;
