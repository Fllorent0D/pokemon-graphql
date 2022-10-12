import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemonScalarWhereInput } from './pokemon-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemonUpdateManyMutationInput } from './pokemon-update-many-mutation.input';

@InputType()
export class pokemonUpdateManyWithWhereWithoutPokemon_speciesInput {

    @Field(() => pokemonScalarWhereInput, {nullable:false})
    @Type(() => pokemonScalarWhereInput)
    where!: pokemonScalarWhereInput;

    @Field(() => pokemonUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemonUpdateManyMutationInput)
    data!: pokemonUpdateManyMutationInput;
}
