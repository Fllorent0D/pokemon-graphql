import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_namesWhereUniqueInput } from './pokemon-species-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_namesUpdateWithoutLanguagesInput } from './pokemon-species-names-update-without-languages.input';

@InputType()
export class pokemon_species_namesUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_species_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_namesWhereUniqueInput)
    where!: pokemon_species_namesWhereUniqueInput;

    @Field(() => pokemon_species_namesUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_namesUpdateWithoutLanguagesInput)
    data!: pokemon_species_namesUpdateWithoutLanguagesInput;
}
