import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class pokemon_species_flavor_textScalarWhereWithAggregatesInput {

    @Field(() => [pokemon_species_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<pokemon_species_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<pokemon_species_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => [pokemon_species_flavor_textScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<pokemon_species_flavor_textScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    language_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    flavor_text?: StringWithAggregatesFilter;
}
