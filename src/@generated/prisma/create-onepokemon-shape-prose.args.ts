import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_shape_proseCreateInput } from '../pokemon-shape-prose/pokemon-shape-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonShapeProseArgs {

    @Field(() => pokemon_shape_proseCreateInput, {nullable:false})
    @Type(() => pokemon_shape_proseCreateInput)
    data!: pokemon_shape_proseCreateInput;
}
