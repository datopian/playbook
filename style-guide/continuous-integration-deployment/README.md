# Continuous Integration and Deployment

All projects must be configured with a CI server. The CI server must run the test suite with linting.

CI platforms to use:

* In GitLab: Use [GitLab CI](https://docs.gitlab.com/ee/ci/).
* In GitHub: Use [Travis](https://travis-ci.org/).

## App deployment

All apps SHOULD be deployed from the CI server.

## Package publication

All packages SHOULD be published to npm and pypi from the CI server. The procedure is:

1. Create your package and prepare it for publication.
2. Register the package on the appropriate registry.
3. Give the `datopian` user owner rights on the package.
4. Create tags for package versions.
5. Use the Travis integration to publish on tags.

