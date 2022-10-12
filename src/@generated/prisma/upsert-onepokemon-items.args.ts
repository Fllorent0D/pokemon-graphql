import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_itemsWhereUniqueInput } from '../pokemon-items/pokemon-items-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_itemsCreateInput } from '../pokemon-items/pokemon-items-create.input';
import { pokemon_itemsUpdateInput } from '../pokemon-items/pokemon-items-update.input';

@ArgsType()
export class UpsertOnepokemonItemsArgs {

    @Field(() => pokemon_itemsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_itemsWhereUniqueInput)
    where!: pokemon_itemsWhereUniqueInput;

    @Field(() => pokemon_itemsCreateInput, {nullable:false})
    @Type(() => pokemon_itemsCreateInput)
    create!: pokemon_itemsCreateInput;

    @Field(() => pokemon_itemsUpdateInput, {nullable:false})
    @Type(() => pokemon_itemsUpdateInput)
    update!: pokemon_itemsUpdateInput;
}
