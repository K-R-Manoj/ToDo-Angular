import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {

  constructor() { }

  private pushEvent({ event, eventCategory, ...otherInfo }: any) {
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event,
        eventCategory,
        ...otherInfo,
      });
    }
  }

  public gtm_updateConsent(analytics:string)
  {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(['consent','update',{
      'ad_storage':'denied',
      'analytics_storage':analytics,
      'functionality_storage': 'denied',
      'personalization_storage':'denied',
      'security_storage':'denied'}]);
    console.log((window as any).dataLayer,"....datalayer");
    
  }
    // Event category: Pageview
    public gtm_customPageview(pagePath = '', pageTitle = '') {
      this.pushEvent({
        event: 'Pageview',
        pagePath,
        pageTitle,
      });
    }

  public gtm_AddNote() {
    this.pushEvent({
      event: 'add_note',
      eventCategory: 'add',
      eventAction: 'added new Note ',
      eventLabel: 'Add Note',
      eventValue: 'Todo Notes',
    });
  }

  public gtm_UpdateNote() {
    this.pushEvent({
      event: 'update_note',
      eventCategory: 'Update',
      eventAction: 'Updated Note ',
      eventLabel: 'Updated Note',
      eventValue: 'Todo Notes',
    });
  }

  public gtm_DeleteNote() {
    this.pushEvent({
      event: 'delete_note',
      eventCategory: 'Delete',
      eventAction: 'Delete  Note ',
      eventLabel: 'delete Note',
      eventValue: 'Todo Notes',
    });
  }

  public gtm_CreateTrash() {
    this.pushEvent({
      event: 'create_trash',
      eventCategory: 'Create',
      eventAction: 'Create  Trash',
      eventLabel: 'create Trash',
      eventValue: 'Todo Trash',
    });
  }
  
  public gtm_RetriveTrash() {
    this.pushEvent({
      event: 'retrive_trash',
      eventCategory: 'Retrive',
      eventAction: 'Retrive  Trash',
      eventLabel: 'retrive Trash',
      eventValue: 'Todo Trash',
    });
  }

  public gtm_DeleteTrash() {
    this.pushEvent({
      event: 'delete_trash',
      eventCategory: 'Delete_Trash',
      eventAction: 'Delete  Trash',
      eventLabel: 'delete Trash',
      eventValue: 'Todo Trash',
    });
  }
}
