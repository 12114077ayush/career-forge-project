/* eslint-disable no-unused-vars */
import conf from '../conf/Conf'
import { Client, Account } from 'appwrite'

const client = new Client()
    .setEndpoint(conf.appwriteurl)
    .setProject(conf.appwriteProjectid)

export const account = new Account(client)
