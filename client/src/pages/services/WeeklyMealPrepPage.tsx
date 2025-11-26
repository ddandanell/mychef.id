import ServiceLandingPage from '../ServiceLandingPage';
import { SERVICE_DATA } from '@shared/serviceData';

export default function WeeklyMealPrepPage() {
  return <ServiceLandingPage service={SERVICE_DATA['weekly-meal-prep']} />;
}
