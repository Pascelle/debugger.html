/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

// Tests basic pretty-printing functionality.

const {
  prettyPrint,
  setupTestRunner
} = require("devtools/client/debugger/new/integration-tests");

add_task(function*() {
  setupTestRunner(this);
  const { ok, is } = this;
  yield prettyPrint({ ok, is });
});
