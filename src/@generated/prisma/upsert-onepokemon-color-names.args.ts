import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesWhereUniqueInput } from '../pokemon-color-names/pokemon-color-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesCreateInput } from '../pokemon-color-names/pokemon-color-names-create.input';
import { pokemon_color_namesUpdateInput } from '../pokemon-color-names/pokemon-color-names-update.input';

@ArgsType()
export class UpsertOnepokemonColorNamesArgs {

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;

    @Field(() => pokemon_color_namesCreateInput, {nullable:false})
    @Type(() => pokemon_color_namesCreateInput)
    create!: pokemon_color_namesCreateInput;

    @Field(() => pokemon_color_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateInput)
    update!: pokemon_color_namesUpdateInput;
}
