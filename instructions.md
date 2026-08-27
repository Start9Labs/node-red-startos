# Node-RED

## Documentation

- [Node-RED user guide](https://github.com/node-red/node-red.github.io/tree/main/docs/user-guide) — the upstream guide to the editor, writing functions, the palette manager, and runtime configuration.
- [Node-RED cookbook](https://github.com/node-red/cookbook.nodered.org) — worked recipes for common flow patterns: HTTP endpoints, MQTT, and parsing or transforming messages.

## What you get on StartOS

One web address serves both halves of Node-RED: the flow editor, and any HTTP endpoint your flows publish. The editor is protected by a username and password that StartOS generates for you — upstream Node-RED ships with no login at all, and since a flow can run arbitrary code on your server, this package will not start until that password exists.

Your flows, their encrypted credentials, your saved library, and any extra nodes you install from the palette manager all live on the service's data volume, so they are included in a StartOS backup and come back with a restore.

## Getting set up

1. Run the **Set Admin Password** task StartOS shows you after install. It generates a password and displays it once — copy it somewhere safe.
2. Start the service and open the **Web UI** interface.
3. Sign in as `admin` with the password from step 1.
4. If you schedule anything by time of day, run **Set Time Zone** and enter your IANA zone name, such as `America/New_York`. Without it, Inject nodes fire on UTC.

## Using Node-RED

### Web interface

You land on the login screen, then on an empty flow canvas. Drag nodes from the palette on the left, wire them together, and press **Deploy** to run them.

Extra nodes are installed from the editor itself, under **Manage palette** in the main menu. They install onto the service's data volume, so they survive restarts and updates.

### Actions

- **Set Admin Password** — generates a new editor password and shows it to you. Run it when you first install, and any time you want to rotate. Every browser still signed in is signed out.
- **Set Time Zone** — sets the time zone that scheduled nodes fire on.
- **Enter Safe Mode** / **Leave Safe Mode** — loads the editor without running any flow. Reach for it when a flow you deployed is crashing or overloading the service and you need to get in to fix or delete it. Safe mode stays on across restarts, so run the action again once you are done.

## Limitations

HTTP endpoints your flows publish — anything behind an HTTP In node — are served on the same address as the editor and are **not** covered by the editor password. That is what makes webhooks from other systems work, but it means anywhere you can reach the editor, you can also reach those endpoints. Keep that in mind before adding a public domain to this service.
