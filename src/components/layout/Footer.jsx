// export default function Footer() {
//   return (
//     <div className="bg-black/40 border-t border-white/10 mt-16">
//       <div className="max-w-6xl mx-auto px-4 py-6 text-center text-white/70 text-sm">
//         <p>&copy; 2025 NKT Tech Fest – Codeathon. All rights reserved.</p>
//         <p className="mt-2">
//           Contact:{" "}
//           <span className="text-purple-300">techfest@nkt.edu</span> | +91 12345
//           67890
//         </p>
//       </div>
//     </div>
//   );
// }


export default function Footer() {
  return (
    <div className="bg-black/40 border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-white/70 text-sm">
        <p>&copy; 2025 NKT Tech Fest – Codeathon. All rights reserved.</p>

        <p className="mt-2">
          Contact:{" "}
          <span className="text-purple-300">techfest@nkt.edu</span> | +91 12345 67890
        </p>

        <p className="mt-4 text-white/80">
          Made with ❤️ by{" "}
          <a
            href="https://instagram.com/yash_mane" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 underline"
          >
            Yash Mane
          </a>{" "}
          &{" "}
          <a
            href="https://instagram.com/your_instagram_here"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:text-purple-400 underline"
          >
            Shashikant Mane
          </a>
        </p>
      </div>
    </div>
  );
}
