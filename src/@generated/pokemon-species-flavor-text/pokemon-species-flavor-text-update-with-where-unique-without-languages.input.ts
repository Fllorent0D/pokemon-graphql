import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textUpdateWithoutLanguagesInput } from './pokemon-species-flavor-text-update-without-languages.input';

@InputType()
export class pokemon_species_flavor_textUpdateWithWhereUniqueWithoutLanguagesInput {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => pokemon_species_flavor_textUpdateWithoutLanguagesInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateWithoutLanguagesInput)
    data!: pokemon_species_flavor_textUpdateWithoutLanguagesInput;
}
