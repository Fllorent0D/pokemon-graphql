import { registerEnumType } from '@nestjs/graphql';

export enum Location_area_proseScalarFieldEnum {
    location_area_id = "location_area_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Location_area_proseScalarFieldEnum, { name: 'Location_area_proseScalarFieldEnum', description: undefined })
