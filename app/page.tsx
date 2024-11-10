"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Zap } from "lucide-react"
import { MarqueeDemo } from "@/components/MarqueePeople"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  const [selectedAction, setSelectedAction] = useState("Mint NFTs")
  const [selectedPrivacyIssue, setSelectedPrivacyIssue] = useState("Sharing your tx history")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogAction, setDialogAction] = useState("mint NFTs")
  const [dialogPrivacy, setDialogPrivacy] = useState("share my balance")

  const onChainActions = [
    "prove your membership",
    "mint your NFTs",
    "stake your coins",
    "complete your KYC",
    "recover your wallet",
    "claim your airdrop",
    "bridge your assets",
  ]

  const dialogActions = [
    "prove my membership",
    "mint my NFTs",
    "stake my coins",
    "complete my KYC",
    "recover my wallet",
    "claim my airdrop",
    "bridge my assets",
  ]

  const privacyIssues = [
    "sharing your balance",
    "exposing your tx history",
    "managing your private keys",
    "revealing your NFT collection",
    "showing your trade positions",
    "exposing which CEX you use",
  ]

  const dialogPrivacyIssues = [
    "sharing my balance",
    "exposing my tx history",
    "managing my private keys",
    "revealing my NFT collection",
    "showing my trade positions",
    "exposing which CEX I use",
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedAction(onChainActions[Math.floor(Math.random() * onChainActions.length)])
      setSelectedPrivacyIssue(privacyIssues[Math.floor(Math.random() * privacyIssues.length)])
    }, 3000) // Change every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-[#fff9f2] flex items-center justify-center p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left side - Marquee */}
          <div className="w-full md:w-1/2">
            <MarqueeDemo />
          </div>

          {/* Right side - Updated styling */}
          <div className="w-full md:w-1/2 flex flex-col items-center space-y-8">
            <div className="text-center space-y-4">
              <div className="text-4xl font-medium text-gray-900 flex flex-col items-center">
                <span>It's possible to</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedAction}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-emerald-600 h-12 flex items-center font-semibold"
                  >
                    {selectedAction}
                  </motion.span>
                </AnimatePresence>
                <span>without</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={selectedPrivacyIssue}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#9e220e] h-12 flex items-center font-semibold"
                  >
                    {selectedPrivacyIssue}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#9e220e] hover:bg-[#8a1804] text-white font-medium py-3 px-8 rounded-md shadow-xl text-lg w-full max-w-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                        <Image 
    src="/image.avif" 
    alt="Logo"
    width={24}  // adjust as needed
    height={24} // adjust as needed
    
                        className="mr-0 rounded-full" // adds spacing between logo and text
                      />
                  Try Silk for free
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[#fff9f2] border-none rounded-xl p-6">
                <div className="grid gap-8 py-2">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-gray-900">I want to...</h4>
                    <Select value={dialogAction} onValueChange={setDialogAction}>
                      <SelectTrigger className="bg-white border-gray-200 rounded-lg h-12">
                        <SelectValue placeholder="Select what you want to do" />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-lg">
                        {dialogActions.map((action) => (
                          <SelectItem key={action} value={action} className="hover:bg-gray-50">
                            {action}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-xl text-gray-900">without...</h4>
                    <Select value={dialogPrivacy} onValueChange={setDialogPrivacy}>
                      <SelectTrigger className="bg-white border-gray-200 rounded-lg h-12">
                        <SelectValue placeholder="Select what you want to avoid" />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-lg">
                        {dialogPrivacyIssues.map((issue) => (
                          <SelectItem key={issue} value={issue} className="hover:bg-gray-50">
                            {issue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Card className="border-2 border-gray-100 shadow-lg rounded-xl">
                    <CardContent className="pt-6 pb-6">
                      <div className="text-center space-y-3">
                        <p className="text-2xl font-medium">
                          I want to{" "}
                          <span className="text-emerald-600 font-semibold">{dialogAction}</span>
                        </p>
                        <p className="text-lg text-gray-500">without</p>
                        <p className="text-2xl font-semibold text-[#9e220e]">{dialogPrivacy}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="appearOnLanding" />
                    <label
                      htmlFor="appearOnLanding"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I want to appear on the landing page
                    </label>
                  </div>
                  <Button 
                    className="bg-[#9e220e] hover:bg-[#8a1804] text-white font-medium py-6 px-8 rounded-xl text-lg w-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Image 
                      src="/image.avif" 
                      alt="Logo"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    Mint Soulbound NFT
                  </Button>
                  
              
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}