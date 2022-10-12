import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_species_flavor_textScalarWhereInput } from './pokemon-species-flavor-text-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_species_flavor_textUpdateManyMutationInput } from './pokemon-species-flavor-text-update-many-mutation.input';

@InputType()
export class pokemon_species_flavor_textUpdateManyWithWhereWithoutPokemon_speciesInput {

    @Field(() => pokemon_species_flavor_textScalarWhereInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textScalarWhereInput)
    where!: pokemon_species_flavor_textScalarWhereInput;

    @Field(() => pokemon_species_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_species_flavor_textUpdateManyMutationInput)
    data!: pokemon_species_flavor_textUpdateManyMutationInput;
}
