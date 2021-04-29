import { Document } from "mongoose";
import { IRoutePermissions } from "../helpers/userPermissions";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  bio?: string;
  avatar?: string;
  rating?: number;
  social_media?: ISMedia;
  role: IROLE;
  claims: IRoutePermissions;
  isEmailVerified: boolean;
  achievements?: any[];
  savedPosts?: ISavedPost[];
}

export interface IPost {
  _id: string;
  title: string;
  body: string;
  intro: string;
  user: IUser;
  readTime: string;
  category: ICategory;
  tags?: ITag[];
  coverPicture?: string;
  likes?: ILike[];
  dislikes?: IDislike[];
  loves?: ILove[];
  comments?: IComment[];
  searchScore: number;
  flagLimit: number;
  isPublished: boolean;
  isDraft: boolean;
  isFlagged: boolean;
  updatedAt: Date;
  publishedAt: Date;
}

export interface IComment {
  _id: string;
  post: IPost;
  user: IUser;
  replies?: ICommentReply[];
  updatedAt: Date;
  createdAt: Date;
}

export interface ICommentReply {
  _id: string;
  comment: IComment;
  body: string;
  user: IUser;
  updatedAt: Date;
  createdAt: Date;
}

export interface ISavedPost {
  _id: string;
  user: IUser;
  post: IPost;
  updatedAt: Date;
  createdAt: Date;
}

export interface IFlaggedPost {
  _id: string;
  user: IUser;
  post: IPost;
  updatedAt: Date;
  createdAt: Date;
}

export interface ILove {
  _id: string;
  user: IUser;
  post: IPost;
  updatedAt: Date;
  createdAt: Date;
}

export interface ILike {
  _id: string;
  user: IUser;
  post: IPost;
  updatedAt: Date;
  createdAt: Date;
}

export interface IDislike {
  _id: string;
  user: IUser;
  post: IPost;
  updatedAt: Date;
  createdAt: Date;
}

export interface ICategory {
  _id: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface ITag {
  _id: string;
  name: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface ISMedia {
  github: string;
  twitter: string;
  facebook: string;
  website: string;
  instagram: string;
}

export type IROLE = "super-admin" | "admin" | "writer";
