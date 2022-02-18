/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/54a2736e2b5494b7720b4d89866cd457/manager",
  },
  test: {
    baseApi: "/test/api",
    mockApi:
      "https://www.fastmock.site/mock/54a2736e2b5494b7720b4d89866cd457/manager",
  },
  prod: {
    baseApi: "/prod/api",
    mockApi:
      "https://www.fastmock.site/mock/54a2736e2b5494b7720b4d89866cd457/manager",
  },
};

export default {
  env,
  mock: true,
  ...EnvConfig[env],
};
