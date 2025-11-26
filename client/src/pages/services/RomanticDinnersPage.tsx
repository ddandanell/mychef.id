import ServiceLandingPage from '../ServiceLandingPage';
import { SERVICE_DATA } from '@shared/serviceData';

export default function RomanticDinnersPage() {
  return <ServiceLandingPage service={SERVICE_DATA['romantic-dinners']} />;
}
