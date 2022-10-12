import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesUpdateWithoutLanguagesInput } from './pokemon-species-names-update-without-languages.input';
import { pokemon_species_namesCreateWithoutLanguagesInput } from './pokemon-species-names-create-without-languages.input';

@InputType()
export class pokemon_species_namesUpsertWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;

    @Field(() => pokemon_species_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateWithoutLanguagesInput)
    update!: pokemon_species_namesUpdateWithoutLanguagesInput;

    @Field(() => pokemon_species_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_namesCreateWithoutLanguagesInput)
    create!: pokemon_species_namesCreateWithoutLanguagesInput;
}
