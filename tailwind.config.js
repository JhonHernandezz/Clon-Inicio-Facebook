/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '3': '-3px',
        '6': '6px',
        '10': '10px',
        '16': '16px',
        '20': '20px',
        '28': '-28px',
        '40': '40px'
      },
      width: {
        '332': '332px',
        '364': '364px',
        '396': '396px',
        '500': '500px',
        '565': '565px',
        '580': '580px',
        '980': '980px'
      },
      height: {
        '72': '72.7vh',
        '100': '100%',
        '106': '106px',
        '456': '456px',
      },
      padding: {
        '1': '3px',
        '6': '6px',
        '10': '10px',
        '11': '11.3px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '72': '72px',
        '112': '112px',
      },
      backgroundColor: {
        'background': '#f0f2f5',
        'background-buttom-create': '#42b72a',
        'background-buttom': '#1877f2'
      },
      colors: {
        'color-blue': '#1877f2'
      },
      fontFamily: {
        'font-family': 'SFProDisplay-Regular, Helvetica, Arial, sans-serif'
      },
      fontSize: {
        'font-14': '14px',
        'font-15': '14.6px',
        'font-17': '17px',
        'font-20': '21px',
        'font-28': '28px'
      },
      lineHeight: {
        'line-32': '32px',
        'line-48': '48px'
      },
      screens: {
        'md': '900px',
      },
      boxShadow: {
        'box': '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)'
      }
    },
  },
  plugins: [],
}