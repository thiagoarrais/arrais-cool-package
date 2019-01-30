workflow "New workflow" {
  on = "push"
  resolves = ["npm publish"]
}

# this will only work when the version attribute is changed
# because npm prevents overwriting published versions
action "npm publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
}
