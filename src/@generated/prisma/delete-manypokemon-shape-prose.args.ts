import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseWhereInput } from '../pokemon-shape-prose/pokemon-shape-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseWhereInput, {nullable:true})
    @Type(() => pokemon_shape_proseWhereInput)
    where?: pokemon_shape_proseWhereInput;
}
