/**
 * @file ocfe 按需加载
 */

module.exports = function(babel) {
  const types = babel.types
  const visitor = {
    ImportDeclaration(path, ref) {
      let node = path.node
      let specifiers = node.specifiers
      let library = 'ocfe'

      if (ref && ref.opts && ref.opts.library) {
        library = ref.opts.library
      }

      if (library === node.source.value && !types.isImportDefaultSpecifier(specifiers[0])) {
        let newImports = specifiers.map(specifier => {
          return types.importDeclaration(
            [types.importDefaultSpecifier(specifier.local)],
            // => ocfe/dist/media.js
            types.stringLiteral(`${library}/dist/${specifier.local.name}.js`)
          )
        })

        // 将原有语句写法替换掉 新写法
        path.replaceWithMultiple(newImports)
      }
    }
  }

  return { visitor }
}
