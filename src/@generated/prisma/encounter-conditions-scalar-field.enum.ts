import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_conditionsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Encounter_conditionsScalarFieldEnum, { name: 'Encounter_conditionsScalarFieldEnum', description: undefined })
