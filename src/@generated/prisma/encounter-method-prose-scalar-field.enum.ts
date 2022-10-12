import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_method_proseScalarFieldEnum {
    encounter_method_id = "encounter_method_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Encounter_method_proseScalarFieldEnum, { name: 'Encounter_method_proseScalarFieldEnum', description: undefined })
