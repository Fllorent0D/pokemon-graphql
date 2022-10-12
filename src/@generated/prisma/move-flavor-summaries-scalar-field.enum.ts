import { registerEnumType } from '@nestjs/graphql';

export enum Move_flavor_summariesScalarFieldEnum {
    move_id = "move_id",
    local_language_id = "local_language_id",
    flavor_summary = "flavor_summary"
}


registerEnumType(Move_flavor_summariesScalarFieldEnum, { name: 'Move_flavor_summariesScalarFieldEnum', description: undefined })
