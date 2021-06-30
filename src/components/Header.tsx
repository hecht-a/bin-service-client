import React from "react";
import { styles } from "../utils/utils";
import Router from "../config/router";

export default function Header(): JSX.Element {
	return (
		<>
			<header className="bg-transparent fixed right-20p top-20p z-40 h-auto">
				<div className="flex space-between items-center container mx-auto gap-2">
					<div className="header flex justify-center">
						<select
							defaultValue={localStorage.getItem("style")!}
							className="hljs auto border-2 rounded-md text-lg px-4 py-2"
						>
							{styles.map((style, i) => (
								<option value={style.href} key={i}>
									{style.title}
								</option>
							))}
						</select>
					</div>
					<div className="flex justify-center">
						<a
							className="bg-red-500 rounded-md text-lg text-white px-4 py-2 no-underline hover:bg-red-800"
							href="/create"
						>
							Create new snippet
						</a>
					</div>
				</div>
			</header>
			<Router />
		</>
	);
}
