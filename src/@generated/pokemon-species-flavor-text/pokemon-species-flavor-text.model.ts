import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { languages } from '../languages/languages.model';
import { versions } from '../versions/versions.model';
import { pokemon_species } from '../pokemon-species/pokemon-species.model';

@ObjectType()
export class pokemon_species_flavor_text {

    @Field(() => Int, {nullable:false})
    species_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    flavor_text!: string;

    @Field(() => languages, {nullable:false})
    languages?: languages;

    @Field(() => versions, {nullable:false})
    versions?: versions;

    @Field(() => pokemon_species, {nullable:false})
    pokemon_species?: pokemon_species;
}
