import { registerEnumType } from '@nestjs/graphql';

export enum Growth_rate_proseScalarFieldEnum {
    growth_rate_id = "growth_rate_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Growth_rate_proseScalarFieldEnum, { name: 'Growth_rate_proseScalarFieldEnum', description: undefined })
