import logo from '../assets/img/icon.jpg';

interface NotificationProps {
    body: string;
    title: string;
}

let lastNotificationTime: number | null = null;
const notificationInterval = 5000;

export async function SendNotification({ body, title }: NotificationProps) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            const currentTime = Date.now();

            if (lastNotificationTime === null || currentTime - lastNotificationTime >= notificationInterval) {
                notify(body, title);
                lastNotificationTime = currentTime;
            }/* else {
                console.log("Aguardando o tempo mínimo entre notificações.");
            }*/
        } else {
            Notification.requestPermission().then((res) => {
                if (res === "granted") {
                    notify(body, title);
                    lastNotificationTime = Date.now();
                } /* else if (res === "denied") {
                    console.log("Acesso negado");
                } else if (res === "default") {
                    console.log("Permissão não fornecida");
                }*/
            });
        }
    }
}

export function notify(body: string, title: string) {
    const notification = new Notification(title, {
        body: body,
        icon: logo,
        vibrate: [200, 100, 200],
    });

    setTimeout(() => {
        notification.close();
    }, 7000);
}
