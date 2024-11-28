import { databases } from "./appwrite";
import { ID } from "appwrite";

const db = {};

const collections = [
    {
        dbId: import.meta.env.VITE_APP_WRITE_API_DB,
        id: import.meta.env.VITE_APP_WRITE_API_COLLECTION,
        name: "userstable",
    },
];

collections.forEach((collection) => {
    db[collection.name] = {
        create: (payload, permissions, id = ID.unique()) =>
            databases.createDocument(
                collection.dbId,
                collection.id,
                id,
                payload,
                permissions
            ),
        update: (id, payload, permissions) =>
            databases.updateDocument(
                collection.dbId,
                collection.id,
                id,
                payload,
                permissions
            ),
        delete: (id) => databases.deleteDocument(collection.dbId, collection.id, id),

        list: (queries = []) =>
            databases.listDocuments(collection.dbId, collection.id, queries),

        get: (id) => databases.getDocument(collection.dbId, collection.id, id),
    };
});

export default db;