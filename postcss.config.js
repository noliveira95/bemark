export const plugins = {
  autoprefixer: {},
  'postcss-preset-env': {
    stage: 3,
    features: {
      'nesting-rules': true,
    },
  },
};
