// app/page.js
import ClientComponent from '../components/ClientComponent';
import { GET_USER_REPOS, GET_USER_FOLLOWERS } from '../lib/queries';
import client from '../lib/apolloClient';

export default async function Home() {
  const { data } = await client.query({
    query: GET_USER_REPOS,
    variables: { username: 'instntndls' },
  });

  const { data: followersData } = await client.query({
    query: GET_USER_FOLLOWERS,
    variables: { username: 'instntndls' },
  });

  const user = followersData.user.followers.nodes.map((follower) => (
    <p key={follower.login}>
      <a href={`https://github.com/${follower.login}`}>{follower.login}</a>
    </p>
  ));

  // Форматируем дату на сервере
  const repos = data.user.repositories.nodes.map((repo) => ({
    ...repo,
    updatedAt: new Date(repo.updatedAt).toLocaleDateString('en-US'), // Используем фиксированный формат
  }));

  return <ClientComponent repos={repos} user={user} />;
}