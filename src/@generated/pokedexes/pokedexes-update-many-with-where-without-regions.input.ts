import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesScalarWhereInput } from './pokedexes-scalar-where.input';
import { Type } from 'class-transformer';
import { pokedexesUpdateManyMutationInput } from './pokedexes-update-many-mutation.input';

@InputType()
export class pokedexesUpdateManyWithWhereWithoutRegionsInput {

    @Field(() => pokedexesScalarWhereInput, {nullable:false})
    @Type(() => pokedexesScalarWhereInput)
    where!: pokedexesScalarWhereInput;

    @Field(() => pokedexesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokedexesUpdateManyMutationInput)
    data!: pokedexesUpdateManyMutationInput;
}
