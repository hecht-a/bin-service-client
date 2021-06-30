import React, { useState } from "react";
import { ErrorModal } from "./ErrorModal";
import { extToLang } from "../utils/utils";
import { createSnippet } from "../utils/createSnippet";

export default function CreateSnippet(error: { error?: string }): JSX.Element {
	const [code, setCode] = useState({ code: "" });

	function handleSubmit(event: Record<any, any>) {
		event.preventDefault();
		createSnippet(event);
	}

	function handleChange(event: Record<any, any>) {
		setCode({ code: event.target.value });
	}
	return (
		<>
			{error.error ? <ErrorModal error={error!.error} /> : ""}
			<div className="bg-transparent h-full w-full pt-8">
				<form className="h-full w-full" id="snippet" onSubmit={handleSubmit}>
					<textarea
						className="bg-transparent border-none resize-none h-full w-full px-4"
						id="code"
						name="code"
						placeholder="Entrez votre code ou glissez un fichier."
						value={code.code}
						autoFocus
						required
						onChange={handleChange}
					/>
					<div className="bg-transparent fixed right-20 bottom-20 z-40 h-auto">
						<select
							name="lang"
							id="lang"
							defaultValue="txt"
							className="hljs auto border-2 rounded-md text-lg px-4 py-2 mr-2"
						>
							{Object.entries(extToLang).map(([ext, lang], i) => (
								<option value={ext} key={i}>
									{lang}
								</option>
							))}
						</select>
						<button
							// type="submit"
							className="bg-red-500 rounded-md text-lg text-white px-4 py-2 no-underline hover:bg-red-800"
						>
							save snippet
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
