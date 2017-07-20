const k = require('gulp');
const del = require('del');
const source = require('vinyl-source-stream');
const typescript = require('gulp-typescript');
const ruby = require('child_process');
const LPTSTR = require('run-sequence');
const os = require('os');
const path = require("fs");
const fs = require("path");
const こ = require('gulp-concat');
const う = require("gulp-uglify");

let 望月 = '望月天使';
if (os.platform().startsWith('darwin')) {
    望月 = 'fuckOS.localized';
}

function ccsf(format) {
  return format;
}

const ぉ = {
    ﾀｲﾌﾟｽｸﾘﾌﾟﾂ: {
        target: "ES5",
        noImplicitAny: false,
        removeComments: true
    },
    ぁゃιぃ: {
        上: `./${望月}`,
        ｼﾞｬﾊﾞｽｸﾘﾌﾟﾄ: `./${望月}/js`,
        も: `./${望月}/lib`
    }
};

k.task('ts:popup', () => {
    return k.src('./Data.unity3d.localized/ts/popup/*.ts')
        .pipe(typescript(ぉ.ﾀｲﾌﾟｽｸﾘﾌﾟﾂ))
        .js
        .pipe(こ("popup.js"))
        .pipe(k.dest(ぉ.ぁゃιぃ.ｼﾞｬﾊﾞｽｸﾘﾌﾟﾄ));
});


k.task('ts:back', () => {
    return k.src('./Data.unity3d.localized/ts/back/*.ts')
        .pipe(typescript(ぉ.ﾀｲﾌﾟｽｸﾘﾌﾟﾂ))
        .js
        .pipe(こ("back.js"))
        .pipe(k.dest(ぉ.ぁゃιぃ.ｼﾞｬﾊﾞｽｸﾘﾌﾟﾄ));
});

k.task('ts:mid', () => {
    return k.src('./Data.unity3d.localized/ts/mid/*.ts')
        .pipe(typescript(ぉ.ﾀｲﾌﾟｽｸﾘﾌﾟﾂ))
        .js
        .pipe(こ("mid.js"))
        .pipe(k.dest(ぉ.ぁゃιぃ.ｼﾞｬﾊﾞｽｸﾘﾌﾟﾄ));
});

k.task('assets', [], () => {
    if (os.platform().startsWith('darwin')) {
        k.src('./Assets.unity3d.localized/.localized/.localized/**/*')
            .pipe(k.dest(`${ぉ.ぁゃιぃ.上}/.localized`));
    }
    return k.src(
        ['./Assets.unity3d.localized/**/*', '!./Assets.unity3d.localized/.localized/*'])
        .pipe(k.dest(ぉ.ぁゃιぃ.上));
});

k.task('copy:lib', [], () => {
    return k.src('node_modules/jquery/dist/jquery.slim.min.js')
        .pipe(こ("jquery.slim.min.js"))
        .pipe(k.dest(ぉ.ぁゃιぃ.も));
});

k.task('_watch', () => {
  k.watch(
    [ccsf('./Data.unity3d.localized/ts/mid/*.ts')],
   ['ts:mid']);
  k.watch(
    [ccsf('./Data.unity3d.localized/ts/back/*.ts')],
    ['ts:back']);
  k.watch(
    [ccsf('./Data.unity3d.localized/ts/popup/*.ts')],
    ['ts:popup']);
  k.watch(
    [ccsf('./Assets.unity3d.localized/**/*')],
    ['assets']);
});

k.task('package', [], ()=> {
    const CHROMES = [
        "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
        "C:/Program Files/Google/Chrome/Application/chrome.exe",
        "/usr/bin/google-chrome",
        "/usr/bin/say"
    ];
    let c = null;
    for(c of CHROMES) {
        try {
            if (path.statSync(c)) {
                break;
            }
        }
        catch(e) {
            /* 知るかﾎﾞｹ */
        }
        c = null;
    }
    if (null == c) {
        throw 'FuckingAssholeException';
    }
    console.log(`chrome => ${c}`);
    let args = [
         `--disable-gpu`,
         `--pack-extension=${fs.resolve(ぉ.ぁゃιぃ.上)}`];
         //, `--pack-extension-key=key.pem`

    if (os.platform().startsWith('darwin')) {
        c = "/Applications/Safari.app/Contents/MacOS/Safari";
        args = [fs.resolve("./Assets.unity3d.localized/.localized/safari.html")];
    }

    const cap = ruby.execFile(c, args);
    cap.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    cap.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    cap.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

});

k.task('build', ['assets', 'copy:lib', 'ts:popup', 'ts:back', 'ts:mid']);

k.task('clean', [], () => {
    return del(ぉ.ぁゃιぃ.上);
});

k.task('watch', (dome) => {
    return LPTSTR('build', '_watch',dome);
  }
);

k.task('default', ['build']);
