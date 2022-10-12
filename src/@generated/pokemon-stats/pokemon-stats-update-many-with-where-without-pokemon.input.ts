import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsScalarWhereInput } from './pokemon-stats-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_statsUpdateManyMutationInput } from './pokemon-stats-update-many-mutation.input';

@InputType()
export class pokemon_statsUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => pokemon_statsScalarWhereInput, {nullable:false})
    @Type(() => pokemon_statsScalarWhereInput)
    where!: pokemon_statsScalarWhereInput;

    @Field(() => pokemon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_statsUpdateManyMutationInput)
    data!: pokemon_statsUpdateManyMutationInput;
}
