import axios from "axios";

interface Code {
	id: string;
	ext: string;
}

export function createSnippet(event: Record<any, any>): void {
	const code = event.target.querySelector("textarea").value;
	const lang = event.target.querySelector("div > select").value;
	event.preventDefault();
	const formData = new FormData();
	formData.append("code", code);
	formData.append("lang", lang);
	axios.post<Code>("http://localhost:3333/snippet", formData).then(({ data: { id, ext } }) => {
		// TODO add extension to URL
		window.location.href = `http://localhost:3000/${id}`;
	});
}
