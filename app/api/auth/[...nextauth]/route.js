import connect from "@/utils/config/dbConnection";
import User from "@utils/models/User.js";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcryptjs from "bcryptjs";

