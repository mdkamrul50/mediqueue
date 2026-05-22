'use client';

import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaRocket } from 'react-icons/fa';

export default function AddTutorForm() {
    const { data } = authClient.useSession();
    const user = data?.user;

    console.log(user);

  const [form, setForm] = useState({
    name: '',
    image: '',
    subject: '',
    time: '',
    fee: '',
    slots: '',
    sessionDate: '',
    experience: '',
    location: '',
    mode: [],
    userId: user?.id,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setForm({
      ...form,
      [name]: name === 'mode' ? [value] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Failed to add tutor');
        return;
      }

      toast.success('Tutor Added Successfully 🚀');

      setForm({
        name: '',
        image: '',
        subject: '',
        time: '',
        fee: '',
        slots: '',
        sessionDate: '',
        experience: '',
        location: '',
        mode: [],
      });
    } catch (err) {
      toast.error('Server error');
    }

    console.log(setForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="name"
          onChange={handleChange}
          placeholder="Tutor Name"
          className="input"
        />
        <input
        required
          name="image"
          onChange={handleChange}
          placeholder="Image URL"
          className="input"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          style={{
            backgroundColor: '#0F172A',
            color: 'white',
          }}
          name="subject"
          onChange={handleChange}
          className="input text-white bg-[#0F172A] border border-white/20 focus:border-[#5DF8D8] focus:ring-2 focus:ring-[#5DF8D8]/30"
          required
        >
          <option value="">Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="English">English</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Programming">Programming</option>
          <option value="Economics">Economics</option>
        </select>
        <select
          style={{
            backgroundColor: '#0F172A',
            color: 'white',
          }}
          name="mode"
          onChange={handleChange}
          className="input text-white"
        >
          <option value="">Teaching Mode</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Both</option>
        </select>
      </div>

      <input
        name="time"
        onChange={handleChange}
        placeholder=" 5:00 PM - 8:00 PM"
        className="input"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="fee"
          type="number"
          onChange={handleChange}
          placeholder="Hourly Fee"
          className="input"
        />
        <input
          name="slots"
          type="number"
          onChange={handleChange}
          placeholder="Total Slots"
          className="input"
        />
      </div>

      <input
        type="date"
        name="sessionDate"
        onChange={handleChange}
        className="input"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="experience"
          onChange={handleChange}
          placeholder="Experience"
          className="input"
        />
        <input
          name="location"
          onChange={handleChange}
          placeholder="Location"
          className="input"
        />
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#5DF8D8] to-[#a6ffe8] text-black font-bold hover:scale-[1.02] transition flex items-center gap-2 justify-center">
        Add Tutor <FaRocket />
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          outline: none;
          transition: 0.3s;
        }
        .input:focus {
          border-color: #5df8d8;
          box-shadow: 0 0 10px #5df8d8;
        }
      `}</style>
    </form>
  );
}
