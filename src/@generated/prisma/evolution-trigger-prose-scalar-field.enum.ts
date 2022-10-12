import { registerEnumType } from '@nestjs/graphql';

export enum Evolution_trigger_proseScalarFieldEnum {
    evolution_trigger_id = "evolution_trigger_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Evolution_trigger_proseScalarFieldEnum, { name: 'Evolution_trigger_proseScalarFieldEnum', description: undefined })
