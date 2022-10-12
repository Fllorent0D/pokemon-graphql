import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereInput } from '../pokemon-habitat-names/pokemon-habitat-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesWhereInput, {nullable:true})
    @Type(() => pokemon_habitat_namesWhereInput)
    where?: pokemon_habitat_namesWhereInput;
}
