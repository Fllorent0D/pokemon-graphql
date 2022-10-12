import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereUniqueInput } from '../pokemon-shape-prose/pokemon-shape-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseCreateInput } from '../pokemon-shape-prose/pokemon-shape-prose-create.input';
import { pokemon_shape_proseUpdateInput } from '../pokemon-shape-prose/pokemon-shape-prose-update.input';

@ArgsType()
export class UpsertOnepokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;

    @Field(() => pokemon_shape_proseCreateInput, {nullable:false})
    @Type(() => pokemon_shape_proseCreateInput)
    create!: pokemon_shape_proseCreateInput;

    @Field(() => pokemon_shape_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateInput)
    update!: pokemon_shape_proseUpdateInput;
}
