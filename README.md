# Fullstack Blockchain Development A-Z 10k radnom NFT Collection | No Coding or Crypto Knowledge Required
#TWEFamily #TBCToken #TWEToken #TWELottery #TomorrowWontExist #TWECryptoDev #ScrawnyViking

***This Instrucitonal Video includes Polygon/Matic And ETH Mainnet + Rinkby Testnet***

Instructional Walkthrough video of how to create and launch your own 10k NFT collection!
I highly recommend pausing frequently until you catch up. If you hit a snag, come to telegram and people will be more than happy to help!

Donation Wallet | Just in case... I Love NFTs and Ethereum!<p/>
0x2cb473fDdEBDe10c66BC2312b6b6109F594ef56d
<p/>
Join the TheBeeCollaborative Community @TBCToken in Telegram https://t.me/TBCToken

Please Like Subscribe and Comment on the video, it HELPS SO MUCH!!

Before You begin your journey and follow along with the video... 
Download/Install everything you see here in this order, and then open Node.js
<p/>
How to install node.js https://nodejs.org/en/download/<p/>
How to install https://code.visualstudio.com/download<p/>
How to install .Git https://git-scm.com/downloads<p/>
How to install Ganache https://www.trufflesuite.com/ganache<p/>
How to install IPFS Desktop https://ipfs.io/#install<p/>
<p/>
If you haven't already, make an account @ github.com and make sure MetaMask is installed and you're logged into the Wallet you plan on having bee the Owner of your NFT Collection.
Lastly, have your IPFS Desktop open and running, Github Account created and open, and open a tab with https://remix.ethereum.org<p/>
Need to be logged in to your Wallet with Metamask.io and have Rinkby Test Ethereum, you can get it here https://faucet.rinkeby.io/ - Tweet your wallet address, copy the tweet link and paste it in the Address box at the website. Click 18.75 ETH / 3 days

You now have the perfect Wire Frame for what we are about to accomplish. Some things we did and are about to do, may overlap eachother... I'm just creating fail proofs and safety nets by doing things twice, in order to cover all possibilities in the case that u get an unknown error.<p/>
<p/>
Are you ready? ... run the next command to begin your EPIC adventure... <p/>
<p/>
git clone https://github.com/TomorrowWontExist/ArtGenerator.git<p/>
<p/>
Click file, open folder and find the ArtGenerator you just downloaded, open it here in ther terminal/Studio Code.
<p/>
Now run these commands<p/> 
*IMPORTANT* If you get any error, that's okay keep moving to the next command... this tutorial is designed to trump anything that could arise. MAKE SURE you download everything above before going past this point! If you rush this process, you will turn 1 hour into 20. Please follow explicitly and I GUARANTEE that you will have your NFT Collection launched Live on Mainnet, Matic, and/or Rinkby Testnet. Unless you're on Mac, you're going to have some variables unknown to a 31 year Windows PC owner. <p/> 
<p/>
npm install<p/>
npm upgrade <p/>
npm install --global yarn<p/>
yarn add all<p/> // If Yarn doesnt work it's okay!
node index.js     // You should now see 10 NFT's being created<p/>
set-ExecutionPolicy -ExecutionPolicy Unrestricted //only if u get access error<p/>
git clone https://github.com/ipfs/go-ipfs.git<p/>
npm install -g ipfs<p/>
jsipfs daemon or ipfs daemon // Depends on which path your PC chose to install it in<p/>
<p/>
So it works... Now the fun part begins! Start by replacing the folders with your artwork, and then renaming the .pngs in the code. Careful! 1 typo (capitalization matters) and the code may break. Always test the code by running (node index.js) and make sure it still prints 10 NFTs (before you do too much work)

In the video we are going to skip ahead and complete the Full Stack Development and have all NFT's Live on Opensea.io through a Minting Station (Front end Dapp), and deployed on solidity with ERC721 smart contract. We will do Everything from A-Z and have a fully finished Production on Rinkby Testnet. Then I will show you exactly how to convert your Testnet Production onto Mainnet in just a few easy lines of code. By the end of this video, we will have deployed and successfully launched everything! At the end, we will circle back and I'll show you exactly how to swap out my Bee project with your Artwork. 
<p/>
***We're going to create an entire new project from Scratch right here, right now! *Grab a drink*<p/>
<p/>
Time to grab the Minting Station Repo that holds All your Contracts, Web3 info, and it's where we make all the magic happen!<p/>
<p/>
git clone https://github.com/TomorrowWontExist/FullstackNFT.git<p/>
<p/>
<p/>
Frontend DApp "Minting Station" Starts Here<p/>
<p/>
Create an empty Repository on github.com, follow video, Do Not add a README or anything else, leave it empty. Name it whatever you'd like.<p/>
<p/>
now type... cd (paste name of the new repository you just made) <p/>
npm install gh-pages --save-dev<p/>
<p/>
Go to package.json line 27 and change homepage to yours. "http://(username).github.io/(reponame)"<p/>

