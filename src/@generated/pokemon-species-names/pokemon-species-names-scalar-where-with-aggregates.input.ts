import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class pokemon_species_namesScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_species_namesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_species_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_namesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_species_namesScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_namesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_species_namesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    local_language_id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    genus?: StringNullableWithAggregatesFilter;
}
