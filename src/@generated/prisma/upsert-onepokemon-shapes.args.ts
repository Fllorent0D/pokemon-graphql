import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesWhereUniqueInput } from '../pokemon-shapes/pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shapesCreateInput } from '../pokemon-shapes/pokemon-shapes-create.input';
import { pokemon_shapesUpdateInput } from '../pokemon-shapes/pokemon-shapes-update.input';

@ArgsType()
export class UpsertOnepokemonShapesArgs {

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shapesWhereUniqueInput)
    where!: pokemon_shapesWhereUniqueInput;

    @Field(() => pokemon_shapesCreateInput, {nullable:false})
    @Type(() => pokemon_shapesCreateInput)
    create!: pokemon_shapesCreateInput;

    @Field(() => pokemon_shapesUpdateInput, {nullable:false})
    @Type(() => pokemon_shapesUpdateInput)
    update!: pokemon_shapesUpdateInput;
}