Goto migrations folder - 2_smart_contract_migration.js // Change to your contracts name<p/>
<p/>
Goto deploy files folder - Replace ABI from Strings with code inside ABI.txt<p/>

Goto public folder and replace Logos in both sizes, then the favicon... to create a .ico file... open your logo in paintshop, then save it as a BMP-24 file and put a .ico at the end when saving.<p/>
<p/>
Goto redux folder, then blockchain - blockchainActions.js // Line 54 and 57 Line 54 is Network ID, which network is your smart contract deployed on? // 1=Ethereum 4=Rinkby Line 57 is contract address // Paste yours<p/>
<p/>
Goto App.js and follow along with the video on how to make it your own. <p/>
npm start <p/>
// Starts your local "live view" of your app.js website design progress<p/>
<p/>
I would recommend hiring someone on fiverr to make this exactly how you want it. This is old school html website building and is very confusing if you've never experienced it. I have provided a basic template that you can easily change the text, logo, and colors. Any more than that is beyond what I want to do. This is a custom built APP that connects with WEB3 and cannot be integrated into sites like Wix, godaddy or Wordpress. Welcome to Blockchain and Cryptocurrency! The Future is Code.<p/>
<p/>
Now you're ready... run command...<p/>
<p/>
git init<p/>
git remote remove origin<p/>
git remote add origin https://github.com/(GithubUsername)/(GithubRepository).git<p/>
npm run build - This runs the App and creates a Build folder that puts your DApp into a beautiful little package<p/>
npm run deploy - This will Depoy your DApp to be hosted on Github
<p/>
You should now have a branch in your Repo named gh-pages.<p/>
<p/>
YOU'RE NOW LIVE!!! GRATS!!! Go buy a rng Twee the Bee NFT so you can paly BEEingo with us when we launch! :-) https://tomorrowwontexist.github.io/tbcnft/<p/>
<p/>
Now Go make that DApp Website look amazing! :-) <p/>
<p/>
If you want to deploy on IPFS<p/>
<p/>
Copy all of the contents insdie Build Folder, and paste them into dist/ folder I've already made for you. Then copy SRC, Public, Migrations and Contracts (Folders not the individual files inside) and Paste the Folders in dist/ folder. 
Reminder: Do not Copy/Paste Build Folder into dist/, Copy ALL CONTENTS INSIDE and paste it into dist/ folder. <p/>
<p/>
Now type ipfs name resolve<p/>
<p/>
Copy that CID/Hash# it gives you and type<p/>
<p/>
ipfs name publish (paste that CID/# here)<p/>
<p/>
Now it will publish to your IPNS, Copy your IPNS (1st CID/# in the Published line)<p/>

And paste it to the end of the following line...<p/>
https://gateway.ipfs.io/ipns/(paste CID/# here) This is your new Domain.<p/>
<p/>
Now go to Package.json and change Homepage with your new Domain.<p/>
<p/>
npm run build<p/>
<p/>
Delete Static Folder, Asset-manifest.json and index.html from the dist/ folder<p/>
Then copy/paste the Static Folder, Asset-manifest.json and index.html into the dist/ folder.<p/>
<p/>
ipfs add -r dist/<p/>
<p/>
The last CID/# is your dist/ CID, copy that!<p/>
<p/>
ipfs name publish (paste that CID)<p/>
<p/>
Press enter and YOU ARE LIVE ON IPFS!  <p/>
To push to your own paid for Domain...<p/>
<p/>
First go to the DNS manager of your domain in godaddy.<p/>
Add a new TXT record with Host: @ and Value: dnslink=/ipns/<your-hash><p/>
Save it and change or add an A record with Host: @ Pointing to: 217.182.195.23 . That’s the gateway.ipfs.io’s original IP.<p/>
Remove any other A records because they may interfiere with this new A record.<p/>
Save it, after some minutes go to that domain and check if it’s working.<p/>
Also you can access it by going to: gateway.ipfs.io/ipns/<yourdomain><p/>
In this case the urls are gateway.ipfs.io/twe.fit and twe.fit<p/>
<p/>
I Really hope this helped you! Go buy a BEEingo NFT for a chance to win $1000 Everyday!!! <p/>
https://tomorrowwontexist.github.io/tbcnft/<p/>


                <Gallery>
          <div className='photobanner'>
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
            <img src={} alt='' />
          </div>
        </Gallery>