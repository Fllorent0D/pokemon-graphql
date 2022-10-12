import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesWhereInput } from '../pokemon-shapes/pokemon-shapes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonShapesArgs {

    @Field(() => pokemon_shapesWhereInput, {nullable:true})
    @Type(() => pokemon_shapesWhereInput)
    where?: pokemon_shapesWhereInput;
}
