const credentials = document.querySelector('#credentials');

credentials.onclick = function() {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    browser.cookies.getAll({
      url: tabs[0].url,
    }).then((cookies) => {
      browser.tabs.query({ url: '*://localhost/*' }).then(localtabs => {
        const stuff = cookies && cookies.length > 0 &&
          cookies.filter(x => x.name === 'User' || x.name === 'Device' || x.name === 'Locale' || x.name === 'Session')
                 .map(x => ({ name: x.name, value: x.value }));
        if (localtabs && localtabs.length > 0 && stuff) {
          localtabs.forEach(tab => {
            browser.tabs.sendMessage(tab.id, { values: stuff });
          });
        }
      });
    });
  });
}

