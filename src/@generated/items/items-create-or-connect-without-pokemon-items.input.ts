import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutPokemon_itemsInput } from './items-create-without-pokemon-items.input';

@InputType()
export class itemsCreateOrConnectWithoutPokemon_itemsInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutPokemon_itemsInput, {nullable:false})
    @Type(() => itemsCreateWithoutPokemon_itemsInput)
    create!: itemsCreateWithoutPokemon_itemsInput;
}
