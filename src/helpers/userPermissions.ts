import { IROLE } from "../models/types";

export interface IRoutePermissions {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface IPermissions {
  [key: string]: IRoutePermissions;
}

export const userPermissions = (role: IROLE) => {
  let privileges: IPermissions = {};

  const roles = ["super-admin", "admin", "writer"];

  if (!roles.includes(role)) {
    return false;
  }

  switch (role) {
    case "super-admin":
      return (privileges = {
        posts: {
          create: true,
          read: true,
          update: true,
          delete: true
        },
        categories: {
          create: true,
          read: true,
          update: true,
          delete: true
        },
        admin: {
          create: true,
          read: true,
          update: true,
          delete: true
        }
      });
    case "admin":
      return (privileges = {
        posts: {
          create: true,
          read: true,
          update: true,
          delete: true
        },
        categories: {
          create: true,
          read: true,
          update: true,
          delete: true
        },
        admin: {
          create: false,
          read: true,
          update: false,
          delete: false
        }
      });
    case "writer":
      return (privileges = {
        posts: {
          create: true,
          read: true,
          update: true,
          delete: true
        },
        categories: {
          create: false,
          read: true,
          update: false,
          delete: false
        },
        admin: {
          create: false,
          read: false,
          update: false,
          delete: false
        },
        writers: {
          create: false,
          read: false,
          update: false,
          delete: false
        }
      });
    default:
      return privileges;
  }
};
