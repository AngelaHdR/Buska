class ShoppingCard{
    id=0;
    ickets=[];
    totalPrice=0;
    client=0;
    constructor(id,tickets,totalPrice,client){
        this.id=id,
        this.tickets=tickets,
        this.totalPrice=totalPrice,
        this.client=client
    }

    addTicket(ticketId){
        this.tickets.push(ticketId);
    }
    removeTicket(ticketId){
        let i = tickets.findIndex(t=>t.id==ticketId)
        this.tickets.splice(i,1)
    }
    showShoppingCard(){
        //TODO: show the card
    }
}