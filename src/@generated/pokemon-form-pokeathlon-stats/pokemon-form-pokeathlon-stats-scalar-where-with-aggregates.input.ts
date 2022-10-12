import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_form_pokeathlon_statsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_form_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokeathlon_stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    minimum_stat?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_stat?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    maximum_stat?: IntWithAggregatesFilter;
}
