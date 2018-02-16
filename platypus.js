console.log("Doing stuff");
browser.runtime.onMessage.addListener(updateCookies);

function updateCookies({ values }) {
    values.forEach(cookie => {
      document.cookie = `${cookie.name}=${cookie.value}`;
    });
}
