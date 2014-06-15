var relations = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

test(relations.get("厃"), { strokes: 4, parents: [ '⺈', '厂' ], children: [ '危', '矦' ] });
test(relations.getChildren("厃"), [ '危', '矦' ]);
test(relations.get("⺋"), { strokes: 0, parents: [], children: [ '厄', '氾', '犯', '危' ] });
test(relations.getChildren("⺋"), [ '厄', '氾', '犯', '危' ]);
test(relations.getChildren("厃","⺋"), [ '危' ]);

console.log("no errors");
