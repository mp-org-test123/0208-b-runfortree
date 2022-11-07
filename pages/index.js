import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useState } from "react";

export default function Home() {

  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>run-for-tree</title>
        <meta name="description" content="run for tree: best play to earn game on Shardeum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 flex space-y-10 flex-col justify-center items-center">
        <ConnectButton />
        <h1 className="text-3xl font-bold"><span className="text-green-500">run for tree</span>{" "}play-to-earn on Shardeum</h1>

        <div className="">
          <div className="border flex flex-col border-black w-[800px] h-60">
            <div className="w-full flex justify-end">
              <div className="pr-12 pt-2 font-semibold">
                Score: {score}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-20">
          <div className="font-bold text-2xl">Leaderboard</div>
          <div className="mt-5 border w-96 h flex flex-col items-start pl-10 py-10">
            {
              leaderboard.length != 0 ? (
                leaderboard.map((address, idx) => {
                  return (
                    <div className="font-semibold text-xl" key={idx}>{idx + 1}: {address}</div>)
                })
              ) : <div className="font-medium text-xl">Play now to get on leaderboard.</div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}
