import { registerEnumType } from '@nestjs/graphql';

export enum Location_namesScalarFieldEnum {
    location_id = "location_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Location_namesScalarFieldEnum, { name: 'Location_namesScalarFieldEnum', description: undefined })
