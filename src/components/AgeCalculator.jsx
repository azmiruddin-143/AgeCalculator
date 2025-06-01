import React, { useState } from 'react';

const AgeCalculator = () => {
    const [dob, setDob] = useState({ year: "", month: "", day: "" });
    const [error, setError] = useState("");
    const [result, setResult] = useState("");

    const months = [
        "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
        "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];

    const handleChange = (e) => {
        setDob({ ...dob, [e.target.name]: e.target.value });
        setError("");
        setResult("");
    };

    const calculateAge = () => {
        const { year, month, day } = dob;

        if (!year || !month || !day) {
            setError("দয়া করে সকল তথ্য দিন ⚠️");
            return;
        }

        const birthDate = new Date(`${year}-${parseInt(month) + 1}-${day}`);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setResult(`আপনার বয়স: ${years} বছর, ${months} মাস, ${days} দিন 🧓`);
    };

    return (

        <div className=" relative min-h-screen flex items-center justify-center bg-gray-100">


            <a href="https://wa.me/8801933946077"
                target="_blank"
                rel="noopener noreferrer">
                <p className="absolute top-5 right-5 flex items-center space-x-2 text-gray-700 font-semibold">
                    <span>💻</span>
                    <span>Developed by Azmir Uddin</span>
                </p>
            </a>
            <div className="max-w-md xl:w-full mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Age Calculator</h2>

                <label className="block mb-1 font-semibold">জন্ম সাল</label>
                <select
                    name="year"
                    value={dob.year}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                >
                    <option value="">-- সাল নির্বাচন করুন --</option>
                    {Array.from({ length: 2025 - 1960 + 1 }, (_, i) => 1960 + i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <label className="block mb-1 font-semibold">জন্ম মাস</label>
                <select
                    name="month"
                    value={dob.month}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                >
                    <option value="">-- মাস নির্বাচন করুন --</option>
                    {months.map((month, index) => (
                        <option key={index} value={index}>{month}</option>
                    ))}
                </select>

                <label className="block mb-1 font-semibold">জন্ম তারিখ</label>
                <select
                    name="day"
                    value={dob.day}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mb-4"
                >
                    <option value="">-- তারিখ নির্বাচন করুন --</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>

                <button
                    onClick={calculateAge}
                    className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-2 rounded hover:from-orange-500 hover:to-orange-700 transition-all duration-300"
                >
                    ফলাফল দেখতে এখানে ক্লিক করুন
                </button>

                {error && <p className="text-red-700 mt-3 text-center">{error}</p>}
                {result && <p className="text-green-600 mt-3 text-center font-semibold">{result}</p>}
            </div>
        </div>
    );
};

export default AgeCalculator;