import { GithubUser } from '../../../types';
import React from 'react';
import styles from './cachedUsers.module.css';
import { DisplayOfflineGithubUser } from '../DisplayOfflineGithubUser';

interface CachedGithubUsersProps {
  users: GithubUser[];
}
export const ListCachedGithubUsers = ({ users }: CachedGithubUsersProps) => {
  return (
    <div className={styles.githubUsersContainer}>
      <h3>Your Past Searches</h3>
      <div>
        {users.map(user => (
          <div key={user.login} className={styles.offlineResults}>
            <DisplayOfflineGithubUser key={user.login} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
