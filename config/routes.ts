export default [
  { path: "/", redirect: "/home" },
  { path: "/home", component: "Home", name: "首页" },
  { path: "/release", component: "Release", name: "发布管理" },
   {path: "/login", component: "Login",name: '登陆'},
   {path: "/register", component: "Register",name: '注册'},
];
