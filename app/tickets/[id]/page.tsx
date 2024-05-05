import { notFound } from 'next/navigation';
import React from 'react';

const dynamicParams = false;

async function generateStaticParams(params: any) {
    const res = await fetch('http://localhost:4000/tickets');

    const tickets = res.json();
    return tickets.map((ticket: any) => {
        id: ticket.id
    })
}

async function getTicket(id: any) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
          revalidate: 0 // use 0 to opt out of using cache
        }
      })

      if(!res.ok) {
        notFound()
      }

      return res.json()
}

export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);
console.log(ticket)
    return (
        <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
            </div>
        </div>
        </main>
    );
}
