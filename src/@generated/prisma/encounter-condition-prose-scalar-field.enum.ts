import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_condition_proseScalarFieldEnum {
    encounter_condition_id = "encounter_condition_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Encounter_condition_proseScalarFieldEnum, { name: 'Encounter_condition_proseScalarFieldEnum', description: undefined })
