import { profileModel } from '../models/profileModel.js';

export const loadProfile = async function () {
    try {
      return new Promise(
        (resolve) => {
          const xhr = new XMLHttpRequest();
          xhr.open("GET", "https://randomuser.me/api/", true);
          xhr.send();
          xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                  const data = JSON.parse(xhr.response);
                  resolve(([profileModel.profile] = data.results));
            }
          };
        },
        (reject) => {
          reject(console.log("there was an issue."));
        }
      );
    } catch (error) {
      throw error;
    }
  };