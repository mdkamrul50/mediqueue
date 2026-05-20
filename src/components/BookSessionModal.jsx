'use client';

import { Button, Modal } from '@heroui/react';
import { FaMagic } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export function BookSessionModal({ tutor }) {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [form, setForm] = useState({
    studentName: user?.name || '',
    phone: '',
    tutorId: tutor?._id,
    tutorName: tutor?.name,
    email: user?.email || '',
    userId: user?.id,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    try {
      const res = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log(data);

      if (data) {
        toast.success('Booking successful 🎉');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong ❌');
    }
  };
  return (
    <Modal>
      {/* TRIGGER BUTTON */}
      <Button className="w-full py-6 rounded-full bg-linear-to-r from-[#5DF8D8] to-[#a6ffe8] text-black font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95">
        Book Session
      </Button>

      {/* BACKDROP (GLASS BLUR) */}
      <Modal.Backdrop className="backdrop-blur-md bg-black/40" variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[460px] rounded-3xl border border-white/10 bg-white/10 dark:bg-black/30 backdrop-blur-3xl shadow-2xl overflow-hidden">
            {/* HEADER */}
            <Modal.Header className="text-center flex flex-col items-center gap-2 py-6 border-b border-white/10">
              <div className="p-3 rounded-full bg-[#5DF8D8]/20">
                <FaMagic className="text-[#5DF8D8] text-xl" />
              </div>
              <Modal.Heading className="text-xl font-semibold">
                Book Your Tutor Session
              </Modal.Heading>
              <p className="text-xs text-gray-400">
                Fill the form to confirm your session
              </p>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Student Name */}
                <div>
                  <label className="text-xs text-gray-400">Student Name</label>
                  <input
                    name="studentName"
                    value={form.studentName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#5DF8D8] transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs text-gray-400">Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#5DF8D8] transition"
                    required
                  />
                </div>

                {/* Tutor Info Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-400">Tutor Name</label>
                    <input
                      value={tutor.name}
                      readOnly
                      className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400">Tutor ID</label>
                    <input
                      value={form.tutorId}
                      readOnly
                      className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs text-gray-400">Email</label>
                  <input
                    value={form.email}
                    readOnly
                    className="w-full mt-1 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 cursor-not-allowed"
                  />
                </div>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#5DF8D8] text-black font-bold hover:shadow-lg hover:shadow-[#5DF8D8]/30 transition"
                >
                  Confirm Booking
                </Button>
              </form>
            </Modal.Body>

            {/* FOOTER */}
            <Modal.Footer className="p-4 border-t border-white/10">
              <Button
                slot="close"
                variant="secondary"
                className="w-full rounded-xl"
              >
                Cancel
              </Button>
            </Modal.Footer>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
