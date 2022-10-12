import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereUniqueInput } from '../pokemon-shape-prose/pokemon-shape-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_shape_proseWhereUniqueInput)
    where!: pokemon_shape_proseWhereUniqueInput;
}
