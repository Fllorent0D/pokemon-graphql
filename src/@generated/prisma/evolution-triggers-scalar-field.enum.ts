import { registerEnumType } from '@nestjs/graphql';

export enum Evolution_triggersScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Evolution_triggersScalarFieldEnum, { name: 'Evolution_triggersScalarFieldEnum', description: undefined })
