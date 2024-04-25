export const getEnvVar = (name) => {
  return import.meta.env[`VITE_${name}`];
};
