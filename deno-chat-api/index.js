addEventListener("fetch", (event) => {
	const response = new Response("Hello World!", {
		headers: { "content-type": "text/plain" },
	});
	event.responseWith(response)
});
