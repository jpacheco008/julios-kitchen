export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/menu`;

export const postURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/receipt`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
