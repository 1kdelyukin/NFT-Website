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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useState } from "react";

const NFTCards = [
  {
    "NFT name": "CryptoCat #001",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$2.5",
  },
  {
    "NFT name": "PixelPunk #112",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$1.8",
  },
  {
    "NFT name": "MetaMonkey #009",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$3.0",
  },
  {
    "NFT name": "CyberSamurai #027",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$4.2",
  },
  {
    "NFT name": "NeonDragon #044",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$6.7",
  },
  {
    "NFT name": "ApeX #100",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$8.3",
  },
  {
    "NFT name": "RoboRex #777",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$5.5",
  },
  {
    "NFT name": "GlitchGhost #666",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$2.9",
  },
  {
    "NFT name": "FutureFox #321",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$1.2",
  },
  {
    "NFT name": "MoonKnight #999",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$7.0",
  },
  {
    "NFT name": "DigitalDino #050",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$3.3",
  },
  {
    "NFT name": "GalaxyGoblin #420",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$4.9",
  },
  {
    "NFT name": "SynthWolf #404",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$6.1",
  },
  {
    "NFT name": "VoxelVamp #101",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$2.0",
  },
  {
    "NFT name": "HoloHero #888",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$9.4",
  },
  {
    "NFT name": "EtherElf #033",
    "NFT picture path": "/src/assets/nftImage.jpg",
    Price: "$3.7",
  },
];

export default function Marketplace() {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);

  if (isMobile) {
    return (
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
        </SidebarInset>
      </SidebarProvider>
    );
  }
  const renderNFTCard = (nft: any, index: number) => (
    <Card key={index} className="w-full">
      <CardHeader className="p-4">
        <CardTitle className="text-base md:text-xl font-extrabold">
          {nft["NFT name"]}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <img
          src={nft["NFT picture path"]}
          alt={nft["NFT name"]}
          className="w-full h-auto rounded-md"
        />
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="text-sm md:text-lg font-semibold">{nft["Price"]}</span>
        <Button className="btn btn-primary text-sm md:text-base px-3 py-1 md:px-4 md:py-2">
          View
        </Button>
      </CardFooter>
    </Card>
  );
  
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="min-h-screen flex flex-col overflow-hidden">
          <SiteHeader />
          <div
            className="flex flex-1 flex-col overflow-y-auto pb-6"
            style={{ minHeight: "0", paddingBottom: "2rem" }}
          >
            <div className="@container/main flex flex-1 flex-col gap-6 overflow-hidden p-2">
              <h1 className="text-3xl md:text-5xl font-normal mb-1 text-center mt-5">
                Discover Unique NFTs from Top Creators
              </h1>
              <h2 className="text-xl md:text-2xl font-light mb-4 text-center">
                Browse, search, and collect digital art, collectibles, and more from the decentralized world of Web3.
              </h2>
              <div className="flex justify-center items-center w-full mb-4">
                <div className="relative w-3/4 max-w-xl my-5 group">
                  <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200 group-hover:text-black group-focus-within:text-black z-10" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-10 w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] border-none bg-gray-100 transition-all duration-200 
                      hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-300 hover:to-gray-200
                      focus:bg-gradient-to-r focus:from-gray-200 focus:via-gray-300 focus:to-gray-200
                      placeholder:text-gray-400 hover:placeholder:text-black focus:placeholder:text-black
                      text-gray-400 hover:text-black focus:text-black text-sm md:text-base"
                  />
                </div>
              </div>
              {!showAll ? (
                // Wrap carousel in a responsive container
                <div className="border-t border-gray-200 rounded-3xl md:mx-20 py-7 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
                  <div className="w-full px-1 md:px-8">
                    <Carousel
                      opts={{ align: "start" }}
                      className="w-full mx-auto"
                    >
                      <CarouselContent className="flex flex-nowrap">
                        {NFTCards.map((nft, index) => (
                          <CarouselItem
                            key={index}
                            className="p-5 w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                          >
                            {renderNFTCard(nft, index)}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button
                      className="btn btn-secondary text-sm md:text-base px-3 py-1 md:px-4 md:py-2"
                      onClick={() => setShowAll(true)}
                    >
                      Browse All
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mx-5 md:mx-20 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-3xl p-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {NFTCards.map((nft, index) => (
                      <div key={index} className="p-2">
                        {renderNFTCard(nft, index)}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button
                      className="btn btn-secondary text-sm md:text-base px-3 py-1 md:px-4 md:py-2"
                      onClick={() => setShowAll(false)}
                    >
                      Show Less
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
  
}  