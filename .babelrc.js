module.exports = function (api) {
  api.cache(true);

  return ({
    presets: [
      [
        require('@babel/preset-env'),
        {
          modules: 'commonjs',
        },
      ],
      require('@babel/preset-react'),
    ],
  });
};
