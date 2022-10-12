import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shapesWhereUniqueInput } from '../pokemon-shapes/pokemon-shapes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonShapesArgs {

    @Field(() => pokemon_shapesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shapesWhereUniqueInput)
    where!: pokemon_shapesWhereUniqueInput;
}
