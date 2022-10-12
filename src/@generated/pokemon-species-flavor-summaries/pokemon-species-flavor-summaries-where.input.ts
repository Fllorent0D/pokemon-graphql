import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';

@InputType()
export class pokemon_species_flavor_summariesWhereInput {

    @Field(() => [pokemon_species_flavor_summariesWhereInput], {nullable:true})
    AND?: Array<pokemon_species_flavor_summariesWhereInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereInput], {nullable:true})
    OR?: Array<pokemon_species_flavor_summariesWhereInput>;

    @Field(() => [pokemon_species_flavor_summariesWhereInput], {nullable:true})
    NOT?: Array<pokemon_species_flavor_summariesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flavor_summary?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;
}
