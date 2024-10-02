export const bookingWorkshop = `
<div style="font-family: Arial, sans-serif; background-color: #fff; border-radius: 10px; padding: 20px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); max-width: 600px; margin: auto;">
    <h1 style="color: #FFD700; text-align: center;">Workshop Title: {title}</h1>
    <p style="text-align: center; font-style: italic; color: #555;">Bring your life into prosperity !</p>
    <h2 style="color: #333; text-align: center;">Cultural Crafter</h2>
    <img src="{image}" alt="Workshop Image" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 15px;" />
    <div style="margin-top: 20px;">
        <p style="color: #555;"><strong>Description:</strong> {description}</p>
        <p style="color: #555;"><strong>Date:</strong> {date}</p>
        <p style="font-weight: bold; color: #FFD700;">Price: $<span style="color: #e67e22;">{price}</span></p>
    </div>
    <p style="text-align: center; color: #555;">Thank you for your interest!</p>
</div>
`