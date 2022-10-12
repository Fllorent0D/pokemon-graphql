import { registerEnumType } from '@nestjs/graphql';

export enum Location_area_encounter_ratesScalarFieldEnum {
    location_area_id = "location_area_id",
    encounter_method_id = "encounter_method_id",
    version_id = "version_id",
    rate = "rate"
}


registerEnumType(Location_area_encounter_ratesScalarFieldEnum, { name: 'Location_area_encounter_ratesScalarFieldEnum', description: undefined })
