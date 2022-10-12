import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';

@InputType()
export class pokemon_species_namesWhereInput {

    @Field(() => [pokemon_species_namesWhereInput], {nullable:true})
    AND?: Array<pokemon_species_namesWhereInput>;

    @Field(() => [pokemon_species_namesWhereInput], {nullable:true})
    OR?: Array<pokemon_species_namesWhereInput>;

    @Field(() => [pokemon_species_namesWhereInput], {nullable:true})
    NOT?: Array<pokemon_species_namesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    local_language_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    genus?: StringNullableFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;
}
