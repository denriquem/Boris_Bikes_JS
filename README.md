## Boris Bike Challenge

Transport for London, the body responsible for delivery of a new bike system, come to you with a plan: a network of docking stations and bikes that anyone can use. They want you to build a program that will emulate all the docking stations, bikes, and infrastructure (repair staff, and so on) required to make their dream a reality.

## Motivation

To practice the fundamentals of object oriented programming in javascript with four interacting classes.

## Installation

clone this repository and then open SpecRunner.html to run tests


## Technologies

Javascript
Jasmine

## User Stories

```
As a cyclist,
So I can use a bike,
I would like a docking station to release a bike

As a potential cyclist,
so that I can use a good bike,
I would like to see if a bike is working

As a member of the public,
So I can return the bikes i've hired,
I want to dock my bike at the docking station.

As a member of the public,
So I can decide whether to use the docking station,
I want to see a bike that has been docked.

As a member of the public,
So that I am not confused and charged unnecessarily,
I'd like docking stations not to release bikes when there are none available.

As a maintainer of the system,
So that I can control the distribution of bikes,
I'd like docking stations to not accept more than their capacity.

As a system maintainer,
So that I can plan the distribution of bikes,
I want a docking station to have a capacity of 20 bikes

As a member of the public,
So that I reduce the chance of getting a broken bike in future,
I'd like to report a bike as broken when I return it.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations not to release broken bikes.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like docking stations to accept returning bikes (broken or not).

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like vans to take broken bikes from docking stations and deliver them to garages to be fixed.

As a maintainer of the system,
So that I can manage broken bikes and not disappoint users,
I'd like vans to collect working bikes from garages and distribute them to docking stations.

```

## Feature Tests

```
A docking station can dock and release a working bike

> bike = new Bike();
> station = new DockingStation;
> station.dock(bike)
> station.release(bike)

A cyclist can see if a bike is working

> bike = new Bike();
> bike.isWorking();

A docking station cannot release a bike if there are no bikes docked

> station = new DockingStation
> station.releasBike();

A docking station cannot dock a bike when the station is full.

> station = new DockingStation()
> bike = new Bike();
> for (var i = 0; i < DEFAULT_CAPACITY; i++) {
>  station.dock(new Bike());
> station.dock(bike)

A member of the public can report a bike as broken

> bike = new Bike()
> bike.reportBroken()

Vans can take broken bikes from docking stations, and drop them off at garages to be fixed

> bike = new Bike()
> station = new Station()
> van = new Van()
> bike.reportBroken()
> station.dock(bike)
> van.getBikeFromStation(station)
> van.load(bike)
> van.dropOff

Garages can receive broken bikes from vans, and fix them so that the fixed bikes are then returned to the docking stations

> bike = new Bike()
> station = new Station()
> van = new Van()
> garage = new Garage()
> bike.reportBroken()
> station.dock(bike)
> van.getBikeFromStation(station)
> van.load(bike)
> garage.storeBike(van.dropOff())
> garage.fix()
> van.load(garage.releaseBikeForVan())
> station.dock(van.dropOff())

```
