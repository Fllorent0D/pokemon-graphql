import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesUpdateInput } from '../pokemon-color-names/pokemon-color-names-update.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesWhereUniqueInput } from '../pokemon-color-names/pokemon-color-names-where-unique.input';

@ArgsType()
export class UpdateOnepokemonColorNamesArgs {

    @Field(() => pokemon_color_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateInput)
    data!: pokemon_color_namesUpdateInput;

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;
}
