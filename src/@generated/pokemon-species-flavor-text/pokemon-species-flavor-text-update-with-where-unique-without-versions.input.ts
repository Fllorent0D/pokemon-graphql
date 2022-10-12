import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textUpdateWithoutVersionsInput } from './pokemon-species-flavor-text-update-without-versions.input';

@InputType()
export class pokemon_species_flavor_textUpdateWithWhereUniqueWithoutVersionsInput {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => pokemon_species_flavor_textUpdateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateWithoutVersionsInput)
    data!: pokemon_species_flavor_textUpdateWithoutVersionsInput;
}
