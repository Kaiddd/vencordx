function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function waitForLoaded() {
    while (true) {
        if (document.head && document.body && document.getElementById("app-mount")) {
			await delay(1);
            break;
        }
        await delay(1);
    }
}

async function run() {
    await waitForLoaded();
	let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://raw.githubusercontent.com/Kaiddd/vencordx/main/patch.js";
	document.head.appendChild(script);
}

run();