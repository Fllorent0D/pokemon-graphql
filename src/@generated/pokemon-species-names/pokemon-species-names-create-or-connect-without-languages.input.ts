import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesCreateWithoutLanguagesInput } from './pokemon-species-names-create-without-languages.input';

@InputType()
export class pokemon_species_namesCreateOrConnectWithoutLanguagesInput {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;

    @Field(() => pokemon_species_namesCreateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_namesCreateWithoutLanguagesInput)
    create!: pokemon_species_namesCreateWithoutLanguagesInput;
}
