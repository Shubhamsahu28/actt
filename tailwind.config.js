/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rectangle-9': "url('./image/Rectangle9.png')",
        'first': "url('./image/img/first.jpg')",
        'photo': "url('./image/img2/photo.png')",
        'getInTouch': "url('./image/contact.jpg')",
        'CuratedContent': "url('./image/whyChooseUs/CuratedContent.jpg')",
        'Logistics': "url('./image/whyChooseUs/Logistics.jpg')",
        'NanoInvestments': "url('./image/whyChooseUs/NanoInvestments.jpg')",
        'NanoInvestments2': "url('./image/whyChooseUs/NanoInvestments2.jpg')",
        'Salary': "url('./image/whyChooseUs/Salary.jpg')",
      },
      fontFamily: {
        "poppins": ["Poppins"],
        "quicksand":["Quicksand"]
      }
    },
  },
  plugins: [],
}
