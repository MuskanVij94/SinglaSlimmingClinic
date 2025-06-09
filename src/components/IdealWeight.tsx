import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';

const IdealWeight = () => {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [showModal, setShowModal] = useState(false);
  const [gender, setGender] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');

  const [idealWeight, setIdealWeight] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const feet = parseFloat(heightFt);
    const inches = parseFloat(heightIn);

    if (!gender || isNaN(feet) || isNaN(inches)) {
      setIdealWeight(null);
      return;
    }

    const totalHeightInInches = feet * 12 + inches;

    let weight = 0;
    if (gender === 'male') {
      weight = totalHeightInInches * 1; // 1kg per inch
    } else {
      weight = totalHeightInInches * 0.9; // 900g per inch
    }

    setIdealWeight(parseFloat(weight.toFixed(2)));
  };



  return (
    <section
      id="idealWeight"
      ref={ref}
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Ideal Weight
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Know your Ideal Weight for <strong>Healthier Life!</strong>
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Calculate Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Doctor consulting with a patient"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl relative">
            <button
              onClick={() => {
                setShowModal(false);
                setIdealWeight(null);
                setGender('');
                setHeightFt('');
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Medically Ideal Weight Calculator</h3>
            <hr className="mb-4" />

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium mb-1">Gender:</label>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-1"
                  />{' '}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-1"
                  />{' '}
                  Female
                </label>
              </div>

              <div>
                <label className="block font-medium mb-1">Height:</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="1"
                    placeholder="Feet"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    className="w-1/2 border rounded px-3 py-2"
                  />
                  <input
                    type="number"
                    step="1"
                    placeholder="Inches"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    className="w-1/2 border rounded px-3 py-2"
                  />
                </div>
              </div>


              {idealWeight !== null && (
                <div className="bg-green-100 text-green-800 p-3 rounded text-center font-semibold">
                  Your medically ideal weight is <strong>{idealWeight} kg</strong>
                </div>
              )}

              <div className="flex justify-end">
                {/* <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setIdealWeight(null);
                    setGender('');
                    setHeightFt('');
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Close
                </button> */}
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default IdealWeight;
