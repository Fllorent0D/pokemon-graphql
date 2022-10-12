import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesUpdateInput } from '../pokemon-shapes/pokemon-shapes-update.input';
import { Type } from 'class-transformer';
import { pokemon_shapesWhereUniqueInput } from '../pokemon-shapes/pokemon-shapes-where-unique.input';

@ArgsType()
export class UpdateOnepokemonShapesArgs {

    @Field(() => pokemon_shapesUpdateInput, {nullable:false})
    @Type(() => pokemon_shapesUpdateInput)
    data!: pokemon_shapesUpdateInput;

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shapesWhereUniqueInput)
    where!: pokemon_shapesWhereUniqueInput;
}
