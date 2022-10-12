import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_condition_value_proseScalarFieldEnum {
    encounter_condition_value_id = "encounter_condition_value_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Encounter_condition_value_proseScalarFieldEnum, { name: 'Encounter_condition_value_proseScalarFieldEnum', description: undefined })
