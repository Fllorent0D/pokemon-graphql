import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesScalarWhereInput } from './pokemon-species-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_speciesUpdateManyMutationInput } from './pokemon-species-update-many-mutation.input';

@InputType()
export class pokemon_speciesUpdateManyWithWhereWithoutPokemon_habitatsInput {

    @Field(() => pokemon_speciesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_speciesScalarWhereInput)
    where!: pokemon_speciesScalarWhereInput;

    @Field(() => pokemon_speciesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_speciesUpdateManyMutationInput)
    data!: pokemon_speciesUpdateManyMutationInput;
}
