goog.addDependency("string/string.js", ['goog.string', 'goog.string.Unicode'], []);
goog.addDependency("debug/error.js", ['goog.debug.Error'], []);
goog.addDependency("asserts/asserts.js", ['goog.asserts', 'goog.asserts.AssertionError'], ['goog.debug.Error', 'goog.string']);
goog.addDependency("array/array.js", ['goog.array', 'goog.array.ArrayLike'], ['goog.asserts']);
goog.addDependency("object/object.js", ['goog.object'], []);
goog.addDependency("string/stringbuffer.js", ['goog.string.StringBuffer'], []);
goog.addDependency("useragent/useragent.js", ['goog.userAgent'], ['goog.string']);
goog.addDependency("dom/browserfeature.js", ['goog.dom.BrowserFeature'], ['goog.userAgent']);
goog.addDependency("dom/tagname.js", ['goog.dom.TagName'], []);
goog.addDependency("dom/classes.js", ['goog.dom.classes'], ['goog.array']);
goog.addDependency("math/math.js", ['goog.math'], ['goog.array', 'goog.asserts']);
goog.addDependency("math/coordinate.js", ['goog.math.Coordinate'], ['goog.math']);
goog.addDependency("math/size.js", ['goog.math.Size'], []);
goog.addDependency("dom/dom.js", ['goog.dom', 'goog.dom.DomHelper', 'goog.dom.NodeType'], ['goog.array', 'goog.dom.BrowserFeature', 'goog.dom.TagName', 'goog.dom.classes', 'goog.math.Coordinate', 'goog.math.Size', 'goog.object', 'goog.string', 'goog.userAgent']);
goog.addDependency("iter/iter.js", ['goog.iter', 'goog.iter.Iterator', 'goog.iter.StopIteration'], ['goog.array', 'goog.asserts']);
goog.addDependency("structs/structs.js", ['goog.structs'], ['goog.array', 'goog.object']);
goog.addDependency("structs/map.js", ['goog.structs.Map'], ['goog.iter.Iterator', 'goog.iter.StopIteration', 'goog.object', 'goog.structs']);
goog.addDependency("dom/forms.js", ['goog.dom.forms'], ['goog.structs.Map']);