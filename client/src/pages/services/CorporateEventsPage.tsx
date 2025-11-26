import ServiceLandingPage from '../ServiceLandingPage';
import { SERVICE_DATA } from '@shared/serviceData';

export default function CorporateEventsPage() {
  return <ServiceLandingPage service={SERVICE_DATA['corporate-events']} />;
}
