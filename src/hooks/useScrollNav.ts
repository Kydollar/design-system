import { useEffect, useState } from "react";

export function useScrollNav() {
	const [scrollNav, setScrollNav] = useState(false);

	useEffect(() => {
		const changeColorNav = () => {
			if (window.scrollY >= 80) {
				setScrollNav(true);
			} else {
				setScrollNav(false);
			}
		};

		window.addEventListener("scroll", changeColorNav);
		return () => {
			window.removeEventListener("scroll", changeColorNav);
		};
	}, []);

	return scrollNav;
}
