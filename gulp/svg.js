'use strict';

import path from 'path';
import svgSprite  from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import replace from 'gulp-replace';
import cheerio from 'gulp-cheerio';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // SVG sprites task
  gulp.task('svg', function () {
    return gulp
      .src('./src/_images/svg/*.svg')
      .pipe(svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerio(($, file) => {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
        $('[stroke]').removeAttr('stroke');
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: "sprite.svg"
          }
        }
      }))
      .pipe(gulp.dest('tmp/images/svg'));
  });
}
