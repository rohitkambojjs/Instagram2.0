import {Account, Client} from "appwrite"
import conf from "./conf"

const client = new Client()
  .setEndpoint(conf.apiEndpoint)
  .setProject(conf.projectId)

const account = new Account(client)

export {client, account}