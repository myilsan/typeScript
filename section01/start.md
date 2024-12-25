1. npm 설치
   $ npm init
   This utility will walk you through creating a package.json file.
   It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (section01)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\work\onbity-typescript\section01\package.json:

{
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "",
"license": "ISC"
}

## Is this OK? (yes)

2. type script 설치

$ npm i @types/node
Debugger attached.

added 2 packages, and audited 3 packages in 2s

found 0 vulnerabilities
Waiting for the debugger to disconnect...

3. type 컴파일러 설지
   $ npm install typescript -g
   Debugger attached.

added 1 package in 2s
Waiting for the debugger to disconnect...

4. type script 버전확인
   $ tsc -v
   Debugger attached.
   Version 5.6.3
   Waiting for the debugger to disconnect...

5. type script 으로 변환하지 안고 즉시 실행할수 있는 유틸
   $ npm install ts-node -g
   Debugger attached.

added 20 packages in 4s
Waiting for the debugger to disconnect...

$ ts-node src/index.ts --> 2023년 10월 이후 작동안됨 6번으로 대체

6. tsx 대채(2023년 10이후 로 대체로 설치 후 tsx 로 사용해야 함.)
   $ ts-node src/index.ts$ npm i -g tsx
   added 5 packages in 4s

$ tsx src/index.ts
hello typescript

7. 타입스크립 컴파일 옵션 초기화(페키지단위로 설정할수 있음) 실행시 tsconfig.json 생성됨
   $ tsc --init

Created a new tsconfig.json with: TS
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

You can learn more at https://aka.ms/tsconfig
