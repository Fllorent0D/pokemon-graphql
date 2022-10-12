import { registerEnumType } from '@nestjs/graphql';

export enum AbilitiesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    generation_id = "generation_id"
}


registerEnumType(AbilitiesScalarFieldEnum, { name: 'AbilitiesScalarFieldEnum', description: undefined })
