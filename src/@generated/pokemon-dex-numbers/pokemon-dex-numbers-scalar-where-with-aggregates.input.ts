import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class pokemon_dex_numbersScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_dex_numbersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_dex_numbersScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_dex_numbersScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_dex_numbersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_dex_numbersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_number?: IntWithAggregatesFilter;
}
