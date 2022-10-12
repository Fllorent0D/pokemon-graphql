import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_dex_numbersScalarWhereInput } from './pokemon-dex-numbers-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_dex_numbersUpdateManyMutationInput } from './pokemon-dex-numbers-update-many-mutation.input';

@InputType()
export class pokemon_dex_numbersUpdateManyWithWhereWithoutPokedexesInput {

    @Field(() => pokemon_dex_numbersScalarWhereInput, {nullable:false})
    @Type(() => pokemon_dex_numbersScalarWhereInput)
    where!: pokemon_dex_numbersScalarWhereInput;

    @Field(() => pokemon_dex_numbersUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_dex_numbersUpdateManyMutationInput)
    data!: pokemon_dex_numbersUpdateManyMutationInput;
}
