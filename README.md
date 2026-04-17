# 🤝 Keen Keeper - Meaningful Friendship Tracker

**Keen Keeper** is a specialized web application designed to help users nurture and maintain their most important relationships. In a busy world, this tool tracks your interactions and provides visual insights to ensure no friendship is neglected.

## 🚀 Live Demo
[Explore Keen Keeper Live](https://my-7th-assignment.netlify.app/)

## ✨ Key Features

1.  **📊 Friendship Analytics (Stats):** An interactive dashboard featuring a **Pie Chart** (powered by Recharts) that visualizes your interaction patterns across Calls, Texts, and Video chats.
    
2.  **⏳ Dynamic Timeline with Filtering:** A chronological log of all your friendship activities. Users can filter the timeline by interaction type (Call, Text, Video) to quickly review their history.

3.  **⚡ Modern Data Fetching & Loading UI:** Built with React 19's latest `use()` hook and `Suspense` for seamless data fetching. It features a polished **CircleLoader** to enhance user experience during data transitions.

## 🛠️ Technologies Used

- **Core Framework:** React.js (v19), React Router v7
- **Styling:** Tailwind CSS, DaisyUI
- **Data Visualization:** Recharts
- **State Management:** React Context API
- **Utilities:** React Spinners, React Toastify, Lucide Icons (or React Icons)
- **Deployment:** Netlify

## 📸 Project Structure Highlights

- **Context API:** Used `TimelineProvider` to manage and share interaction logs globally across the app.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views using Tailwind's responsive utilities.
- **Custom Error Handling:** Includes a dedicated 404/Error page to guide users back to safety.
