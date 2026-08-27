# Updating the upstream version

Upstream is the `nodered/node-red` Docker image, pinned by tag. The Node-RED project builds it
from `node-red/node-red-docker` on every release of `node-red/node-red`, so the image tag and the
GitHub release tag are the same string.

Two lines are released in parallel — 5.x and 4.1.x. This package tracks **5.x**; a 4.1.x release
appearing on the same day as a 5.x one is the maintenance line, not an update to take.

## Determining the upstream version

The pin lives in `startos/manifest/index.ts` under `images['node-red'].source.dockerTag`, and the
same upstream version is the left half of `version` in `startos/versions/current.ts`.

```bash
gh release view -R node-red/node-red --json tagName -q .tagName
```

Confirm the matching image tag is published and multi-arch before pinning it:

```bash
docker manifest inspect nodered/node-red:<version> \
  | jq -r '.manifests[].platform | "\(.os)/\(.architecture)"'
```

Take the plain `<version>` tag — the Alpine build. `-minimal` drops the toolchain that palette
nodes with native components need to compile, and `-debian` is larger with no benefit here.

## Applying the bump

1. `startos/manifest/index.ts` — set `dockerTag` to `nodered/node-red:<version>`.
2. `startos/versions/current.ts` — set `version` to `<version>:0` and write release notes.

Node-RED migrates its own flow and config files forward on start, so a bump needs no migration.
Check the release notes for a Node.js floor: 5.0.0 raised it to 22.9, and a future bump could do
the same. The image ships its own Node runtime, so a raised floor is satisfied by taking the new
image — but a release that raises it is also the kind that warrants reading the changelog.
