import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_condition_value_mapScalarFieldEnum {
    encounter_id = "encounter_id",
    encounter_condition_value_id = "encounter_condition_value_id"
}


registerEnumType(Encounter_condition_value_mapScalarFieldEnum, { name: 'Encounter_condition_value_mapScalarFieldEnum', description: undefined })
