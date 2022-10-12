import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class pokemon_species_flavor_summariesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_species_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_species_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_species_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_flavor_summariesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_species_flavor_summariesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    flavor_summary?: StringNullableWithAggregatesFilter;
}
