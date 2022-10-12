import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_condition_valuesScalarFieldEnum {
    id = "id",
    encounter_condition_id = "encounter_condition_id",
    identifier = "identifier",
    is_default = "is_default"
}


registerEnumType(Encounter_condition_valuesScalarFieldEnum, { name: 'Encounter_condition_valuesScalarFieldEnum', description: undefined })
