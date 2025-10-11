import React from "react";

function Footer() {
  return (
    <footer className="w-full  bg-white py-16 px-6 md:px-20 border-t text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Info Section */}
        <div>
          <h3 className="font-inria text-[14px] font-semibold mb-4 tracking-wide">INFO</h3>
          <ul className="font-instrument space-y-2 text-gray-700 text-[14px]">
            <li>Formats</li>
            <li>Compression</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-inria text-[14px] font-semibold mb-4 tracking-wide">RESOURCES</h3>
          <ul className="font-instrument space-y-2 text-gray-700 text-[14px]">
            <li>Accessories</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-instrument text-[14px] font-semibold">
            Subscribe to our email newsletter
          </h3>
          <div className="font-instrument flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="border border-black  px-4 py-2 text-[14px] outline-none w-56"
            />
            <button className="font-instrument ml-3 bg-black text-white px-5 py-2  text-[14px]  hover:bg-black/80 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
