import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: Trip[] = [];
  message: string = '';
  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.getTrips();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = [...value];
        this.message = `There are ${this.trips.length} trips available.`;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
}