
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu'); const links=document.querySelector('.links');
if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('mobile'));


// Static-site inquiry form: prepare an email without exposing API keys or requiring a backend.
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('inquiryName').value.trim();
    const email = document.getElementById('inquiryEmail').value.trim();
    const company = document.getElementById('inquiryCompany').value.trim();
    const service = document.getElementById('inquiryService').value;
    const message = document.getElementById('inquiryMessage').value.trim();
    if (!name || !email || !service || !message) {
      inquiryForm.reportValidity();
      return;
    }
    const subject = `Website Inquiry - ${service}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Website: ${company || 'Not provided'}`,
      `Service: ${service}`,
      '',
      'Project details:',
      message
    ].join('\n');
    window.location.href = `mailto:sterlingaffiliatemarketing@aol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
