import { registerEnumType } from '@nestjs/graphql';

export enum Berry_firmnessScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(Berry_firmnessScalarFieldEnum, { name: 'Berry_firmnessScalarFieldEnum', description: undefined })
