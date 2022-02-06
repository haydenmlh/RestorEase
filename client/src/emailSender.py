import os
import smtplib

EMAIL_ADRESS = 'restorease@gmail.com'
EMAIL_PASSWORD = 'UofTHacks2022'

booking = {
    'date': '03/21/2022',
    'barber': 'Barberz101',
    'time_start': '18:00',
    'time_end' : '18:30',
    'client_username' : 'Joe Rogan',
    'barber_email': 'yannicklongval2014@gmail.com'
}

with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.ehlo()

    smtp.login(EMAIL_ADRESS, EMAIL_PASSWORD)

    subject = "NEW BOOKING"
    body = f"Hello,\nthis is an automated message notifying {booking['barber']} of a booking for {booking['client_username']} from {booking['time_start']} to {booking['time_end']} on {booking['date']}.\
        \n\nDate: {booking['date']} from {booking['time_start']} to {booking['time_end']}\
        \nClient: {booking['client_username']}"

    msg = f'Subject: {subject}\n\n{body}'

    smtp.sendmail(EMAIL_ADRESS, booking['barber_email'], msg)