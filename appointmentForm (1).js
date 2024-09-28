import { LightningElement, track } from 'lwc';

import { CloseActionScreenEvent } from 'lightning/actions';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';




export default class AppointmentForm extends LightningElement {

  

   
    

    


    handleSubmit(event) {

        event.preventDefault();
        const fields = event.detail.fields;

        
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }




    handleSucess(event) {
        const updatedRecord = event.detail.id;
        console.log('onsuccess: ', updatedRecord);

        const event1 = new ShowToastEvent({
            title: 'Record Created Successfully',
            message: 'Toast Message',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event1);
        this.dispatchEvent(new CloseActionScreenEvent());

    }



}