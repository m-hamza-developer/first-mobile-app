# First App — React Native (Expo)

A mobile application built with **Expo Router** and **React Native**, supporting Android, iOS, and Web.

---

## Tech Stack

- [Expo](https://expo.dev) ~56
- [React Native](https://reactnative.dev) 0.85.3
- [Expo Router](https://expo.github.io/router) — file-based routing
- [TypeScript](https://www.typescriptlang.org)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) — Ionicons, AntDesign, etc.
- [expo-font](https://docs.expo.dev/versions/latest/sdk/font/) — custom fonts (Roboto)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/)

---

## Project Structure

```
first-app/
├── assets/
│   ├── font/               # Roboto font files
│   └── images/             # App images & icons
├── src/
│   ├── app/
│   │   ├── (auth)/         # Auth screens (signin, signup)
│   │   ├── profile/        # Profile page
│   │   ├── practics/       # Practice page
│   │   ├── _layout.tsx     # Root layout
│   │   ├── index.tsx       # Home screen
│   │   └── explore.tsx     # Explore screen
│   ├── components/         # Reusable components
│   ├── constants/          # Theme & constants
│   └── hooks/              # Custom hooks
├── app.json
├── package.json
└── tsconfig.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the app

```bash
npx expo start
```

Then scan the QR code with **Expo Go** app on your phone, or press:
- `a` — open Android emulator
- `i` — open iOS simulator
- `w` — open in browser

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start Expo dev server |
| `npm run android` | Start on Android |
| `npm run ios` | Start on iOS |
| `npm run web` | Start on Web |
| `npm run lint` | Run ESLint |
| `npm run reset-project` | Reset to blank app |

---

## Path Aliases

Configured in `tsconfig.json`:

| Alias | Points To |
|-------|-----------|
| `@/*` | `./src/*` |
| `@/assets/*` | `./assets/*` |

---

## Fonts

Custom Roboto fonts loaded via `expo-font`:

| Key | File |
|-----|------|
| `RobotoRegular` | `Roboto-Regular.ttf` |
| `RobotoMedium` | `Roboto-SemiBold.ttf` |
| `RobotoBold` | `Roboto-Bold.ttf` |
| `RobotoExtraBold` | `Roboto-ExtraBold.ttf` |

Usage:
```tsx
<Text style={{ fontFamily: 'RobotoBold' }}>Hello</Text>
```

---

## Notes

- All screens are inside `src/app/` following Expo Router file-based routing
- Auth screens are grouped under `(auth)/` folder
- Images are stored in `assets/images/`, fonts in `assets/font/`
