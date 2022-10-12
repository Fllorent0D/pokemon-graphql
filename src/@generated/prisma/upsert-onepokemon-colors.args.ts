import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_colorsWhereUniqueInput } from '../pokemon-colors/pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_colorsCreateInput } from '../pokemon-colors/pokemon-colors-create.input';
import { pokemon_colorsUpdateInput } from '../pokemon-colors/pokemon-colors-update.input';

@ArgsType()
export class UpsertOnepokemonColorsArgs {

    @Field(() => pokemon_colorsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_colorsWhereUniqueInput)
    where!: pokemon_colorsWhereUniqueInput;

    @Field(() => pokemon_colorsCreateInput, {nullable:false})
    @Type(() => pokemon_colorsCreateInput)
    create!: pokemon_colorsCreateInput;

    @Field(() => pokemon_colorsUpdateInput, {nullable:false})
    @Type(() => pokemon_colorsUpdateInput)
    update!: pokemon_colorsUpdateInput;
}
