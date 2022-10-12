import { registerEnumType } from '@nestjs/graphql';

export enum Growth_ratesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    formula = "formula"
}


registerEnumType(Growth_ratesScalarFieldEnum, { name: 'Growth_ratesScalarFieldEnum', description: undefined })
