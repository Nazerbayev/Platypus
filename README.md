# Platypus

## What?

Copies a selection of cookies from one page to all tabs whose url is localhost.

## Why?

Sometimes we, as developers, have a localhost environment running and we need to log in the application (on localhost) but for whatever reason in order to log-in you need to browse to another webpage (A live QA test site) and log in that page and then manually copy the saved cookies over to the localhost tab... This extension will copy the selected cookies and copy them over all the opened tabs targeting localhost.

## How?

All tabs targeting localhost will side load a background script that will listen for clicks on the extension's 'copy credentials' button, then it will copy a curated list of cookies from the active tab to all the localhost tabs.

## Roadmap

- Core funcionality (copy the following cookies: User, Session, Locale & Device
- Create an options to allow customization of what cookies it should copy
