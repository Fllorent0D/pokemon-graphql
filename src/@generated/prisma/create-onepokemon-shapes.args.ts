import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesCreateInput } from '../pokemon-shapes/pokemon-shapes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonShapesArgs {

    @Field(() => pokemon_shapesCreateInput, {nullable:false})
    @Type(() => pokemon_shapesCreateInput)
    data!: pokemon_shapesCreateInput;
}
