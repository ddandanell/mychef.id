import ServiceLandingPage from '../ServiceLandingPage';
import { SERVICE_DATA } from '@shared/serviceData';

export default function BirthdayCelebrationsPage() {
  return <ServiceLandingPage service={SERVICE_DATA['birthday-celebrations']} />;
}
