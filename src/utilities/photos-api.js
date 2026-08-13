import * as BunnyStorageSDK from "@bunny.net/storage-sdk";

const bunnyZoneName = process.env.REACT_APP_STORAGE_NAME;

const imagesZone = BunnyStorageSDK.zone.connect_with_accesskey(
  BunnyStorageSDK.regions.StorageRegion.SaoPaulo,
  "images-storage",
  process.env.BUNNY_ACCESS,
);

export const images = await BunnyStorageSDK.file.list(imagesZone, "/");
