find . -name '*.test.js'
find . -name '*.test.js' -not -path '**node_modules*'
find . -name '*.js' -not -path '**node_modules*'

npm i -g ipt
find . -name '*.js' -not -path '**node_modules*' | ipt

CONTENT="'use-strict';"
find . -name '*.js' -not -path '**node_modules*' \
| ipt -O \
| xargs -I '{file}' sed -I "" -e '1s/^/z'$CONTENT'\
/g' {file}
