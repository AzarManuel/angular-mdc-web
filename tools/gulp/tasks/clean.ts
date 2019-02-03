import { task } from 'gulp';
import { cleanTask } from '../util/task-helpers';
import { buildConfig } from 'mdc-build-tools';

/** Deletes the dist/ directory. */
task('clean', cleanTask(buildConfig.outputDir));
