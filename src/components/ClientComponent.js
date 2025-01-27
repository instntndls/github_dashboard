// components/ClientComponent.js
'use client'; // Указываем, что это клиентский компонент

export default function ClientComponent({ repos, user }) {
    return (
        <div>
            <h1>Мои репозитории на GitHub</h1>
            { user }
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>{repo.description}</p>
                        <p>Обновлено: {repo.updatedAt}</p> {/* Дата уже отформатирована на сервере */}
                    </li>
                ))}
            </ul>
        </div>
    );
}