import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { LanguagesRelationFilter } from '../prisma/languages-relation-filter.input';
import { VersionsRelationFilter } from '../prisma/versions-relation-filter.input';
import { Pokemon_speciesRelationFilter } from '../prisma/pokemon-species-relation-filter.input';

@InputType()
export class pokemon_species_flavor_textWhereInput {

    @Field(() => [pokemon_species_flavor_textWhereInput], {nullable:true})
    AND?: Array<pokemon_species_flavor_textWhereInput>;

    @Field(() => [pokemon_species_flavor_textWhereInput], {nullable:true})
    OR?: Array<pokemon_species_flavor_textWhereInput>;

    @Field(() => [pokemon_species_flavor_textWhereInput], {nullable:true})
    NOT?: Array<pokemon_species_flavor_textWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    language_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    flavor_text?: StringFilter;

    @Field(() => LanguagesRelationFilter, {nullable:true})
    languages?: LanguagesRelationFilter;

    @Field(() => VersionsRelationFilter, {nullable:true})
    versions?: VersionsRelationFilter;

    @Field(() => Pokemon_speciesRelationFilter, {nullable:true})
    pokemon_species?: Pokemon_speciesRelationFilter;
}
