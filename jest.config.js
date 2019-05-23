module.exports = {
  name: 'animations-lib',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/animations-lib',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
