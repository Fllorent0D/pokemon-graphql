import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_abilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_abilitiesUpdateManyMutationInput } from './pokemon-abilities-update-many-mutation.input';

@InputType()
export class pokemon_abilitiesUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => pokemon_abilitiesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_abilitiesScalarWhereInput)
    where!: pokemon_abilitiesScalarWhereInput;

    @Field(() => pokemon_abilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_abilitiesUpdateManyMutationInput)
    data!: pokemon_abilitiesUpdateManyMutationInput;
}
