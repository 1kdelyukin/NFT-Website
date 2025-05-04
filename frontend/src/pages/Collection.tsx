import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const NFTCards = [
  { "NFT name": "CryptoCat #001", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$2.5" },
  { "NFT name": "PixelPunk #112", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$1.8" },
  { "NFT name": "MetaMonkey #009", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$3.0" },
  { "NFT name": "CyberSamurai #027", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$4.2" },
  { "NFT name": "NeonDragon #044", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$6.7" },
  { "NFT name": "ApeX #100", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$8.3" },
  { "NFT name": "RoboRex #777", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$5.5" },
  { "NFT name": "GlitchGhost #666", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$2.9" },
  { "NFT name": "FutureFox #321", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$1.2" },
  { "NFT name": "MoonKnight #999", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$7.0" },
  { "NFT name": "DigitalDino #050", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$3.3" },
  { "NFT name": "GalaxyGoblin #420", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$4.9" },
  { "NFT name": "SynthWolf #404", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$6.1" },
  { "NFT name": "VoxelVamp #101", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$2.0" },
  { "NFT name": "HoloHero #888", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$9.4" },
  { "NFT name": "EtherElf #033", "NFT picture path": "/src/assets/nftImage.jpg", Price: "$3.7" },
];

export default function Collection() {
  const [query, setQuery] = useState("");
  const filteredNFTs = NFTCards.filter((nft) =>
    nft["NFT name"].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="min-h-screen flex flex-col overflow-hidden">
          <SiteHeader />
          <div
            className="flex flex-1 flex-col overflow-y-auto pb-6"
            style={{ minHeight: 0, paddingBottom: "2rem" }}
          >
            {/* Header & Search */}
            <div className="@container/main flex flex-col gap-6 p-2">
              <h1 className="text-3xl md:text-5xl font-normal mb-1 text-center mt-5">
                My collection 
              </h1>
              <div className="flex justify-center items-center w-full mb-2">
                <div className="relative w-3/4 max-w-xl my-2 group">
                  <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-black group-focus-within:text-black z-10" />
                  <Input
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] border-none bg-gray-100 transition-all duration-200 
                      hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-300 hover:to-gray-200
                      focus:bg-gradient-to-r focus:from-gray-200 focus:via-gray-300 focus:to-gray-200
                      placeholder:text-gray-400 hover:placeholder:text-black focus:placeholder:text-black
                      text-gray-400 hover:text-black focus:text-black text-sm md:text-base"
                  />
                </div>
              </div>
            </div>

            {/* NFT Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {filteredNFTs.map((nft, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg">
                  <CardContent className="flex items-center space-x-4 p-4">
                    <img
                      src={nft["NFT picture path"]}
                      alt={nft["NFT name"]}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold">
                        {nft["NFT name"]}
                      </CardTitle>
                      <p className="text-gray-500 mt-1">{nft.Price}</p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button className="btn btn-primary text-sm">Sell</Button>
                      <Button className="btn btn-secondary text-sm">Transfer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredNFTs.length === 0 && (
                <p className="text-center w-full text-gray-500">
                  No NFTs found.
                </p>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
