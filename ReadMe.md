# Wiki Storage redis

---

**NOTE:** This datastore will not work correctly when the server is run in farm mode.

---

An experimental module to provide redis storage for an external module for
Federated Wiki, rather than being built into the core.

The motivation for this is that not everybody is using redis for storage, and
as part of the core adds to maintenance complexity

## Using redis for Wiki Storage

The following steps will need to be followed:

1. Take a copy of the [fedwiki/wiki-node](https://github.com/fedwiki/wiki-node)
repository. *Either create a fork on the GitHub site, or clone a copy either
locally or to where you wish to install Federated Wiki.*

2. In your copy, edit `package.json` to add the following line to the dependencies:

```
    "wiki-storage-redis": "*",
```

3. If you are using git for deployment, commit this change to git.

4. Install your modified version of Federated Wiki, either:

  * running `npm install 'your-github-id'/wiki-node`, if you are using github
  for deployment, or

  * if you modified `package.json` inplace by running `npm install` from within
  the modified directory. See [npm-install](https://www.npmjs.org/doc/cli/npm-install.html)
  for more ideas.

5. When starting Federated Wiki you will need to tell it to use redis. This
is done by adding the following configuration setting

```
--database '{"type": "redis", "host": "...", "port": nnn, "options": {...}}'
```

The host and port will also optionally be read from the environment variable named in the configuration field "env_url", or from a URL in the field "url" - this is to ease heroku-style deployment, e.g.

```
--database '{"type": "redis", "env_url": "REDISCLOUD_URL", "options": {...}}'
```

## Developer Notes

Should there be a need to modify this package, there is a test file
`test/redis.coffee` that can be copied to the `test` directory of the
wiki-node-server repository that you are developing with.

**N.B.** the plugin page
test requires a copy of the `wiki-plugin-chart` repository to be alongside the
wiki-node-server repository.
