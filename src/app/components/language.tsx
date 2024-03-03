'use client'

import { useState } from "react"

export function Language () {

    const [language, setLanguage] = useState<boolean>(false);

    function handleLanguage() {
        if (language === true) {
            
        } else {
            console.log(language)
        }
    }

    return (
        <label className="inline-flex items-center mb-5 cursor-pointer">
            <div className="flex flex-col">
                <input type="checkbox" checked={language} onChange={handleLanguage} className="sr-only peer" />
                <div className="relative w-11 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600" />
                <span className="text-sm">BR - US</span>
            </div>
        </label>
    )
}