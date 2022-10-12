import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class pokemon_abilitiesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_abilitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_abilitiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: IntWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_dream?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: IntWithAggregatesFilter;
}
