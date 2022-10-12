import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseUpdateInput } from '../pokemon-shape-prose/pokemon-shape-prose-update.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseWhereUniqueInput } from '../pokemon-shape-prose/pokemon-shape-prose-where-unique.input';

@ArgsType()
export class UpdateOnepokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateInput)
    data!: pokemon_shape_proseUpdateInput;

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;
}
