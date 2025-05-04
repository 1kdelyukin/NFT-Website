import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const NFTCards = [
  { name: "CryptoCat #001", image: "/src/assets/nftImage.jpg", basePrice: 2.5 },
  { name: "PixelPunk #112", image: "/src/assets/nftImage.jpg", basePrice: 1.8 },
  { name: "MetaMonkey #009", image: "/src/assets/nftImage.jpg", basePrice: 3.0 },
  { name: "CyberSamurai #027", image: "/src/assets/nftImage.jpg", basePrice: 4.2 },
  { name: "NeonDragon #044", image: "/src/assets/nftImage.jpg", basePrice: 6.7 },
  { name: "ApeX #100", image: "/src/assets/nftImage.jpg", basePrice: 8.3 },
  { name: "RoboRex #777", image: "/src/assets/nftImage.jpg", basePrice: 5.5 },
];

// Dummy bid history per NFT index with at least 5 entries each
const bidHistoryData: Record<number, { user: string; date: string; bid: number }[]> = {
  0: [
    { user: "alice123", date: "2025-04-20", bid: 2.4 },
    { user: "bob0x", date: "2025-04-22", bid: 2.6 },
    { user: "carol_dev", date: "2025-04-23", bid: 2.7 },
    { user: "dave_nft", date: "2025-04-24", bid: 2.8 },
    { user: "eve_hodl", date: "2025-04-25", bid: 2.9 },
    { user: "alice123", date: "2025-04-26", bid: 3.1 },
    { user: "bob0x", date: "2025-04-27", bid: 3.2 },
    { user: "carol_dev", date: "2025-04-28", bid: 3.3 },
    { user: "dave_nft", date: "2025-04-29", bid: 3.4 },
    { user: "eve_hodl", date: "2025-04-30", bid: 3.5 },
    { user: "alice123", date: "2025-05-01", bid: 3.6 },
    { user: "bob0x", date: "2025-05-02", bid: 3.7 },
    { user: "carol_dev", date: "2025-05-03", bid: 3.8 },
    { user: "dave_nft", date: "2025-05-04", bid: 3.9 },
    { user: "eve_hodl", date: "2025-05-05", bid: 4.0 },
  ],
  1: [
    { user: "cryptoFan", date: "2025-04-18", bid: 1.7 },
    { user: "nftGuru", date: "2025-04-21", bid: 1.9 },
    { user: "blockchainBob", date: "2025-04-22", bid: 2.0 },
    { user: "tokenTina", date: "2025-04-23", bid: 2.1 },
    { user: "whaleWatcher", date: "2025-04-24", bid: 2.2 },
  ],
  2: [
    { user: "metaMaven", date: "2025-04-15", bid: 2.8 },
    { user: "apeTrader", date: "2025-04-17", bid: 2.9 },
    { user: "pixelPeter", date: "2025-04-19", bid: 3.1 },
    { user: "nftNora", date: "2025-04-21", bid: 3.2 },
    { user: "chainChad", date: "2025-04-23", bid: 3.3 },
  ],
  3: [
    { user: "samuraiSam", date: "2025-04-10", bid: 4.0 },
    { user: "cryptoCarl", date: "2025-04-12", bid: 4.1 },
    { user: "neonNancy", date: "2025-04-14", bid: 4.3 },
    { user: "arthur_admin", date: "2025-04-16", bid: 4.4 },
    { user: "bidderBen", date: "2025-04-18", bid: 4.5 },
  ],
  4: [
    { user: "dragonDen", date: "2025-04-05", bid: 6.5 },
    { user: "flameFiona", date: "2025-04-07", bid: 6.6 },
    { user: "scalesSteve", date: "2025-04-09", bid: 6.8 },
    { user: "wingedWill", date: "2025-04-11", bid: 6.9 },
    { user: "emberEmma", date: "2025-04-13", bid: 7.0 },
  ],
  5: [
    { user: "peakPete", date: "2025-04-01", bid: 8.0 },
    { user: "xpressXena", date: "2025-04-03", bid: 8.2 },
    { user: "apexAl", date: "2025-04-05", bid: 8.4 },
    { user: "highHodler", date: "2025-04-07", bid: 8.5 },
    { user: "zenZack", date: "2025-04-09", bid: 8.7 },
  ],
  6: [
    { user: "robotRick", date: "2025-04-02", bid: 5.3 },
    { user: "rexRita", date: "2025-04-04", bid: 5.4 },
    { user: "mechanicMike", date: "2025-04-06", bid: 5.6 },
    { user: "dinoDana", date: "2025-04-08", bid: 5.7 },
    { user: "techTom", date: "2025-04-10", bid: 5.9 },
  ],
};

export default function ActiveBids() {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [currentNFTIndex, setCurrentNFTIndex] = useState(0);
  const [bidAmount, setBidAmount] = useState(NFTCards[0].basePrice);

  // Sync bidAmount when current NFT changes
  useEffect(() => {
    setBidAmount(NFTCards[currentNFTIndex].basePrice);
  }, [currentNFTIndex]);

  // Update current index when carousel selection changes
  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setCurrentNFTIndex(newIndex);
    });
  }, [api]);

  const currentNFT = NFTCards[currentNFTIndex];
  const history = bidHistoryData[currentNFTIndex] || [];

  const increaseBid = () => setBidAmount(prev => +(prev * 1.05).toFixed(2));
  const decreaseBid = () => setBidAmount(prev => +(prev * 0.95).toFixed(2));

  const placeBid = () => {
    // handle bid submission
    console.log(`Placing bid: $${bidAmount}`);
  };

  const renderCarousel = () => (
    <Carousel setApi={setApi} opts={{ align: "start" }}>
      <CarouselContent className="flex space-x-8">
        {NFTCards.map((nft, idx) => (
          <CarouselItem key={idx} className="min-w-[80%] p-2">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-auto rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="min-h-screen flex flex-col overflow-hidden">
          <SiteHeader />
          <div className="flex flex-1 flex-col overflow-y-auto p-12" style={{ minHeight: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-30 mx-auto max-w-6xl items-stretch">
              <Card className="w-full shadow-lg">
                <CardContent className="p-6">{renderCarousel()}</CardContent>
              </Card>

              <Card className="w-full shadow-lg flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">
                    {currentNFT.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-1">
                  <p className="text-3xl mb-4">${currentNFT.basePrice.toFixed(2)}</p>

                  {/* Bid History Box */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-9 flex-1 overflow-y-auto" style={{ maxHeight: '300px' }}>
                    <h4 className="font-semibold mb-2">Bid History</h4>
                    <ul>
                      {history.map((entry, i) => (
                        <li key={i} className="flex justify-between py-1">
                          <span className="w-1/3 text-left">{entry.user}</span>
                          <span className="w-1/3 text-center">{entry.date}</span>
                          <span className="w-1/3 text-right">${entry.bid.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bid Controls */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={e => setBidAmount(+e.target.value)}
                      className="border rounded-lg p-2 w-24 text-center"
                    />
                    <Button onClick={increaseBid} className="rounded-lg">
                      +5%
                    </Button>
                    <Button onClick={decreaseBid} className="rounded-lg">
                      -5%
                    </Button>
                    <Button onClick={placeBid} className="rounded-lg">
                      Place Bid
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
