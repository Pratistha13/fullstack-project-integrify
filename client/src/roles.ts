export const RBAC_RULES = {
    admin: {
      view: ['home','LandingPage', 'products', 'users'],
      actions: ['products:get', 'products:edit', 'products:delete','products:add', 'users:ban', 'users:edit', 'users:delete'],
    },
    user: {
      view: ['home', 'start'],
      actions: [],
    },
  }