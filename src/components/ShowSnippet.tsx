import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import hljs from "highlight.js";

interface Code {
	code: {
		id: number;
		code: string;
		snippet_id: string;
		lang: string;
		created_at: string;
		updated_at: string;
	};
	length: number;
	lang: string;
}

export default function ShowSnippet(): JSX.Element {
	const { id } = useParams<{ id: string }>();
	const [code, setCode] = useState("");
	const [lang, setLang] = useState("text");
	const [length, setLength] = useState(0);
	axios.get<Code>(`http://localhost:3333/snippet/${id}.js`).then(({ data: { code, length } }) => {
		setCode(code.code);
		setLang(code.lang);
		setLength(length);
	});
	return (
		<div className="absolute top-20">
			<div className="w-30 absolute left-20p text-right">
				<ul className="line-number">
					{Array.from({ length: length }).map((_, i) => (
						<li key={i + 1} value={i + 1} className="number cursor-pointer" />
					))}
				</ul>
			</div>
			<pre className="bg-transparent absolute left-50">
				<code className={`bg-transparent ${lang}`}>{code}</code>
				{hljs.highlightAll()}
			</pre>
		</div>
	);
}
