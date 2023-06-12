export const loginData = {
  'X-AOHO-ClientId': 'data_share',
  'X-AOHO-UserId': '1628689413833752576',
  access_token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Nzc2Nzk2MjAsIlgtQU9ITy1Vc2VySWQiOiIxNjI4Njg5NDEzODMzNzUyNTc2IiwidXNlcl9uYW1lIjoiZ3h4MDAwIiwianRpIjoiOGM5MmI3M2UtNGI5Yy00NjJmLThkMDMtMzkwNDk3ZDIyNWVlIiwiY2xpZW50X2lkIjoiZGF0YV9zaGFyZSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.VcX6JaCv5Yp7einBvk7tPfgGS45AmoRJbEsgX8v46QeddsrL07bRtoNibrqph9sPwKyW0V-q70y30eGCCM9AR2Tx8tSoHJK5Pjm_RDWgPqxRpuZjH665d4MeIsWSJCb8wzGs5pYLwRQNMXyDT4UPhYe0c5-J3V4yCQ3PZ_ofJmmWow13TIWBVb5jF9nO7GWQoj16pXIniacmY1XqN1PPvLXmiM0w-7a2RQ1zob5h9xL2H12YVQfTV9f0_2s__VUqOkH6wzjSytvqIOtGKYb0NRAw9PzKo51Bhm_iab83hSkCtLCjQHctV_8YRE6sjninZAJHR9zhZRBGG9NhSLTUDA',
  expires_in: 43199,
  jti: '8c92b73e-4b9c-462f-8d03-390497d225ee',
  scope: 'read write',
  token_type: 'bearer',
};
export const routers = [
  {
    name: 'System',
    path: 'system',
    hidden: false,
    redirect: 'noRedirect',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '系统管理',
      icon: 'SettingOutlined',
    },
    children: [
      {
        name: 'RoleList',
        path: 'roleList',
        hidden: false,
        component: 'system/role/list',
        meta: {
          title: '角色管理',
          icon: '#',
        },
      },
      {
        name: 'AccountList',
        path: 'accountList',
        hidden: false,
        component: 'system/account/list',
        meta: {
          title: '账号管理',
          icon: '#',
        },
      },
      {
        name: 'Menu',
        path: 'menu',
        hidden: false,
        component: 'system/menu/list',
        meta: {
          title: '菜单管理',
          icon: '#',
        },
      },
      {
        name: 'Log',
        path: 'log',
        hidden: false,
        redirect: '/system/log/operlog',
        component: 'Layout',
        alwaysShow: true,
        meta: {
          title: '日志管理',
          icon: '#',
        },
        children: [
          {
            name: 'Operlog',
            path: 'operlog',
            hidden: false,
            component: 'system/log/operlog',
            meta: {
              title: '操作日志',
              icon: '#',
            },
          },
          {
            name: 'Logininfor',
            path: 'logininfor',
            hidden: false,
            component: 'system/log/logininfor',
            meta: {
              title: '登录日志',
              icon: '#',
            },
          },
        ],
      },
      {
        name: 'Account-find',
        path: 'account-find',
        hidden: true,
        component: 'system/account/find',
        meta: {
          title: '查看账号',
          icon: '#',
        },
      },
      {
        name: 'Role-find',
        path: 'role-find',
        hidden: true,
        component: 'system/role/find',
        meta: {
          title: '查看角色',
          icon: '#',
        },
      },
      {
        name: 'Account-add',
        path: 'account-add',
        hidden: true,
        component: 'system/account/add',
        meta: {
          title: '新增账号',
          icon: '#',
        },
      },
      {
        name: 'Account-update',
        path: 'account-update',
        hidden: true,
        component: 'system/account/update',
        meta: {
          title: '修改账号',
          icon: '#',
        },
      },
    ],
  },
];
export const userInfo = {
  authType: 'pwd',
  customerCode: '1628689413833752576',
  customerName: 'gxx000',
  email: null,
  loginName: 'gxx000',
  password: null,
  phone: null,
  resources: '',
  roles: '企业管理员',
  status: 'T',
  type: 'C',
  userId: '1628689413749866496',
  userName: 'gxx000',
};
