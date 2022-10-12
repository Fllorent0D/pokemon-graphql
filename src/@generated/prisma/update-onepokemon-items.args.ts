import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsUpdateInput } from '../pokemon-items/pokemon-items-update.input';
import { Type } from 'class-transformer';
import { pokemon_itemsWhereUniqueInput } from '../pokemon-items/pokemon-items-where-unique.input';

@ArgsType()
export class UpdateOnepokemonItemsArgs {

    @Field(() => pokemon_itemsUpdateInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateInput)
    data!: pokemon_itemsUpdateInput;

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;
}
