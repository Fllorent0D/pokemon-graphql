import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesUpdateManyMutationInput } from '../pokemon-habitat-names/pokemon-habitat-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesWhereInput } from '../pokemon-habitat-names/pokemon-habitat-names-where.input';

@ArgsType()
export class UpdateManypokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateManyMutationInput)
    data!: pokemon_habitat_namesUpdateManyMutationInput;

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    @Type(() => pokemon_habitat_namesWhereInput)
    where?: pokemon_habitat_namesWhereInput;
}
