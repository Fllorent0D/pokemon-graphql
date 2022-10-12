import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesWhereUniqueInput } from '../pokemon-color-names/pokemon-color-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonColorNamesArgs {

    @Field(() => pokemon_color_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_color_namesWhereUniqueInput)
    where!: pokemon_color_namesWhereUniqueInput;
}
