import { useLocalizedPath } from './useLocalizedPath';
import { CITY_DATA, type CityData } from '@shared/cityData';
import { CITY_TRANSLATIONS_ID } from '@shared/translations/cityDataId';

export function useCityTranslation(citySlug: string) {
  const { language } = useLocalizedPath();
  
  const baseData = CITY_DATA[citySlug];
  
  if (!baseData) {
    return null;
  }
  
  if (language === 'id') {
    const idTranslation = CITY_TRANSLATIONS_ID[citySlug];
    
    if (idTranslation) {
      return {
        ...baseData,
        tagline: idTranslation.tagline,
        description: idTranslation.description,
        heroDescription: idTranslation.heroDescription,
        heroTitle: idTranslation.heroTitle,
        localInsights: idTranslation.localInsights,
        extendedContent: idTranslation.extendedContent ? {
          ...baseData.extendedContent,
          mainHeading: idTranslation.extendedContent.mainHeading,
          introParagraphs: idTranslation.extendedContent.introParagraphs || (baseData.extendedContent && 'introParagraphs' in baseData.extendedContent ? baseData.extendedContent.introParagraphs : undefined),
          paragraphs: idTranslation.extendedContent.paragraphs || (baseData.extendedContent && 'paragraphs' in baseData.extendedContent ? baseData.extendedContent.paragraphs : undefined),
        } : baseData.extendedContent,
        faqItems: idTranslation.faqItems.length > 0 ? idTranslation.faqItems : baseData.faqItems,
      } as CityData;
    }
  }
  
  return baseData;
}

export function getCityDataWithLanguage(citySlug: string, language: 'en' | 'id'): CityData | null {
  const baseData = CITY_DATA[citySlug];
  
  if (!baseData) {
    return null;
  }
  
  if (language === 'id') {
    const idTranslation = CITY_TRANSLATIONS_ID[citySlug];
    
    if (idTranslation) {
      return {
        ...baseData,
        tagline: idTranslation.tagline,
        description: idTranslation.description,
        heroDescription: idTranslation.heroDescription,
        heroTitle: idTranslation.heroTitle,
        localInsights: idTranslation.localInsights,
        extendedContent: idTranslation.extendedContent ? {
          ...baseData.extendedContent,
          mainHeading: idTranslation.extendedContent.mainHeading,
          introParagraphs: idTranslation.extendedContent.introParagraphs,
          paragraphs: idTranslation.extendedContent.paragraphs,
        } : baseData.extendedContent,
        faqItems: idTranslation.faqItems.length > 0 ? idTranslation.faqItems : baseData.faqItems,
      } as CityData;
    }
  }
  
  return baseData;
}
