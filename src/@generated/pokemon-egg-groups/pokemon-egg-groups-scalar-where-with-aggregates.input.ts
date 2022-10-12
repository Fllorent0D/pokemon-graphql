import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_egg_groupsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_egg_groupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_egg_groupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    egg_group_id?: IntWithAggregatesFilter;
}
