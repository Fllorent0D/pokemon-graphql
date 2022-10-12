import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsWhereInput } from '../pokemon-items/pokemon-items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonItemsArgs {

    @Field(() => pokemon_itemsWhereInput, {nullable:true})
    @Type(() => pokemon_itemsWhereInput)
    where?: pokemon_itemsWhereInput;
}
