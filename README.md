# An sandbox app to deploy Next App Router on Cloud Run

This uses [Google Clould's buildpacks](https://cloud.google.com/docs/buildpacks/overview)

## Develop

Run the following commands.

```
$ docker compose up
$ pnpm dev
```

## Settings

Add `"gcp-build": "next build"` into the scripts section in `package.json`.
