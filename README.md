# Hooks

This is a graphcool project attempting to setup webhooks.

## About

BYU's surveyor app will hopefully cater to state history offices. It would be neat if they could turn on webhooks for the app. The idea is that they sign in, go to settings, go to the webhooks section, and there would be an "Add webhook" button. Clicking the button would provide a form where they can add a webhook.

This form would have a nickname field, a payload url field, and would possibly let them choose which events the webhook fires on. The default would be when an agency publishes their project.

This would allow Surveyor to be integrated with a forthcoming state history office API, or it would allow them to have it post to slack, or something like that.

Either way it would give an automated way to receive updates about completed projects.

SO... this project is to figure out how all that would work.

## About Functions

When writing your functions you can include npm modules, but only those supported by webtask.io. To see if your module is supported check their [website](https://tehsis.github.io/webtaskio-canirequire/)
