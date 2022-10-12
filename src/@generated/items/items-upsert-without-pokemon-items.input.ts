import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutPokemon_itemsInput } from './items-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutPokemon_itemsInput } from './items-create-without-pokemon-items.input';

@InputType()
export class itemsUpsertWithoutPokemon_itemsInput {

    @Field(() => itemsUpdateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => itemsUpdateWithoutPokemon_itemsInput)
    update!: itemsUpdateWithoutPokemon_itemsInput;

    @Field(() => itemsCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => itemsCreateWithoutPokemon_itemsInput)
    create!: itemsCreateWithoutPokemon_itemsInput;
}
