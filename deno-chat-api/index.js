addEventListener("fetch", (event) => {
	const response = new Response("Hello World one more time!", {
		headers: { "content-type": "text/plain" },
	});
	event.respondWith(response)
});
