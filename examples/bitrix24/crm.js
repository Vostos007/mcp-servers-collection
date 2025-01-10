// Example of CRM operations
async function createLead(data) {
  const response = await bitrix.call('crm.lead.add', {
    fields: {
      TITLE: data.title,
      NAME: data.name,
      STATUS_ID: 'NEW'
    }
  });
  return response;
}