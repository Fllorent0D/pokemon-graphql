import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textWhereUniqueInput } from './pokemon-species-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textCreateWithoutVersionsInput } from './pokemon-species-flavor-text-create-without-versions.input';

@InputType()
export class pokemon_species_flavor_textCreateOrConnectWithoutVersionsInput {

    @Field(() => pokemon_species_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textWhereUniqueInput)
    where!: pokemon_species_flavor_textWhereUniqueInput;

    @Field(() => pokemon_species_flavor_textCreateWithoutVersionsInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textCreateWithoutVersionsInput)
    create!: pokemon_species_flavor_textCreateWithoutVersionsInput;
}
