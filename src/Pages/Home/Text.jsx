import React from "react";

const Text = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote */}
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            “I Really enjoy my work and it makes me more productive, happier and
            more successfull. The cowering place builds confidence and inpires
            greated performance and greater success for both employees and
            employeers ”
          </p>

          {/* Profile */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img
                src="https://i.pravatar.cc/100"
                alt="employee"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Company */}
            <div className="text-left">
              <h4 className="font-semibold text-gray-900">Kareen lynn</h4>
              <p className="text-gray-500 text-sm">Founder @ Company.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Text;
