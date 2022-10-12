import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_methodsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Encounter_methodsScalarFieldEnum, { name: 'Encounter_methodsScalarFieldEnum', description: undefined })
