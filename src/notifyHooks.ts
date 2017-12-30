import axios from 'axios';

export default event => {
  const project = event.data.Project.node;
  const webhook = project.owner.webhooks;

  if (!webhook) return;

  const data = JSON.stringify({
    text: JSON.stringify(project)
  });

  axios.post(project.owner.webhooks, data, {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
