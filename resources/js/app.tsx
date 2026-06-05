import { createInertiaApp } from "@inertiajs/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    strictMode: true,
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: "#4B5563",
    },

    withApp(app) {
        return <>{app}</>;
    },
});
