require([
  'bonsai/runner/group',
  'bonsai/runner/display_object',
  'bonsai/runner/display_list',
  'bonsai/runner/stage',
  'bonsai/tools',
  'common/displaylist-owner',
  'common/displayobject-lifecycle',
  './runner.js'
], function(Group, DisplayObject, DisplayList, Stage, tools, testDisplayList, testLifeCycle) {

  describe('Group', function() {
    testLifeCycle(function() {
      return new Group();
    });

    testDisplayList(function(displayList) {
      return new Group(displayList);
    });

  });
});
