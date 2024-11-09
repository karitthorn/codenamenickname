// page.tsx
"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");

  const femaleNicknames: string[] = [
    "เปิ้ล",
    "ไอซ์",
    "น้ำ",
    "โบว์",
    "หมิว",
    "มด",
    "ก้อย",
    "ออย",
    "ฝน",
    "ฟ้า",
    "จูน",
    "นัท",
    "ปอ",
    "แตงโม",
    "บี",
    "เล็ก",
    "ดรีม",
    "มิ้น",
    "ปุ๋ย",
    "แจน",
    "เมย์",
    "เจี๊ยบ",
    "น้ำฝน",
    "โย",
    "เชอรี่",
    "กุ้ง",
    "ส้ม",
    "ใบเฟิร์น",
    "ฟิล์ม",
    "หลิว",
    "เตย",
  ];

  const maleNicknames: string[] = [
    "บอส",
    "กุ๊ก",
    "โอ๋",
    "เบียร์",
    "เจมส์",
    "อ๊อฟ",
    "ปอนด์",
    "โต้ง",
    "พีช",
    "ตูน",
    "แชมป์",
    "เต้",
    "ตั้ม",
    "บิว",
    "หนุ่ม",
    "ซัน",
    "อาร์ต",
    "ป๊อป",
    "อะตอม",
    "สิงโต",
  ];

  const generateConsistentPassphrase = async (
    inputWord: string,
    totalWords: number = 12
  ) => {
    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(inputWord)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    const seed = parseInt(hashHex.slice(0, 8), 16);
    const randomGenerator = new RandomGenerator(seed);

    const nicknames = gender === "male" ? maleNicknames : femaleNicknames;
    return Array.from({ length: totalWords }, () =>
      randomGenerator.pickRandom(nicknames)
    ).join(" ");
  };

  const handleGeneratePassphrase = async () => {
    const generatedPassphrase = await generateConsistentPassphrase(inputName);
    setPassphrase(generatedPassphrase);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-300">
      <Navbar />

      <div className="mx-auto max-w-screen-xl text-center w-full pt-10">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          สร้างชื่อเล่นของคุณ🫵🏻
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48">
          ปกป้องความเป็นส่วนตัวจากการสร้างชื่อเล่น 12 Words⚡️
        </p>

        <div className="flex w-full justify-center">
          <input
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="w-1/2 mb-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="ใส่ชื่อเล่นของคุณ หรือ อะไรก็ได้..."
            required
          />
        </div>

        <div className="flex w-full justify-center mb-4">
          <label htmlFor="gender-select" className="sr-only">Select Gender</label>
          <select
            id="gender-select"
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
            className="mb-7 w-1/4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
          </select>
        </div>

        <button
          onClick={handleGeneratePassphrase}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
        >
          สร้าง
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <div className="mt-10 text-3xl text-gray-800 m-2">
          {passphrase && <p>{passphrase}</p>}
        </div>
      </div>
    </div>
  );
}

class RandomGenerator {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  private next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  public pickRandom<T>(array: T[]): T {
    const index = Math.floor(this.next() * array.length);
    return array[index];
  }
}
