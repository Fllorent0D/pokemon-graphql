import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from '../pokemon-items/pokemon-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonItemsArgs {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;
}
