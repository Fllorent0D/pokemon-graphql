import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_color_namesWhereInput } from '../pokemon-color-names/pokemon-color-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonColorNamesArgs {

    @Field(() => pokemon_color_namesWhereInput, {nullable:true})
    @Type(() => pokemon_color_namesWhereInput)
    where?: pokemon_color_namesWhereInput;
}
